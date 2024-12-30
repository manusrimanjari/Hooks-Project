import React from "react"
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import UseStateDemo from "./Pages/usestatehook/state example";
import UseEffectDemo from "./Pages/useeffecthook/effect example";
import UseCallbackDemo from "./Pages/usecallbackhook/callback example";
import UseReducerDemo from "./Pages/usereducerhook/reducer example";
import UseContextDemo from "./Pages/usecontexthook/context example";
import Home from "./Pages/Home/Home";

const App: React.FC = () => {
    return(
        <>
        <div className="app">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usestatehook" element = {<UseStateDemo/>} />
            <Route path="/useeffecthook" element = {<UseEffectDemo/>}/>
            <Route path="/usecallbackhook" element = {<UseCallbackDemo/>}/>
            <Route path="/usereducerhook" element = {<UseReducerDemo/>}/>
            <Route path="/usecontexthook" element = {<UseContextDemo/>}/>
          </Routes>
        </div>
        </>
    );
};

export default App;
