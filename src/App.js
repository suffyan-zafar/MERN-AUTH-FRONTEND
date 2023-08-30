
import './App.css';

import {BrowserRouter, Route , Switch}  from "react-router-dom"
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
