import React from "react";
import ArtistCard from "./artist-card.js";
class SimilarArtist extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h5>Artistas similares</h5>
        <hr />
        <div className="row">
          {this.props.data.slice(0, 4).map((item, i) => {
            return (
              <ArtistCard
                img={item.image[3]["#text"]}
                titulo={item.name}
                key={i}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
export default SimilarArtist;
