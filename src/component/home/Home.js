import React from 'react';
import Swiper from 'swiper';
import '../../styles/HomePage.css';

class HomePage extends React.Component{

  constructor(props){
    super(props)
  }

  componentDidMount(){
    let swiper = new Swiper(".swiper-container",{
      autoplay:1000,
      pagination:'.swiper-pagination',
      paginationType:"bullets",
      nextButton:'.swiper-button-next',
      prevButton:'.swiper-button-prev',
      loop:true
    })
  }

  render(){
    return(
      <div className="swiper-container">

        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={require("../../img/Painting/Qibaishi/q1.jpg")} alt=""/>
          </div>
          <div className="swiper-slide">
            <img src={require("../../img/Painting/Qibaishi/q2.jpg")} alt=""/>
          </div>
          <div className="swiper-slide">
            <img src={require("../../img/Painting/Qibaishi/q3.jpg")} alt=""/>
          </div>
        </div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        <div className="swiper-pagination"></div>
      </div>
    )
  }
}

export default HomePage;
