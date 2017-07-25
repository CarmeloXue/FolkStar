import React from 'react';
import {Grid,Col,Row,Thumbnail} from 'react-bootstrap';

const BowuPage = ()=>{
  return (
    <div className="container">
      <Grid>
        <Row>
          <Col xs={6} md={4}>
          <div className="item active">
            <Thumbnail src={require('../../img/Painting/Wuhufan/w1.jpg')} className="d-block w-100" alt="..."/>
          </div>
          </Col>
          <Col xs={6} md={4}>
          <div className="item">
            <Thumbnail src={require("../../img/Painting/Wuhufan/w2.jpg")} className="d-block w-100" alt="..."/>
          </div>
          </Col>
          <Col xs={6} md={4}>
          <div className="item">
            <Thumbnail src={require("../../img/Painting/Wuhufan/w3.jpg")} className="d-block w-100" alt="..."/>
          </div>
          </Col>
        </Row>

      </Grid>
    </div>
  );
};
export default BowuPage;

