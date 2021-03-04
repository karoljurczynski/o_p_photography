import React from 'react';
import { FaNutritionix } from 'react-icons/fa';
import '../../styles/components/main/picture/picture.css';
import PhotoReview from './photo_review';

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
