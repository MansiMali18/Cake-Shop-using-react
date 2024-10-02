import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  "./Signup.css"
import Navbar from "./../../Components/Navbar"
const Signup = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (isSignUp && formData.name.trim() === "") {
      toast.error("Name is required!", {
        position: "top-right",
        autoClose: 3000,
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid email format!", {
        position: "top-right",
        autoClose: 3000,
      });
      return false;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters!", {
        position: "top-center",
        autoClose: 3000,
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    if (isSignUp) {
      
      const users = JSON.parse(localStorage.getItem('users')) || [];
  
   
      const userExists = users.some(user => user.email === formData.email);
      
      if (userExists) {
        toast.error("User with this email already exists!", {
          position: "top-right",
          autoClose: 3000,
        });
        return;
      }
  
      users.push({
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
  
   
      localStorage.setItem('users', JSON.stringify(users));
  
      toast.success("Sign Up Successful! 🎉", {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
     
      const users = JSON.parse(localStorage.getItem('users')) || [];
  
      
      const loggedInUser = users.find(user => 
        user.email === formData.email && user.password === formData.password
      );
  
      if (loggedInUser) {
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
  
        toast.success("Login Successful! 🎉", {
          position: "top-center",
          autoClose: 3000,
        });
      } else {
        toast.error("Invalid email or password!", {
          position: "top-center",
          autoClose: 3000,
        });
        return;
      }
    }
  };
  return (
    <>
    <Navbar/>
    <div className="auth-container">
      <ToastContainer /> 
      <form onSubmit={handleSubmit}>
        <h2>{isSignUp ? "Sign Up" : "Login"}</h2>

        {isSignUp && (
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
        )}

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="button-signup">{isSignUp ? "Sign Up" : "Login"}</button>

        <p onClick={() => setIsSignUp(!isSignUp)} className="toggle-link">
          {isSignUp
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </p>
      </form>
    </div>
    </>
  );
};

export default Signup;