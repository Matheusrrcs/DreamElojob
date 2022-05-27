import React, { Component } from "react"
import Botao from "./Botao"

class Ifon extends Component {
    render() {
        return (
            <div className="col-md-3">
                <small>
                    <span className="elementor-icon">
                        <i aria-hidden="true" className="fas fa-check pr-1"></i>
                    </span>
                    {this.props.frase}</small>
            </div>
        )
    }
}

class TituloPrincipal extends Component {
    render() {
        return (


            <div class="banner-title glitch ">
                <h1 class="display-1">PAI DO <span class="bolder gelo" data-heading="ELOJOB">ELOJOB</span> </h1>
            </div>



        )
    }
}

class Subtitulo extends Component {
    render() {
        return (

            <div className="banner-subtitle  mb-4 pb-3">
                O seu futuro está começando agora!
            </div>
        )
    }
}

class Arrow extends Component {
    render() {
        return (
            <div className="arrow">
                <span></span>
                <span></span>
                <span></span>

            </div>
        )
    }
}


class Inicio extends Component {
    render() {
        return (

            <div className="titles p-4">

                <div className="container">
                    <div className="row justify-content-center pb-3">


                        <Ifon frase="Velocidade na entrega" />
                        <Ifon frase="Segurança para sua conta" />
                        <Ifon frase="Preço excelente" />

                    </div>
                </div>


                <TituloPrincipal />
                <Subtitulo />

                <Botao nome="Contratar" />

                <Arrow />
               

            </div>





        )
    }
}

export default Inicio;