import React from 'react';
import '../../styles/components/main/picture/picture.css';
import { photosArray } from './main';
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
      isReviewMounted: false
    };

    this.handleReviewMounting = this.handleReviewMounting.bind(this);
    this.pictureStyle = {
      width: photosArray[this.props.data].width,
      height: photosArray[this.props.data].height,
      top: this.props.top,
      left: this.props.left,
      right: this.props.right,
      bottom: this.props.bottom,
      background: photosArray[this.props.data].src,
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
          id={this.props.data} 
          className="picture" 
          title={photosArray[this.props.data].title}
          alt={photosArray[this.props.data].alt}
          style={this.pictureStyle} 
          onClick={this.handleReviewMounting}>
        </picture>

        {this.state.isReviewMounted
          ? <PhotoReview
              id={this.props.data}
              title={photosArray[this.props.data].title}
              style={this.pictureStyle}
              onClosed={this.handleReviewMounting} />
          : null}
      </>
    );
  }  
}
export default Picture;
