import { api } from "@/services/baseQuery/baseQuery";
import { MovieDetailsSpace } from "@/types";

const movieDetailsApi = api.injectEndpoints({
    endpoints: (build) => ({
        fetchMovieDetails: build.query<MovieDetailsSpace.MovieDetails, { id: number }>({
            query: ({ id }) => ({
                url: `/3/movie/${id}`,
                method: "GET",
                params: {
                    api_key: import.meta.env.VITE_MOVIE_DB_API_KEY,
                    language: "en-US",
                },
            }),
            transformResponse: (response: MovieDetailsSpace.MovieDetails) => {
                return response;
            },
        }),
    }),
    overrideExisting: false,
});

export const { useFetchMovieDetailsQuery } = movieDetailsApi;
