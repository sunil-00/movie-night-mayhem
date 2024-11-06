import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '@/layouts/mainLayout';
import { useFetchMovieCreditsQuery, useFetchMovieDetailsQuery, useFetchMovieReviewsQuery } from '@/services/modules';
import Vibrant from 'node-vibrant';
import { getColorBasedOnRating } from '@/utils';
import { Alert, Button, ReviewCard, SkeletonLoader } from '@/components';
import { useDispatch, useSelector } from '@/hooks';
import { addMovie } from '@/store/slices';
import { Movie } from '@/types';
import { RootState } from '@/store';
import '@/styles/scrollBar.css'
import { useSimilarMoviesQuery } from '@/services/modules/similarMovies/similarMovies';
import { Link } from 'react-router-dom';

/**
 * @function MovieDetails
 * @returns React.JSX.Element
 * @author Sunil Dhakal
 */

const MovieDetails: React.FC = (): React.JSX.Element => {
    const { id } = useParams<{ id: string }>();
    const movieId = parseInt(id || '0');
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const movies = useSelector((state: RootState) => state.movieNight.movies);
    const { data: movieDetails, error, isLoading } = useFetchMovieDetailsQuery({ id: movieId });
    const { data: movieCredits, error: movieCreditsError, isLoading: movieCreditsLoading } = useFetchMovieCreditsQuery({ id: movieId });
    const { data: movieReviews, error: movieReviewsError, isLoading: movieReviewsLoading } = useFetchMovieReviewsQuery({ id: movieId });
    const { data: similarMovies, error: similarMoviesError, isLoading: similarMoviesLoading } = useSimilarMoviesQuery({ id: movieId });


    const [overlayColor, setOverlayColor] = useState<string>('rgba(0, 0, 0, 0.7)');

    useEffect(() => {
        if (movieDetails && movieDetails.backdrop_path) {
            const img = new Image();
            img.src = `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`;
            img.crossOrigin = 'Anonymous';

            img.onload = () => {
                Vibrant.from(img.src)
                    .getPalette()
                    .then((palette) => {
                        const vibrant = palette.Vibrant?.hex || 'rgba(0, 0, 0, 0.5)';
                        setOverlayColor(vibrant);
                    });
            };
        }
    }, [movieDetails]);

    if (isLoading || movieCreditsLoading || movieReviewsLoading || similarMoviesLoading) return <SkeletonLoader />;

    if (error || movieCreditsError || movieReviewsError || similarMoviesError) return <div>Error loading data</div>;

    if (!movieDetails) {
        return <div>No movie details available.</div>;
    }

    const handleAddToMovieNight = () => {
        const movieToAdd: Movie = {
            adult: movieDetails.adult,
            backdrop_path: movieDetails.backdrop_path,
            genre_ids: movieDetails.genres.map(genre => genre.id),
            id: movieDetails.id,
            original_language: movieDetails.original_language,
            original_title: movieDetails.original_title,
            overview: movieDetails.overview,
            popularity: movieDetails.popularity,
            poster_path: movieDetails.poster_path,
            release_date: movieDetails.release_date,
            title: movieDetails.title,
            video: movieDetails.video,
            vote_average: movieDetails.vote_average,
            vote_count: movieDetails.vote_count,
        };

        const movieExists = movies.some(movie => movie.id === movieToAdd.id);

        if (movieExists) {
            setModalMessage('Movie already exists in your Movie Night list.');
            setIsModalOpen(true);
        } else {
            dispatch(addMovie(movieToAdd));
            setModalMessage("Movie added to Movie Night list!");
            setIsModalOpen(true);
        }
    };

    const newRadius = 25;
    const strokeWidth = 4;

    const normalizedRadius = newRadius - strokeWidth / 2;
    const circumference = 2 * Math.PI * normalizedRadius;
    const offset = circumference - (movieDetails.vote_average / 10) * circumference;
    const votePercentage = Math.round(movieDetails.vote_average * 10);

    const director = movieCredits?.crew.find((crewMember) => crewMember.job === "Director");
    const castMembers = movieCredits?.cast || [];

    console.log("movie details :", movieDetails)

    return (
        <MainLayout>
            <div
                className="relative w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path})` }}
            >
                <div className="absolute inset-0" style={{ backgroundColor: overlayColor }}></div>
                <div className="flex flex-col sm:flex-row  inset-0 m-4 items-center z-10">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                        alt={movieDetails.title}
                        className="w-1/2 sm:w-1/5 h-1/2 mr-12 rounded-lg shadow-lg"
                    />
                    <div className="flex flex-col justify-center w-full sm:w-2/3 m-4">
                        <h2 className="font-poppins text-4xl font-semibold text-white">
                            {movieDetails.title}{`${movieDetails.release_date && ` (${movieDetails.release_date.slice(0, 4)})`}`}
                        </h2>
                        <p className="font-poppins font-regular text-white">{movieDetails.genres.map((genre) => genre.name).join(', ')}</p>
                        <div className="flex items-center my-2 flex-row">
                            <div style={{ backgroundColor: 'black', borderRadius: '50%', padding: '1px' }}>
                                <svg height={newRadius * 2} width={newRadius * 2}>
                                    <circle
                                        stroke="lightgray"
                                        fill="transparent"
                                        r={normalizedRadius}
                                        cx={newRadius}
                                        cy={newRadius}
                                        strokeWidth={strokeWidth}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                                    />
                                    <circle
                                        stroke={getColorBasedOnRating(movieDetails.vote_average)}
                                        fill="transparent"
                                        r={normalizedRadius}
                                        cx={newRadius}
                                        cy={newRadius}
                                        strokeWidth={strokeWidth}
                                        strokeDasharray={circumference}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeDashoffset={offset}
                                        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                                    />
                                    <text
                                        x={newRadius}
                                        y={newRadius}
                                        fill="white"
                                        fontSize="12"
                                        fontWeight="normal"
                                        fontFamily="Poppins"
                                        textAnchor="middle"
                                        alignmentBaseline="middle"
                                    >
                                        {votePercentage}%
                                    </text>
                                </svg>
                            </div>
                            <div className='flex flex-col ml-4'>
                                <h2 className='text-white font-semibold font-poppins'>User</h2>
                                <h2 className='text-white font-semibold font-poppins'>Score</h2>
                            </div>

                            <div className="bg-[rgb(3,37,65)] bg-opacity-100 rounded-full p-3 ml-4 text-white">
                                <p className="font-semibold font-poppins text-sm">
                                    What's your <button className="underline">Vibe?</button>
                                </p>
                            </div>
                        </div>
                        <div className='my-4'>
                        <Button label='Add to Movie Night' onClick={handleAddToMovieNight} className='bg-blue-600 text-white rounded p-2' />
                        </div>
                        <p className='text-white text-xl font-semibold font-poppins'>Overview</p>
                        <p className='text-white'>{movieDetails.overview}</p>
                        <div className='mt-8'>
                            {director ? (
                                <div className='flex flex-col'>
                                    <h2 className='text-white font-semibold'>Director:</h2>
                                    <p className='text-white font-poppins'>{director.name}</p>
                                </div>
                            ) : (
                                <p className='text-white'>Director not available</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-8 mx-4'>
                <p className='text-black text-xl font-semibold font-poppins'>Cast:</p>
                <div className='flex overflow-x-auto space-x-4 mt-2 scrollbar-thin'>
                    {castMembers.map((cast) => (
                        <div key={cast.id} className='flex flex-col items-center mb-4'>
                            <div className='w-28 h-36 overflow-hidden rounded-lg shadow-md'>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                                    alt={cast.name}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <p className='text-black font-poppins font-semibold text-center mt-4 text-sm'>{cast.name}</p>
                            <p className='text-black font-poppins font-light text-center text-xs'>{cast.character}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-8 mx-4'>
                <p className='text-black text-xl font-semibold font-poppins'>Similar Movies:</p>
                <div className='flex overflow-x-auto space-x-4 mt-2 scrollbar-thin'>
                    {similarMovies?.results.map((movie) => (
                        <Link to={`/movies/${movie.id}`}>
                            <div key={movie.id} className='flex flex-col items-center mb-4'>
                                <div className='w-28 h-36 overflow-hidden rounded-lg shadow-md'>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <p className='text-black font-poppins font-semibold text-center mt-4 text-sm'>{movie.title}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <p className='text-black text-xl font-semibold font-poppins mt-8 mx-4'>Reviews:</p>
            {movieReviews?.results.map((review) => (
                <ReviewCard review={review} key={review.id} />
            ))}
            <Alert isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Notification">
                <p>{modalMessage}</p>
            </Alert>
        </MainLayout>
    );
};

export default React.memo(MovieDetails);
