import './menu-button.scss';
import names from 'classnames';
import { useState } from 'react';

type Props = {
  className?: string;
}

export function MenuButton(props: Props) {
  let [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  return (
    <button
      className={names('menu-btn', props.className)}
      data-active={isActive}
      onClick={toggle}
    >
      <span className="menu-btn-stick menu-btn-stick--top" />
      <span className="menu-btn-stick menu-btn-stick--bottom" />
    </button>
  );
}
