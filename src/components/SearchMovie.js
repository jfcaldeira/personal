import React, { useState, useRef } from 'react';
import '../assets/sass/search.scss';
import axios from 'axios';
import Movies from '../components/Movies';

const LOCAL_STORAGE_KEY = 'movieReviews.movies';

export default function SearchMovie() {
    var keyUpTimer = useRef(null);
    const keyUpTimerDelay = 2000;
    const [input, setInput] = useState('');
    const [movies, setMovies] = useState(
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
    );

    React.useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(movies));
    }, [movies]);

    const handleOnChange = (event) => {
        clearTimeout(keyUpTimer.current);
        keyUpTimer.current = setTimeout(() => {
            fetchData();
        }, keyUpTimerDelay);
    };

    async function fetchData() {
        const response = await axios(
            'http://www.omdbapi.com/?apikey=c1bc9d94',
            {
                params: {
                    s: input,
                },
            }
        );

        console.log(response.data.Search);
        setMovies(response.data.Search);
    }

    return (
        <div className="search-container">
            <input
                type="text"
                className="input-text"
                onInput={(e) => setInput(e.target.value)}
                onKeyUp={handleOnChange}
                placeholder="Type a movie to search..."
            />
            <Movies movies={movies} />
        </div>
    );
}
