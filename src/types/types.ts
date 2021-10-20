import { Dispatch, SetStateAction } from "react"

export type product ={
  name:string,
  price:number
}

export type ProductContext= {
    products:product[],
    setProducts:Dispatch<SetStateAction<product[]>>
}