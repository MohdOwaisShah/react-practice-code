import React from 'react'
import { useParams } from 'react-router'

const Param = () => {
    const {id} = useParams()
    
  return (
    <div>{id}</div>
  )
}

export default Param