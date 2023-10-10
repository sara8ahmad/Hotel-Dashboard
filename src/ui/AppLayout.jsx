import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';
import { styled } from 'styled-components';

const Styled = styled.div`
    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
`

const Main = styled.main`
background-color: var(--color-grey-50);
padding: 2rem 4.8rem;
overflow: scroll;
`;

const Container = styled.div`
max-width: 120rem;
margin: 0 auto;
display: flex;
flex-direction: column;
gap: 3.2rem;
`;



const AppLayout = () => {
  return (
    <Styled>
        <Header />
        <Sidebar />

        <Main>
          <Container>
        <Outlet />
         </Container>
        </Main>


    </Styled>
  )
}

export default AppLayout