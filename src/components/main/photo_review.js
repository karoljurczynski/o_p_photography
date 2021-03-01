import React from 'react';
import '../../styles/components/main/photo_review/photo_review.css';
import Picture from './picture';

class PhotoReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="photo_review">
        <span className="photo_review__previous"> </span>
        <h3 className="photo_review__title"></h3>
        <Picture />
        <span className="photo_review__next"> </span>
      </div>
    );
  }
}
export default PhotoReview;