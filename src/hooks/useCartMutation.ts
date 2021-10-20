import { useMutation } from "react-query";
import { product } from "../types/types";
import useCartContext from "./useCartContext";


const useCartMutation = ()=>{


  const { setProducts } = useCartContext()

  return useMutation((data: product[]) => fetch("/buy", {
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
}
export default useCartMutation