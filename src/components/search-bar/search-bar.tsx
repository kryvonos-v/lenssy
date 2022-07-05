import './search-bar.scss';
import { FormEvent, useState } from 'react';
import names from 'classnames';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

interface SearchFormElements extends HTMLFormControlsCollection {
  query: HTMLInputElement;
}

type SearchBarProps = {
  placeholder?: string
}

export function SearchBar(
  { placeholder = 'Search...' }: SearchBarProps
) {
  const [isActive, setIsActive] = useState(false);

  function handleClick(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget as HTMLFormElement;
    if (!isActive) {
      setIsActive(true);
      afterTransformation(form, () => focusInput(form));
    }
  }

  function reset() {
    setIsActive(false);
  }

  return (
    <form
      className={names({
        'search-bar': true,
        'search-bar--active': isActive
      })}
      onClick={handleClick}
      onReset={reset}
    >
      <div className="search-bar-content">
        <SearchIcon className="search-bar-icon" width="18" stroke="#fff" />
        <input
          name="query"
          disabled={!isActive}
          className="search-bar-input"
          placeholder={placeholder}
        />
      </div>
      <div className="search-bar-reset-btn-content" data-animation-target>
        <button className="reset-btn" type="reset">Скасувати</button>
      </div>
    </form>
  );
}

function afterTransformation(target: HTMLElement, callback: () => void) {
  target.addEventListener('transitionend', onTransitionEnd);

  function onTransitionEnd(event: TransitionEvent) {
    if (event.propertyName === 'transform') {
      target.removeEventListener('transitionend', onTransitionEnd);
      callback();
    }
  }
}

function focusInput(form: HTMLFormElement) {
  const elements = form.elements as SearchFormElements;
  const input = elements.query;
  input.focus();
}
