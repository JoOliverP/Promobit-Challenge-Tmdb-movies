import { Container } from './styles';
import { CardMovie } from '../../components/CardMovie';
import { useContext } from 'react';
import { MoviesContext } from '../../hooks/MoviesContext';

export function MovieList() {
    const { movies } = useContext(MoviesContext);

    return (    
        <Container>
        { movies.map(movie => (
            <CardMovie 
                key={movie.id}
                title={movie.title} 
                imagePath={movie.poster_path} 
                dateRelease={movie.release_date} 
            />
            ))
            
        }
           
        </Container>
    )
}