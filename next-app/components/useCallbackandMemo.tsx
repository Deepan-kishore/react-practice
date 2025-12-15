import React, { memo, useCallback, useMemo } from "react";
import { log } from "util";

const A = () => {
    const [a, sa] = React.useState(0);

    const coplicatedValue =useMemo(() => ({}), []) 
    // compute coplicated value only once;
    //keep teh same ref across re-renders

    const f = useCallback(() => {
 // makes the functions ref stable across re-renders
        console.log("changing A1 function");

    }, [])
    return <>
        <button type="button" onClick={() => sa(a + 1)}>Increment {a} </button>

        <A1 b={f} coplicatedValue={coplicatedValue}/>
    </>;
}


const A1 = memo(({ b, coplicatedValue }: { b: () => void; coplicatedValue: any }) => {
    //re-renders of parent will not cause re-render of A1 id props dont change
    console.log("rendwered A1");

    return <>


    </>;
},(a,b)=>{
    console.log("comparing in memo", a,b);

    log("comparing in memo", a,b);
    return true
    
})

export default A;