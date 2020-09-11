import React from 'react';
import SearchMovie from './components/SearchMovie';
import './assets/sass/app.scss';

function App() {
    return (
        <div className="app">
            <h1>Movie Reviews</h1>
            <SearchMovie />
        </div>
    );
}

export default App;
