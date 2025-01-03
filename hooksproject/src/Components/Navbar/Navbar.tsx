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
                <li onClick={() => setActive("useTransition")} className={active === 'useTransition'?"active":""}>
                    <Link to='/usetransitionhook'>useTransition</Link></li>
                <li onClick={() => setActive("useRef")} className={active === 'useRef'?"active":""}>
                    <Link to='/userefhook'>useRef</Link></li>
                <li onClick={() => setActive("useMemo")} className={active === 'useMemo'?"active":""}>
                    <Link to='/usememohook'>useMemo</Link></li>
            </ul>
        </div>
        </>
    );
};

export default Navbar;