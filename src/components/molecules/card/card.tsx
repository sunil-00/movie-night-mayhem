import React from 'react';
import { CardSpace } from '@/types';
import { calculateCircularProgress, getColorBasedOnRating } from '@/utils';
import { Link } from 'react-router-dom';

/**
 * @function Card
 * @param {CardSpace.Movies} movie - The movie data to display.
 * @returns React.JSX.Element
 * @author Sunil Dhakal
 */

const Card: React.FunctionComponent<CardSpace.Movies> = ({ movie }: CardSpace.Movies): React.JSX.Element => {

    const { radius, normalizedRadius, circumference, offset } = calculateCircularProgress(movie.vote_average);
    const votePercentage = Math.round(movie.vote_average * 10);

    return (
        <Link to={`/movies/${movie.id}`}>
             <div
                className="bg-white backdrop-blur-md rounded-lg shadow-lg transition-all transform hover:shadow-2xl hover:ring-4 hover:ring-blue-400 m-2 mb-16 w-48 h-72 relative"
                style={{
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, ring 0.3s ease',
                }}
            >
            {movie.poster_path ? (
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-lg w-full h-full object-cover" 
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
                    <span className="text-gray-500">No Image Available</span>
                </div>
            )}
            <div className="p-2 mt-4">
                <h2 className="text-sm font-semibold text-gray-800 truncate font-poppins">{movie.title}</h2>
                <p className="text-xs text-gray-600 truncate font-poppins">{movie.release_date}</p>
            </div>
            <div className="absolute left-8 bottom-0" style={{ marginLeft: '-24px', marginBottom: '-24px', backgroundColor: 'black', borderRadius: '50%', padding: '1px' }}>
                <svg height={radius * 2} width={radius * 2}>
                    <circle
                        stroke="lightgray"
                        fill="transparent"
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                    />
                    <circle
                        stroke={getColorBasedOnRating(movie.vote_average)} 
                        fill="transparent"
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                        strokeWidth={2}
                        strokeDasharray={circumference}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDashoffset={offset}
                        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                    />
                    <text
                        x={radius}
                        y={radius}
                        fill="white" 
                        fontSize="9" 
                        fontWeight="normal"
                        fontFamily="Poppins" 
                        textAnchor="middle" 
                        alignmentBaseline="middle" 
                    >
                        {votePercentage}% 
                    </text>
                </svg>
            </div>
        </div>
        </Link>
    );
};

export default React.memo(Card);
