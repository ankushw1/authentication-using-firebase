import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {auth} from '../Firebase'
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const signIn =(e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        
       console.log(userCredential)
      })
      .catch((error) => {

        console.log(error)
        
      });

  }



  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Max Chat</span>
        <span className="title">Login</span>

        <form onSubmit={signIn}>
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

          <button>Sign in</button>
        </form>

        <p>
          You do't have an account?{" "}
          <span>
            <Link to="/register" style={{ textDecoration: "none" }}>
              Register
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
