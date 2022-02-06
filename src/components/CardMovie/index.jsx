import {Card, TitleMovie, DateMovie} from './styles';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/esm/locale';

export function CardMovie(props) {
    return (
        <Card>
            <img src={`https://image.tmdb.org/t/p/original/${props.imagePath}`} alt={props.title} />
            <TitleMovie>{props.title}</TitleMovie>
            <DateMovie>
            {
              format(
                  new Date(props.dateRelease),
                  "dd MMM yyyy",
                  {locale: ptBR}
              )
            }
            </DateMovie>
        </Card>
    )
}