import React, { Component } from 'react';
import squareStatic from '../constants/trophy';
import anime from 'animejs';
<<<<<<< HEAD
=======
import { connect } from 'react-redux';
>>>>>>> origin/timeline
let randTranslateX;
let randTranslateY;
let randRotate;
class TrophySquare extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    randTranslateX = 1 + Math.random() * 100;
    randTranslateY = 1 + Math.random() * 100;
    randRotate = 1 + Math.random() * 90;
  }

  styleHandler() {
=======
    this.myref = React.createRef();
    this.scrollListener = this.scrollListener.bind(this);
    this.state = { isAnimated: false };
    this.style = this.initializeStyle();
  }

  initializeStyle = () => {
    randTranslateX = 1 + Math.random() * 100;
    randTranslateY = 1 + Math.random() * 100;
    randRotate = 1 + Math.random() * 90;
>>>>>>> origin/timeline
    switch (this.props.place) {
      case 3:
        return {
          backgroundColor: squareStatic.thirdPlaceColor,
          width: squareStatic.thirdPlaceWidth,
          height: squareStatic.thirdPlaceWidth,
          transform: `translate(${randTranslateX}px, ${randTranslateY}px) rotate(${randRotate}deg)`,
        };
      case 2:
        return {
          backgroundColor: squareStatic.secondPlaceColor,
          width: squareStatic.secondPlaceWidth,
          height: squareStatic.secondPlaceWidth,
          transform: `translate(${randTranslateX}px, ${randTranslateY}px) rotate(${randRotate}deg)`,
        };
      case 1:
        return {
          backgroundColor: squareStatic.firstPlaceColor,
          width: squareStatic.firstPlaceWidth,
          height: squareStatic.firstPlaceWidth,
          transform: `translate(${randTranslateX}px, ${randTranslateY}px) rotate(${randRotate}deg)`,
        };
    }
<<<<<<< HEAD
  }

  componentDidMount() {
    setTimeout(() => {
      let self = this;
      const { transform } = this.square.style;
      let splits = transform.split(' ');
      randTranslateX = splits[0].substring(10, splits[0].length - 3);
      randTranslateY = splits[1].substring(0, splits[1].length - 3);
      console.log(randTranslateX, randTranslateY);
      var animations = anime.timeline({
        easing: 'spring(10, 2000, 40, 12)',
      });
      animations
        .add({
          targets: self.square,
=======
  };

  scrollListener = () => {
    if (this.props.trophyChanged == this.props.place) {
      let self = this;
      const { transform } = this.myref.current.style;
      let splits = transform.split(' ');
      randTranslateX = splits[0].substring(10, splits[0].length - 3);
      randTranslateY = splits[1].substring(0, splits[1].length - 3);
      var animations = anime.timeline({
        easing: 'spring(10, 2000, 40, 11)',
      });
      animations
        .add({
          targets: self.myref.current,
>>>>>>> origin/timeline
          translateX: -randTranslateX,
          translateY: -randTranslateY,
          rotate: 0,
        })
        .add({
<<<<<<< HEAD
          targets: self.square,
          boxShadow: '5px 5px 30px white',
        });
    }, 0);
  }
  render() {
    return <div ref={(square) => (this.square = square)} style={{ ...this.styleHandler() }}></div>;
  }
}

export default TrophySquare;
=======
          targets: self.myref.current,
          boxShadow: '5px 5px 30px white',
          complete: () => {
            self.setState({ isAnimated: true });
          },
        });
    }
  };

  render() {
    if (!this.state.isAnimated) {
      this.scrollListener();
    }
    return <div ref={this.myref} style={{ ...this.style }} />;
  }
}

const mapStateToProps = (state) => {
  const { homeReducer } = state;
  return {
    trophyChanged: homeReducer.trophyChanged,
  };
};

export default connect(mapStateToProps)(TrophySquare);
>>>>>>> origin/timeline
