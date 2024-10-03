import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}:{setShowLogin:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [currState,setCurrState] = useState("Sign Up")
  return (
    <div className='login-popup absolute z-10 w-full h-full grid'>
      <form className="login-popup-container place-self-center bg-white flex flex-col gap-6 py-6 px-7 rounded-lg text-sm">
        <div className="login-popup-title flex justify-between items-center text-black">
            <h2 className='text-lg font-bold'>{currState}</h2>
            <img className="w-4 cursor-pointer" onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs flex flex-col gap-5">
            {currState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button className='p-2 rounded text-white text-base cursor-pointer'>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition flex items-start gap-2 -mt-4">
          <input className='mt-1' type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
        
      </form>
    </div>
  )
}

export default LoginPopup
