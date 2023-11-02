import React from 'react'
import { styled } from 'styled-components';
import Logo from './Logo';
import MainNav from './MainNav';
//import Uploader from '../data/Uploader';

const StylesAside = styled.aside`
background-color: var(--color-grey-0);
padding: 2rem 4.8rem;
border-right : 1px solid var(--color-grey-100);
grid-row: 1 / -1;
`;


const Sidebar = () => {
  return (
    <StylesAside>
        <Logo />
        <MainNav />
    </StylesAside>
  )
}

export default Sidebar