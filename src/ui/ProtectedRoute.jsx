import React from 'react'
import { useUser } from '../features/authentication/useUser';
import Spinner from './Spinner';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react"

const FullPage = styled.div`
    height: 100vh;
    background-color: var(--color-grey-0);
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const ProtectedRoute = ({children}) => {

    const navigate = useNavigate();

    const{isAuthunticated , isLoading} = useUser();

    useEffect( ()=> {
        if(!isAuthunticated && !isLoading) { navigate('/login')} }, [isAuthunticated , isLoading , navigate])


    if(isLoading) return( <FullPage> <Spinner /></FullPage> )

  return children;
}

export default ProtectedRoute