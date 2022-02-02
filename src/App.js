import { Header } from "./pages/Header";
import { GenresFilter } from "./pages/GenresFilter";
import { GlobalStyle } from "./styles/global";
import { MovieList } from "./pages/MovieList";
import { MovieDetails } from "./pages/MovieDetails";

export function App() {
  return (
    <>
      <Header />
      <MovieDetails />
      {/* <GenresFilter />
      <MovieList /> */}
      <GlobalStyle />
    </>
  );
}
