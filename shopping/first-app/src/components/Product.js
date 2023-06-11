import React , {useContext} from 'react';
import { shorten , isInCart , quantityCount} from '../helper/functions';
import {Link} from 'react-router-dom'
//context
import { cartContext } from './CartContextProvider';
//icon
import trashIcon from "../assets/trash.svg"

import Styles from "./Product.module.css"

const Product = ({productData}) => {
   
    const {state , dispatch} = useContext(cartContext)
    return (
        <div className={Styles.container}>
            <img className={Styles.cardimage} src={productData.image} alt="product" style={{width : "200px"}}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price} $</p>
            <div className={Styles.linkcontainer}>
                <Link to={`/products/${productData.id}`}>details</Link>
                <div className={Styles.buttoncontainer}>
                    {quantityCount(state , productData.id) === 1 && 
                    <button className={Styles.smallbutton} onClick={() => dispatch({type : "REMOVE_ITEM" , payload : productData})}><img src={trashIcon} alt='trash' style={{width :"15px"}}/></button>}
                    {quantityCount(state , productData.id) > 1 && 
                    <button className={Styles.smallbutton} onClick={() => dispatch({type : "DECREASE" , payload : productData})}>-</button>}
                    {quantityCount(state , productData.id) > 0 && <span className={Styles.counter}>{quantityCount(state , productData.id)}</span>}
                    {
                    isInCart(state , productData.id) ? 
                    <button className={Styles.smallbutton} onClick={() => dispatch({type:"INCREASE" , payload : productData})}>+</button> :
                    <button onClick={() => dispatch({type:"ADD_ITEM" , payload : productData})}>Add to Cart</button>
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Product;