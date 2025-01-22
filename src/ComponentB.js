import React,{useContext} from 'react'
import ComponentC from './ComponentC'
import { ContextData } from './ContextData'
function ComponentB() {
  let {name,setname} =useContext(ContextData)
  return (
    <div>
      <button onClick={()=>{setname("Pratham")}}>NameChange</button>
      
      <ComponentC />
    </div>
  )
}

export default ComponentB
