import { useMutation } from "@tanstack/react-query"
import { login } from "../../services/apiAuth"
import {useNavigate} from 'react-router-dom'
import { toast } from "react-hot-toast";


export function useLogin(){

    const navigate = useNavigate();

    const {mutate ,isLoading}  = useMutation({

    mutationFn:({email , password}) => login({email , password}),
    onSuccess: ()=> {
       navigate('/dashboard' , {replace : true})
    },
    onError: (err)=> toast.error(err.message)
    
  })
  return {mutate , isLoading}
}