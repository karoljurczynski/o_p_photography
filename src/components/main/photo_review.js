import React from 'react';
import '../../styles/components/main/photo_review/photo_review.css';
import Picture from './picture';

class PhotoReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleExit = this.handleExit.bind(this);
  }
  handleExit() {
    document.querySelector(".photo-review").style.display = "none";

  }

  render() {
    return (
      <div className="photo-review">

        <span className="photo-review__previous">
          <span className="photo-review__previous__top-bar"></span>
          <span className="photo-review__previous__bottom-bar"></span>
        </span>

        <section className="photo-review__center">
          <div className="photo-review__center__picture"></div>
          <h3 className="photo-review__center__title" onClick={this.handleExit}>sdsad sadsad asd</h3>
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