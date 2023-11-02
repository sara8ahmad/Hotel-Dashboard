import { useQuery } from "@tanstack/react-query"
import { getStaysTodayActivity } from "../../services/apiBookings"


export function useTodayActivity() {

    const {isLoading , data : todayActivity , error} = useQuery({
        queryKey: ['Today-Activity'],
        queryFn: getStaysTodayActivity,
      })

      console.log(todayActivity)

      return {isLoading , todayActivity , error}
    
}