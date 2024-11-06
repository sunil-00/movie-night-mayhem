import { api } from "@/services/baseQuery/baseQuery";
import { MovieReviewsSpace } from "@/types";

const movieReviewsApi = api.injectEndpoints({
    endpoints: (build) => ({
        fetchMovieReviews: build.query<MovieReviewsSpace.Response, { id: number }>({
            query: ({ id }) => ({
                url: `/3/movie/${id}/reviews`,
                method: "GET",
                params: {
                    api_key: import.meta.env.VITE_MOVIE_DB_API_KEY,
                    language: "en-US",
                    page: 1,
                },
            }),
            transformResponse: (response: MovieReviewsSpace.Response) => response,
        }),
    }),
    overrideExisting: false,
});

export const { useFetchMovieReviewsQuery } = movieReviewsApi;
export default movieReviewsApi;