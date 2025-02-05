import React, { createContext, useState } from 'react'
import A from './components/A'
import B from './components/B'
import C from './components/C'

const UserContext = createContext()
const App = () => {
  const [name, setName] = useState("Owais from app.jsx")

  return (
    <>
    <A/>
    <B/>
    <UserContext.Provider value={name}>
      <C/>
    </UserContext.Provider>
    
    </>
  )
}

export default App
export {UserContext}

//step1: create context
//step1: wrap all the child inside a provider
//step3: pass value
//step4: export the context
//step5: consumer k andar jakar consume karlo