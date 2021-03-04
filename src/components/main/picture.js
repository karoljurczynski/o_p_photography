import React from 'react';
import '../../styles/components/main/picture/picture.css';
import PhotoReview from './photo_review';

let scrollY = 0;

const bodyFreezer = (isReviewOpened = false) => {
  const body = document.querySelector("body");

  if (isReviewOpened) {
    scrollY = document.documentElement.scrollTop;

    // BODY FREEZING
    body.style.cssText = `
      top: ${-(document.documentElement.scrollTop)}px;
      position: fixed`;
  }
  else {
    // BODY POSITION CORRECTING
    body.style.cssText = `
      top: ${-(document.documentElement.scrollTop)}px;
      position: static`;

    window.scroll(0, scrollY);
  }
}

class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      isReviewMounted: false
    };

    this.handleReviewMounting = this.handleReviewMounting.bind(this);
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
  handleReviewMounting(e) {
    this.setState({isReviewMounted: !this.state.isReviewMounted});
    if(this.state.isReviewMounted)
      bodyFreezer();
    else
      bodyFreezer(true);
  }
  render() {
    return (
      <>
        <picture 
          id={this.props.id} 
          className="picture" 
          title={this.props.title}
          style={this.pictureStyle} 
          onClick={this.handleReviewMounting}>
        </picture>

        {this.state.isReviewMounted
          ? <PhotoReview
              id={this.props.id}
              title={this.props.title}
              style={this.pictureStyle}
              onClosed={this.handleReviewMounting} />
          : null}
      </>
    );
  }  
}
export default Picture;
