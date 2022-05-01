import React,{ createContext,useState } from "react";

export const AuthContext =createContext(null)

export default function Context({children}){
    const [searchValue,setSearchValue]=useState(null)
    // console.log(searchValue);
    return(
        <AuthContext.Provider value={{searchValue,setSearchValue}}>
            {children}
        </AuthContext.Provider>
    )
}