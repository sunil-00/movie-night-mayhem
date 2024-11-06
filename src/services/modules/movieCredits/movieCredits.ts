import { api } from "@/services/baseQuery/baseQuery";
import { MovieCreditsSpace } from "@/types";

const movieCreditsApi = api.injectEndpoints({
    endpoints: (build) => ({
        fetchMovieCredits: build.query<MovieCreditsSpace.MovieCreditsResponse, { id: number }>({
            query: ({ id }) => ({
                url: `/3/movie/${id}/credits`,
                method: "GET",
                params: {
                    api_key: import.meta.env.VITE_MOVIE_DB_API_KEY,
                    language: "en-US",
                },
            }),
            transformResponse: (response: MovieCreditsSpace.MovieCreditsResponse) => response,
        }),
    }),
    overrideExisting: false,
});

export const { useFetchMovieCreditsQuery } = movieCreditsApi;
export default movieCreditsApi;
