import React, { Component } from 'react'

import Braum from "../../assets/img/cards/imagem-braum.png"
import Botao from "../../componentes/index/Botao"
class Titulo extends Component {
    render() {
        return (
            <h3 className="Titulo-Contratar"><span className="traco"></span><i class="fas fa-play"></i>{this.props.titulo}</h3>
        )
    }
}

class Paragrafo extends Component {
    render() {
        return (
            <p className="Paragrafo">{this.props.paragrafo}</p>
        )
    }
}



class Card extends Component {
    render() {
        return (
            <div className="col-lg-6 pt-2">
                <div className="conteudo-icone">
                    <i className={this.props.classeIcone} id="icone-contratar"></i>
                </div>

                <h5 className='Subtitulo'>{this.props.subtitulo}</h5>
                <p className="Paragrafo"> {this.props.paragrafo}</p>

            </div>
        )
    }
}


class Contratar extends Component {

    constructor() {
        super();
        this.state = {
            id: "anime"
        }
    }

    ativarAnimaçao() {
        if (document.documentElement.scrollTop > 330) {
            this.setState({
                id: 'anime-init'
            })
        }
    }

    componentDidMount() {
        window.onscroll = () => this.ativarAnimaçao()
      }

    render() {
        return (
            <div className="Section-Contratar"  >

                <div className="container" id={this.state.id}>

                    <div className="row" id="linha-contratar">

                        <div className="col-lg-4" id="img-btn">
                            <img className='img-braum img-fluid' src={Braum} />
                            <Botao nome="Contratar" />
                        </div>


                        <div className="col-lg-8" id="coluna-textos">
                            <Titulo titulo="PORQUE CONTRATRAR NOSSO SERVIÇO" />
                            <Paragrafo paragrafo="O PAIDOJOB tem anos de experiência e muitos serviços concluidos.Buscamos sempre oferecer aos clientes um serviço de qualidade, seguro e com um suporte impecável. " />

                            <div className="row pt-3" id="Cards">

                                <Card classeIcone="fa-solid fa-credit-card" subtitulo="PAGAMENTO SEGURO" paragrafo="Aceitamos Mercado pago e PicPya, conhecido por serem as formas de pagamentos mais seguras para os clientes!" />


                                <Card classeIcone="fa-solid fa-shield-halved" subtitulo="SEGURANÇA E PRIVACIDADE" paragrafo="Todos os nossos serviços são feitos usando VPN e modo offiline em qualquer jogo." />

                                <Card classeIcone="fa-solid fa-rocket" subtitulo="VELOCIDADE" paragrafo="Os boosters são obrigados a colocar 7 horas por pedido no dia. Para você  ter sua conta de volta rapidamente! " />


                                <Card classeIcone="fa-solid fa-headset" subtitulo="SUPORTE AO CLIENTE" paragrafo="Temos agentes treinados para ajudá-lo com qualquer dúvida/consulta. Eles estão disponíveis 24/7/365." />



                            </div>


                        </div>

                    </div>
                </div>

            </div >
        )
    }
}

export default Contratar;