import { useState } from "react";
import {AuthContexts} from "./useAuthContext";


export const UseLogin=()=>{
  const [error, setisError]=useState(null);
  const [isLoading, setIsLoading]=useState(null);


  const {dispatch}=AuthContexts();

  const login= async (email,password)=>{
    setIsLoading(true);
    setisError(null)
    const response=fetch("http://localhost:6001/api/auth/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({email,password})
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

return {login, isLoading,error};
}

