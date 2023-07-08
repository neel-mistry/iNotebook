import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Login = () => {
    const[credentials, setCredentials] = useState({email: "", password:""})
    let navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // API Call
        const response = await fetch("http://localhost:5001/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password}),
        });
        const json = await response.json();
        console.log(json)
        if(json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authToken)
            navigate("/");
        }else{
            alert("Invalid Credentials")
        }
    }
    
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='card my-4 mx-auto col-md-5'>
            <div className='card-body'>
                <h3 className='card-title'>Login</h3>
                <form onSubmit={handleSubmit} method='POST'>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" onChange={onChange} value={credentials.email}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" onChange={onChange} value={credentials.password}/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="show-pass" name="show-pass" />
                        <label className="form-check-label" htmlFor="show-pass">Show Password</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Login &rarr;</button>
                </form>
            </div>
        </div>
    )
}

export default Login
