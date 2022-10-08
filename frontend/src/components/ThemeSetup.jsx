import { FormControlLabel, Radio } from '@mui/material';
import React from 'react';
import "../styles/ThemeSetup.css";
import { BreadCrumbs } from './BreadCrumbs';
import { LeftComponent } from './LeftComponent';
import { SaveResetBtn } from './SaveResetBtn';
import { StepComponent } from './StepComponent';

export const ThemeSetup = () => {
  return (
    <div className='container'>
        <div className="leftContent">
            <LeftComponent/>
        </div>
        <div className="rightContent">
        <BreadCrumbs title="Add Client" name1="Client Master" name2="Add Client" name3="Theme Setup"/>
        <div className="Theme">
        <div className="stepper3">
        <div className='steps3'>
<div className="step1 s1">
    <p><i class="fa-solid fa-circle-check"></i></p>
    <h4>CREATE PROFILE</h4>
</div>
<div className="step2 s1">
     <p><i class="fa-solid fa-circle-check"></i></p>
    <h4>PAYMENT SETUP</h4>
</div>
<div className="step3 s1">
     <p>03</p>
    <h4>THEME SETUP</h4>
</div>
<div className="step4 s1">
     <p>04</p>
    <h4>MODULES SETUP</h4>
</div>

    </div>
    </div>
    <div className="titleName">
        <h3>Theme Setup</h3>
        <p>Add information about the client to give them a personalized experience.</p>
    </div>
    <div className="color">
        <fieldset>
            <legend>Primary Color</legend>
            <p className='clr'></p>
            <p className='clrCode'>#153AC7</p>
            <i class="fa-solid fa-circle-info"></i>
        </fieldset>
        <p>Add Hex Value</p>
    </div>
    <div className="loginTheme">
        <h4>Login Theme</h4>
        <p>Select the lock and feel of the login page.</p>
        <FormControlLabel value="Paid" control={<Radio defaultChecked />} label="Use Color" />
        <div className="colorDiv">
            <p className='clr1'></p>
            <p className='clrCode'>#F8F9FD</p>
            <i class="fa-solid fa-circle-info"></i>
        </div>
        <h4>Where Should be the login modal?</h4>
        <div className="modal">
            <div className="leftModal">
                <div className='leftDiv'>
                    <p></p>
                </div>
                <FormControlLabel  control={<Radio  />} label="Left" className='radio'/>
            </div>
            <div className="rightModal">
                <div className='rightDiv'>
                    <p></p>
                </div>
                <FormControlLabel  control={<Radio  />} label="Right" className='radio'/>
            </div>
            <div className="centerModal">
                <div className='centerDiv'>
                    <p></p>
                </div>
                <FormControlLabel  control={<Radio defaultChecked />} label="Center" className='radio'/>
            </div>
        </div>
    </div>
    <SaveResetBtn link1="module"/>
        </div>
        
        </div>
    </div>
  )
}
