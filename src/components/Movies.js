import React, {useState} from 'react';

const Movies = () => {

    function handleChange() {
        console.log('test')
    }

    const [state, setState] = useState(0);

    //midlertidig button funskjon
    
    return (
        <div>
            <button onClick={() => setState(state + 1)}>Click</button>
            <p>Du har klikket {state} ganger.</p> 
        </div>
    )
}

export default Movies;
