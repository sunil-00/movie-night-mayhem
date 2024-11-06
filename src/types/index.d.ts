export interface Movie {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export namespace MovieSpace {
    export interface MovieNightState {
        movies: Movie[];
    }

    export interface PopularMoviesResponse {
        page: number;
        results: Movie[];
        total_pages: number;
        total_results: number;
    }
}

export namespace NavBarItemsSpace {
    export interface NavItem {
        name: string;
        path: string;
    }
}

export namespace MovieListPageSpace {
    export interface Movies {
        movieList: Movie[];
    }
}

export namespace CardSpace {
    export interface Movies {
        movie: Movie;
    }
}

export namespace LayoutSpace {
    export interface Layout {
        children: React.ReactNode;
    }
}

export namespace MovieDetailsSpace {
    export interface MovieDetails {
        adult: boolean;
        backdrop_path: string | null;
        belongs_to_collection: {
            id: number;
            name: string;
            poster_path: string | null;
            backdrop_path: string | null;
        } | null;
        budget: number;
        genres: {
            id: number;
            name: string;
        }[];
        homepage: string | null;
        id: number;
        imdb_id: string;
        origin_country: string[];
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string | null;
        production_companies: {
            id: number;
            logo_path: string | null;
            name: string;
            origin_country: string;
        }[];
        production_countries: {
            iso_3166_1: string;
            name: string;
        }[];
        release_date: string;
        revenue: number;
        runtime: number;
        spoken_languages: {
            english_name: string;
            iso_639_1: string;
            name: string;
        }[];
        status: string;
        tagline: string | null;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
    }
}

export namespace MovieCreditsSpace {
    export interface MovieCreditsResponse {
        id: number;
        cast: CastMember[];
        crew: CrewMember[];
    }

    export interface CastMember {
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string | null;
        cast_id: number;
        character: string;
        credit_id: string;
        order: number;
    }

    export interface CrewMember {
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string | null;
        credit_id: string;
        department: string;
        job: string;
    }

}

export namespace MovieReviewsSpace {
    export interface AuthorDetails {
        name: string;
        username: string;
        avatar_path: string | null;
        rating: number;
    }

    export interface Result {
        author: string;
        author_details: AuthorDetails;
        content: string;
        created_at: string;
        id: string;
        updated_at: string;
        url: string;
    }

    export interface Response {
        id: number;
        page: number;
        results: Result[];
        total_pages: number;
        total_results: number;
    }
}
