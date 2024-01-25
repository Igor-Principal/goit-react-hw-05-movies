import SearchForm from 'components/SearchForm/SearchForm';
import { fetchSearch } from 'helpers/api';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const text = searchParams.get('querty') ?? '';
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (!text) return;
    fetchSearch(text)
      .then(data => setMovieList(data.results))
      .catch(error => console.error(error));
  }, [text]);

  const elements = movieList.map(
    ({ original_title, id, backdrop_path }) =>
      backdrop_path && (
        <li key={id} className={css.item}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {original_title}
          </Link>
        </li>
      )
  );

  return (
    <div className="container">
      <SearchForm setSearchParams={setSearchParams} />
      <ul className={css.list}>{elements}</ul>
    </div>
  );
};

export default Movies;
