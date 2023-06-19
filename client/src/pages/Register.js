import React, {useState, useRef} from "react";
import RegisterInput from "../components/RegisterInput";

const Register = () => {
  const[action, setAction] = useState('');

  const[email, setEmail] = useState('');
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');

  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleEmail = () => {
    setEmail(emailRef.current.value);
    setAction('username');
  }

  const handleUsername = () => {
    setUsername(usernameRef.current.value);
    setAction('password');
  }
  
  
  const handleRegister = (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
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
          <div className="py-16 self-center mt-16 lg:w-4/5 rounded-md w-full">
            <h2 className="text-white text-center text-5xl mb-6 font-bold">
              Unlimited movies, TV shows and more
            </h2>
            <h3 className="text-white text-center text-2xl mb-6">
              Watch anywhere. Cancel at any time.
            </h3>
            <h3 className="text-white text-center text-2xl mb-6">
              Ready to watch Netflix? Enter your email to create your membership.
            </h3>
            {!action ? (
              <RegisterInput 
                id='email'
                value={email}
                label='Email address'
                type='email'
                ref={emailRef}
                onChange={e => setEmail(e.target.value)}
                buttonPrompt='Get Started'
                onClick={handleEmail}
              />
            ) : (action === 'username') ? (
              <RegisterInput 
                id='username'
                value={username}
                label='Username'
                type='text'
                ref={usernameRef}
                onChange={e => setUsername(e.target.value)}
                buttonPrompt='Next'
                onClick={handleUsername}
              />
            ) : (
              <RegisterInput 
                id='password'
                value={password}
                label='Password'
                type='password'
                ref={passwordRef}
                onChange={e => setPassword(e.target.value)}
                buttonPrompt='Register'
                onClick={handleRegister}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;