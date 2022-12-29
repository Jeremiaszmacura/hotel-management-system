import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import './../css/Login.css';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        let result = await fetch('/login', {
            method: 'post',
            body: JSON.stringify({email, password}),
            headers: { 'Content-Type': 'application/json'}
        })

        result = await result.json()
        
        if(result.error){
            alert("Not found email or passowrd")
        }else{
            // token
            
            window.open('/')
        }
    }

    return (
        <div className="Login">
            <Menu />

            <div className='form'>
                <h1>Login</h1>
                <input type="text" placeholder="Email" className='inputText'
                onChange={(e)=>setEmail(e.target.value)} value={email}/>

                <input type="password" placeholder="Password" className='inputText'
                onChange={(p)=>setPassword(p.target.value)} value={password}/>

                <button onClick={handleLogin} type="button" className='buttonLogin'>Login</button>
            </div>

        </div>
    );
  }

export default Login