import { useQuery } from "react-query";
import { product } from "../types/types";

const useProductQuery = ()=>{
  return useQuery<product[]>("product",()=>fetch("/products").then(res=>res.json()))
}
export default useProductQuery