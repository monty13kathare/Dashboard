import React from 'react'
import { BreadCrumbs } from './BreadCrumbs'
import { LeftComponent } from './LeftComponent'
import { StepComponent } from './StepComponent'
import "../styles/ModuleSetup.css"
import { Checkbox, FormControlLabel } from '@mui/material'
import { SaveResetBtn } from './SaveResetBtn'

export const ModuleSetup = () => {
  return (
    <div className='container'>
<div className="leftContent">
<LeftComponent/>
</div>
<div className="rightContent">
<BreadCrumbs title="Add Client" name1="Client Master" name2="Add Client" name3="Modules Setup"/>
<div className="Modules">
<div className="stepper4">
<div className='steps4'>
<div className="step1 s1">
    <p><i class="fa-solid fa-circle-check"></i></p>
    <h4>CREATE PROFILE</h4>
</div>
<div className="step2 s1">
     <p><i class="fa-solid fa-circle-check"></i></p>
    <h4>PAYMENT SETUP</h4>
</div>
<div className="step3 s1">
     <p><i class="fa-solid fa-circle-check"></i></p>
    <h4>THEME SETUP</h4>
</div>
<div className="step4 s1">
     <p>04</p>
    <h4>MODULES SETUP</h4>
</div>

    </div>
    </div>
    <div className="titleName">
        <h3>Modules Setup</h3>
        <p>Select the modules that the client can use.</p>
    </div>
    <div className="ComboDiv">
    <div className="checkDiv">
    <FormControlLabel control={<Checkbox defaultChecked />} label="Home/Dashboard" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Helpdesk" />
    <FormControlLabel control={<Checkbox  defaultChecked/>} label="Assets" />
  <div className="daily">
  <FormControlLabel className='ck1' control={<Checkbox defaultChecked />} label="Daily Tasks" />
  <i class="fa-solid fa-angle-right"></i>
  </div>
    <FormControlLabel control={<Checkbox  />} label="PPM" />
    <FormControlLabel control={<Checkbox  defaultChecked/>} label="Employees" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Profile" />
    <FormControlLabel control={<Checkbox  defaultChecked/>} label="Transactions" />
    </div>
    <div className="task">
      <div className="header">
      <i class="fa-solid fa-compact-disc icon"></i>
        <div className="nam">
            <h4>Daily Tasks</h4>
            <p>Select the sub modules that the client can use.</p>
        </div>
        <button> <i class="fa-solid fa-check"></i>Visible to Client</button>
      </div>
      <div className="subModule">
      <FormControlLabel control={<Checkbox  />} label="Show All Sub Modules" />
      <FormControlLabel control={<Checkbox  />} label="Summary" />
      <FormControlLabel control={<Checkbox  />} label="View Tasks" />
      <FormControlLabel control={<Checkbox  />} label="Create New Task" />
      <FormControlLabel control={<Checkbox  />} label="Logbook" />
      <FormControlLabel control={<Checkbox  />} label="Logssheet" />
      <FormControlLabel className='d' control={<Checkbox  />} label="Daily" />
      <FormControlLabel className='d' control={<Checkbox  />} label="Activity Wise" />
      </div>
    </div>
   
    </div>
    <SaveResetBtn link1="success"/>
</div>
</div>
    </div>
  )
}
