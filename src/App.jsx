import { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./components/Auth/Login.jsx";
import Signup from "./components/Auth/Signup";
import Reset from "./components/Auth/Reset";
import Home from "./pages/Home"

function App() {
    return( 
      <>
      <Router>
      <div className="App">
        <div className="content">
            <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/reset" element={<Reset/>}/>
              <Route path="/dashboard" element={<Home/>}/>
              <Route path="*" element={<h1>404 Not Found</h1>}/>
            </Routes>
        </div>
      </div>
      </Router>
      </>
    )
}

export default App;