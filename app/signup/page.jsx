"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../components/AuthProvider';

export default function SignupPage() {
  const { signup } = useAuth();
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await signup({ name, email, password });
      router.push('/profile');
    } catch (err) {
      setError(err.message);
    } finally { setLoading(false); }
  };

  const handleGoogle = async () => {
    setError(null);
    setLoading(true);
    try {
      const googleEmail = prompt('Enter your Google email for demo');
      if (!googleEmail) throw new Error('Google sign-up cancelled');
      await signup({ name: googleEmail.split('@')[0], email: googleEmail, google: true });
      router.push('/profile');
    } catch (err) {
      setError(err.message);
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/images/signup-bg.jpg')] bg-cover bg-center">
      <div className="backdrop-blur-sm bg-zinc-900/60 rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="hidden md:flex flex-col justify-center px-6">
            <h2 className="text-3xl font-extrabold text-white">Join Codera</h2>
            <p className="text-gray-400 mt-4">Create your account to track progress, save courses, and earn stars.</p>
            <div className="mt-6">
              <button onClick={handleGoogle} className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg">
                <img src="/images/google-icon.png" alt="google" className="w-5 h-5" />
                Continue with Google
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 bg-zinc-800/60 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Create your account</h3>
            {error && <p className="text-sm text-red-400 mb-3">{error}</p>}
            <label className="block text-sm text-gray-300 mb-2">Name</label>
            <input value={name} onChange={e=>setName(e.target.value)} required className="w-full mb-4 p-3 rounded-md bg-zinc-900 border border-zinc-700 text-white" />

            <label className="block text-sm text-gray-300 mb-2">Email</label>
            <input value={email} onChange={e=>setEmail(e.target.value)} required className="w-full mb-4 p-3 rounded-md bg-zinc-900 border border-zinc-700 text-white" />

            <label className="block text-sm text-gray-300 mb-2">Password</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required className="w-full mb-4 p-3 rounded-md bg-zinc-900 border border-zinc-700 text-white" />

            <button disabled={loading} type="submit" className="w-full py-3 bg-green-600 hover:bg-green-700 rounded-md text-white font-semibold">{loading ? 'Creating...' : 'Create account'}</button>

            <div className="mt-4 text-center">
              <a href="/login" className="text-sm text-gray-400 hover:text-white">Already have an account? Log in</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
