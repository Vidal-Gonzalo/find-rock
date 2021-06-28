import React from "react";
import "./page-home.css";
import logo from "./logo.svg";
class PageHome extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };
  handleChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };
  state = {
    busqueda: "",
  };
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img src={logo} alt="" className="logo-barra mt-2" id="logo" />

            <form className="row" name="Searchbar" onSubmit={this.handleSubmit}>
              <div className="busqueda">
                <input
                  type="text"
                  name="busqueda"
                  id="buscar"
                  value={this.state.busqueda}
                  placeholder="Busca una banda"
                  onChange={this.handleChange}
                />
              </div>
              <div className="actions">
                <button className="btng" type="submit">
                  Buscar artistas similares
                </button>
                <button className="btng">Buscar </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHome;
