import React , {useContext} from 'react';

import { cartContext } from './CartContextProvider';

import trashIcon from "../assets/trash.svg";
import {shorten} from "../helper/functions"
import Styles from "./Cart.module.css"

const Cart = (props) => {

    const {dispatch} = useContext(cartContext);
    const {image , price , title , quantity} = props.data
    return (
        <div className={Styles.container}>
            <img className={Styles.image} src={image} alt="product"/>
            <div className={Styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div className={Styles.quantity}>
                {quantity}
            </div>
            <div className={Styles.buttoncontainer}>
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch({type: "DECREASE" , payload: props.data})}>-</button> :
                    <button className={Styles.trash} onClick={() => dispatch({type: "REMOVE_ITEM" , payload: props.data})}><img src={trashIcon} alt="trash"/></button>
                }
                <button onClick={() => dispatch({type: "INCREASE" , payload: props.data})}>+</button>
            </div>
            
        </div>
    );
};

export default Cart;