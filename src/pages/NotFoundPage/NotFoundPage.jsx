import React from 'react';
import { Link } from 'react-router';


const NotFoundPage = () => {
          return (
                    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
  <div className="text-center space-y-4 bg-white p-10 rounded-2xl shadow-lg max-w-md w-full">
    
    <h1 className="text-4xl font-bold text-purple-600">404</h1>

    <h2 className="text-2xl font-semibold text-gray-800">
      Page Not Found
    </h2>

    <p className="text-gray-500">
      The page you are looking for doesn’t exist or has been moved.
    </p>

    <Link to="/">
      <button className="mt-4 px-6 py-2 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition duration-200 shadow-md ">
        Go Back Home
      </button>
    </Link>

  </div>
</div>
          );
};

export default NotFoundPage;