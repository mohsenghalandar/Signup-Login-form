import React, { useState } from 'react';
import {Link} from "react-router-dom"
import style from "./styles/LogIn.module.css"

const LogIn = () => {
    const [login,setLogin] = useState({user:"",pass:""});
    const changehandler = event => {
            setLogin({...login,[event.target.name]:event.target.value})
    }

    return (
        <div className={style.container}>
            <h3 className={style.title}>Log In</h3>
            <form  >
                <input className={style.boxer} type="text" name="user" value={login.user} onChange={changehandler} />
                <input className={style.boxer} type="password" name="pass" value={login.pass} onChange={changehandler} />
            </form>
            <button className={style.btn} >Log In</button>
            <Link className={style.link} to="/signup">SignUp</Link>
        </div>
    );
};

export default LogIn;