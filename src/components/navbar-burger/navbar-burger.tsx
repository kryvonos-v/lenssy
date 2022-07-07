import names from 'classnames';
import './navbar-burger.scss';

type Props = {
  className?: string;
  active: boolean;
  onChange: (value: boolean) => void;
}

export function NavbarBurger(props: Props) {
  function toggle() {
    props.onChange(!props.active);
  }

  return (
    <button
      className={names('navbar-burger', props.className)}
      data-active={props.active}
      onClick={toggle}
    >
      <span className="navbar-burger-stick navbar-burger-stick--top" />
      <span className="navbar-burger-stick navbar-burger-stick--bottom" />
    </button>
  );
}
