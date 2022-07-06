import names from 'classnames';
import { useState } from 'react';
import './navbar-burger.scss';

type Props = {
  className?: string;
}

export function NavbarBurger(props: Props) {
  let [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  return (
    <button
      className={names('navbar-burger', props.className)}
      data-active={isActive}
      onClick={toggle}
    >
      <span className="navbar-burger-stick navbar-burger-stick--top" />
      <span className="navbar-burger-stick navbar-burger-stick--bottom" />
    </button>
  );
}
