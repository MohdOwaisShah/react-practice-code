import React from 'react'
import { useNavigate } from 'react-router'

const UseNavigation = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/about')
    }

  return (
    <>
    <div>Hello</div>
    <button onClick={handleClick}>click to go about page</button>
    </>
  )
}

export default UseNavigation