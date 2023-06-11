import React from 'react';
import { getProducts } from '../services/Api';
import { useState , useEffect } from 'react';

export const ProductsContext = React.createContext()

const Productscontextprovider = ({children}) => {

    const [products , setProducts] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
           setProducts(await getProducts())
       }
       fetchApi()
    },[])

    
    return (
        <div>
            <ProductsContext.Provider value={products}>
               {children}
            </ProductsContext.Provider>
            
        </div>
    );
};

export default Productscontextprovider;
