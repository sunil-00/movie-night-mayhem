import React from 'react';

/**
 * @function SkeletonLoader
 * @returns React.JSX.Element
 * @author Sunil Dhakal
 * @description A loading skeleton that matches the dimensions of the MovieDetails layout.
 */

const SkeletonLoader: React.FC = () => {
    return (
        <div className="relative w-full bg-gray-300 animate-pulse flex items-center">

            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="flex flex-col w-full sm:flex-row inset-0 m-4 items-center">
                <div className="w-1/2 sm:w-1/5 h-1/2 bg-gray-400 rounded-lg shadow-lg mr-12"></div>

                <div className="flex flex-col justify-center w-full sm:w-2/3 space-y-4">

                    <div className="h-10 bg-gray-400 rounded w-3/4"></div>

                    <div className="h-6 bg-gray-400 rounded w-1/2"></div>

                    <div className="flex items-center mt-4 space-x-4">

                        <div className="w-12 h-12 bg-gray-400 rounded-full"></div>

                        <div className="h-6 bg-gray-400 rounded w-1/4"></div>
                    </div>

                    <div className="h-10 bg-blue-600 rounded w-1/4 mt-6"></div>

                    <div className="h-8 bg-gray-400 rounded w-1/4 mt-6"></div>

                    <div className="h-4 bg-gray-400 rounded w-full"></div>
                    <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-400 rounded w-2/3"></div>

                    <div className="h-6 bg-gray-400 rounded w-1/3 mt-8"></div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonLoader;
