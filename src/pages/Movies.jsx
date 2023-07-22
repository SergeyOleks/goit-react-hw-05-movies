import { useState } from 'react';
import { useSearchParams} from 'react-router-dom';
import css from './Movies.module.css';
import { getFilms } from 'components/fetchFindResult';
import { Link } from 'react-router-dom';

export default function Movies() {
    const [searchParams, setSearchParams] = useSearchParams();


  const [name, setName] = useState('');
  const [films, setFilms] = useState('');

  const filmData = async name => {
    const fetch = getFilms(name);
    setFilms((await fetch).data.results);
    setSearchParams({ query: name });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (name.trim() === '') {
      console.log(searchParams);
      return;
    }
    filmData(name);

  };
  const handleNameChange = event => {
    setName(event.currentTarget.value.toLowerCase());
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <input type="text" value={name} onChange={handleNameChange} />
        <button type="submit">Search</button>
      </form>

      {films && (
        <ul className={css.listFilms}>
          {films.map(({ id, original_title }) => {
            return (
              <Link to={`/movies/${id}`} key={id}>
                {original_title}
              </Link>
            );
          })}
        </ul>
      )}
    </>
  );
}
