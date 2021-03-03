import React from 'react';
import '../../styles/components/main/picture/picture.css';
import PhotoReview from './photo_review';

class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handlePicture = this.handlePicture.bind(this);
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
  handlePicture(e) {
    this.setState({isClicked: true});
    console.log(this.state.isClicked);
    document.querySelector(".photo-review").style.display = "flex";
    
  }

  render() {
    if (this.state.isClicked) {
      return (
        <>
        <picture 
          id={this.props.id} 
          className="picture" 
          style={this.pictureStyle} 
          onClick={this.handlePicture}>
        </picture>
        </>
      );
    }
    else {
      return (
        <picture 
          id={this.props.id} 
          className="picture" 
          style={this.pictureStyle} 
          onClick={this.handlePicture}>
        </picture>
      );
    }
  }
}
export default Picture;