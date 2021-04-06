import { useState } from 'react';
import getMovies from '../movieService';


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
            {movies?.length > 0 ? <p>{JSON.stringify(movies)}</p> : null} 
        </div>
        </>
    )
};

export default Movies;
