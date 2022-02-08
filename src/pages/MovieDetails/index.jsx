import { 
    Container,
    Content,
    MovieCover,
    MovieDetail,
    TitleMovie,
    InfoMovie,
    Assessment,
    ImageAssessment,
    Synopsis,
    TextSynopsis, 
    PeopleMovieContainer,
    PeopleMovieContent,
    TitlePeople,
    InfoPeople,
    ContentMidia,
    CastTitle,
    CastContainer,
    CastCard,
    NameCast,
    NameCharacter,
    TrailerTitle,
    MovieTrailer,
    RecommendationsTitle,
    MovieRecommendationsContainer,
} from "./styles";

import imgAval from '../../assets/avaliacao.svg';

import { CardMovie } from "../../components/CardMovie";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { getYear,format } from "date-fns";
import { ptBR } from 'date-fns/esm/locale';
import ReactPlayer from 'react-player/youtube';

export function MovieDetails(props) {
    const { id }  = useParams();    
    const [movieDetails, setMovieDetails] = useState([]);
    const [movieRecommendations, setMovieRecommendations] = useState([]);
    const [realeseDate,setRealeaseDate] = useState([]);
    const [castInfo, setCastInfo] = useState([]);
    
    useEffect(() => {
        try {
            api.get(`movie/${id}?api_key=146396b763924a689540bfc1189f3c63&append_to_response=videos&language=pt-BR`)
            .then(response => setMovieDetails((response.data)))
            
            api.get(`movie/${id}/release_dates?api_key=146396b763924a689540bfc1189f3c63`)
            .then(response => setRealeaseDate((response.data.results)))
            
            api.get(`movie/${id}/credits?api_key=146396b763924a689540bfc1189f3c63&language=pt-BR`)
            .then(response => setCastInfo(response.data.cast))

            api.get(`movie/${id}/recommendations?api_key=146396b763924a689540bfc1189f3c63&language=en-US&page=1`)
            .then(response => setMovieRecommendations(response.data.results))
        } catch (error) {
            console.log(error)
        }
            
    }, []);
    
    // console.log(realeseDate[32].release_dates[0].certification);

    const {title,poster_path,release_date,runtime ,genres, videos} = movieDetails;

    const year = getYear(new Date(release_date));

    const movieHour = Math.floor(runtime/60);
    const movieMin = runtime % 60;

    // console.log(videos.results[0].key)

    // const dateFormated = format(new Date(release_date), "dd/MM/yyyy");

    // const genresName =  genres.map(genre => (<>, {genre.name}</>))

    
    // console.log(movieDetails);
    return (
        <Container>
            <Content>
            <MovieCover src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="capa do filme" />

            <MovieDetail>
                <TitleMovie>{title} ({year})</TitleMovie>
                <InfoMovie>16 anos *  (BR) * {} * {movieHour}h {movieMin}m</InfoMovie>
                <Assessment>
                    <ImageAssessment src={imgAval}  />
                    <p>Avaliação dos <br /> usuários</p>
                </Assessment>
                

                <Synopsis>Sinopse</Synopsis>
                <TextSynopsis>{movieDetails.overview}</TextSynopsis>
            
                    <PeopleMovieContainer>
                        <PeopleMovieContent>
                            <TitlePeople>Rob Liefeld</TitlePeople>
                            <InfoPeople>Characters</InfoPeople>
                        </PeopleMovieContent>

                    </PeopleMovieContainer>

            </MovieDetail> 
            </Content>
            <ContentMidia>
            <CastTitle>Elenco original</CastTitle>   
            <CastContainer>
                {
                    castInfo.map(cast => (
                        <CastCard key={cast.id}>
                        <img src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} alt="ator" />
                        <NameCast>{cast.name}</NameCast>
                        <NameCharacter>{cast.character}</NameCharacter>
                        </CastCard>
                    ))
                }
            </CastContainer>
            <TrailerTitle>
                Trailer
            </TrailerTitle>
{/* 
            <MovieTrailer>
                <ReactPlayer width='100%' height='100%' url={`https://www.youtube.com/watch?v=${videos.results[0].key}`} controls={true} />
            </MovieTrailer> */}

            <RecommendationsTitle>Recomendações</RecommendationsTitle>
            <MovieRecommendationsContainer>
               {
                   movieRecommendations.map(movie => (
                    <Link style={{textDecoration:'none'}} key={movie.id} to={`/moviedetails/${movie.id}`}>
                        <CardMovie 
                           
                            title={movie.title} 
                            imagePath={movie.poster_path} 
                            dateRelease={movie.release_date} 
                        >
                        </CardMovie>
                    </Link>
                    ))
               }
            </MovieRecommendationsContainer>
            </ContentMidia>
        </Container>
    )
}