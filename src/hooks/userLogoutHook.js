import { AuthContexts } from "./useAuthContext";

export const Logout=()=>{
  const {dispatch}=AuthContexts();

  const logout=()=>{
    localStorage.removeItem("user");

    dispatch({type:"LOGOUT"})
  }
   return {logout};
}