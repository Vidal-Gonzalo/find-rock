import React from "react";
import ArtistCard from "./artist-card.js";
import Loading from "./loading.js";
import Error from "./error.js";
class PageSearchResult extends React.Component {
  state = {
    loading: false,
    error: null,
    data: {
      similarartists: {
        artist: [],
      },
    },
  };

  componentWillReceiveProps(e) {
    let termino = e.busqueda;
    this.fetchData(
      "https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" +
        termino +
        "&api_key=21df39010b423c4f7435c19896c8e1d8&format=json"
    );
  }

  componentDidMount() {}

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
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}
        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((artista, i) => {
              return (
                <ArtistCard
                  img={artista.image[2]["#text"]}
                  titulo={artista.name}
                  key={i}
                />
              );
            })}
            <h1>{this.props.busqueda}</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
