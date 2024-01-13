import './App.css';
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Vans from './pages/Vans.js';
import {Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <div className="app">
      <header className='header'>
      <Link to = "/" className='navbar--main-title'>#VANLIFE</Link>
      <nav>
        <Link to = '/about'>About</Link>
        <Link to = '/vans'>Vans</Link>
      </nav>
      </header>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/vans" element={<Vans/>}/>
      </Routes>
      <footer className='footer'>Ⓒ 2022 #VANLIFE</footer>
    </div>
  );
}

export default App;
