import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import logo from '../assets/logo.png';

export default function Login(){ 
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

   return(
    <div className="card w-96 bg-base-10 shadow-xl mx-auto mt-5 bg-white">
      <div className="card-body mx-auto">
        <img className="mx-auto w-24 h-24" src={logo} alt="Logo" />
        <h1 className="card-title mx-auto">مرحبا بكم</h1>

        
        <label className="font-montserrat">
          Nom /اسم المستخدم
          <input type="text" className="input input-bordered w-full max-w-xs"   />
        </label>

        <p className="font-montserrat ">  Mot de passe /  كلمة السر</p>
        
        <div className="relative">
              <input type={showPassword ? "text" : "password"} className="input input-bordered pl-10 w-full max-w-xs" />

              {showPassword ? (
                <EyeOffIcon
                  className="absolute left-2 top-2/4 transform -translate-y-2/4 h-6 w-6 text-gray-500 cursor-pointer"
                  onClick={toggleShowPassword}
                />
              ) : (
                <EyeIcon
                  className="absolute left-2 top-2/4 transform -translate-y-2/4 h-6 w-6 text-gray-500 cursor-pointer"
                  onClick={toggleShowPassword}
                />
              )}
          </div>
        

        <p className="font-montserrat font-normal font-extrabold leading-17 text-orange-500 text-xs">هل نسيت كلمة السر؟</p>


    
        <div className="card-actions justify-end w-full max-w-xs mt-5">
          <button className="btn w-full max-w-xs mx-auto bg-green-500 border-green-500 text-white font-montserrat ">تسجيل الدخول</button>
        </div>
      </div>
    </div>

  
        
  
);
}