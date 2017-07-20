import React from 'react';
import {Grid,Col,Row,Thumbnail} from 'react-bootstrap';

const BowuPage = ()=>{
  return (
    <div className="container">
      <Grid>
        <Row>
          <Col xs={6} md={4}>
          <div className="item active">
            <Thumbnail src={require('../../img/Chinese Painting/Wuhufan/江天览胜图.jpg')} className="d-block w-100" alt="..."/>
          </div>
          </Col>
          <Col xs={6} md={4}>
          <div className="item">
            <Thumbnail src={require("../../img/Chinese Painting/Wuhufan/秋山飞瀑图.jpg")} className="d-block w-100" alt="..."/>
          </div>
          </Col>
          <Col xs={6} md={4}>
          <div className="item">
            <Thumbnail src={require("../../img/Chinese Painting/Wuhufan/潇湘雨过.jpg")} className="d-block w-100" alt="..."/>
          </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <div className="item active">
              <Thumbnail src={require('../../img/Chinese Painting/Wuhufan/灵岩山寺.jpg')} className="d-block w-100" alt="..."/>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div className="item">
              <Thumbnail src={require("../../img/Chinese Painting/Wuhufan/南岳松云图.jpg")} className="d-block w-100" alt="..."/>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div className="item">
              <Thumbnail src={require("../../img/Chinese Painting/Wuhufan/云表奇峰.jpg")} className="d-block w-100" alt="..."/>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};
export default BowuPage;

