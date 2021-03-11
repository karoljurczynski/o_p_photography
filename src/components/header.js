import React from 'react';

import '../styles/components/header/header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="header" id="top">
        <picture className="header__logo" />
      </header>
    );
  }
}

export default Header;