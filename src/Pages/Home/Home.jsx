import { fetchTrend } from 'helpers/api';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from './home.module.css';


const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchTrend()
      .then(({ results }) => setMovies(results))
      .catch();
  }, []);

  const listMovies = movies.map(({ id, title, poster_path }) => (
    <li key={id} className={css.item}>
      <NavLink to={`/movies/${id}`} state={location} className={css.navLink}>
        <div className={css.containerImgHome}>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            width={220}
            className={css.img}
          />
          <p className={css.text}>{title}</p>
        </div>
      </NavLink>
    </li>
  ));

  return (
    <div className="container">
      <h1 className={css.main_title}>Trending today</h1>
      <ul className={css.list}>{listMovies}</ul>
    </div>
  );
};

export default Home;
