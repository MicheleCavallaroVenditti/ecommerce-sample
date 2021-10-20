import React from 'react'
import useCartMutation from '../../hooks/useCartMutation'
import styles from '../../styles/cart.module.css'
import { product } from '../../types/types'
import useCartContext from '../../hooks/useCartContext'


const Cart = () => {
  
  const mutation = useCartMutation()
  const { products } = useCartContext()


  const calculateTotal = () => {
    return products.map(elem => elem.price).reduce((prev, current) => prev + current).toFixed(2)
  }

  return <div className={styles.cart_container}>
    <div className={styles.cart_header}>{products.length > 0 ? "Products in the cart" : "No products in the cart"}</div>
    <div className={styles.cart_products}>
      {products.map((elem, index) => <div key={index} className={styles.single_product}>{elem.name} {elem.price.toFixed(2)} euro</div>)}
    </div>
    {products.length > 0 && <>
      <div className={styles.cart_totalprice}>Total: {calculateTotal()}</div>
      <button className={styles.checkout} onClick={() => mutation.mutate(products)}>Checkout</button>
    </>}
  </div>
}


export default Cart