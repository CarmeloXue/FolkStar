import React,{Component} from 'react';

const signInForm = ({onChange,onConfirm,onCancel})=>{
  return(
    <div className="well">
      <form className="form-horizontal" name="userReg">
        <div className="form-group">
          <label className="col-lg-2 col-md-2 text-to-right">用户名</label>
          <div className="col-lg-4 col-md-4">
            <input type="text" name="userName" className="form-control" onChange={onChange}/>
          </div>
        </div>

        <div className="form-group">
          <label className="col-lg-2 col-md-2 text-to-right">密码</label>
          <div className="col-lg-4 col-md-4">
            <input type="text" name="password" className="form-control" onChange={onChange}/>
          </div>
        </div>

        <div className="form-group">
          <label className="col-lg-2 col-md-2 text-to-right">密码确认</label>
          <div className="col-lg-4 col-md-4">
            <input type="text" name="passwordConfirm" className="form-control" onChange={onChange}/>
          </div>
        </div>

        <div className="form-group">
          <div className="col-lg-offset-2 col-md-offset-2">
            <button className="btn btn-success" onclick={onConfirm}>确认注册</button>
            <button className="btn btn-default" onClick={onCancel}>取消</button>
          </div>
        </div>

      </form>
    </div>

  )
}

signInForm.propTypes = {
  onChange:React.PropTypes.func,
  onConfirm:React.PropTypes.func,
  onCancel:React.PropTypes.func
}

export default signInForm;
