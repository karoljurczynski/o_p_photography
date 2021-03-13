// IMPORTS

import React from 'react';
import '../../styles/components/main/spinner/spinner.css';


// COMPONENT

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false };
    this.loadingFunction = this.loadingFunction.bind(this);
  }

  loadingFunction() {
    // FOR DEBUGGING ONLY
    /*
    setTimeout(() => {
      this.setState({ isLoaded: !this.state.isLoaded });
      this.props.loaded();
    }, 2000);
    */
    window.addEventListener("load", () => {
      this.setState({ isLoaded: !this.state.isLoaded });
      this.props.loaded();
    });
  }

  componentDidMount() {
    this.loadingFunction();
  }

  render() {
    return (
      <div className={ this.state.isLoaded ? "spinner spinner--animate-exit" : "spinner" }>
        <div className={ this.state.isLoaded ? "spinner__item spinner__item--animate-exit" : "spinner__item" }></div>
      </div>
    );
  } 
}

// EXPORTING COMPONENT

export default Spinner;