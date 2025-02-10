import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <section className="bg-background dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg bg-background dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary dark:text-white">Create an Account</h1>
          <p className="mt-2 text-accent dark:text-gray-400">Join the PicVault community and showcase your mobile photography skills.</p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary dark:text-white mb-2">Your email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full bg-background border border-accent text-primary rounded-lg p-3 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
              placeholder="name@company.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-primary dark:text-white mb-2">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full bg-background border border-accent text-primary rounded-lg p-3 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-primary dark:text-white mb-2">Confirm password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              className="w-full bg-background border border-accent text-primary rounded-lg p-3 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 text-primary border border-accent rounded bg-background focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              required
            />
            <label htmlFor="terms" className="ml-2 text-sm font-light text-primary dark:text-gray-300">
              I accept the 
              <Link
                to="/terms_and_conditions"
                className="font-medium text-primary hover:underline dark:text-primary"
              >
                Terms and Conditions
              </ Link>
            </label>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm py-3 dark:bg-primary dark:hover:bg-secondary dark:focus:ring-primary-800"
          >
            Create an account
          </button>

          <div className="text-center">
            <p className="text-sm font-light text-primary dark:text-gray-400">
              Already have an account?
              <Link to="/login" className="font-medium text-primary hover:underline dark:text-primary">
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
