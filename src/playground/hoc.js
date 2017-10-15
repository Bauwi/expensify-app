// Higher Order Component - a component that renders anotehr component
// Reuse Code
//render hijacking
//abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is = {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin &&  <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};

//Require authentication
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
    <h1>Restricted Page</h1>
      {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please authenticate to view these infos</p>}       
   </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info); 

ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'));