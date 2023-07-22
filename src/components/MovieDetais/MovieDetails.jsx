import imageNotFound from '../../images/imageNotFound.png';
import { useParams, useLocation, Outlet, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductById } from 'components/fetchFindResult';
import css from './MovieDetails.module.css';

const BASE_URL = 'https://image.tmdb.org/t/p/w200/';

export default function MovieDetails() {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [film, setFilm] = useState('');
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const filmData = async id => {
    const fetch = getProductById(id);
    setFilm((await fetch).data);
  };

  const goBack = () => {
    navigate(backLinkHref);
  };

  useEffect(() => {
    filmData(movieId);
  }, [movieId]);

  const { poster_path, original_title, vote_average, overview, genres } = film;

  return (
    <>
      <div className={css.movieDetails____photoDescriptionContainer}>
        <div className={css.movieDetails__photoContainer}>
          <button type="button" onClick={goBack}>
            Go back
          </button>
          {BASE_URL && (
            <img
              src={poster_path ? `${BASE_URL}${poster_path}` : imageNotFound}
              alt={original_title}
              className={css.movieDetails__photo}
            />
          )}
        </div>
        <div className={css.movieDetails__description}>
          <h2>{original_title}</h2>
          <p>{`User Score: ${vote_average}`}</p>
          <h3>{'Overviev'}</h3>
          <p>{overview}</p>
          <h3>{'Gentres'}</h3>
          <ul className={css.movieDetails__listGentres}>
            {genres &&
              genres.map(genre => {
                return <li key={genre.name}>{genre.name}</li>;
              })}
          </ul>
        </div>
      </div>
      <ul className={css.movieDetails__addInfo}>
        <h3>Additional information</h3>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
