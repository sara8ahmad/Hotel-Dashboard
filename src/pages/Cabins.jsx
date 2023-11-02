import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable"
import { getCabins } from "../services/apiCabins";
import AddCabin from "../features/cabins/AddCabin";
import CabinOperations from "../features/cabins/CabinOperations";

function Cabins() {

useEffect(
  ()=>{
    getCabins().then(data => console.log(data))
  },[]
)

  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <CabinOperations />
    </Row>
    
    <Row>
      <CabinTable />
      <AddCabin />
    </Row>
    </>
  );
}

export default Cabins;
