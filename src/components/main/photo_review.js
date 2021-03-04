import React from 'react';
import '../../styles/components/main/photo_review/photo_review.css';
import Picture from './picture';

const reviewButtonsTransition = () => {
  const buttons = [document.querySelector('.photo-review__previous'), document.querySelector('.photo-review__next')];
  
  buttons.forEach(element => {

    element.addEventListener("mouseover", () => {
      element.children[0].style.backgroundColor = "#FFFFFF";
      element.children[1].style.backgroundColor = "#FFFFFF";
    });

    element.addEventListener("mouseout", () => {
      element.children[0].style.backgroundColor = "#828282";
      element.children[1].style.backgroundColor = "#828282";
    });

  });
}
class PhotoReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLastPhoto: false
    };
    this.pictureStyle = {
      width: this.props.style.width,
      height: "90%", //this.props.style.height
      backgroundColor: this.props.style.backgroundColor,
    }
  }
  componentDidMount() {
    reviewButtonsTransition();
  }

  render() {
    return (
      <div className="photo-review">

        <span className="photo-review__previous">
          <span className="photo-review__previous__top-bar"></span>
          <span className="photo-review__previous__bottom-bar"></span>
        </span>

        <div 
            className="photo-review__picture" 
            style={this.pictureStyle}
           
            id={this.props.id}></div>
        <h3 
            className="photo-review__title" >
              {this.props.title ? this.props.title : ""}
        </h3>

        <span className="photo-review__next">
          <span className="photo-review__next__top-bar"></span>
          <span className="photo-review__next__bottom-bar"></span>
        </span>
        <a 
          className="photo-review__back"
          onClick={this.props.onClosed}>BACK</a>

      </div>
    );
  }
}
export default PhotoReview;