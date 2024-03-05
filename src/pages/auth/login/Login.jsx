import React from "react";
import "./login.css";
import logo from "../../../login_logo.png";
import Button from "../../../components/btn/Button";

const Login = () => {
  return (
    <div className="loginWrapper">
      <img className="login_logo" src={logo} alt="logo" />
      <p className="signin">Sign in</p>
      <div className="inputWrapper">
        <div className="emailBlock">
          <label htmlFor="email">Email Address</label>
          <input
            placeholder="Enter your email"
            className="emailInput"
            type="email"
            id="email"
          />
        </div>

        <div className="emailBlock">
          <label htmlFor="email">Password</label>
          <input
            placeholder="Enter your email"
            className="emailInput"
            type="password"
            id="email"
          />
        </div>
      </div>
      <Button>Sign Up</Button>
    </div>
  );
};

export default Login;
