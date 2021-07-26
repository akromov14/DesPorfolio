import React from 'react';
import './App.css';
import './main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header/Header';
import Portfolio from './component/header/Portfolio';
import Clients from './component/Clients';
import Carusel from './component/Carousel';


function App() {
  return (
    <div className="App">
        <div className="container">
            <Header />
            <Portfolio />
            <Clients />
            <Carusel />
        </div>
    </div>
  );
}

export default App;
