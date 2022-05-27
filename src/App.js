import React, { Component } from 'react';
import Navbar from "./componentes/index/Navbar"
import Inicio from "./componentes/index/Inicio"
import video from "./assets/video/braum.webm"
import Contratar from "./componentes/index/Contratar" 
import Card from "./componentes/index/cards"

import "./assets/css/all.css"
import CaminhoDivider from "./assets/img/divider/waves.svg"



class Background extends Component {
  render() {
    return (
      <div className="video-full-bg d-flex flex-column vw-100 vh-100 overflow-hidden position-absolute">

        <video className="video-full-bg__clip video-full-bg__clip--black-white" autoPlay muted loop>
          <source src={video} type="video/webm" />
        </video>

      </div>
    )
  }
}

class Divider extends Component {
  render() {
      return (
          <div class="bottom">
              <img src={CaminhoDivider} alt="Imagem de separação de tela"/>
          </div>
      )
  }
}


class App extends Component {




  render() {
    return (
      <div className='bodyIndex' id="walpaper">


        <Navbar />


        <Background />

        <div className='bg_main'>
          <Inicio />
          
          <Divider />
        </div>
   
        <Contratar/>

       <Card/>

      </div>

    )
  }

}



export default App;

