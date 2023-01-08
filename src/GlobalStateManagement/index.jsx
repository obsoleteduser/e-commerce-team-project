import { createContext, useState } from "react";


export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

    const [products, setProducts] = useState([])
    const [category, setCategory] = useState('electronics')
    const [loading, setLoading] = useState(false)
    
    const values = {
        products,
        setProducts,
        category,
        setCategory,
        loading,
        setLoading
    } 

    return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>

}