import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieSpace } from '@/types';

interface MoviesState {
    popularMovies: MovieSpace.PopularMoviesResponse | null;
}

const initialState: MoviesState = {
    popularMovies: null,
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setPopularMovies(state, action: PayloadAction<MovieSpace.PopularMoviesResponse>) {
            state.popularMovies = action.payload;
        },
    },
});

export const { setPopularMovies } = moviesSlice.actions;

export const selectPopularMovies = (state: { movies: MoviesState }) => state.movies.popularMovies;

export default moviesSlice.reducer;

export const PopularMoviesReducer = moviesSlice.reducer
