import React from 'react'
import User from './Components/User'

const App = () => {

  const userData = [
    {
      "name": "John Doe",
      "profession": "Software Engineer",
      "age": 28,
      "salary": 80000
    },
    {
      "name": "Jane Smith",
      "profession": "Graphic Designer",
      "age": 25,
      "salary": 60000
    },
    {
      "name": "Michael Johnson",
      "profession": "Data Scientist",
      "age": 32,
      "salary": 95000
    },
    {
      "name": "Emily Davis",
      "profession": "Marketing Manager",
      "age": 29,
      "salary": 75000
    },
    {
      "name": "David Brown",
      "profession": "Accountant",
      "age": 40,
      "salary": 70000
    },
    {
      "name": "Sophia Wilson",
      "profession": "HR Manager",
      "age": 35,
      "salary": 65000
    }
  ]
  
  return (
    <>
    <div>
      {userData.map((data, index) => {
        return <User key={index} userName={data.name} age={data.age} profession={data.profession} salary={data.salary} />
      })}
      </div>
    </>
  )
}

export default App