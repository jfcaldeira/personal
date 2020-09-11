import React from 'react';
import Movie from './Movie';
import '../assets/sass/movies.scss';

export default function Movies({ movies }) {
    return (
        <div className="movies-grid">
            {movies.map((movie) => (
                <Movie key={movie.imdbID} movie={movie} />
            ))}
        </div>
    );
}
