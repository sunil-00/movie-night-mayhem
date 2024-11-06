import { api } from "@/services/baseQuery/baseQuery";
import { MovieSpace } from "@/types";

const searchMoviesApi = api.injectEndpoints({
    endpoints: (build) => ({
        fetchMovies: build.query<MovieSpace.PopularMoviesResponse, { query: string }>({
            query: ({ query }) => ({
                url: `/3/search/movie`,
                method: "GET",
                params: {
                    api_key: import.meta.env.VITE_MOVIE_DB_API_KEY,
                    language: "en-US",
                    include_adult: true,
                    query: query,
                    page: 1,
                },
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useFetchMoviesQuery } = searchMoviesApi;
