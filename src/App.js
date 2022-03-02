import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Container from "./components/container/Container";
import Questions from "./pages/questions/Questions";

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/questions" element={<Questions />}></Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
