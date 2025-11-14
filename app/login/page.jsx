"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../components/AuthProvider';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login({ email, password });
      router.push('/profile');
    } catch (err) {
      setError(err.message);
    } finally { setLoading(false); }
  };

  const handleGoogle = async () => {
    setError(null);
    setLoading(true);
    try {
      // simulate google email prompt
      const googleEmail = prompt('Enter your Google email for demo');
      if (!googleEmail) throw new Error('Google sign-in cancelled');
      await login({ email: googleEmail, google: true });
      router.push('/profile');
    } catch (err) {
      setError(err.message);
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/images/login-bg.jpg')] bg-cover bg-center">
      <div className="backdrop-blur-sm bg-zinc-900/60 rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="hidden md:flex flex-col justify-center px-6">
            <h2 className="text-3xl font-extrabold text-white">Welcome back</h2>
            <p className="text-gray-400 mt-4">Log in to access your courses, progress and personalized dashboard.</p>
            <div className="mt-6">
              <button onClick={handleGoogle} className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg">
                <img src="/images/google-icon.png" alt="google" className="w-5 h-5" />
                Continue with Google
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 bg-zinc-800/60 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Log in to Codera</h3>
            {error && <p className="text-sm text-red-400 mb-3">{error}</p>}
            <label className="block text-sm text-gray-300 mb-2">Email</label>
            <input value={email} onChange={e=>setEmail(e.target.value)} required className="w-full mb-4 p-3 rounded-md bg-zinc-900 border border-zinc-700 text-white" />

            <label className="block text-sm text-gray-300 mb-2">Password</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required className="w-full mb-4 p-3 rounded-md bg-zinc-900 border border-zinc-700 text-white" />

            <button disabled={loading} type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold">{loading ? 'Signing in...' : 'Sign in'}</button>

            <div className="mt-4 text-center">
              <a href="/signup" className="text-sm text-gray-400 hover:text-white">Don’t have an account? Sign up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
