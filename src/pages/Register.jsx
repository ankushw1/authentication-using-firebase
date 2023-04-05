import React from 'react'
import { useState } from "react";

import { Link } from 'react-router-dom'
import {auth} from '../Firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
  
    const signUp =(e) => {
      e.preventDefault()
  
      createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
          
         console.log(userCredential)
        })
        .catch((error) => {
  
          console.log(error)
          
        });
  
    }


    return (
        <div className='formContainer'>
    
            <div className='formWrapper'>
    
                <span className='logo'>Max Chat</span>
                <span className='title'>Register</span>
    
                <form onSubmit={signUp}>
        
                <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
            
         
                    
                    <button>Sign up</button>
    
                </form>
    
                <p>You do have an account? <span>
    <Link to='/login' style={{ textDecoration: 'none' }}>Login</Link>
</span></p>

    
            </div>
        </div>
      )
}

export default Register