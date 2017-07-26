//import React,{Component} from 'react';
import React from 'react';
import Swiper from 'swiper';
import '../../styles/HomePage.css';

class HomePage extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    let swiper = new Swiper(".swiper-container",{
      autoplay:1000,
      pagination:'.swiper-pagination',
      paginationType:"bullets",
      nextButton:'.swiper-button-next',
      prevButton:'.swiper-button-prev',
      loop:true
    });
  }

  render(){
    return(
      <div className="container-fluid">
        <div className="row">
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
              <div className="swiper-slide">
                <img src={require("../../img/Sight/s1.jpg")} alt=""/>
              </div>
              <div className="swiper-slide">
                <img src={require("../../img/Sight/s2.jpg")} alt=""/>
              </div>
            </div>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            <div className="swiper-pagination"></div>
          </div>
        </div>
        <div className="row">
          <p>相关内容</p>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {

};

export default HomePage;