import React, { useEffect,useContext, useState} from 'react';
import styles from './styles/global.module.css'
import { ProductContext,product } from './types/types';
import Navbar from './components/navbar';
import HomeProducts from './components/home_products';
import Cart from './components/cart'

const CartContex = React.createContext<ProductContext>({} as ProductContext)
function App() {
  const [cartProducts,setCartProducts] = useState<product[]>()
  useEffect(()=>{
      fetch("/products").then(res=>res.json()).then(res=>console.log(res))
  },[])
  return (
    <CartContex.Provider value={{products:cartProducts,setProducts:setCartProducts}}>
    <div className={styles.app}>
        <Navbar/>
          <div className={styles.context_container}>
          <HomeProducts></HomeProducts>
          <Cart/>
          </div>
    </div>
    </CartContex.Provider>
  );
}

export default App;
