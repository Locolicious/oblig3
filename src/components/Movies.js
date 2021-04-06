import { useState } from 'react';
import getMovies from '../movieService'


const Movies = () => {

    const [data, setData] = useState([]);

    const handleClick = async() => {
        const allMovies = await getMovies();
        setData(allMovies)
    }
    
    return (
        <div>
            <button type="button" onClick={handleClick}>Get Movies</button>
            {allMovies ?. length > 0 ? <p>{JSON.stringify(allMovies)}</p> : null} 
        </div>
    )
};

export default Movies;
