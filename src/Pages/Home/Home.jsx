import { fetchTrend } from 'helpers/api';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchTrend()
      .then(({ results }) => setMovies(results))
      .catch();
  }, []);

  const listMovies = movies.map(({ id, title }) => (
    <li key={id} className={css.item}>
      <NavLink to={`/movies/${id}`} state={location}>
        {title}
      </NavLink>
    </li>
  ));

  return (
    <>
      <h1 className={css.main_title}>Trending today</h1>
      <ul className={css.list}>{listMovies}</ul>
    </>
  );
};

export default Home;
