import React from 'react';
import '../../styles/components/main/photo_review/photo_review.css';
import Picture from './picture';

class PhotoReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.pictureStyle = {
      width: this.props.style.width * 2,
      height: this.props.style.height * 2,
      backgroundColor: this.props.style.backgroundColor,
    }
  }
  
  render() {
    return (
      <div className="photo-review">

        <span className="photo-review__previous">
          <span className="photo-review__previous__top-bar"></span>
          <span className="photo-review__previous__bottom-bar"></span>
        </span>

        <section className="photo-review__center">
          <div 
            className="photo-review__center__picture" 
            style={this.pictureStyle}></div>
          <h3 
            className="photo-review__center__title" 
            onClick={this.props.onClosed}>
            {this.props.title ? this.props.title : "Back"}
          </h3>
        </section>

        <span className="photo-review__next">
          <span className="photo-review__next__top-bar"></span>
          <span className="photo-review__next__bottom-bar"></span>
        </span>

      </div>
    );
  }
}
export default PhotoReview;