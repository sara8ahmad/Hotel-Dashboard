import styled from "styled-components";
import Tag from '../../ui/Tag';
import Flag from '../../ui/Flag';
import Button from '../../ui/Button';


const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 8rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;


const TodayItem = ({activity}) => {

  const {status , id , NumNights , Gests} = activity;
  return (
    <StyledTodayItem>

      {status === "unconfirmed" && <Tag type = 'green' >Arrived</Tag>}
      {status === "checked-in" && <Tag type = 'blue' >Departing</Tag>}

      <Flag src={Gests.countryFlag} alt={`Flag of ${Gests.country}`} />
      <Guest>{Gests.fullName}</Guest>
      <div>{NumNights} nights</div>

      {status === "unconfirmed" && (
        <Button
          size="small"
          variations="primary">
          Check in
        </Button>
      )}
      {status === "checked-in" && 
        <Button
          size="small"
          variations="primary">
          Check out
        </Button>}


    </StyledTodayItem>
  )
}

export default TodayItem