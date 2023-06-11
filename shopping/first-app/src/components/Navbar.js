import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
//context
import { cartContext } from './CartContextProvider';
//icons
import shopIcon from "../assets/shop.svg";

import Styles from "./Navbar.module.css";

const Navbar = () => {

    const {state} = useContext(cartContext)

    return (
        <div className={Styles.maincontainer}>
            <div className={Styles.container}>
             <Link className={Styles.product} to="/products">Products</Link>
             <div className={Styles.iconcontainer} >
                <Link to="/cart"><img src={shopIcon} alt='shop'/></Link>
                <span>{state.itemsCounter}</span>
             </div>
            </div>
            
        </div>
    );
};

export default Navbar;