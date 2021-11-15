import react from "react"
import {Route,Routes} from "react-router-dom";
import './App.css';
import SignUp from "./component/SignUp"
import Response from "./component/Response"
import LogIn from "./component/LogIn";
import Home from "./component/Home"

function App() {
  return (
    <div>
      <Routes >
        
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
         
      </Routes>
      <Response />
    </div>  

  );
}

export default App;
