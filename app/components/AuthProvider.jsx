"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    try {
      const raw = localStorage.getItem('codera_user');
      if (raw) setUser(JSON.parse(raw));
    } catch (e) {
      // ignore
    }
  }, []);

  const persist = (u) => {
    setUser(u);
    try { localStorage.setItem('codera_user', JSON.stringify(u)); } catch (e) {}
  };

  const signup = async ({ name, email, password, google = false }) => {
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, google })
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err?.error || 'Signup failed');
    }
    const data = await res.json();
    persist(data);
    return data;
  };

  const login = async ({ email, password, google = false }) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, google })
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err?.error || 'Login failed');
    }
    const data = await res.json();
    persist(data);
    return data;
  };

  const logout = () => {
    setUser(null);
    try { localStorage.removeItem('codera_user'); } catch (e) {}
    router.push('/');
  };

  const updateUser = (u) => persist(u);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}
