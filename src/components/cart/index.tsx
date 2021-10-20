import React from 'react'
import { useMutation } from 'react-query'
import styles from '../../styles/cart.module.css'
import { product } from '../../types/types'
import useCartContext from '../../hooks/useCartContext'


const Cart = () => {
  const mutation = useMutation((data: product[]) => fetch("/buy", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }), {
    onSuccess: () => {
      setProducts([])
    }
  })


  const { products, setProducts } = useCartContext()

  
  const calculateTotal = () => {
    return products.map(elem=>elem.price).reduce((prev,current)=>prev+current).toFixed(2)
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