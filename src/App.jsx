import { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { createContext } from "react";

import Login from "./components/Auth/Login.jsx";
import Signup from "./components/Auth/Signup";
import Reset from "./components/Auth/Reset";
import Home from "./pages/Home"
import Trends from "./pages/Trends.jsx"
import Reports from "./pages/Reports.jsx"
import Log from "./pages/Warning_Logs.jsx"
import Intelligence from "./pages/Intelligence.jsx"
import Organization from "./pages/Organization.jsx"
import Users from "./pages/Users.jsx"
import UtilityBill from "./pages/UtilityBill.jsx"


export const SidebarContext = createContext();

// Create a Context Provider
const SidebarContextProvider = ({ children }) => {
    const [closeVal, setCloseVal] = useState(false);
    return (
        <SidebarContext.Provider value={{ closeVal, setCloseVal }}>
            {children}
        </SidebarContext.Provider>
    );
};

function App() {

    return( 
      <>
      <Router>
      <div className="App">
        <div className="content">
        <SidebarContextProvider>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/reset" element={<Reset/>}/>
                <Route path="/dashboard" element={<Home name="Live Monitoring"/>}/>
                <Route path="/trends" element={<Trends name="Trends"/>}/>
                <Route path="/reports" element={<Reports name="Reports"/>}/>
                <Route path="/warning-logs" element={<Log name="Warning Logs"/>}/>
                <Route path="/intelligence" element={<Intelligence name="Intelligence"/>}/>
                <Route path="/organization" element={<Organization name="Organization"/>}/>
                <Route path="/users" element={<Users name="Users"/>}/>
                <Route path="/utility-bill-auditing" element={<UtilityBill name="Utility Bill Auditing"/>}/>
                <Route path="*" element={<h1>404 Not Found</h1>}/>
            </Routes>
          </SidebarContextProvider>
        </div>
      </div>
      </Router>
      </>
    )
}

export default App;