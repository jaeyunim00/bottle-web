import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { Routes, Route, Link } from "react-router-dom";

//PAGES
import Info from "./pages/Info";
import Game from "./pages/Game";
import World from "./pages/World";

//COMPONENTS
import Navigation from "./components/Navigation";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Routes>
        <Route path="/" element={<World></World>}></Route>
        <Route path="/info" element={<Info></Info>}></Route>
        <Route path="/game" element={<Game></Game>}></Route>
      </Routes>
    </div>
  );
}

export default App;
