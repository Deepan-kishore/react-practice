import { useEffect, useRef, useState } from "react";

export default function TimerUsingRef() {



    const timeIdRef : React.RefObject<NodeJS.Timeout | null> = useRef(null)
    const [time, setTime] = useState(0)


    const startTimer = () => {
        timeIdRef.current = setInterval(() => {
            setTime(i => i + 1)

        }, 10)
    }

    const endTimer = () => {
         if( timeIdRef.current){
            clearInterval(timeIdRef.current)
        }
    }



    const clearTimer = () =>{
        setTime(0)

        if( timeIdRef.current){
            clearInterval(timeIdRef.current)
        }
    }

    return (
        <div className="flex flex-col items-center " >
        <h3> time: {time} </h3>
            <button onClick={startTimer}  > { time ? "continue" : "Start"} timer </button>
            <button onClick={endTimer} > stop timer </button>
            <button onClick={clearTimer} > clear timer </button>
        </div>
    );
}
