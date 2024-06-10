import React from 'react'

function Alerts(props) {
  return (
    props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>
    {props.alert.type} : {props.alert.msg}
    </strong>
    
  </div>
  )
}

export default Alerts
