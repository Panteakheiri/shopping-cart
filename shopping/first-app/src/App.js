import React from 'react';
import './App.css';
import {Route , Routes , Navigate} from "react-router-dom"
//context
import Productscontextprovider from './context/Productscontextprovider'
import CartContextProvider from './components/CartContextProvider';
//components
import Store from './components/Store';
import Productdetail from "./components/Productdetail"
import Navbar from './components/Navbar';
import CartShop from './components/CartShop';
import Styles from "./App.css"

function App() {
  return (
    <div className={Styles.container}>
    
      <Productscontextprovider>
        <CartContextProvider>
          <Navbar/>
        <Routes>
            <Route path='/products' element={<Store />}/>
            <Route path='/products/:id' element={<Productdetail/>}/>
            <Route path='/cart' element={<CartShop/>}/>
            <Route path='/*' element={<Navigate to='/products'/>}/>
        </Routes>
        </CartContextProvider>
      </Productscontextprovider>
      </div>
  );
}

export default App;
