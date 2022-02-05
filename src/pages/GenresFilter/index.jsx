import { Container, Content, GenreButton, FilterContainer } from './styles';
import { IoCloseCircleSharp } from 'react-icons/io5'
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function GenresFilter(){
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        api.get('genre/movie/list?api_key=146396b763924a689540bfc1189f3c63&language=pt-BR')
            .then(response => setGenres(response.data.genres));
    },[])

    return (
        <Container>
            <Content>
                <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>

                <p>FILTRE POR:</p>
                {genres.map(genre => (
                    <GenreButton key={genre.id} type="button" marked={false}>
                        {genre.name}
                    {/* <IoCloseCircleSharp color="#FFF" /> */}
                    </GenreButton>
                ))
                }
           
            </Content>
        </Container>
    )
}