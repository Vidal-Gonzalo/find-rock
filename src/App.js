import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PageSearchResult from "./page-search-result.js";
import PageHome from "./page-home.js";
import PageArtist from "./page-artist.js";
import Layout from "./Components/layout.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/busqueda" component={PageSearchResult} />
            <Route exact path="/artista" component={PageArtist} />
            <Route exact path="/" component={PageHome} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
