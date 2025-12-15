"use client";
import React, { useState, useTransition } from 'react';

export default function TransitionExample() {
    const [input, setInput] = useState('');
    const [list, setList] = useState<string[]>([]);
    
    // useTransition gives us:
    // - isPending: tells us if the transition is still running
    // - startTransition: marks updates as "low priority"
    const [isPending, startTransition] = useTransition();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        
        // HIGH PRIORITY: Update input immediately
        // User should see what they type instantly
        setInput(value);
        
        // LOW PRIORITY: Mark this expensive update as "can wait"
        // This won't block typing in the input field
        startTransition(() => {
            // Generate a large list based on input (expensive operation)
            // This simulates filtering/searching a huge dataset
            const newList = [];
            for (let i = 0; i < 20000; i++) {
                newList.push(`${value} - Item ${i}`);
            }
            setList(newList);
        });
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">useTransition Demo</h1>
            
            {/* Input field stays responsive while list updates */}
            <input
                type="text"
                value={input}
                onChange={handleChange}
                placeholder="Type something..."
                className="border p-2 rounded w-full mb-4 text-black"
            />
            
            {/* Show loading state while transition is happening */}
            {isPending && (
                <div className="text-yellow-500 mb-2">
                    Updating list... (but you can keep typing!)
                </div>
            )}
            
            {/* Display the expensive list */}
            <div className="text-sm text-gray-600 mb-2">
                Showing {list.length} items
            </div>
            <div className="max-h-96 overflow-y-auto border p-2">
                {list.slice(0, 100).map((item, index) => (
                    <div key={index} className="py-1 text-black">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

// HOW IT WORKS:
// 
// WITHOUT useTransition:
// - Type in input → Both input update AND list generation happen together
// - UI freezes/lags because React is busy generating 20,000 items
// - Bad user experience - typing feels laggy
//
// WITH useTransition:
// - Type in input → Input updates immediately (high priority)
// - List generation is marked as "low priority" (can be interrupted)
// - If you keep typing, React pauses the list update and handles your typing first
// - UI stays responsive - typing feels smooth
// - Once you stop typing, React finishes updating the list
//
// WHEN TO USE:
// - Updating large lists based on search/filter
// - Switching tabs with heavy content
// - Any expensive update that shouldn't block user interaction
