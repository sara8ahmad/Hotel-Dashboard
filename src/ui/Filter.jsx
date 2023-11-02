import styled, { css } from "styled-components";
import { useSearchParams } from "react-router-dom";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;
    
  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;


const Filter = ({filteredField , options}) => {
 
  let [searchParams ,setSearchParams] = useSearchParams();

  /* 
  
  In the case of a button, the  event.target.value  approach is typically used
   with select elements or input elements that have a  value  attribute. Buttons, 
  on the other hand, do not have a  value  attribute by default. 
 
  If you are using buttons for filtering, you can pass the desired value directly to 
  the handleClick function without relying on  event.target.value.

 */

  const handleClick = (value) => {
       searchParams.set(filteredField , value);
       setSearchParams(searchParams);
  }
  const currentvalue = searchParams.get(filteredField) || options[0]
    
  return (
    <StyledFilter>
       {options.map((option) => (<FilterButton key={option.value}
       onClick={() => handleClick(option.value)}  active = {option.value === currentvalue}>{option.label}</FilterButton>))}
    </StyledFilter>

  )
}

export default Filter
