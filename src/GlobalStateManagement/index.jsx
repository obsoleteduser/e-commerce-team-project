import { createContext, useState } from "react";


export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

    const [products, setProducts] = useState([])
    
    const values = {
        products,
        setProducts
    } 

    return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>

}