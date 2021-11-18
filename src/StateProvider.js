import React, { createContext, useContext, useReducer } from "react"

//Preparing for data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children} {/* children is refering to APP from index.js */}
    </StateContext.Provider>
);

// hook which allows us to pull information from data layer
export const useStateValue = () => useContext(StateContext)