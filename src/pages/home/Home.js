import React, { useEffect, useState } from 'react'
import axios from "axios"
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
            <div className="container text-white">
                <h1 className="text-center mt-4 mb-4">
                    Top Movies
                </h1>


                <div className="row">
                    {
                        movies.map((movie) => (
                            <>
                                <div className="col-lg-3 col-md-3 col-sm-12">

                                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" style={{ width: "350px", height: "350px" }} />
                                    <h2>{movie.title}</h2>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home