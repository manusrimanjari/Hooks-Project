import React from "react"
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import UseStateDemo from "./Pages/usestatehook/state_example";
import UseEffectDemo from "./Pages/useeffecthook/effect_example";
import UseCallbackDemo from "./Pages/usecallbackhook/callback_example";
// import UseReducerDemo from "./Pages/usereducerhook/reducer_example";
import UseContextDemo from "./Pages/usecontexthook/ComponentA";
import Home from "./Pages/Home/Home";
import UseRefDemo from "./Pages/userefhook/ref_example";
import UseMemoDemo from "./Pages/usememohook/usememo_example";

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
            {/* <Route path="/usereducerhook" element = {<UseReducerDemo/>}/> */}
            <Route path="/usecontexthook" element = {<UseContextDemo/>}/>
            <Route path="/userefhook" element = {<UseRefDemo/>}/>
            <Route path="/usememohook" element = {<UseMemoDemo/>}/>
          </Routes>
        </div>
        </>
    );
};

export default App;
