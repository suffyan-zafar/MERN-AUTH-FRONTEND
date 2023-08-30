import { useState } from "react";
import { UseLogin } from "../hooks/useLoginHook";
const Login=  ()=>{ 
  const {login, isLoading, error }=UseLogin();
const [user, setUser]=useState({email:"", password:""})
const handleSubmit=async (e)=>{
    e.preventDefault();
    await login(user.email,user.password);
    console.log(user);
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

      <button>Login</button>
    </form>
  </div>
)
}

export default Login;