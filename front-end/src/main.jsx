import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import App from './App.jsx'

import Home from './components/pages/OUTRAS/Home.jsx';
import Error from './components/pages/OUTRAS/Error.jsx';
import Contato from './components/pages/OUTRAS/Contato.jsx';
import SejaVoluntario from './components/pages/OUTRAS/SejaVoluntario.jsx';

import NossaHistoria from './components/pages/INSTITUCIONAL/NossaHistoria';
import Apresentacao from './components/pages/INSTITUCIONAL/Apresentacao';
import Valores from './components/pages/INSTITUCIONAL/Valores';
import Missao from './components/pages/INSTITUCIONAL/Missao';

import InformacoesFinanceiras from './components/pages/INTEGRIDADE/InformacoesFinanceiras.jsx';
import CriticaSugestao from './components/pages/INTEGRIDADE/CriticaSugestao';
import Certificados from './components/pages/INTEGRIDADE/Certificados.jsx';
import Denuncia from './components/pages/INTEGRIDADE/Denuncia';

import PainelDeTransparencia from './components/pages/TRANSPARENCIA/PainelDeTransparencia';
import PlanoDeTrabalho from './components/pages/TRANSPARENCIA/PlanoDeTrabalho';
import EstatutoSocial from './components/pages/TRANSPARENCIA/EstatutoSocial';
import Parcerias from './components/pages/TRANSPARENCIA/Parcerias';

import RelatorioDeAtividadeAnual from './components/pages/PUBLICACOES/RelatorioDeAtividadeAnual.jsx';
import Campanhas from './components/pages/PUBLICACOES/Campanhas.jsx';
import Projetos from './components/pages/PUBLICACOES/Projetos.jsx';
import Noticias from './components/pages/PUBLICACOES/Noticias.jsx';
import Donate from './components/pages/OUTRAS/Donate.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: 'contact',
        element: <Contato/>,
      },
      {
        path: 'volunteer',
        element: <SejaVoluntario/>,
      },
      {
        path: 'presentation',
        element: <Apresentacao/>,
      },
      {
        path: 'mission',
        element: <Missao/>,
      },{
        path: 'values',
        element: <Valores/>,
      },
      {
        path: 'ourhistory',
        element: <NossaHistoria/>,
      },
      {
        path: 'statute',
        element: <EstatutoSocial/>,
      },
      {
        path: 'workplan',
        element: <PlanoDeTrabalho/>,
      },
      {
        path: 'certificates',
        element: <Certificados/>,
      },
      {
        path: 'transparency',
        element: <PainelDeTransparencia/>,
      },
      {
        path: 'RAA',
        element: <RelatorioDeAtividadeAnual/>,
      },
      {
        path: 'news',
        element: <Noticias/>,
      },
      {
        path: 'suggestion',
        element: <CriticaSugestao/>,
      },
      {
        path: 'complaint',
        element: <Denuncia/>,
      },
      {
        path: 'Campaings',
        element: <Campanhas/>,
      },
      {
        path: 'projects',
        element: <Projetos/>,
      },{
        path: 'finances',
        element: <InformacoesFinanceiras/>,
      },{
        path: 'partners',
        element: <Parcerias/>,
      },{
        path: 'donate',
        element: <Donate/>,
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
 
/* 
Main.jsx - Arquivo que gerencia o que será mostrado baseado no contexto em questão.

Como funciona: O React-Router lê o "path" apontado e carrega o "element" associado.
  
Para adicionar uma nova página, basta:  
  1 - Importar ela usando o comando: { import (página) from '(endereço da página)' } como nos exemplos já importados
  2 - Criar um novo objeto ao final do array children com "path" e "element" correnspondentes
  3 - Salvar as alterações feitas.

A documentação sobre componentes estará dentro do arquivo Header.jsx, localizado em src/components/layout/header/Header.jsx
A documentação sobre páginas estará dentro do arquivo Home.jsx, localizado em src/components/pages/OUTRAS/Home.jsx
*/ 