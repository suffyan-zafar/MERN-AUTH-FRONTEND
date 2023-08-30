import { AuthContext } from "../context/AuthContext";

import { useContext } from "react";

export const AuthContexts=()=>{
  const context=useContext(AuthContext);
  if(!context){
    throw Error("useAuthCOntext");
  }
  return context;
}