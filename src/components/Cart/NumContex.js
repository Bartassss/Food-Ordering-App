import React from "react";

const NumContext = React.createContext({
    CartAmount: 0,
    Add: () => {},
    Remove: () => {},
    lis: []
});

export default NumContext;