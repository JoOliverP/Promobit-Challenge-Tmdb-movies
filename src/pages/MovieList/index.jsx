import { useContext } from 'react';
import { MoviesContext } from '../../hooks/MoviesContext';
import { CardMovie } from '../../components/CardMovie';
import { Container,Content,StyledPaginateContainer } from './styles';
import { GenresFilter } from '../GenresFilter/index';
import ReactPaginate from 'react-paginate';
import { Link, useParams } from 'react-router-dom';

export function MovieList() {
    const { movies,filteredMovies, setPage } = useContext(MoviesContext);
    return (
        <>
        <GenresFilter />    
        <Container>
            <Content>
            { 
                filteredMovies.length > 0 ? (
                    filteredMovies.map(movie => (
                    <Link style={{textDecoration:'none'}} key={movie.id} to={`/moviedetails/${movie.id}`}>
                        <CardMovie 
                            title={movie.title} 
                            imagePath={movie.poster_path} 
                            dateRelease={movie.release_date} 
                        />
                    </Link>
                    ))
                ) : (
                    movies.map(movie => (
                    <Link style={{textDecoration:'none'}} key={movie.id} to={`/moviedetails/${movie.id}`}>
                        <CardMovie 
                           
                            title={movie.title} 
                            imagePath={movie.poster_path} 
                            dateRelease={movie.release_date} 
                        >
                        </CardMovie>
                    </Link>
                    ))
                )    
            }
            </Content>

                <StyledPaginateContainer>
                <ReactPaginate
                    previousLabel="<"
                    nextLabel=">"
                    breakLabel="..."
                    breakClassName="break-me"
                    pageCount={18}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={pagination => {
                        // console.log(pagination)
                        setPage(pagination.selected + 1)
                    }}
                    containerClassName="pagination"
                    activeClassName="active"
                />
                </StyledPaginateContainer>
            
        </Container>
        </>
    )
}