import { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./components/Auth/Login.jsx";
import Signup from "./components/Auth/Signup";
import Reset from "./components/Auth/Reset";
import Home from "./pages/Home"
import Trends from "./pages/Trends.jsx"
import Reports from "./pages/Reports.jsx"
import Log from "./pages/Log.jsx"
import Intelligence from "./pages/Intelligence.jsx"
import Organization from "./pages/Organization.jsx"
import Users from "./pages/Users.jsx"
import UtilityBill from "./pages/UtilityBill.jsx"

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
              <Route path="/dashboard/trends" element={<Trends/>}/>
              <Route path="/dashboard/reports" element={<Reports/>}/>
              <Route path="/dashboard/warning-logs" element={<Log/>}/>
              <Route path="/dashboard/intelligence" element={<Intelligence/>}/>
              <Route path="/dashboard/organization" element={<Organization/>}/>
              <Route path="/dashboard/users" element={<Users/>}/>
              <Route path="/dashboard/utility-bill-auditing" element={<UtilityBill/>}/>
              <Route path="*" element={<h1>404 Not Found</h1>}/>
            </Routes>
        </div>
      </div>
      </Router>
      </>
    )
}

export default App;