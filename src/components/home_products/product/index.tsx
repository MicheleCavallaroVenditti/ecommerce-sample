import React, {useContext} from "react";
import { product } from '../../../types/types'
import NotFound from '../../../image/NotFound.png'
import styles from '../../../styles/homeproducts.module.css'
import { CartContex } from "../../../App";
const Product = ({product}:{product:product})=>{
  const {setProducts} = useContext(CartContex)

  const handleAdd = ()=>{
      setProducts(prev=>[...prev,product])
  }
  return <div className={styles.single_product}>
    <img className={styles.product_image} src={NotFound}/>
      {product.name}{" "}{product.price}{" euro"}
    <button className={styles.add_button} onClick={handleAdd}>Add to cart</button>
  </div>
}

export default Product