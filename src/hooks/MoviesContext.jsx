import { createContext, useEffect, useState } from "react"
import { api } from '../services/api';

export const MoviesContext = createContext([]);

export function MoviesProvider(props) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        api.get('movie/popular?api_key=146396b763924a689540bfc1189f3c63&language=pt-BR&page=1')
            .then(response => setMovies(response.data.results))
    }, []);

    console.log(movies)

    return (
        <MoviesContext.Provider
            value={{
                movies
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
}