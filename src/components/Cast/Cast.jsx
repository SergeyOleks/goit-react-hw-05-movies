import imageNotFound from '../../images/imageNotFound.png';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCasts } from 'components/fetchFindResult';
import css from './Cast.module.css';
const BASE_URL = 'https://image.tmdb.org/t/p/w200/';

export default function Cast() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState('');

  const filmData = async id => {
    const fetch = getCasts(id);
    setCasts((await fetch).data.cast);
  };

  useEffect(() => {
    filmData(movieId);
  }, [movieId]);

  return (
    casts && (
      <ul className={css.castsList}>
        {casts.map(({ name, id, profile_path }) => {
          return (
            <li key={id} className={css.castElement}>
              {name}
              {
                <img
                  src={
                    profile_path ? `${BASE_URL}${profile_path}` : imageNotFound
                  }
                  alt={name}
                  className={css.castImg}
                />
              }
            </li>
          );
        })}
      </ul>
    )
  );
}
