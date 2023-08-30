import { useState } from "react";
import {AuthContexts} from "./useAuthContext";


export const UseSignUp=()=>{
  const [error, setisError]=useState(null);
  const [isLoading, setIsLoading]=useState(null);


  const {dispatch}=AuthContexts();
  // "bearer ${user.token"  pass this hwere router access by token validation
  const signup= async (email,password)=>{
    setIsLoading(true);
    setisError(null)
    console.log(email,password, "hello");
    const response=fetch("http://localhost:6001/api/auth/signup",{
      method:"POST",
      headers:{"Content-Type":"application/json"}, 
      body:JSON.stringify({email,password}),
    });
    const jsons= (await response).json();
    const dat= await jsons;
    if(dat.msg!==""){
      console.log("msg");
      setIsLoading(false);
      setisError(dat.msg);
    }
        localStorage.setItem("user",JSON.stringify(dat.res));
        dispatch({type:"LOGIN",payload:dat.res});
        setIsLoading(false);
    
  }

return {signup, isLoading,error};
}

