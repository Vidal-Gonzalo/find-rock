import React from "react";
import "./search-bar.css";
import logo from "../logo.svg";

import { Link } from "react-router-dom";
class SearchBar extends React.Component {
  state = {
    busqueda: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-3">
            <Link to="/">
              <img src={logo} alt="" className="logo-barra mt-2" />
            </Link>
          </div>

          <div className="col-md-4">
            <form className="row" name="Searchbar" onSubmit={this.handleSubmit}>
              <div className="busqueda">
                <input
                  type="text"
                  name="busqueda"
                  id="buscar"
                  value={this.props.busqueda}
                  placeholder="Busca una banda"
                  onChange={this.props.onChange}
                />
              </div>
            </form>
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default SearchBar;
