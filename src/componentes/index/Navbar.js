import React, { Component } from 'react';
import imagem from '../../assets/img/logo/logo.png'
import Botao from './Botao'

// logo do navbar
class NavbarLogo extends Component {
  render() {
    return (
      <a className="navbar-brand" href=""></a>
    )
  }
}


// icone do menu para moblie
class NavbarToggler extends Component {
  render() {
    return (
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" id="navbar-toggler">
        <input id="menu-hamburguer" type="checkbox" />

        <label for="menu-hamburguer">
          <div className="menu">
            <span className="hamburguer"></span>
          </div>
        </label>
      </button>

    )
  }
}

// item do menu navbar
class NavItem extends Component {
  render() {
    return (
      <li className={this.props.clase} >
        <a className="nav-link" href={this.props.caminho}>{this.props.nome}</a>
      </li>
    )
  }
}


// item do menu com Dropdown
class NavItemDropdown extends Component {
  render() {
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" role="button" id="dropdownMenuButton" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">{this.props.nome}
        </a>

        <ul className="dropdown-menu styled-menu" aria-labelledby="dropdownMenuButton">
          <ItemDrop nome="League of Legends" />
          <ItemDrop nome="Wild Rift" />
          <ItemDrop nome="Valorant" />
        </ul>
      </li>
    )
  }
}

class ItemDrop extends Component {
  render() {
    return (
      <li className="item-drop">
        <a href="https://www.elojobburn.com/leagueOfLegends/duoboost"
          className="dropdown-item text-uppercase">{this.props.nome}</a>
      </li>
    )
  }
}


class NavbarMenu extends React.Component {
  render() {
    return (



      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav ml-auto">

          <NavItem nome="Início" clase="nav-item active" />
          <NavItemDropdown nome="Elo boost" />
          <NavItemDropdown nome="Duo boost" />
          <NavItemDropdown nome="Md10/Md5" />
          <NavItemDropdown nome="Coach" />
          <Botao nome="começar" />
        </ul>
      </div>


    )
  }
}

class Navbar extends Component {


  constructor() {
    super();
    this.state = {
      classe: "navbar navbar-expand-lg fixed-top  navbar-round"
    }
  }

  ativarAnimaçao() {

    if (document.documentElement.scrollTop > 50) {
      this.setState({
        classe: 'navbar navbar-expand-lg fixed-top  navbar-round scrolled'
      })

    }
    else {
      
      this.setState({
        classe: 'navbar navbar-expand-lg fixed-top  navbar-round'
      })
    }
  }
 
 
  render() {
    return (


      <nav className={this.state.classe} id="navbar" onScroll={this.ativarAnimaçao()} >
        <div className="container">
          <NavbarLogo logoUrl={imagem} alt="Imagem da logo" />

          <NavbarToggler />

          <NavbarMenu />
        </div>
      </nav>



    )
  }

}



export default Navbar;

