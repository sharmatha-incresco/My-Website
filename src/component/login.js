import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SigninContext } from '../signin';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setrefresh, refresh, apptoken, setapptoken } = useContext(SigninContext);

  function signinval() {
    if (validateForm()) {
      axios
        .post('http://ec2-15-206-167-181.ap-south-1.compute.amazonaws.com:3000/auth/login', {
          email: email,
          password: password
        })
        .then((res) => {
          setapptoken(res.data.accessToken);
          setrefresh(res.data.refreshToken);
          localStorage.setItem('token', res.data.accessToken);
          navigate('/screen');
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    }
  }

  function validateForm() {
    const emailPattern = RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    const passwordPattern = RegExp('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$');

    if (!emailPattern.test(email)) {
      alert('Email Address is invalid');
      return false;
    }

    return true;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-slate-400 to-slate-700">
      <div className="w-[570] p-4 m-auto bg-white rounded-md shadow-md lg:max-w-xl" style={{ width: '500px' }}>
        <h1 className="text-3xl font-semibold text-center text-black-700">Job Searcher</h1>
        <br />
        <h1 className="text-2xl font-semibold text-center">Sign in</h1>
        <h6 className="font-normal text-center">Search your future here!!!</h6>
        <br />
        <form className="m-4">
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-slate-400 focus:ring-slate-600 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2 relative pb-8">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <div className="flex">
              <input
                type={showPassword ? 'text' : 'password'}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-slate-400 focus:ring-slate-600 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-700 focus:outline-none"
              >
                {showPassword ? (
                  <svg
                    viewBox="0 0 640 512"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M150.7 92.77C195 58.27 251.8 32 320 32c80.8 0 145.5 36.84 192.6 80.6 46.8 43.4 78.1 94.5 92.9 131.1 3.3 7.9 3.3 16.7 0 24.6-13.4 32.3-40.3 77.8-79.9 118.4l105.2 82.4c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196 13.29-1.236 28.37-3.065 38.81 5.112L150.7 92.77zm39.1 30.73l46 36c22.5-19.6 52-31.5 84.2-31.5 70.7 0 128 57.3 128 128 0 21.2-5.1 41.1-14.2 58.7l53.8 42.2c33.5-34.1 58.3-73.8 71-100.9-14.5-30.9-40.2-72.5-78.7-108.3-41.1-38.1-94.7-68.6-159.9-68.6-50.5 0-94.9 18.63-130.2 44.4zm205.1 160.7c3.3-8.8 5.1-18.3 5.1-29.1 0-43.3-35.8-80-80-80-.7 0-1.3.9-2.9.9 2.2 5.1 2.9 10.5 2.9 15.1 0 11.1-2.4 20.7-6.6 29.2l81.5 63.9zm9.4 130.3l41.9 33C409.9 467.1 367.8 480 320 480c-80.8 0-145.5-36.8-192.6-80.6-46.78-44.3-78.06-95.4-92.94-131.1a31.98 31.98 0 010-24.6c9.54-22.9 25.83-52.5 48.63-82.2l37.71 29.7c-18.7 23.3-31.04 46.4-39.35 63.9 13.57 30.9 40.15 73.4 78.65 109.2C201.2 402.4 254.8 432 320 432c30.7 0 58.8-6.6 84.3-17.5zM192 255.1c0-2 .1-4.8.3-7.6l56.1 44.2c10.5 21.1 30.1 36.9 53.6 41.4l56.2 45.1c-12.1 2.9-24.9 5.8-39.1 5.8-69.8 0-128-57.3-128-128.9h.9z" />
                  </svg>
                ) : (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <path d="M15 12 A3 3 0 0 1 12 15 A3 3 0 0 1 9 12 A3 3 0 0 1 15 12 z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="mt-6" onClick={(e) => {
            e.preventDefault();
            signinval();
          }}>
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-slate-500 rounded-md hover:bg-slate-400 focus:outline-none focus:bg-slate-600"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mb-8 text-xs font-light text-center text-gray-700">
          New User?{' '}
          <a href="/signup" className="font-medium text-slate-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signin;

