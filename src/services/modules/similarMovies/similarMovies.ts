import { api } from "@/services/baseQuery/baseQuery";
import { MovieSpace } from "@/types";

const similarMoviesApi = api.injectEndpoints({
    endpoints: (build) => ({
        similarMovies: build.query<MovieSpace.PopularMoviesResponse, { id: number, page?: number }>({
            query: ({ id, page = 1 }) => ({
                url: `/3/movie/${id}/similar`,
                method: "GET",
                params: {
                    api_key: import.meta.env.VITE_MOVIE_DB_API_KEY,
                    language: "en-US",
                    page: page,
                },
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useSimilarMoviesQuery } = similarMoviesApi;
