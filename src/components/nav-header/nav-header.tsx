import './nav-header.scss';

export function NavHeader() {
  return (
    <header className="nav-header">
      <div className="nav-header__content container">
        <a className="nav-logo" href="/">lens</a>
        <span className="nav-separator" />
        <nav className="main-nav">
          <a className="main-nav__link" href="/">Home</a>
          <a className="main-nav__link" href="/tv-shows">TV Shows</a>
          <a className="main-nav__link" href="/movies">Movies</a>
        </nav>
      </div>
    </header>
  );
}
