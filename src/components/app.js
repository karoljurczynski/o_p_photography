import React from 'react';

import '../styles/components/app/app.css';
import Header from './header';
import Main from './main/main';
import Footer from './footer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;