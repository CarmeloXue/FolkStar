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

 /* <nav className="nav navbar-default navbar-fixed-top">
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
  </nav>*/
  )
}
export default Header

