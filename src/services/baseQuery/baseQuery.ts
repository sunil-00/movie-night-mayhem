import { URL_CONFIGURATIONS } from "../../config";
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: URL_CONFIGURATIONS.BASE_URL,
});

const baseQueryWithInterceptor: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    const { url, method = "GET" } = args as FetchArgs

    try {
        let result = await baseQuery(args, api, extraOptions);
        if (result.error && result.error.status === 401) {
            //Handle 401 errors
        }
        return result;
    } catch (error) {
        throw error;
    } finally {
        console.log(`[${method.toUpperCase()}] ${url}`)
    }

}

export const api = createApi({
    reducerPath: "api",
    refetchOnReconnect: true,
    baseQuery: baseQueryWithInterceptor,
    endpoints: () => ({})
})