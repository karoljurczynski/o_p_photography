// IMPORTS

import React from 'react';
import '../styles/components/header/header.css';


// COMPONENT

class Header extends React.Component {
  render() {
    return (
      <header className="header" id="top">
        <picture className="header__logo" />
      </header>
    );
  }
}


// EXPORTING COMPONENT

export default Header;