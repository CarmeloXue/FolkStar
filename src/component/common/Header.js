import React,{Component} from 'react';
const Header = ()=>{
  return (
  <nav className="nav navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand">FolkStar</a>
      </div>
      <ul className="nav navbar-nav">
        <li><a href="/">首页</a></li>
        <li><a href="bowu">博物</a></li>
        <li><a href="sixue">思学</a></li>
        <li><a href="zhengui">珍柜</a></li>
        <li><a href="about">关于</a></li>
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
  );
};
export default Header;
