import { getReviews } from 'components/fetchFindResult';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState('');
  const errStr = "We don't have any reviews for this movie";

  const filmData = async id => {
    const fetch = getReviews(id);
    setReviews((await fetch).data.results);
  };

  useEffect(() => {
    filmData(movieId);
  }, [movieId]);

  return reviews.length ? (
    <ul className={css.reviewsList}>
      {reviews.map(({ author, id, content }) => {
        return (
          <li key={id} className={css.castItem}>
            {<h3>{`Author: ${author}`}</h3>}
                {<p>{content}</p>}
          </li>
        );
      })}
    </ul>
  ) : (
    errStr
  );
}
