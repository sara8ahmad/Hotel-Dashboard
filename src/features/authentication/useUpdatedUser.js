import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUsers } from "../../services/apiAuth";



export function useUpdatedUser() {
   
  const queryClient = useQueryClient();
  const {mutate : updatedUser ,isLoading: isUpdating}  = useMutation({

    mutationFn: updateUsers,

    onSuccess: ({ user }) => {
        toast.success("User account successfully updated");
        queryClient.setQueryData(["user"], user);
      },
    onError: (err)=> toast.error(err.message)
  })
  
return {updatedUser , isUpdating}
}

/*

steps for updating user data :
1- we save the state of the updated full name and avatar in the form
2- we send them to the function updateUsers in the auth api 
3- we change the old full name and avatar with the new ones in the data base
4- the returned data from the updatedUsers is sent to the mutation function of react query
5- on sucess take the new user data returned and update the old one in the cache with the new on on the key ['users']

 */