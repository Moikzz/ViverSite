import "./App.css";
import Header from "./components/layout/Header/Header.jsx";
import BsNavbar from './components/layout/Navbar/BsNavbar';
import Footer from "./components/layout/Footer/Footer.jsx";

import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Header />
        <BsNavbar/>
        <Outlet/>
        <Footer/>
    </div>
  );
}

export default App;

// Aqui estão importados os componentes que sempre estarão expostos no site, como:
// - Header
// - Navbar
// - Outlet (Página que será mostrada de acordo com o contexto)
// - Footer

// O Outlet é controlado pelo React-Router, livraria que faz todo o controle de navegação do site.
// Para criar uma nova página, vá para o arquivo "main.jsx" e leia os comentários