import React, { useEffect, useState } from 'react'
import axios from "axios"
import Movies from '../movies/Movies';
import { Carousel } from 'react-responsive-carousel';
const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getAllMovies = async () => {
            try {
                const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US");
                setMovies(response.data.results)

            } catch (error) {
                console.log(error);
            }
        }

        getAllMovies()
    }, [])


    console.log(movies);
    return (
        <>
        <Carousel
    autoPlay={true}
    transitionTime={2}
    infiniteLoop={true}
    showThumbs={false}
    showStatus={false}
    style={{ height: '400px' }}
>
    {
        movies.map((movie) => (
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
        ))
    }
</Carousel>

           <Movies/>
        </>
    )
}

export default Home