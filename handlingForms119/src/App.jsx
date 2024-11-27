
import './App.css'
import React, { useState } from 'react'
import { useForm } from "react-hook-form";



// console.log(watch("example")); // watch input

function App() {
  const [count, setCount] = useState(0)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => console.log(data);



  return (
    <>
      <div className="container">
        <form action="" method="post" onSubmit={handleSubmit(onSubmit)} >
          <input defaultValue="test" {...register("username", {required: {value: true, message: "This field is required"}, minLength: {value: 3, message: "Min lengths is 3"}, maxLength: {value:8, message: "Maximum length is 8"}} )} type='text' />
          {errors.username && <div className='red' >{errors.username.message}</div>}
          <br />

          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("password", { required: {value: true, message:"Password is required"}, minLength: {value:5, message: "Minimum length is 5"}, maxLength: {value:7, message: "Maxium length is 7"} })} type='password' />
          {errors.password && <div className='red' >{errors.password.message}</div>}
          <br />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  )
}

export default App;
