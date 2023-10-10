import { useMutation, useQueryClient } from "@tanstack/react-query"
import { logout } from "../../services/apiAuth"
import {useNavigate} from 'react-router-dom'
import { toast } from "react-hot-toast";


export function useLogout(){

    const navigate = useNavigate();
    const queryClient = useQueryClient();

const {mutate:Logout ,isLoading}  = useMutation({
    mutationFn: logout,

    onSuccess: ()=> {
       navigate('/login' , {replace : true}),
       queryClient.removeQueries();
    },
    onError: (err)=> toast.error(err.message)
  })
  return {Logout , isLoading}
}