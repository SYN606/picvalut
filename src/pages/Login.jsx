import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router';
import { login_img } from '../images';


const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in with:', email, password);

        if (email === 'user@example.com' && password === 'password123') {
            alert('Login successful!');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="py-16">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div
                    className="hidden lg:block lg:w-1/2 bg-cover"
                    style={{
                        backgroundImage:
                            `url(${login_img})`,
                    }}
                ></div>
                <div className="w-full p-8 lg:w-1/2 bg-background">
                    <h2 className="text-2xl font-semibold text-center text-text">PicVault</h2>
                    <p className="text-xl text-center text-text">Welcome back!</p>
                    <Link
                        to="#"
                        className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md bg-primary hover:bg-accent transition-colors duration-200"
                    >
                        <div className="px-4 py-3">
                            <FaGoogle className="h-6 w-6" />
                        </div>
                        <h1 className="px-4 py-3 w-5/6 text-center font-bold text-text">
                            Sign in with Google
                        </h1>
                    </Link>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <p className="text-xs text-center text-text">
                            or login with email
                        </p>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="mt-4">
                            <label htmlFor="email" className="block text-sm font-bold mb-2 text-text">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoComplete="email"
                            />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="block text-sm font-bold mb-2 text-text">
                                    Password
                                </label>
                                <button
                                    type="button"
                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                    className="text-xs text-text"
                                >
                                    {passwordVisible ? 'Hide' : 'Show'} Password
                                </button>
                            </div>
                            <input
                                id="password"
                                name="password"
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type={passwordVisible ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                autoComplete="current-password"
                            />
                        </div>
                        <div className="mt-8">
                            <button
                                type="submit"
                                className="font-bold py-2 px-4 w-full rounded bg-primary hover:bg-secondary text-background transition-colors duration-200"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <Link to="#" className="text-xs text-center text-text">
                            Forgot Password?
                        </Link>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                    <div className="mt-4 text-center">
                        <Link to="/signup" className="text-xs text-center text-text">
                            Don't have an account? Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
