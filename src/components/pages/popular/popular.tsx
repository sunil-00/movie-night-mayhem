import React, { useState } from 'react';
import { MoviesList } from '@/components';
import { useFetchPopularQuery } from '@/services/modules';
import { Movie } from '@/types';
import MainLayout from '@/layouts/mainLayout';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

/**
 * @function PopularMovies
 * @returns React.JSX.Element
 * @author Sunil Dhakal
 */

const PopularMovies = (): React.JSX.Element => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const { data: popularMovies, isLoading, isError } = useFetchPopularQuery({ page: currentPage });

    const movieList: Movie[] = popularMovies?.results || [];

    const totalPages = popularMovies?.total_pages || 1;

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    return (
        <MainLayout>
            <div className='m-2'>
                <h2 className="text-2xl font-bold font-poppins mx-2">What's Popular</h2>
            </div>
            {isLoading ? (
                <div className="text-center">Loading...</div>
            ) : isError ? (
                <div className="text-center text-red-600">Error loading popular movies. Please try again later.</div>
            ) : (
                <MoviesList movieList={movieList} />
            )}
            <div className="flex justify-center items-center my-4">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex items-center px-4 py-2 mx-2 rounded-md transition-colors duration-200 ease-in-out ${currentPage === 1 ? 'opacity-50 cursor-not-allowed bg-gray-300 text-gray-600' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                >
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    <span className="ml-1 font-poppins">Previous</span>
                </button>
                <span className="text-lg font-semibold mx-2">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`flex items-center px-4 py-2 mx-2 rounded-md transition-colors duration-200 ease-in-out ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed bg-gray-300 text-gray-600' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                >
                    <span className="mr-1 font-poppins">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </button>
            </div>
        </MainLayout>
    );
};

export default React.memo(PopularMovies);
