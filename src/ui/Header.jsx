import React from 'react'
import { styled } from 'styled-components';
import LogOut from './Logout';


const Head = styled.header`
background-color: var(--color-grey-0);
padding: 2rem 4.8rem;
border-bottom: 1px solid var(--color-grey-100);
`;


const Header = () => {
  return (
    <Head>
      <LogOut />
    </Head>
  )
}

export default Header