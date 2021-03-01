import React from 'react';
import '../styles/components/menu/menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__list__item">
            <a className="menu__list__item__content" href="#">FIRST</a>
          </li>

          <li className="menu__list__item">
            <a className="menu__list__item__content" href="#">SECOND</a>
          </li>

          <li className="menu__list__item">
            <a className="menu__list__item__content" href="#">THIRD</a>
          </li>

          <li className="menu__list__item">
            <a className="menu__list__item__content" href="#">FOURTH</a>
          </li>

          <li className="menu__list__item">
            <a className="menu__list__item__content" href="#">FIFTH</a>
          </li>
        </ul>
        <a className="menu__back" href="#">BACK</a>
      </nav>
    );
  }
}
export default Menu;