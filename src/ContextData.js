import React, { createContext, useState } from 'react'

export const ContextData = createContext();

 export function ContextDataProvider(props) {

    let [name,setname] =useState('it Vedant')
    
    return (
        <ContextData.Provider value={{name,setname}}>
          {props.children}
         </ContextData.Provider>

    )
}
