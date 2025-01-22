import React, { useMemo } from 'react'
import { useState } from 'react'
import { useReducer } from 'react';

function Counter() {
    // const [counter,setcounter] = useState(0)

    // function increment() {
    //     setcounter(counter = counter + 1);
    // }
    // function decrement() {
    //     setcounter(counter = counter-1);
    // }
    function reducer (state,action) {
        if(action.type=='increment') {
            return state = state +1;
        }
        else if(action.type=='decrement') {
            return state = state-1;
        }
        else if(action.type=='reset') {
            return state=initialstate;
        }
    }
    let initialstate = 0
    let[state,dispatch] = useReducer (reducer,initialstate)

    function square(num) {
        for(let i=0;i<1000000000;i++) {

        }
        return num*num;
    }
    let num = 8;
    useMemo(()=> {
        square(num)
    },[num])

  return (

    <div>
        <h1>{state}</h1>
      <button onClick={()=>{dispatch({type:'increment'})}}>Increment</button>
      <button onClick={()=>{dispatch({type:'decrement'})}}>decrement</button>
    </div>
  )
}

export default Counter
