import React from 'react'
import Stat from './Stat'
import {
    HiOutlineBanknotes,
    HiOutlineBriefcase,
    HiOutlineCalendarDays,
    HiOutlineChartBar,
  } from "react-icons/hi2";
import { formatCurrency } from '../../utils/helpers';

const Stats = ({bookings , confirmedStays , cabins , numDays}) => {
// 1 - Bookings
    const numBookings = bookings.length;
// 2 -  Sales
const sales = bookings.reduce((prev , accu) => prev + accu.totalPrice , 0)
// 3 - CheckIn
const checkedIn = confirmedStays.length;

// 4 - Total Occupation = num of checkedin nigth / total num of nigth = (cabins num * numdays) 
const numOfCheckedInNight = confirmedStays.reduce((prev , acc) => prev + acc.NumNights , 0)
const occupationRate = numOfCheckedInNight / (Number( cabins.length?cabins.length : 8 ) * Number(numDays))


  return (
    <>
     <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkedIn}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupationRate * 100) +'%'}
      />
    </>
  )
}

export default Stats