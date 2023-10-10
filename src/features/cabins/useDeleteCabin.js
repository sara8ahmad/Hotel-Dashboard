import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";



export function useDeleteCabin () {
   
  const queryClient = useQueryClient();
  const {mutate : deletingCabin ,isLoading: isDeleting}  = useMutation({

    mutationFn:(id) => deleteCabin(id),
    // to update the UI by deleting the cache and refetching data  
    onSuccess: ()=> {
      toast.success('Cabin Sucessfully Deleted')
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      })
    },
    onError: (err)=> toast.error(err.message)
  })
  
return {deletingCabin , isDeleting}
}