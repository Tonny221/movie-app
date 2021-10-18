import { useState, useEffect } from 'react';

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

import { useHomeFetch } from '../hooks/useHomeFetch';

import noImage from '../images/no_image.jpg';

const Home = () =>{
    const { state, loading, error } = useHomeFetch();

    return(
        <div>This is Home</div>
    );
}

export default Home;