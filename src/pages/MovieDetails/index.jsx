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

import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import imgAval from '../../assets/avaliacao.svg';
import imgNotFound from '../../assets/notfound.png';
import imgVideoNotFound from '../../assets/videonotfound.png';

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
    const [movieCurrent, setMovieCurrent] = useState([]);
    const [movieRecommendations, setMovieRecommendations] = useState([]);
    const [realeseDate,setRealeaseDate] = useState([]);
    const [castInfo, setCastInfo] = useState([]);
    const [crewInfo, setCrewInfo] = useState([]);
    
    useEffect(async () => {
        try {
            await api.get(`movie/${id}?api_key=146396b763924a689540bfc1189f3c63&append_to_response=videos&language=pt-BR`)
            .then(response => setMovieDetails((response.data)))
            
            await api.get(`movie/${id}/release_dates?api_key=146396b763924a689540bfc1189f3c63`)
            .then(response => setRealeaseDate((response.data.results)))
            
            await api.get(`movie/${id}/credits?api_key=146396b763924a689540bfc1189f3c63&language=pt-BR`)
            .then(response => setCastInfo(response.data.cast))

            await api.get(`movie/${id}/credits?api_key=146396b763924a689540bfc1189f3c63&language=pt-BR`)
            .then(response => setCrewInfo(response.data.crew))

            await api.get(`movie/${id}/recommendations?api_key=146396b763924a689540bfc1189f3c63&language=en-US&page=1`)
            .then(response => setMovieRecommendations(response.data.results))
        } catch (error) {
            console.log(error)
        }
            
    }, [movieCurrent]);
    
    // console.log(realeseDate);

    const {title,poster_path,vote_average,release_date,runtime ,genres, videos} = movieDetails;

    const dateFormated = release_date ? format(new Date(release_date), "dd/MM/yyyy") : "";
    const year = release_date ? getYear(new Date(release_date)): "";
    const movieHour = runtime ? Math.floor(runtime/60) : "";
    const movieMin = runtime ? runtime % 60 : "";
    const value = 0.66;
    

    // console.log(vote_average)

    // console.log(movieDetails.overview);
    return (
        <Container>
            <Content>
            <MovieCover src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={title} />

            <MovieDetail>
                <TitleMovie>{title} ({year})</TitleMovie>
                <InfoMovie> 
                    16 anos 
                    * 
                    {dateFormated} *  (BR)  * 
                    {genres ? genres.map((genre, index) => (` ${genre.name}${index + 1 === genres.length ? " " : ", "}`)): ""}* 
                    {movieHour}h {movieMin}m
                </InfoMovie>
                <Assessment>
                    {/* <ImageAssessment src={imgAval}  /> */}
                    <div style={{ width: 65, height: 65 }}>
                        <CircularProgressbar 
                            value={value} 
                            maxValue={1} 
                            text={`${value * 100}%`} 
                            styles={buildStyles({
                                pathColor: '#FFF',
                                textColor: '#14FF00',
                                trailColor: '#14FF00',
                                backgroundColor: '#14FF00',
                            })}
                        
                        />   
                    </div>
                    <p>Avaliação dos <br /> usuários</p>
                </Assessment>
                

                <Synopsis>Sinopse</Synopsis>
                <TextSynopsis>{movieDetails ? movieDetails.overview : ""}</TextSynopsis>
            
                    {/* <PeopleMovieContainer>
                        {
                            crewInfo.filter(crewInfo => (crewInfo.job == 'Director')(
                                <PeopleMovieContent>
                                    <TitlePeople>Rob Liefeld</TitlePeople>
                                    <InfoPeople>Characters</InfoPeople>
                                </PeopleMovieContent>
                            ))
                        }

                    </PeopleMovieContainer> */}

            </MovieDetail> 
            </Content>
            <ContentMidia>
            <CastTitle>Elenco original</CastTitle>   
            <CastContainer>
                {
                    castInfo.map(cast => (
                        <CastCard key={cast.id}>
                        <img src={cast.profile_path === null ? imgNotFound : `https://image.tmdb.org/t/p/original/${cast.profile_path}`} alt={cast.name} />
                        <NameCast>{cast.name}</NameCast>
                        <NameCharacter>{cast.character}</NameCharacter>
                        </CastCard>
                    ))
                }
            </CastContainer>
            <TrailerTitle>
                Trailer
            </TrailerTitle>

            <MovieTrailer>
                {videos && videos.results.length ? (
                    <ReactPlayer width='100%' height='100%' url={`https://www.youtube.com/watch?v=${videos ? videos.results[0].key : ""}`} controls={true} />
                ) : (
                    <>
                        <img src={imgVideoNotFound} />
                    </>
                )}
            </MovieTrailer>

            <RecommendationsTitle>Recomendações</RecommendationsTitle>
            <MovieRecommendationsContainer>
               {
                    movieRecommendations.map(movie => (
                    <Link style={{textDecoration:'none'}} onClick={() => setMovieCurrent(movie.id)} key={movie.id} to={`/moviedetails/${movie.id}`}>
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