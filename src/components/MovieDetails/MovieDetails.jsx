import { fetchDetails } from 'helpers/api';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [info, setInfo] = useState({});
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    fetchDetails(movieId)
      .then(data => setInfo(data))
      .catch(error => console.error(error));
  }, [movieId]);

  const dateString = info.release_date;
  const dateObject = new Date(Date.parse(dateString));
  const year = dateObject.getFullYear();

  return (
    <div>
      <Link to={backLinkLocation.current}>Go back</Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${info.poster_path}`}
          alt={info.title}
          width="300px"
        />
        <div>
          <div>
            <h1>
              {info.title} ({year})
            </h1>
            <p>User Score {info.vote_average}%</p>
          </div>
          <div>
            <h2>Overview</h2>
            <p>{info.overview}</p>
          </div>
          <div>
            <h2>Genres</h2>
            <ul>
              {info.poster_path &&
                info.genres.map(gener => <li key={gener.id}>{gener.name}</li>)}
            </ul>
          </div>
        </div>
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
        <Suspense> {<Outlet />}</Suspense>
      </ul>
    </div>
  );
};

export default MovieDetails;
