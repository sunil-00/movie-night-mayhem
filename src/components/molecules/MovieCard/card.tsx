import React from 'react';
import { Movie } from '@/types';

/**
 * @function MovieCard
 * @param {MovieSpace.Movie} movie
 * @param {() => void} onClick
 * @returns React.JSX.Element
 * @author Sunil Dhakal
 */

interface MovieCardProps {
    movie: Movie;
    onClick: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }): React.JSX.Element => {
    return (
        <div
            className="w-full m-2 p-2 bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200 flex flex-row"
            onClick={onClick}
        >
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-20 h-20 object-cover rounded-md"
            />
            <div className='flex flex-col ml-2'>
                <p className="mt-2 font-bold font-poppins text-gray-800 ">{movie.title}</p>
                <p className="text-gray-600">{movie.release_date}</p>
                <p className="text-gray-500 text-sm">{movie.overview.slice(0, 60)}...</p>
            </div>
        </div>
    );
};

export default MovieCard;
