import styled from "styled-components";
import Spinner from '../../ui/Spinner';
import CabinRow from "./CabinRow";
import Table from "../../ui/Table";
import { useSearchParams } from "react-router-dom";
import { useCabin } from "./useCabin";


/*
const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;
*/

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;



const CabinTable = () => {
  
  const {isLoading , cabins , error} = useCabin();

  // Filter

  const [searchParams] = useSearchParams();
  const filteredValue = searchParams.get('discount') || 'all';

  
  if(isLoading) return <Spinner />

  let filteredCabins;
  if(filteredValue === 'all') filteredCabins = cabins;
  if(filteredValue === 'no-discount') filteredCabins = cabins.filter((cabin) => cabin.discount === 0); 
  if(filteredValue === 'with-discount') filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  // Sort 

  const sortBy = searchParams.get("sortBy") || "name-asce";
  const [field, direction] = sortBy.split("-");
  console.log(field , direction)

  const modifier = direction === 'asce' ? 1 : -1;
  const sortedCabins = filteredCabins.sort((a,b) => (a[field] - b[field]) * modifier)
  console.log(sortedCabins)
  
  return (
    <Table role='row' columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
      <TableHeader> 
        <div></div>
        <div>Cabins</div>
        <div>Capicty</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>

      <Table.Body data={sortedCabins} render={ (cabin) => <CabinRow cabin = {cabin} key={cabin.id}/> } />
        
    </Table>
  )
}

export default CabinTable