import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import { useCabin } from "../cabins/useCabin";
import SalesChart from './SalesChart';
import DurationChart from './DurationChart';
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;



const DashboardLayout = () => {

  // bookings for the client who booked a certain cabin online wheather he comes or not
 // but stays for the client who booked and checked in or out which means that he came and stayed in the cabin not reserved only without comming.  

  const {isLoading : isLoading1 , bookings , numDays} = useRecentBookings();
  const {isLoading : isLoading2 , confirmedStays} = useRecentStays();
  const {cabins} = useCabin();

  if(isLoading1 || isLoading2) return <Spinner />

  console.log(bookings);

  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings} confirmedStays={confirmedStays} numDays={numDays} cabins = {cabins} />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  )
}

export default DashboardLayout