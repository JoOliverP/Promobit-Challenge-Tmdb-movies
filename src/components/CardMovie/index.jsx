import {Card, TitleMovie, DateMovie} from './styles';

export function CardMovie(props) {
    return (
        <Card>
            <img src={`https://image.tmdb.org/t/p/original/${props.imagePath}`} alt={props.title} />
            <TitleMovie>{props.title}</TitleMovie>
            <DateMovie>
            {
                new Date(props.dateRelease).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                })    
            }
            </DateMovie>
        </Card>
    )
}