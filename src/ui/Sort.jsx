import React from 'react'
import Select from './Select'
import { useSearchParams } from 'react-router-dom';

const Sort = ({options}) => {

  let [searchParams ,setSearchParams] = useSearchParams();

  const sortBy = searchParams.get('sortBy') || ""

  const handleChange = (e) => {
       searchParams.set('sortBy' , e.target.value);
       setSearchParams(searchParams);
  }

  return (

    <Select options = {options} type = 'white' value = {sortBy} handleChange={handleChange} />
  )
}

export default Sort