import React from 'react'

export default function Alert(props) {
  return (
    props.alertObj && <div className={`alert alert-${props.alertObj.type} alert-dismissible fade show`}role="alert">
    <strong>{props.alertObj.type.charAt(0).toUpperCase()+props.alertObj.type.slice(1)}</strong>: {props.alertObj.msg}
  </div>
  );
}
