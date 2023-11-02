import React from 'react'
import TableOperations from '../../ui/TableOperations'
import Filter from '../../ui/Filter'
import Sort from '../../ui/Sort'
const CabinOperations = () => {
  return (
    <TableOperations>
      
       <Filter filteredField ='discount' options={ [{label : 'All' , value : 'all'},
       {label : 'With Discount' , value : 'with-discount'} ,
       {label : 'No Discount' , value :'no-discount'} ] }/> 

       <Sort options ={ [{label : 'Sort From A - Z' , value : 'name-asce'},
       {label : 'Sort From Z - A' , value : 'name-desce'} ,
       {label : 'Minimum Price' , value : 'regularPrice-asce'},
       {label : 'Maximum Price' , value : 'regularPrice-desce'},
       {label : 'Sort By Minimum Capacity' , value :'maxCapacity-asce'},
       {label : 'Sort By Maximum Capacity' , value :'maxCapacity-desce'} ] } />

    </TableOperations>
  )
}

export default CabinOperations