import { Header } from "./components/Header";
import { GenresFilter } from "./pages/GenresFilter";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <GenresFilter />
      <GlobalStyle />
    </>
  );
}
