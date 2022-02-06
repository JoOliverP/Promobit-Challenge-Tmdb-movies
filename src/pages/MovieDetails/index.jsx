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

import imgCapa from '../../assets/capafilm.svg';
import imgAval from '../../assets/avaliacao.svg';
import imgActor from '../../assets/actor1.svg';
import imgActor2 from '../../assets/actor2.svg';
import imgTrailer from '../../assets/trailerimg.svg';
import image1 from '../../assets/image1.svg'
import { CardMovie } from "../../components/CardMovie";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { getYear,format } from "date-fns";
import { ptBR } from 'date-fns/esm/locale';

export function MovieDetails(props) {
    const { id }  = useParams();    
    const [movieDetails, setMovieDetails] = useState([]);
    
    useEffect(() => {
        try {
            api.get(`movie/${id}?api_key=146396b763924a689540bfc1189f3c63&append_to_response=videos&language=pt-BR`)
            .then(response => setMovieDetails((response.data)))
        } catch (error) {
            console.log(error)
        }
            
    }, []);

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

                        <PeopleMovieContent>
                            <TitlePeople>Rob Liefeld</TitlePeople>
                            <InfoPeople>Characters</InfoPeople>
                        </PeopleMovieContent>

                        <PeopleMovieContent>
                            <TitlePeople>Rob Liefeld</TitlePeople>
                            <InfoPeople>Characters</InfoPeople>
                        </PeopleMovieContent>

                        <PeopleMovieContent>
                            <TitlePeople>Rob Liefeld</TitlePeople>
                            <InfoPeople>Characters</InfoPeople>
                        </PeopleMovieContent>

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
                <CastCard>
                    <img src={imgActor} alt="ator" />
                    <NameCast>Ryan Reynouds</NameCast>
                    <NameCharacter>Deadpool</NameCharacter>
                </CastCard>

                <CastCard>
                    <img src={imgActor2} alt="ator" />
                    <NameCast>Ryan Reynouds</NameCast>
                    <NameCharacter>Deadpool</NameCharacter>
                </CastCard>

                <CastCard>
                    <img src={imgActor} alt="ator" />
                    <NameCast>Ryan Reynouds</NameCast>
                    <NameCharacter>Deadpool</NameCharacter>
                </CastCard>

                <CastCard>
                    <img src={imgActor2} alt="ator" />
                    <NameCast>Ryan Reynouds</NameCast>
                    <NameCharacter>Deadpool</NameCharacter>
                </CastCard>

                <CastCard>
                    <img src={imgActor} alt="ator" />
                    <NameCast>Ryan Reynouds</NameCast>
                    <NameCharacter>Deadpool</NameCharacter>
                </CastCard>

                <CastCard>
                    <img src={imgActor2} alt="ator" />
                    <NameCast>Ryan Reynouds</NameCast>
                    <NameCharacter>Deadpool/ Wade Wilson</NameCharacter>
                </CastCard>
            
            </CastContainer>
            <TrailerTitle>
                Trailer
            </TrailerTitle>
            {/* <MovieTrailer src={`https://www.youtube.com/watch?v=${videos.results[0].key}`}/> */}
            
            <RecommendationsTitle>Recomendações</RecommendationsTitle>

            {/* <MovieRecommendationsContainer>
                <CardMovie />
            </MovieRecommendationsContainer> */}
            </ContentMidia>
        </Container>
    )
}