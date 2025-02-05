import React from 'react'
import { useForm  } from 'react-hook-form'

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitValue = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={ handleSubmit(submitValue)}>
      
      <label>Name</label>
      <input {...register("Name", {required: true, minLength:{value: 3 ,message:'length max 3 letters'}, maxLength:{value: 10, message:'length max 10 letters'}})}/>
      
      <br />
      <label>number</label>
      <input type='number' {...register("number", { required: true })}/>
      <br />
      <input type="submit" />
      {errors.Name && <p>{errors.Name.message}</p>}
    </form>
  )
}

export default App