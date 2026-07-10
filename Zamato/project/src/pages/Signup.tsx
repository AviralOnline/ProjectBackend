import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type SignupProps = {
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  setIsloggedIn: any
};

function Signup({ setData , setIsloggedIn }: SignupProps) {
  const [username, setUsername] = useState('');
  const [userData1 , setUserData1] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState<any[]>([]);
  const navigate = useNavigate();
  const [image , setImage] = useState<File | null>(null);

  const loginHandeler = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData={username,mobile,password};
   try {
      const response = await fetch(
        "http://localhost:8000/api/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const result = await response.json();
      const normalizedUser = result?.data ?? result?.user ?? result;

      alert("User created successfully");
      console.log(result);
      setIsloggedIn(true);

      setData((prevData) => [...prevData, normalizedUser]);

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
          Sign up
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
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
{/* for image only use this code and add multer in back end  */}
          <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
                setImage(e.target.files[0]);}}}/>
        </form>
      </div>
    </div>
  );
}

export default Signup;