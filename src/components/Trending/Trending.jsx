import { Link } from 'react-router-dom';
import css from './Trending.module.css'
import PropTypes from 'prop-types';

export default function Trending({ trend }) {
  return (
    <div className={css.listLinks}>
      {trend.map(({ title,id:movieId }) => {
        return <Link to={`/movies/${movieId}`} key={movieId}> {title} </Link>;
      })}
    </div>
  );
}

Trending.propTypes = {
trend: PropTypes.array,    
}