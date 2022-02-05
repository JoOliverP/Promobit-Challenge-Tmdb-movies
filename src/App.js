import { MoviesProvider } from "./hooks/MoviesContext";
import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import { GenresFilter } from "./pages/GenresFilter";
import { MovieList } from "./pages/MovieList";
import { MovieDetails } from "./pages/MovieDetails";

export function App() {
  return (
    <MoviesProvider>
      <Header />
      {/* <MovieDetails /> */}
      <GenresFilter />
      <MovieList />
      <GlobalStyle />
    </MoviesProvider>
  );
}
