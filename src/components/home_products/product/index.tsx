import React, {FC} from "react";
import { product } from '../../../types/types'
import NotFound from '../../../image/NotFound.png'
import styles from '../../../styles/homeproducts.module.css'
import useCartContext from '../../../hooks/useCartContext'

type Props = {
  product:product
}

const Product:FC<Props> =({product})=>{
  const {setProducts} = useCartContext()

  const handleAdd = ()=>{
      setProducts(prev=>[...prev,product])
  }
  return <div className={styles.single_product}>
    <img className={styles.product_image} src={NotFound}/>
      {product.name}{" "}{product.price.toFixed(2)}{" euro"}
    <button className={styles.add_button} onClick={handleAdd}>Add to cart</button>
  </div>
}

export default Product