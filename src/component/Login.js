import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { auth } from '../firebase';
import "./Login.css";

function Login() {
    const navigate = useNavigate();
    const [email,setEmail]=  useState('');
    const [password, setPassword] = useState('');
    const login=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).
        then((auth)=>{
            navigate("/");
        }).
        catch(e =>alert(e.message));
            
    }

    const register=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).
        then((auth)=>{
            navigate("/");
        }).
        catch(e=>alert(e.message));
    }

    return (
        <div className='login'>
            <Link to="/">
                <img src='http://pngimg.com/uploads/amazon/amazon_PNG1.png'
                alt=''
                className='login_logo'

                />
            </Link>
            <div className="login_container">
                <h1>Sign  In</h1>
                <form>
                <h5>E-mail</h5>
                <input value={email} onChange={e=>setEmail(e.target.value)} type="email"/>
                <h5>Password</h5>
                <input value={password} onChange={e=>setPassword(e.target.value)} type="password"/>
                <button onClick={login} type='submit' className='login_signinButton'>Sign In</button>
                </form>
                <p>by sign in you agree to amazon condtion of see  out privcy.... </p>
                <button className='login_CreateButton' onClick={register}>Create New Account</button>
            </div>
        </div>
    )
}

export default Login
