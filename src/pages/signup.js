import { useState } from "react";

import {UseSignUp} from "../hooks/useSignUpHook"

const Signup=()=>{
    const [user, setUser]=useState({email:"", password:""});
    const  {signup, isLoading,error}=UseSignUp();
  const handleSubmit=async (e)=>{
      e.preventDefault();
      await signup(user.email,user.password);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label>EMAIL</label>
        <input type="email" 
        placeholder=""Enter EMail 
        onChange={(e)=>{setUser({...user,email:e.target.value})}}
        value={user.email}
        />

        <label>Password</label>
        <input type="password" 
        onChange={(e)=>{setUser({...user,password:e.target.value})}}
        value={user.password}
        />

        <button disabled={isLoading} >Sign Up</button>
      </form>
      {error && <h1>{error}</h1>}
    </div>
  )
}

export default Signup;