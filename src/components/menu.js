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
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    setTimeout(() => {menuItemTransition()}, 500);
  }

  render() {
    return (
      <nav className="menu">
        <div className="menu__exit" onClick={this.props.exit}></div>
        <ul className="menu__list">
          <li className="menu__list__item">
            <a className="menu__list__item__content" onClick={this.props.linkTo}>FEATURED</a>
          </li>

          <li className="menu__list__item">
            <a className="menu__list__item__content" onClick={this.props.linkTo}>PEOPLE</a>
          </li>

          <li className="menu__list__item">
            <a className="menu__list__item__content" onClick={this.props.linkTo}>NATURE</a>
          </li>

          <li className="menu__list__item">
            <a className="menu__list__item__content" onClick={this.props.linkTo}>ACTS</a>
          </li>

          <li className="menu__list__item">
            <a className="menu__list__item__content" onClick={this.props.linkTo}>CONTACT</a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Menu;