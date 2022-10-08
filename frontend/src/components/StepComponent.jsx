import React from 'react';
import "../styles/StepComponent.css";

export  const StepComponent = (props ,{ style }) => {
  return (
    <div className='steps'>
<div className="step s1" style={style}>
    <p>{props.icon1}</p>
    <h4>CREATE PROFILE</h4>
</div>
<div className="step s2">
     <p>{props.icon2}</p>
    <h4>PAYMENT SETUP</h4>
</div>
<div className="step s3">
     <p>{props.icon3}</p>
    <h4>THEME SETUP</h4>
</div>
<div className="step s4">
     <p>{props.icon4}</p>
    <h4>MODULES SETUP</h4>
</div>

    </div>
  )
}
