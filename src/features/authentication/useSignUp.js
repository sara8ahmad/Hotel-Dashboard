import { useMutation } from "@tanstack/react-query"
import { signup } from "../../services/apiAuth"

import { toast } from "react-hot-toast";


export function useSignUp(){

    const {mutate : userSignUp ,isLoading}  = useMutation({

    mutationFn:({fullName , email , password}) => signup({fullName , email , password}),
    onSuccess: (user)=> {
        console.log(user)
        toast.success('Account is Successfully Created! Please Verify Your Email Address') 
    },
    onError: (err)=> toast.error(err.message)
    
  })
  return {userSignUp , isLoading}
}