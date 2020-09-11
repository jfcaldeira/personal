import React from 'react';

export default function Movie({ movie }) {
    return (
        <div>
            <figure>
                <img
                    src={movie.Poster}
                    width="300"
                    height="475"
                    alt={movie.Title}
                />
                <figcaption className="text-center">{movie.Title}</figcaption>
            </figure>
        </div>
    );
}
