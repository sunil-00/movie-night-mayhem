import React, { useState, useEffect } from 'react';
import { Input, Modal, MovieCard } from '@/components';
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { useFetchMoviesQuery } from '@/services/modules';

/**
 * @function Search
 * @returns React.JSX.Element
 * @author Sunil Dhakal
 */

const Search: React.FC = (): React.JSX.Element => {
    const [query, setQuery] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const navigate = useNavigate();

    const debounceSearch = debounce((query) => {
        setDebouncedQuery(query);
    }, 500);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        debounceSearch(newQuery);
    };

    const { data: movies, isFetching } = useFetchMoviesQuery({ query: debouncedQuery }, { skip: !debouncedQuery }); // Skip if there's no query

    useEffect(() => {
        if (movies && movies.results.length > 0) {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }, [movies]);

    const handleMovieClick = (movieId: number) => {
        navigate(`/movies/${movieId}`);
    };

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
                <Input
                    type="text"
                    value={query}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                    className="mr-2"
                />
            </form>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h2>Search Results</h2>
                    <div className="movie-list">
                        {isFetching ? (
                            <p>Loading...</p>
                        ) : (
                            movies?.results.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} onClick={() => handleMovieClick(movie.id)} />
                            ))
                        )}
                    </div>
                </Modal>
            )}
        </>
    );
};

export default React.memo(Search);
