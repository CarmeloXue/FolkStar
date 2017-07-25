import React,{Component} from 'react';
import SignInForm from './signInForm';
import {connect} from 'react-redux';

class signInContainer extends Component{
  constructor(props){
    super(props)

    this.state={
      user:{
        name:null,
        password:null,
        confirmPassword:null
      }
    }

    this.onChange = this.onChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  onChange(){

  }

  onConfirm(e){
    e.preventDefault();
    alert(e);
  }

  onCancel(){

  }

  render(){
    return(
      <div className="container">
        <SignInForm onChange={this.onChange}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}/>
      </div>
    );
  }
}

function mapStateToProps(state,ownProps) {
  return{state}
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps,mapDispatchToProps)(signInContainer);
