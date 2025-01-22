import React, { useEffect, useRef, useState } from 'react'

function Form1() {

    let name = useRef();
    let email = useRef();
    let password= useRef();

let [formdata , setformdata] = useState({
    name:'',
    email:'',
    password:''

})

    function handlesubmit(event) {
        event.preventDefault();

        setformdata({
            name:name.current.value,
            email:email.current.value,
            password:password.current.value
        })
        // console.log(name.current.value);
        // console.log(email.current.value);
        // console.log(email.current.value);

    }
    useEffect(()=>{
        console.log(formdata);
    },[formdata])
    
  return (
    <div>
      <form onSubmit={handlesubmit}>
      <br></br>
      <br></br>
      <br></br>
      <label>Username: <input type="text" ref={name}></input></label>
      <br></br>
      <br></br>
      <label>Password: <input type="password" ref={password}></input></label>
      <br></br>
      <br></br>
      <label>Email: <input type="email" ref={email}></input></label>
      <br></br>
      <br></br>
  <input type="submit"></input>
      </form>
    </div>
  )
}

export default Form1
