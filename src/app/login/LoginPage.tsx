import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from 'next/link';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
      <Link href="/" className="text-2xl font-bold mb-6">Incentify</Link>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Log in to your account</h1>
        <p className="text-center mb-4">Welcome back! Please enter your details.</p>
        <div className="flex flex-col space-y-4">
          <button className="bg-gray-700 p-2 rounded-lg flex items-center justify-center">
            <FaGithub className="mr-2" /> Sign in with GitHub
          </button>
          <button className="bg-gray-700 p-2 rounded-lg flex items-center justify-center">
            <FaGoogle className="mr-2" /> Sign in with Google
          </button>
          <div className="bg-green-500 p-2 rounded-lg flex items-center justify-center">
            <ConnectButton />
          </div>
        </div>
        <p className="text-center mt-4">
          Don't have an account? <a href="#" className="text-blue-500">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
