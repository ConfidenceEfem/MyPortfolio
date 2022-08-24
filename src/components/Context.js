import React, {createContext, useState } from "react"

export const AuthContext = createContext()

const Context = ({children}) => {
    const [theme, setTheme] = useState("dark")

    const onToggle = () => {
        setTheme((curr)=>(curr === "light"? "dark": "light"))
    }
return(
       <AuthContext.Provider value={{onToggle, theme}}>
          {children}
        </AuthContext.Provider> 
)
    
    
}

export default Context