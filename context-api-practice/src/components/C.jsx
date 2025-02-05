import React, { useContext } from 'react'
import { UserContext } from '../App'

const C = () => {
    const user = useContext(UserContext)
  return (
    <>
    <div>hello</div>
    <p>{user}</p>
    </>
  )
}

export default C