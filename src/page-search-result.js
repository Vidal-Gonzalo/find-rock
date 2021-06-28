import "./App.css";
import React from "react";
import SearchBar from "./Components/search-bar.js";
import SearchResult from "./Components/search-result.js";
class PageSearchResult extends React.Component {
  state = {
    busqueda: "",
  };
  componentDidMount() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", " ");
    this.setState({
      busqueda: search,
    });
  }

  componentWillMount() {}

  componentWillUnmount() {}
  handleChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };

  fetchData = async (url) => {
    this.setState({
      loading: true,
    });
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) {
      this.setState({
        loading: false,
        error: true,
        errorMensaje: data.message,
      });
    } else {
      this.setState({
        error: false,
        loading: false,
        data: data,
      });
    }
  };

  render() {
    console.log("render()");
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.handleChange}
          busqueda={this.state.busqueda}
        />

        <SearchResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
