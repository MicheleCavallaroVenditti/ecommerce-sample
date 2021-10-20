import React, { useContext } from 'react'
import { CartContex } from '../../App'
import { useMutation } from 'react-query'
import styles from '../../styles/cart.module.css'
import { product } from '../../types/types'

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
  const { products, setProducts } = useContext(CartContex)
  const calculateTotal = () => {
    let total = 0
    products.map(elem => total += elem.price)
    return total
  }
  return <div className={styles.cart_container}>
    <div className={styles.cart_header}>{products.length > 0 ? "Products in the cart" : "No products in the cart"}</div>
    <div className={styles.cart_products}>
      {products.map((elem, index) => <div key={index} className={styles.single_product}>{elem.name} {elem.price} euro</div>)}
    </div>
    {products.length > 0 && <>
      <div className={styles.cart_totalprice}>Total: {calculateTotal()}</div>
      <button className={styles.checkout} onClick={() => mutation.mutate(products)}>Checkout</button>
    </>}
  </div>
}


export default Cart