import React,{Component} from 'react';
import $ from 'jquery';

class Header extends Component{
  constructor(props)
  {
    super(props);
  }

  render(){
    return(
      <nav className="nav navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse-area" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="/" className="navbar-brand">FolkStar</a>
          </div>

          <ul className="nav navbar-nav">
            <li key="sixue"><a href="sixue">思学</a></li>
            <li key="zhengui"><a href="zhengui">珍贵</a></li>
            <li key="bowu"><a href="bowu">博物</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-menu-right" data-toggle="dropdown" href="#" role="button" >更多</a>
              <div className="dropdown-menu">
                <li><a className="dropdown-item" href="#">加入我们</a></li>
                <li><a className="dropdown-item" href="#">关于</a></li>
              </div>
            </li>
          </ul>

          <div className="collapse navbar-collapse navbar-right" id="collapse-area">

            <form className="nav navbar-form navbar-left">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="搜索"/>
              </div>
              <button type="submit" className="btn btn-default">搜索</button>
            </form>

            <ul className="nav navbar-nav navbar-right">
              <li><a href="signin">登录</a></li>
              <li><a href="signup">注册</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
