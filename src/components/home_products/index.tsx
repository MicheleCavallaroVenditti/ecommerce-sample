import React from 'react'
import Product from './product'
import useProductQuery from '../../hooks/useProductQuery'
import styles from '../../styles/homeproducts.module.css'

const HomeProducts = ()=>{
  const {isLoading,error,data} = useProductQuery()

  return <div className={styles.home_container}>
        {isLoading&& "Loading products..."}
        {error&& "An error has occured type F5 to refresh the page!"}
        {data?.map((elem,index)=>{
          return <Product key={index} product={elem}/>
        })}
  </div>
}

export default HomeProducts