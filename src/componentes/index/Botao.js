import React, { Component } from 'react';

class Botao extends Component {


    render() {
        return (
            <div className="icone">

                <a href="/" className="btn">
                    {this.props.nome}</a>
 
            </div>

        )
    }

}



export default Botao;

