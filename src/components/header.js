import React from 'react';
import '../styles/components/header/header';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="header">
        <span className="header__contact-icon"> </span>
        <div className="header__title">
          <h1 className="header__title__main"> </h1>
          <h2 className="header__title__minor"> </h2>
        </div>
        <span className="header__menu-icon"> </span>
      </header>
    );
  }
}
export default Header;