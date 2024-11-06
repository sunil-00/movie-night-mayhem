# Movie Night Mayhem

## Overview

**Movie Night Mayhem** is a movie browsing application where users can explore popular movies, search for specific films, view detailed information, and create custom "Movie Nights" (collections of movies). The application interacts with The Movie Database (TMDB) API to fetch movie data and display it to users.

This project is developed using React and integrates with the TMDB API to provide users with an interactive and dynamic movie browsing experience. It also includes a "Movie Night" feature, allowing users to create personalized collections of movies.

## Features

### 1. **Movie Browsing**
- Display a list of popular movies fetched from the TMDB "popular" endpoint.
- Allow users to search for movies by title or keyword.

### 2. **Movie Details**
- When a user clicks on a movie, detailed information about the movie is displayed.
- Show a list of similar movies fetched from the TMDB "similar" endpoint.

### 3. **"Movie Night" Feature**
- Users can create "Movie Nights," which are custom collections of movies.
- Movies can be added to a Movie Night from any movie view in the application.
  
## API Integration

The application uses The Movie Database (TMDB) API to fetch movie data, including:
- Popular movies
- Search results
- Movie details
- Similar movies

You can explore the TMDB API documentation [here](https://www.themoviedb.org/).


## Setup Instructions

To get the project up and running locally, follow these steps:

### Prerequisites

- Node.js
- npm

### Installation Steps

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/sunil-00/movie-night-mayhem.git
    ```

2. Navigate to the project directory:
    ```bash
    cd movie-night-mayhem
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory of the project and add your TMDB API key:
    ```bash
    VITE_MOVIE_DB_API_KEY=your_tmdb_api_key_here
    VITE_API_BASE_URL=https://api.themoviedb.org/
    ```

5. Start the development server:
    ```bash
    npm run dev
    ```

The app should now be running on http://localhost:5173.
