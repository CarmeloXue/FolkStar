import  * as actions from '../actions/actionDefine';


function userRegReducer(state = [],action) {
  switch (action.type)
  {
    case actions.CREATE_USER:
      return [...state,Object.assign({},action.userReg)];
    default:
      return state;
  }
}

export default userRegReducer;


