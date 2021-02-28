import React from 'react';
import '../../styles/components/main/main';

import './picture';
import './photo_review';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="main">
        <section className="main__grid-column">

          pictures

        </section>

        <section className="main__grid-column">

          pictures

        </section>

        <section className="main__grid-column">

          pictures

        </section>
      </main>
    );
  }
}
export default Main;