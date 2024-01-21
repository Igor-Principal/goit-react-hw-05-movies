import { fetchTrend } from 'helpers/api';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchTrend()
      .then(({ results }) => setMovies(results))
      .catch();
  }, []);

  const listMovies = movies.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`} state={location}>
        {title}
      </Link>
    </li>
  ));

  return (
    <div>
      <h1>Trending today</h1>
      <ul>{listMovies}</ul>
    </div>
  );
};

export default Home;
