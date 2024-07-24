"use client"
import dynamic from 'next/dynamic';
import React from 'react';
import { useAuth } from './components/context/AuthContext';
import { useRouter } from 'next/router';

const HomePage = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  const handleButtonClick = () => {
    if (isAuthenticated) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  };

  return (
    <div>
      <h2>Welcome to the Task Management App</h2>
      <button onClick={handleButtonClick}>
        {isAuthenticated ? 'Go to Dashboard' : 'Login'}
      </button>
    </div>
  );
};

export default dynamic(() => Promise.resolve(HomePage), {
  ssr: false,
});
