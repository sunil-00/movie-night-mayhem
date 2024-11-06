import React from 'react';
import { Card } from '@/components';
import { Movie } from '@/types';

/**
 * @function MoviesList
 * @param {MovieSpace.Movie[]} movieList - The movies list to display
 * @returns React.JSX.Element
 * @author Sunil Dhakal
 */

interface MoviesListProps {
    movieList: Movie[];
}

const MoviesList: React.FC<MoviesListProps> = ({ movieList }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {movieList && movieList.length > 0 ? (
                movieList.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))
            ) : (
                <div className="text-gray-500">No movies found.</div>
            )}
        </div>
    );
};

export default React.memo(MoviesList);
