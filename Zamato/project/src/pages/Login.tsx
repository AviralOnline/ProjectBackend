//WITHOUT CSS

// import React , {useState} from 'react'


// function Login() {
//     const [username, setUsername]= useState('')
//     const [mobile , setMobile] = useState('')
//     const [password , setPassword] = useState('')

//     const loginHandeler = (e:React.FormEvent) => {
//     e.preventDefault();
// }
//   return (
//     <>
//     <div>
//         <form onSubmit={loginHandeler}>
//             <label>Enter your username</label>
//             <input type ='text' 
//             placeholder = 'Enter your name'
//             value={username}
//             onChange={(e)=>setUsername(e.target.value)} />

//             <label>Enter your Mobile number</label>
//             <input type ='number' 
//             placeholder = 'Enter your name'
//             value={mobile}
//             onChange={(e)=>setMobile(e.target.value)} />
            
//             <label>Enter your password</label>
//             <input type ='password' 
//             placeholder = 'Enter your name'
//             value={password}
//             onChange={(e)=>setPassword(e.target.value)} />
//             <button type='submit'>sign up</button>
//         </form>

        

        
//     </div>
    
//     </>
//   )
// }

// export default Login

import React, { useState } from 'react';
import { Link , useNavigate } from "react-router-dom";


function Login() {
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState<any[]>([]);
  const navigate = useNavigate();

 const loginHandeler = async (e: React.FormEvent) => {
     e.preventDefault();
     const userData={username,mobile,password};
    try {
       const response = await fetch(
         "https://projectbackend-production-84b5.up.railway.app/api/users/login",
         {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(userData),
         }
       );
 
       const result = await response.json();

      console.log(result);

       if (!response.ok) {
        alert(result.message || "Wrong details");
        return;
    }
    alert("Login successful");
    navigate("/profile");
 
    //    if(!result.ok){
    //     alert("Wrong details")
         
    //    }else{
    //     alert("User created successfully");}
    //    console.log(result);

 
       // Add new user to state
     //   setData(result.data);
     setData([...data, result]);
 
       // Optional: Clear form after successful signup
       setUsername("");
       setMobile("");
       setPassword("");
       navigate('/profile')
     } catch (error) {
       console.error("Error:", error);
     }
 
   };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-6">
          Login
        </h1>

        <form onSubmit={loginHandeler} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Mobile Number
            </label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Button */}
          <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
              Login</button>
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm mb-2">
                     Don't have an account?
                     </p>
                     <Link
                     to="/signup"
                     className="block w-full bg-green-600 text-white py-2.5 rounded-lg font-semibold hover:bg-green-700 transition duration-200">
                        Sign Up
                        </Link>
              </div>
        </form>
          

          
      </div>
    </div>
  );
}

export default Login;