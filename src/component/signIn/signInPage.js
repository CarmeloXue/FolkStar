import React,{Component} from 'react';
import * as uerRegActions from '../../actions/userRegAction';
import {connect} from 'react-redux';
import {generate} from 'shortid';

class signInContainer extends Component{
  constructor(props){
    super(props);

    this.state={
      userReg:{
        id:"",
        userName:"",
        password:"",
        confirmPassword:""
      }
    };

    this.onChange = this.onChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  onChange(e){
    const name = e.target.name;
    const value = e.target.value;
    const newUser = Object.assign({},this.state.userReg);
    newUser[name] = value;
    this.setState({userReg:newUser});
  }

  onConfirm(e){
    e.preventDefault();
    const newUser = Object.assign({},this.state.userReg);
    newUser.id = generate();
    this.setState({userReg:newUser});
    this.props.dispatch(uerRegActions.CreateUser(this.state.userReg));
  }

  RegisteredUserList(userItem,userIndex){
    return(
      <li className="list-group-item" key={userItem.id}> {userItem.userName} {userItem.password} {userItem.confirmPassword}</li>
    );
  }

  onCancel(){

  }

  render(){
    return(
      <div className="container">
        <div className="well">
          <form className="form-horizontal" name="userReg">
            <div className="form-group">
              <label className="col-lg-2 col-md-2 text-to-right">用户名</label>
              <div className="col-lg-4 col-md-4">
                <input type="text"
                       name="userName"
                       className="form-control"
                       onChange={this.onChange}
                       value={this.state.userReg.userName}/>
              </div>
            </div>

            <div className="form-group">
              <label className="col-lg-2 col-md-2 text-to-right">密码</label>
              <div className="col-lg-4 col-md-4">
                <input type="password"
                       name="password"
                       className="form-control"
                       onChange={this.onChange}
                       value={this.state.userReg.password}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="col-lg-2 col-md-2 text-to-right">密码确认</label>
              <div className="col-lg-4 col-md-4">
                <input type="password"
                       name="confirmPassword"
                       className="form-control"
                       onChange={this.onChange}
                       value={this.state.userReg.confirmPassword}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-lg-offset-2 col-md-offset-2">
                <button className="btn btn-success" onClick={this.onConfirm}>确认注册</button>
                <button className="btn btn-default" onClick={this.onCancel}>取消</button>
              </div>
            </div>
          </form>
        </div>
        <ul className="list-group">
          {this.props.userReg.map(this.RegisteredUserList)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state,ownProps) {
  return{
    userReg:state.userReg
  };
}

function mapDispatchToProps(dispatch) {
  return{

  };
}

signInContainer.propTypes = {
  dispatch:React.PropTypes.func,
  userReg:React.PropTypes.array
};

export default connect(mapStateToProps)(signInContainer);
