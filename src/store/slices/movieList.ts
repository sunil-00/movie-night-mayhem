import { Movie, MovieSpace } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: MovieSpace.MovieNightState = {
  movies: []
};

const movieNightSlice = createSlice({
  name: 'movieNight',
  initialState,
  reducers: {
    addMovie(state, action: PayloadAction<Movie>) {
      state.movies.push(action.payload);
    },
    removeMovie(state, action: PayloadAction<number>) {
      state.movies = state.movies.filter(movie => movie.id !== action.payload);
    },
  },
});

export const { addMovie, removeMovie } = movieNightSlice.actions;
export default movieNightSlice.reducer;
export const MovieNightReducer = movieNightSlice.reducer;
