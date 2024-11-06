import App from '@/App';
import { MovieDetails, MovieNight } from '@/components';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/movies/:id",
        element: <MovieDetails />
    },
    {
        path: "/movies/movie-nights",
        element: <MovieNight />
    }
])

export default router;
