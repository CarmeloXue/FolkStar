import React,{Component} from 'react';
import SignInForm from './signInForm';
class signInContainer extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="container">
        <SignInForm />
      </div>
    );
  }
}
export default signInContainer;
