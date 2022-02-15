import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import MovieList from "./Components/MovieList";
import { useState } from "react";
import AddMovie from "./Components/AddMovie";
import Filter from "./Components/Filter";

const moviesList = [
  {
    id: 2,
    title: "Forest Gump",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit accusamus corrupti sapiente ipsa rem incidunt amet aspernatur accusantium dicta",
    rating: 4,
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  },
  {
    id: 1,
    title: "Harry Potter",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit accusamus corrupti sapiente ipsa rem incidunt amet aspernatur accusantium dicta",
    rating: 5,
    posterURL:
      "https://fr.web.img2.acsta.net/pictures/18/07/02/17/25/3643090.jpg",
  },
  {
    id: 4,
    title: "Titanic",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit accusamus corrupti sapiente ipsa rem incidunt amet aspernatur accusantium dicta",
    rating: 3,
    posterURL:
      "https://img8.cdn.cinoche.com/images/7d407b936f65be3f8dca2cf5c4aea8d4.jpg",
  },
  {
    id: 5,
    title: "Best Worst Movie",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit accusamus corrupti sapiente ipsa rem incidunt amet aspernatur accusantium dicta",
    rating: 2,
    posterURL:
      "https://upload.wikimedia.org/wikipedia/en/9/9d/Best-worst-movie.jpg",
  },
  {
    id: 3,
    title: "Troll 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit accusamus corrupti sapiente ipsa rem incidunt amet aspernatur accusantium dicta",
    rating: 1,
    posterURL:
      "https://fr.web.img5.acsta.net/pictures/20/12/04/11/43/5464495.jpg",
  },
];

function App() {
  const [movies, setMovies] = useState(moviesList);

  const addItem = (movie) => {
    setMovies([...movies, movie]);
  };

  const updateItem = (updates, id) => {
    setMovies(
      movies.map((movie) => {
        if (movie.id === id) {
          movie = { ...updates };
        }
        return movie;
      })
    );
  };

  const deleteItem = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const filterContent = (criteria) => {
    switch (criteria) {
      case "title":
        setMovies(movies.sort((movie) => movie.title));
        break;

      case "rate":
        setMovies(
          movies.sort((a, b) => {
            return a.rate - b.rate;
          })
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="row App">
      <div className="p-4 col-4 fixed-top side-panel">
        <AddMovie addItem={addItem} />
        <Filter filterContent={filterContent} />
      </div>
      <MovieList
        updateItem={updateItem}
        deleteItem={deleteItem}
        movies={movies}
      />
    </div>
  );
}

export default App;
