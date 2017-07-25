import React,{Component} from 'react';
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
          <NavItem eventKey={1} href="./bowu">博物</NavItem>
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
  );
};
export default Header;

