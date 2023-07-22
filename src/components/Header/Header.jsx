import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import css from './Header.module.css';

export default function Header() {
  return (
    <>
      <header>
        <nav className={css.listLinks}>
          <NavLink to="/" className={css.navLink}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.navLink}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
