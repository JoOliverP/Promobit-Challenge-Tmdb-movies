import { Container,Content,TextDetail } from "./styles";
import imgCapa from '../../assets/capafilm.svg';
import imgAval from '../../assets/avaliacao.svg';
export function MovieDetails() {
    return (
        <Container>
            <Content>
            <img src={imgCapa} alt="capa do filme" />

            <TextDetail>
                <h1>Deadpool (2016)</h1>
                <p>16 anos * 11/02/2016 (BR) * Ação, Aventura, Comédia, Ficção científica * 1h 47m</p>
                {/* <img src={imgAval} alt="avaliacao usuarios" /> */}
                <p>Avaliação dos usuários</p>
                

                <h1>Sinopse</h1>
                <p>Baseado no anti-herói não convencional da Marvel Comics, Deadpool conta a história da origem do ex-agente das Forças Especiais que se tornou o mercenário Wade Wilson. Depois de ser submetido a um desonesto experimento que o deixa com poderes de cura acelerada, Wade adota o alter ego de Deadpool. Armado com suas novas habilidades e um senso de humor negro e distorcido, Deadpool persegue o homem que quase destruiu sua vida.</p>
            </TextDetail>    
            </Content>
        </Container>
    )
}