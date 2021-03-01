import React from 'react';
import '../styles/components/app/app.css';

import Header from './header';
import Menu from './menu';
import Main from './main/main';
import Footer from './footer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Menu />
        <Main />
        <Footer />
      </div>
    );
  }
}
export default App;