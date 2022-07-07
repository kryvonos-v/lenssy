import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import './navbar-controls.scss';

export function NavbarControls() {
  return (
    <div className="navbar-controls">
      <button className="navbar-controls__item">
        <SearchIcon className="navbar-controls__search" width="22" stroke="#fff" strokeWidth="1" />
      </button>
      <button className="navbar-controls__item">
        <UserIcon className="navbar-controls__user" width="25" fill="#fff" />
      </button>
    </div>
  );
}
