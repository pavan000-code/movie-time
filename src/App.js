import React, { useState } from "react";
import "./styles.css";

var movieDB = {
  Sports: [
    {
      img:
        "https://m.media-amazon.com/images/M/MV5BMjJmOWZmNzItZjM4MC00NjQxLWE4ZGQtNGZmZTZiNzgxOTBmXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_.jpg",
      movieName: "Bhaag Milkha Bhaag",
      personality: "Milkha Singh",
      description: "Athletics",
      rating: "5/5"
    },
    {
      img:
        "data:image/jpeg;base64,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",
      movieName: "Soorma",
      personality: "Sandeep Singh",
      description: "Hockey",
      rating: "4/5"
    },
    {
      img: "https://wallpapercave.com/wp/wp9439718.jpg",
      movieName: "Dangal",
      personality: "Phogat Sisters",
      description: "Wrestling",
      rating: "4.5/5"
    }
  ],
  "Maratha Culture": [
    {
      img:
        "https://upload.wikimedia.org/wikipedia/en/c/c0/Bajirao_Mastani_poster.jpg",
      movieName: "Bajirao Mastani",
      personality: "Peshwa Bajirao I",
      description: " Inter cultural Romance story",
      rating: "5/5"
    },
    {
      img:
        "https://upload.wikimedia.org/wikipedia/en/3/3f/Tanaji_film_poster.jpg",
      movieName: "Tanhaji:The Unsung Warrior",
      personality: "Tanaji Malusare",
      description: "Battle of Sinhagad",
      rating: "4.5/5"
    },
    {
      img:
        "https://upload.wikimedia.org/wikipedia/en/5/54/Panipat_%28film%29_poster.jpg",
      movieName: "Panipat the Great Betrayal",
      personality: "Sadashivrao Bhau",
      description: "Third Battle of Panipat",
      rating: "3.5/5"
    }
  ],
  "Social Empowerment": [
    {
      img:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Padman_poster.jpg/220px-Padman_poster.jpg",
      movieName: "Padman",
      personality: "Arunachalam Muruganantham",
      description: "Emphasis on Sanitary Hygeine",
      rating: "4/5"
    },
    {
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXcoP6C8Hz9RkDb_B75TIw7R0WxyY4txgXuQ&usqp=CAU",
      movieName: "Toilet:Ek Prem Katha",
      personality: "Priyanka Bharti 2012 runaway case",
      description: "Eradication of Open Defecation in Rural Areas",
      rating: "5/5"
    },
    {
      img:
        "https://upload.wikimedia.org/wikipedia/en/3/3b/Rough_Book_hindi_film_poster.jpg",
      movieName: "Rough Book",
      personality: "Anant Mahadevan",
      description: "India's education system and its struggles",
      rating: "3/5"
    }
  ]
};

var genres = Object.keys(movieDB);

export default function App() {
  const [one, setOne] = useState("Sports");
  function genreClick(genre) {
    setOne(genre);
  }
  return (
    <div className="pageWrap">
      <nav className="navigation container">
        <div className="nav-items">
          <div className="nav-repo">
            <a
              className="nav-link"
              href="https://github.com/dev-enforced/movie-time"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
          </div>
          <h1 className="nav-title">
            MOVIE TIME <span>🎬</span>
          </h1>
        </div>
      </nav>
      <div className="main-content">
        <div className="main-intro">
          <h2>
            Bollywood Movies of different genres with proper info available on a
            single click.
          </h2>
        </div>
        <div className="main-body">
          <div className="btnContainer">
            {genres.map((item) => {
              return (
                <button onClick={() => genreClick(item)} className="button">
                  {item}
                </button>
              );
            })}
          </div>
          <div className="card-container">
            {movieDB[one].map((movie) => {
              return (
                <div className="card">
                  <div className="card-img">
                    <img src={movie.img} alt="image of movie" />
                  </div>
                  <div className="card-info">
                    <h3>{movie.movieName}</h3>
                    <span>{movie.description}</span>
                    <span>{movie.personality}</span>
                    <span>{movie.rating}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-tagline">
          <h3>Made with love by Pavan Kalyan.Available on:</h3>
        </div>
        <ul className="footer-socials">
          <li className="footer-inline">
            <a
              className="footer-links"
              href="https://github.com/pavan000-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
          </li>
          <li className="footer-inline">
            <a
              className="footer-links"
              href="https://twitter.com/pavankalyan002"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-twitter"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
