import { MoviesProvider } from "./hooks/MoviesContext";
import { Routes, Route,Link } from 'react-router-dom';

import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import { MovieList } from "./pages/MovieList";
import { MovieDetails } from "./pages/MovieDetails";

export function App() {
  return (
    <MoviesProvider>
      <Header />
        <Routes>
          <Route path='/' element={<MovieList />} />
          <Route path='/moviedetails/:id' element={<MovieDetails />}/>
        </Routes>
      <GlobalStyle />
    </MoviesProvider>
  );
}
