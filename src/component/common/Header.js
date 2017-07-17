import React,{Component} from 'react';
const Header = ()=>{
  return (
  <nav className="nav navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">Brand</a>
      </div>
      <ul className="nav navbar-nav">
        <li><a>Page One</a></li>
        <li><a>Page Two</a></li>
        <li><a>Page Three</a></li>
        <li><a>Page Four</a></li>
      </ul>

      <ul className="nav navbar-nav navbar-right">
        <li><a>Login</a></li>
      </ul>

      <form className="navbar-form navbar-right">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search"/>
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>


    </div>
  </nav>
  )
}
export default Header
