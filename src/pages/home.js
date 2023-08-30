import {Logout} from "../hooks/userLogoutHook";

import {AuthContexts} from "../hooks/useAuthContext"
const Home=()=>{

  const {user}=AuthContexts();
  console.log(user,"user");
  const {logout}=Logout();
  const handliCLick=()=>{
    logout();
  }
    return (
      <div>
        {user &&(
        <button onClick={handliCLick}> LOGOUT</button>)
          }
          {
            !user &&(
              <div><button>Login</button></div>
            )
          }
          
        </div>
    )
}

export default Home;