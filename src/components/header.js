import React from 'react';
import '../styles/components/header/header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="header">
        <picture className="header__logo" />
      </header>
    );
  }
}
export default Header;