import React from "react";
import { useState } from "react";
import './Navbar.scss'
import { Link } from "react-router-dom";
const Navbar: React.FC = () => {
    const [active, setActive] = useState("Home");

    return (
        <>
        <div className="navbar">
            <ul className="navbar-menu">
                <li onClick={() => setActive("Home")} className={active === 'Home'?"active":""}>
                    <Link to= '/'>Home</Link></li>
                <li onClick={() => setActive("useState")} className={active === 'useState'?"active":""}>
                    <Link to='/usestatehook'>useState</Link></li>
                <li onClick={() => setActive("useEffect")} className={active === 'useEffect'?"active":""}>
                    <Link to='/useeffecthook'>useEffect</Link></li>
                <li onClick={() => setActive("useCallback")} className={active === 'useCallback'?"active":""}>
                    <Link to='/usecallbackhook'>useCallback</Link></li>
                <li onClick={() => setActive("useContext")} className={active === 'useContext'?"active":""}>
                    <Link to='/usecontexthook'>useContext</Link></li>
                <li onClick={() => setActive("useReducer")} className={active === 'useReducer'?"active":""}>
                    <Link to='/usereducerhook'>useReducer</Link></li>
                {/* <li onClick={() => setActive("useRef")} className={active === 'useRef'?"active":""}>useRef</li>
                <li onClick={() => setActive("useMemo")} className={active === 'useMemo'?"active":""}>useMemo</li> */}
            </ul>
        </div>
        </>
    );
};

export default Navbar;