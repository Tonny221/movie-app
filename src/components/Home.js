import { useState, useEffect } from 'react';

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

import API from '../API';

import noImage from '../images/no_image.jpg';

const Home = () =>{
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    const fetchMovies = async (page, searchTerm = "") =>{
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);

            setState(prev => ({
                ...movies,
            }));
        } catch (error) {
            setError(true);
        }
    }

    useEffect(() =>{
        fetchMovies(1)
    }, []);

    return(
        <div>This is Home</div>
    );
}

export default Home;