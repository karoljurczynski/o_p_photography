import React from 'react';
import '../styles/components/app/app';

import './header';
import './menu';
import './main/main';
import './footer';

const PhotosArray = [
  {id: "", src: "", alt: "", title: ""}
];

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