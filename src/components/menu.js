import React from 'react';
import '../styles/components/menu/menu.css';


const menuItemTransition = () => {
  const menuItems = document.querySelectorAll(".menu__list__item__content");

  menuItems.forEach((element) => {

    element.addEventListener("mouseover", () => {
      menuItems.forEach((el) => {el.style.color = "gray"})
      element.style.color = "white";
    });

    element.addEventListener("mouseout", () => {
      menuItems.forEach((el) => {el.style.color = "white"})
    });
  });
};

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleExit = this.handleExit.bind(this);
    this.state = {};
  }
  handleExit() {

  }
  componentDidMount() {
    menuItemTransition();
  }

  render() {
    return (
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__list__item">
            <a className="menu__list__item__content" href="#">FEATURED</a>
          </li>

          <li className="menu__list__item">
            <a className="menu__list__item__content" href="#">PEOPLE</a>
          </li>

          <li className="menu__list__item">
            <a className="menu__list__item__content" href="#">NATURE</a>
          </li>

          <li className="menu__list__item">
            <a className="menu__list__item__content" href="#">ACTS</a>
          </li>

          <li className="menu__list__item">
            <a className="menu__list__item__content" href="#">CONTACT</a>
          </li>
        </ul>
        <a className="menu__exit" href="#" onClick={this.handleExit}>ddddddddd</a>
      </nav>
    );
  }
}
export default Menu;