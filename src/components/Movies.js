import { useState } from 'react';
import { getMovies } from '../movieService';
import Movie from './Movie'


const Movies = () => {

    const [movies, setMovies] = useState([]);

    const handleClick = async() => {
        const data = await getMovies();
        setMovies(data)
    }
    
    return (
        <>
        <div>
            <button type="button" onClick={handleClick}>Get Movies</button>
            <ul>
            {movies?.length > 0 && movies.map((movie) => <Movie key={movie._id} title={movie.title} actor={movie.actor} />)}
            </ul> 
        </div>
        </>
    )
};
//<li key={movie._id}>{movie.title}</li>
export default Movies;
