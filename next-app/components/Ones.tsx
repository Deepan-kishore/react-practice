"use client";
import React, { useReducer, createContext, useRef } from 'react';
import Two from './Two';
import TimerUsingRef from './TimerUsingRef';
import A from './useCallbackandMemo';

export const MyContext = createContext({
    theme: 'light',
    toggleTheme: () => { }
});


const Ones = () => {

    const [state, dispatch] = useReducer(reducer, 0, (a) => {
        console.log("calling reducer inital state function", a);
        return a + 10;
    });
    const num = useRef(null);
    console.log("compoennt re-rendered");

    function reducer(a, b) {
        console.log(a, b);
        return a + b;
    }

    const [theme, setTheme] = React.useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return (
        <div>
            <button onClick={() => dispatch(54)} >
                Using reducer:  {state}
            </button>
            <MyContext.Provider value={{ theme, toggleTheme }} >
                <Two />
            </MyContext.Provider>

            <TimerUsingRef/>
            <A />



        </div>
    );
};

export default Ones;