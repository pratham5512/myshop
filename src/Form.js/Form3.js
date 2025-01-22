import React from 'react'
import { useForm } from 'react-hook-form'

function Form3() {
    let {register, handleSubmit,formState:{errors},watch} = useForm()
   
    
   let  name = watch("name");

  return (
    <div>
      <form onSubmit={handleSubmit((formdata)=>{
        console.log(formdata)
      })}>

<br></br>
<br></br>
<br></br>

<label>Username:</label> <input type="text" {...register("name" , {required:{value:true,message:"It is required"},minLength:{value:3,message:"Length should be more than 3"}})} ></input>
{errors.name && <p>{errors.name.message}</p>}
<br></br>
<br></br>

<label>Password:</label> <input type="password" {...register("password",{pattern:{value:/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*():]).{8,}$/, message:"Please match the password requirements"}})}></input>
{errors.password && <p>{errors.password.message}</p>}

<br></br>
<br></br>

<label>Language</label>
<select {...register("Language")}>
    <option value={"English"}>English</option>
    <option value={"Hindi"}>Hindi</option>
    <option value={"Marathi"}>Marathi</option>
</select>
<br></br>
<br></br>

<button>Submit</button>

</form>
<h1>Name:{name}</h1>
    </div>
  )
}

export default Form3
