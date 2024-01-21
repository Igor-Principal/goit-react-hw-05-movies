import SearchForm from 'components/SearchForm/SearchForm';
import { fetchSearch } from 'helpers/api';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

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

  const elements = movieList.map(({ original_title, id }) => (
    <li key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {original_title}
      </Link>
    </li>
  ));

  return (
    <>
      <SearchForm setSearchParams={setSearchParams} />
      <ul>{elements}</ul>
    </>
  );
};

export default Movies;
