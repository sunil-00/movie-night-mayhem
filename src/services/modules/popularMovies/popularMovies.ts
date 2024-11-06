import { api } from "@/services/baseQuery/baseQuery";
import { MovieSpace } from "@/types";

const moviesApi = api.injectEndpoints({
    endpoints: (build) => ({
        fetchPopular: build.query<MovieSpace.PopularMoviesResponse, { page?: number }>({
            query: ({ page = 1 }) => ({
                url: `/3/movie/popular`,
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

export const { useFetchPopularQuery } = moviesApi;
