import React from 'react';
import {Link} from 'react-router';

const HomePage = ()=>{
  return (
    <div className="jumbotron">
      <h1>Folk Star</h1>
      <p>Every Folk is a shiny Star</p>
      <Link to="about" className="btn btn-primary">Learn More</Link>
    </div>
  )
}

export default HomePage;
