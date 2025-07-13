import React, { use, useEffect } from "react";
import "./SignIn.css"
import { useState } from "react";

function SignIn () {
    const data = {name: "", email: "", password: ""}
    const [inputData, setInputData] = useState(data);
    const [flag, setFlag] = useState(false);

    useEffect(()=> {
        console.log("Registered");
    }, [flag])

    function handleChange(e) {
        setInputData({...inputData, [e.target.name]: e.target.value});
        console.log(inputData);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All fields are mandatory");
        }
        else{
            setFlag(true);
        }
    }
        

    return (
        <div className="signin-container">
            <h1>SignIn</h1>
        {(flag)? <div className="success-message">{inputData.name} registered successfully</div> : ""}
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" name="name" onChange={handleChange}></input>
            <input type="email" placeholder="email" name="email" onChange={handleChange}></input>
            <input type="password" placeholder="password" name="password" onChange={handleChange}></input>
            <button type="submit">Register</button>
        </form>
        </div>
    )

}


export default SignIn