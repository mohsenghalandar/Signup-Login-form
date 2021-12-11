import React,{useState,useEffect} from 'react';
import Valid from "./Valid"
import {Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from "./toast" ;
import style from "./styles/SignUp.module.css"
const SignUp = () => {
    const [data,setDate] = useState({
        name:"",
        email:"",
        pass:"",
        confirm_pass:"",
        isAccepte:false ,
    })
    const [error,setError] = useState({});
    const [touch,setTouch] = useState({});
    useEffect(()=>{
        setError(Valid(data))
    },[data])
    const changehandler = event => {
        if (event.target.name === "isAccepte")
        {
            setDate({...data,[event.target.name]:event.target.checked})
        }
        else{
            setDate({...data,[event.target.name]:event.target.value})
        }
    }
    const focushandler = event =>{
        setTouch({...touch,[event.target.name]:true})
    }
    
    const submit =(event)=>{
        event.preventDefault();
        if (!Object.keys(error).length)
        {
            notify("دورود بر شما","success");
        }
        else {
            notify("لعنت بر شما","error") 
            setTouch({name:true,email:true,pass:true,confirm_pass:true,isAccepte:true})}
    }
    return (
        <form className={style.container}>
            <h3 className={style.title}>Sign Up</h3>
          <form>
            <div className={style.boxer}> 
                <label>Name</label>
                <input className={(error.name && touch.name) ? style.uncomplete :style.forminput } type="text" name="name" value={data.name} onChange={changehandler} onFocus={focushandler} />
                {error.name && touch.name && <span>{error.name}</span>}
            </div>
            <div className={style.boxer}>
                <label>Email</label>
                <input className={(error.email && touch.email) ? style.uncomplete :style.forminput } type="text" name="email" value={data.email} onChange={changehandler} onFocus={focushandler} />
                {error.email && touch.email && <span>{error.email}</span>}
            </div>            
            <div className={style.boxer}>
                <label>password</label>
                <input className={(error.pass && touch.pass) ? style.uncomplete :style.forminput } type="text" name="pass" value={data.pass} onChange={changehandler}onFocus={focushandler} />
                {(error.pass && touch.pass) && <span>{error.pass}</span>}
                
            </div>            
            <div className={style.boxer}>
                <label>confirm password</label>
                <input className={(error.confirm_pass && touch.confirm_pass) ? style.uncomplete :style.forminput } type="text" name="confirm_pass" value={data.confirm_pass} onChange={changehandler}onFocus={focushandler} />
                {error.confirm_pass && touch.confirm_pass && <span>{error.confirm_pass}</span>}
            </div>            
            <div className={style.boxer} style={{marginTop:"0px"}}>
                <label style={{margin:"0% auto 0px 0px"}}>I accept compony policy privacy</label>
                <input style={{margin:'-15px 0px 0px 85%'}} type="checkbox" name="isAccepte" value={data.isAccepte} onChange={changehandler} onClick={focushandler} />
                {(error.isAccepte && touch.isAccepte) && <span style={{marginTop:"0px"}}>{error.isAccepte}</span>}

            </div>
            <div className={style.btn_container}>
                <button className={style.btn} type="submit" onClick={submit}>Sign up </button>
                <Link className={style.link} to="/login">Log in</Link>
            </div>
          </form>
            <ToastContainer position="bottom-center" autoClose={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss={false} draggable={false}/>
        </form>
    );
};

export default SignUp;