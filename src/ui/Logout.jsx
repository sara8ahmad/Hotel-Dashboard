import React from 'react'
import ButtonIcon from './ButtonIcon'
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from '../features/authentication/useLogout';
import SpinnerMini from './SpinnerMini';

const LogOut = () => {

  const {Logout , isLoading} = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={Logout}>
    {!isLoading? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  )
}

export default LogOut