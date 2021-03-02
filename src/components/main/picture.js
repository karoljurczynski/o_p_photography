import React from 'react';
import '../../styles/components/main/picture/picture.css';

class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.pictureStyle = {
      width: this.props.width,
      height: this.props.height,
      top: this.props.top,
      left: this.props.left,
      right: this.props.right,
      bottom: this.props.bottom,
      backgroundColor: this.props.color,
      margin: this.props.margin
    }
  }

  render() {
    return (
      <picture className="picture" style={this.pictureStyle}>
      </picture>
    );
  }
}
export default Picture;