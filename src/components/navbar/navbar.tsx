import { Fragment, useState } from 'react';
import { NavbarBurger } from '../navbar-burger/navbar-burger';
import { NavbarControls } from '../navbar-controls/navbar-controls';
import './navbar.scss';

export function Navbar() {
  let [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Fragment>
      <div className="navbar-placeholder" />

      <header className="navbar" data-menu-active={isMenuOpen}>
        <div className="navbar__content container">
          <NavbarBurger
            className="navbar__menu-btn"
            active={isMenuOpen}
            onChange={setIsMenuOpen}
          />
          <a className="navbar-logo" href="/">lens</a>
          <span className="navbar-separator" />

          <nav className="main-nav">
            <a className="main-nav__link" href="/">Home</a>
            <a className="main-nav__link" href="/tv-shows">TV Shows</a>
            <a className="main-nav__link" href="/movies">Movies</a>
          </nav>

          <NavbarControls />
        </div>
      </header>
    </Fragment>
  );
}
