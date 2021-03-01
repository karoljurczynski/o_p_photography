import React from 'react';
import '../../styles/components/main/picture/picture.css';

class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <picture className="main__grid-column__picture">
        <source media="(min-width:650px)" srcset="img_pink_flowers.jpg" />
        <source media="(min-width:465px)" srcset="img_white_flower.jpg" />
        <img src="img_orange_flowers.jpg" alt="Flowers" />
      </picture>
    );
  }
}
export default Picture;