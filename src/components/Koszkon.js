import NumContext from "./Cart/NumContex";
import React from "react";


export default function Koszkon(props){ 
    
    const cxt = {
        CartAmount: 0,
        Add: () => {},
        Remove: () => {},
        lis: []
    };

    

    return(
    <NumContext.Provider value={cxt}>
        {props.children}
    </NumContext.Provider>
    );
};