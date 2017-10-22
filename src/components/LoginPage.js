import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

 
export const LoginPage = ({startLoginGoogle, startLoginGithub}) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>Manage your expenses.</p>
      <button className="button button--login" onClick={startLoginGoogle}><i className="fa fa-google"></i> Login With Google</button> 
      <button className="button button--login" onClick={startLoginGithub}><i className="fa fa-github"></i> Login With GitHub</button>   
      
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLoginGoogle: () => dispatch(startLogin('google')),
  startLoginGithub: () => dispatch(startLogin('github'))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);