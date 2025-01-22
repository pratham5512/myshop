import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

function Form2() {
    const{
        register,
        handleSubmit,
        watch,
        formState: {errors},

    } = useForm()
    function display(data) {
        console.log(data);
    }
  return (
    <div>
      <form onSubmit={handleSubmit(display)}>

      <br></br>
      <br></br>
      <br></br>

      <label>Username: <input type="text" {...register("name")}></input></label>
      <br></br>
      <br></br>
      
      <label>Password: <input type="password" {...register("password")}></input></label>
      <br></br>
      <br></br>

      <label>Email: <input type="email" {...register("email")} ></input></label>
      <br></br>
      <br></br>
      
  <input type="submit"></input>
      </form>
    </div>
  )
}

export default Form2
