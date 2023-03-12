import React, { Component } from "react";
import Slider from "react-slick";
import "./Sixthsec.css"


export default class CarosoulComponent extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="container" style={{"paddingTop":"20px"}}>
        
        <Slider {...settings}>
          <div>
            <img alt="avatar" src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1678610424/Screenshot_47_df9bg7.png"/>
             <h1>Ankit Arora</h1>
             <p>Co-Founder</p>
          </div>
          <div>
            <img alt="avatar" src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1678610424/Screenshot_47_df9bg7.png"/>
             <h1>Ankit Arora</h1>
             <p>Co-Founder</p>
          </div>
          <div>
            <img alt="avatar" src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1678610424/Screenshot_47_df9bg7.png"/>
             <h1>Ankit Arora</h1>
             <p>Co-Founder</p>
          </div>
          <div>
            <img alt="avatar" src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1678610424/Screenshot_47_df9bg7.png"/>
             <h1>Ankit Arora</h1>
             <p>Co-Founder</p>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1678610424/Screenshot_47_df9bg7.png" alt="avatar"/>
             <h1>Ankit Arora</h1>
             <p>Co-Founder</p>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1678610424/Screenshot_47_df9bg7.png" alt="avatar"/>
             <h1>Ankit Arora</h1>
             <p>Co-Founder</p>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1678610424/Screenshot_47_df9bg7.png" alt="avatar"/>
             <h1>Ankit Arora</h1>
             <p>Co-Founder</p>
          </div>
          </Slider>
      </div>
    );
  }
}