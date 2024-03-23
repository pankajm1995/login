import React, {useState} from 'react'
import './Login.css'
function LoginSignup() {

    const [action,setAction]=useState("Login")
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === "Login" ? <div></div> : <div className='input'><input type='text' placeholder="User Nmae" />
                </div>}
          
                <div className='input'>

                    <input type='email' placeholder="Email Id" />
                </div>
                <div className='input'>
                    <input type='password' placeholder="Enter Password" />
                </div>
            </div>
            <div className="forgot-password">Forgot Password? <span>Click Here</span></div>
            <div className="Submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign up")}>Sign Up</div>
                <div className={action === "Sign up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
            </div>                                  
        </div>

    )
}
export default LoginSignup;