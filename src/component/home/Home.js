//import React,{Component} from 'react';
import React from 'react';
import '../../styles/HomePage.css';

const HomePage = ()=>{
  return (
    <div className="container">
      <div id="carouselControls" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselControls" data-slide-to="0" className="active"></li>
          <li data-target="#carouselControls" data-slide-to="1"></li>
          <li data-target="#carouselControls" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">

          <div className="item active">
            <img src={require('../../img/Sight/山水1.jpg')} className="d-block w-100" alt="..."/>
          </div>

          <div className="item">
            <img src={require("../../img/Sight/山水2.jpg")} className="d-block w-100" alt="..."/>
          </div>

          <div className="item">
            <img src={require("../../img/Sight/山水3.jpg")} className="d-block w-100" alt="..."/>
          </div>

        </div>

        <a className="left carousel-control" href="#carouselControls" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#carouselControls" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>

      </div>
    </div>
  );
};

/*const HomePage = ()=>{
  return (
   <div className="container">
     <div id="work-carousel" className="carousel slide" data-ride="carousel">

       <ol className="carousel-indicators">
         <li data-target="#work-carousel" data-slide-to="0" className="active"></li>
         <li data-target="#work-carousel" data-slide-to="1"></li>
         <li data-target="#work-carousel" data-slide-to="2"></li>
         <li data-target="#work-carousel" data-slide-to="3"></li>
       </ol>

       <div className="carousel-inner" role="listbox">
         <div className="item active">
           <img src={require('../../img/Chinese Painting/Qibaishi/秋叶草虫.jpg')} alt="..."/>
           <div className="carousel-caption">
             秋叶草虫
           </div>
         </div>
         <div className="item">
           <img src={require("../../img/Chinese Painting/Qibaishi/贝叶草虫4.jpg")} alt="..."/>
           <div className="carousel-caption">
             贝叶草虫
           </div>
         </div>
         <div className="item">
           <img src={require("../../img/Chinese Painting/Qibaishi/贝叶蝉.jpg")} alt="..."/>
           <div className="carousel-caption">
             贝叶禅
           </div>
         </div>
         <div className="item">
           <img src={require("../../img/Chinese Painting/Qibaishi/丝瓜小蜂.jpg")} alt="..."/>
           <div className="carousel-caption">
             丝瓜小蜂
           </div>
         </div>
       </div>

       <a className="left carousel-control" href="#work-carousel" role="button" data-slide="prev">
         <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
         <span className="sr-only">Previous</span>
       </a>
       <a className="right carousel-control" href="#work-carousel" role="button" data-slide="next">
         <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
         <span className="sr-only">Next</span>
       </a>

     </div>
   </div>

  );
};*/

export default HomePage;
