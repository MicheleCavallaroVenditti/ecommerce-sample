import React, { useEffect, useState} from 'react';
import styles from './styles/global.module.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ProductContext,product } from './types/types';
import Navbar from './components/navbar';
import HomeProducts from './components/home_products';
import Cart from './components/cart'
const queryClient = new QueryClient()
export const CartContex = React.createContext<ProductContext>({} as ProductContext)
function App() {
  const [cartProducts,setCartProducts] = useState<product[]>([])

  return (
    <CartContex.Provider value={{products:cartProducts,setProducts:setCartProducts}}>
    <QueryClientProvider client={queryClient}>
    <div className={styles.app}>
        <Navbar/>
          <div className={styles.context_container}>
          <HomeProducts></HomeProducts>
          <Cart/>
          </div>
    </div>
    </QueryClientProvider>
    </CartContex.Provider>
  );
}

export default App;
