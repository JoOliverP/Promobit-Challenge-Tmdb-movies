import { Container, Content, GenreButton, FilterContainer } from './styles';
import { IoCloseCircleSharp } from 'react-icons/io5'

export function GenresFilter(){
    return (
        <Container>
            <Content>
                <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>

                <p>FILTRE POR:</p>
                    <GenreButton type="button" marked={true}>Ação
                        <IoCloseCircleSharp color="#FFF" />
                    </GenreButton>
                    <GenreButton>Aventura</GenreButton>
                    <GenreButton>Animação</GenreButton>
                    <GenreButton>Comédia</GenreButton>
                    <GenreButton>Crime</GenreButton>
                    <GenreButton>Música</GenreButton>
                    <GenreButton>Ação</GenreButton>
                    <GenreButton>Aventura</GenreButton>
                    <GenreButton>Animação</GenreButton>
                    <GenreButton>Comédia</GenreButton>
                    <GenreButton>Crime</GenreButton>
                    <GenreButton>Música</GenreButton>
                    <GenreButton>Música</GenreButton>
                    <GenreButton>Ação</GenreButton>
                    <GenreButton>Aventura</GenreButton>
                    <GenreButton>Animação</GenreButton>
                    <GenreButton>Comédia</GenreButton>
                    <GenreButton>Crime</GenreButton>
                    <GenreButton>Música</GenreButton>
            </Content>
        </Container>
    )
}