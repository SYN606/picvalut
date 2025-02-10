import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background text-text">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-xl mb-6">Oops! Page not found.</p>
                <Link
                    to="/"
                    className="px-6 py-3 text-lg font-medium text-primary bg-secondary rounded-lg hover:bg-accent transition duration-300"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
