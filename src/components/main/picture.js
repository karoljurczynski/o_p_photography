import React from 'react';
import '../../styles/components/main/picture/picture.css';

class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <picture className="picture">
        <source media="(min-width:768px)" srcset={this.props.smallSrc} />
        <source media="(min-width:1200px)" srcset={this.props.largeSrc} />
        <img src={this.props.src} alt={this.props.alt} />
      </picture>
    );
  }
}
export default Picture;