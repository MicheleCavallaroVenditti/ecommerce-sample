import React from 'react'
import Product from './product'
import { useQuery } from 'react-query'
import { product } from '../../types/types'
import styles from '../../styles/homeproducts.module.css'

const HomeProducts = ()=>{
  const {isLoading,error,data} = useQuery<product[]>("product",()=>fetch("/products").then(res=>res.json()))

  return <div className={styles.home_container}>
        {isLoading&& "Loading products..."}
        {error&& "An error has occured type F5 to refresh the page!"}
        {data?.map((elem,index)=>{
          return <Product key={index} product={elem}/>
        })}
  </div>
}

export default HomeProducts