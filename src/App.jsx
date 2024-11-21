import { useState } from "react";
import "./App.css";
import Logo from "./images/logo.png";
import Heart from "./images/heart.png";
import Like from "./images/like-icon.png";
import data from "./data/data.json";

function App() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <header>
        <div className="container">
          <div className="header">
            <div className="menu">
              <div className="logo">
                <img src={Logo} alt="" />
                <h2>Kino Royxati</h2>
              </div>
              <div className="header-links">
                <ul>
                  <li>
                    <a href="#">Bosh Sahifa</a>
                  </li>
                  <li>
                    <a href="#">Kinolar</a>
                  </li>
                  <li>
                    <a href="#">Yangiliklar</a>
                  </li>
                </ul>
              </div>
              <div className="likes">
                <img src={Heart} alt="Heart icon" onClick={handleLike} />
                <h2>{likes} likes</h2>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav>
        <div className="container">
          <div className="card-wrapper">
            {data.map((movie, index) => (
              <div key={index} className="card">
                <div className="card-text">
                  <img
                    src={Like}
                    alt="Heart icon"
                    className="heart-icon"
                    onClick={handleLike}
                  />
                  <div className="card-image">
                    <img src={movie.Images} alt={movie.title} />
                  </div>
                  <div className="card-content">
                    <h2 className="title">{movie.Title}</h2>
                    <h2 className="plot">{movie.Plot}</h2>
                    <div className="yearAndRating">
                      <h2 className="year">Year: {movie.Year}</h2>
                      <h2 className="rated">Rating: {movie.Rated}</h2>
                    </div>
                    <div className="realisedRuntime">
                      <h2 className="released">Realised: {movie.Released}</h2>
                      <h2 className="runtime">Runtime: {movie.Runtime}</h2>
                    </div>
                    <div className="genreRejissor">
                      <h2 className="genre">Genre: {movie.Genre}</h2>
                      <h2 className="director">Director: {movie.Director}</h2>
                    </div>
                    <h2 className="actors">Actors: {movie.Actors}</h2>
                    <div className="languageCountry">
                      <h2 className="language">Language: {movie.Language}</h2>
                      <h2 className="country">Country: {movie.Country}</h2>
                    </div>
                    <div className="awardsRating">
                      <h2 className="awards">Awards: {movie.Awards}</h2>
                      <h2 className="imdbrating">
                        ImdbRating: {movie.imdbRating}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
