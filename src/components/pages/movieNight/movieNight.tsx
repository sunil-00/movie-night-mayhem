import { MainLayout } from '@/layouts';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Movie } from '@/types';
import { Card } from '@/components';

/**
 * @function MovieNight
 * @returns React.JSX.Element
 * @author Sunil Dhakal
 */

const MovieNight = (): React.JSX.Element => {
    const movies = useSelector((state: RootState) => state.movieNight.movies);

    return (
        <MainLayout>
            <div className='m-2'>
                <h2 className="text-2xl font-bold font-poppins mx-2">Movie Night</h2>
            </div>
            <div className="flex flex-wrap justify-center">
                {movies.length > 0 ? (
                    movies.map((movie: Movie) => (
                        <Card key={movie.id} movie={movie} />
                    ))
                ) : (
                    <p>No movies added to your Movie Night yet.</p>
                )}
            </div>
        </MainLayout>
    );
};

export default React.memo(MovieNight);
