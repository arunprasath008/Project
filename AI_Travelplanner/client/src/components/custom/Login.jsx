import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import plane from '/plane.gif';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert } from '../ui/alert';
import { signInWithPopup } from 'firebase/auth';
import { auth,provider } from '@/Googlesignin/config';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setSuccess(`Welcome, ${user.displayName}!`);
      setTimeout(() => {
        navigate('/create-trip'); 
      }, 2000);
    } catch (error) {
      setError('Google sign-in failed, please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!email || !password) {
      setError('Please fill in both email and password');
    } else {
      setError('');
      setSuccess('Login successful!');

      setTimeout(() => {
        navigate('/create-trip'); 
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-200">
      <h2 className="text-4xl text-center py-10 font-mono">Travel planner</h2>
      <div className="container mx-auto">
        <div className="flex-col md:flex-row flex w-8/12 overflow-hidden rounded-xl mx-auto shadow-lg bg-white">
          <div className="md:w-1/2 justify-center">
            <img src={plane} alt="travel" className="object-cover w-full h-full" />
          </div>
          <div className="md:w-1/2 py-16 px-12 bg-indigo-100">
            <h2 className="text-3xl mb-4 text-center">Login</h2>
            
            {error && <Alert>{error}</Alert>}
            {success && <Alert>{success}</Alert>}
            
            <div className="mt-5">
              <Input
                required
                type="email"
                placeholder="Email"
                className="border border-gray-400 py-1 px-2 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <Input
                required
                type="password"
                placeholder="Password"
                className="border border-gray-400 py-1 px-2 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <Button
                className="w-full bg-blue-950 text-white py-2 text-center"
                onClick={handleSubmit}
              >
                Login
              </Button>
            </div>
            <div className="mt-5 text-center">
              <Button
                className="w-full bg-red-500 text-white py-2 text-center"
                onClick={handleGoogleSignIn}
              >
                Login with Google
              </Button>
            </div>
            <div className="mt-5 text-center">
              <p>Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
