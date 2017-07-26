import  * as actions from './actionDefine';

export function CreateUser(userReg) {
  return{type:actions.CREATE_USER,userReg};
}
