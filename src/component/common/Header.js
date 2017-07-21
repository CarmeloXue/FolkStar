import React,{Component} from 'react';
import {Navbar, Nav, NavItem,NavDropdown,MenuItem} from 'react-bootstrap';

const Header = ()=>{
  return (
<Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">React-Bootstrap</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Link Right</NavItem>
          <NavItem eventKey={2} href="#">Link Right</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

 /* <nav classNameName="nav navbar-default navbar-fixed-top">
    <div classNameName="container-fluid">
      <div classNameName="navbar-header">
        <a classNameName="navbar-brand">FolkStar</a>
      </div>
      <ul classNameName="nav navbar-nav">
        <li><a href="/">首页</a></li>
        <li><a href="calligraphy">书法</a></li>
        <li><a href="painting">国画</a></li>
        <li><a href="handcraft">手工艺</a></li>
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
  )
}
export default Header

