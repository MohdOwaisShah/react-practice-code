import React from 'react'

const User = (props) => {
    console.log(props)
  return (
    <>
        <h1>Hello, this is {props.userName}</h1>
        <h1>Age is {props.age}</h1>
        <h1>profession is {props.profession}</h1>
        <h1>salary is {props.salary}</h1>
    </>
  )
}

export default User