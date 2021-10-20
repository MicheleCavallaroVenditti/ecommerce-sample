import React,{useContext} from "react";
import { CartContex } from "../App";


const useCartContext =()=>{
  const context = useContext(CartContex)
  return context
}

export default useCartContext