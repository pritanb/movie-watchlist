import React, {useState} from "react";
import Input from "../components/Input";

const Login = () => {
  const[username, setUsername] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
  }

  return (
    /*
      need the absolute path to the image if we use inline css
      when using webpack config from img tag, automatically binds to public folder
    */
    <div className="relative min-h-screen w-full bg-[url('/public/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black min-h-screen w-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src='/images/logo.png' alt='logo' className="h-12"/>
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              Sign in
            </h2>
            <div className="flex flex-col gap-4">
              <Input 
                id='username'
                value={username}
                label='Username'
                type='text'
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <Input 
                id='email'
                value={email}
                label='Email'
                type='email'
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Input 
                id='password'
                value={password}
                label='Password'
                type='password'
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button 
              className='
              bg-red-600 
              py-3 
              text-white 
              rounded-md 
              w-full 
              mt-10 
              hover:bg-red-700 
              transition'
              onClick={handleLogin}
            >
              Sign in
            </button>
            <p className="text-neutral-500 mt-10">
              New to Netfilx?
              <span className="text-white ml-1 hover:underline cursor-pointer">
                Sign up now.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
