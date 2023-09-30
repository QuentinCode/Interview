import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Art from "./pages/Art";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import Social from "./components/Social/Social";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Social />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/music" element={<Music/>} />
          <Route path="/art" element={<Art/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
