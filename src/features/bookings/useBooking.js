import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";



export function useBooking() {

  const queryClient = useQueryClient();

  // Filter 
  const [searchParams] = useSearchParams();
  const filteredValue = searchParams.get("status");
  console.log(filteredValue)

  const filter = !filteredValue || filteredValue === 'all'? null : { field : 'status' , value : filteredValue }


// Sort
  const sortedValue = searchParams.get("sortBy");
  console.log(sortedValue);
  const [field, direction] = sortedValue ? sortedValue.split("-") : ["startDate", "desc"];

  const sortBy = {field  , direction}

  // Pagination
  const page = searchParams.get('page');

  // data : {data : bookings , count} = {} the = {} is just a default as if the data = null or undefiened to not throw an error. 

const {isLoading , data : {data : bookings , count} = {} , error} = useQuery({

  // as use effect we put it in depend. array to refetch when the filtervalue change.

    queryKey: ['bookings' , filter , sortBy , page],
    queryFn: () => getBookings({filter , sortBy , page}),
  })

// Prefetching - to load the next page so on click it will display immediately.

const pageCount = Math.ceil(count / PAGE_SIZE);

if(page < pageCount){ 

  queryClient.prefetchQuery({
    queryKey: ['bookings' , filter , sortBy , Number(page)+1 ],
    queryFn: () => getBookings({filter , sortBy , page : Number(page)+1 }),
  })
}
  return{isLoading , error , bookings , count}
}