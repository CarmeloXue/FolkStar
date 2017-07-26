import React,{Component} from 'react';
<<<<<<< HEAD
import {Navbar, Nav, NavItem,NavDropdown,MenuItem,FormControl,FormGroup,Button} from 'react-bootstrap';

const Header = ()=>{
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">FolkStar</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="bowu">博物</NavItem>
          <NavItem eventKey={2} href="sixue">思学</NavItem>
          <NavItem eventKey={3} href="zhengui">珍柜</NavItem>
          <NavDropdown eventKey={3} title="关于" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>

        <Nav pullRight>
          <NavItem eventKey={1} href="signin">登录</NavItem>
          <NavItem eventKey={2} href="signup">注册</NavItem>
        </Nav>

        <Navbar.Form pullRight>
          <FormGroup>
            <FormControl type="text" placeholder="搜索" />
          </FormGroup>
          {' '}
          <Button type="submit">提交</Button>
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>

 /* <nav classNameName="nav navbar-default navbar-fixed-top">
    <div classNameName="container-fluid">
      <div classNameName="navbar-header">
        <a classNameName="navbar-brand">FolkStar</a>
      </div>
      <ul classNameName="nav navbar-nav">
        <li><a href="/">首页</a></li>
        <li><a href="bowu">博物</a></li>
        <li><a href="sixue">思学</a></li>
        <li><a href="zhengui">珍柜</a></li>
        <li><a href="about">关于</a></li>
      </ul>

      <ul classNameName="nav navbar-nav navbar-right">
        <li><a>Login</a></li>
      </ul>

      <form classNameName="navbar-form navbar-right">
        <div classNameName="form-group">
          <input type="text" classNameName="form-control" placeholder="Search"/>
        </div>
        <button type="submit" classNameName="btn btn-primary">Search</button>
      </form>


    </div>
  </nav>*/
  );
};
=======
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
             <li><a href="signup" className="btn btn-warning">注册</a></li>
           </ul>
         </div>
       </div>
     </nav>
    );
  }
}
>>>>>>> 3686ecc71302c2cbe3f680210660c7388cb9bfb1
export default Header;

