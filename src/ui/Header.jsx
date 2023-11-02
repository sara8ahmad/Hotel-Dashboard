import React from 'react'
import { styled } from 'styled-components';
import HeaderMenu from './HeaderMenu';
import UserAvatar from '../features/authentication/UserAvatar';


const Head = styled.header`
background-color: var(--color-grey-0);
padding: 2rem 4.8rem;
border-bottom: 1px solid var(--color-grey-100);
display: flex;
align-items: center;
justify-content: flex-end;
`;


const Header = () => {
  return (
    <Head>
      <UserAvatar />
      <HeaderMenu />
    </Head>
  )
}

export default Header