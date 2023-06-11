import React, { useContext } from 'react';
//context
import { ProductsContext } from '../context/Productscontextprovider';
//components
import Product from './Product';
import Styles from "./Store.module.css"

const Store = () => {

    const products = useContext(ProductsContext)

    return (
        <div className={Styles.container}>
            {products.map(product => <Product 
            key={product.id} 
            productData={product}/>) } 
        </div>
    );
};

export default Store;