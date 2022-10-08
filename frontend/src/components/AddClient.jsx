import React from 'react'
import { LeftComponent } from './LeftComponent';
import "../styles/AddClient.css";
import { BreadCrumbs } from './BreadCrumbs';
// import { StepComponent } from './StepComponent';
import { SaveResetBtn } from './SaveResetBtn';


export const AddClient = () => {
  return (
    <div className='container'>
<div className="leftContent">
    <LeftComponent color="red"/>
</div>
<div className="rightContent">
<BreadCrumbs title="Add Client" name1="Client Master" name2="Add Client" name3="Create Profile"/>
<div className="CreateProfile">
    <div className="stepper1">
    <div className='steps1'>
<div className="step1 s1">
    <p>01</p>
    <h4>CREATE PROFILE</h4>
</div>
<div className="step2 s1">
     <p>02</p>
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
        <h4>Create Client Profile</h4>
        <p>Add some basic information related to the client</p>
    </div>
    <div className="CreateLogo">
        <div className="logo">
        <i class="fa-solid fa-plus"></i>
        </div>
        <div className="logoName">
            <h5>Company Logo</h5>
            <p>Logo ratio should 1:1 and should be 120px X 120px</p>
        </div>
    </div>
    <div className="InputField">
        <form action="#">
            <input type="text" placeholder='Company Name' required/>
            <input type="text" placeholder='Website' required/>
          
            <select id="">
            <option value="">Select Bussiness Category</option>
            <option value="">Arvind</option>
           </select>
           <select id="">
            <option value=""></option>
            <option value="">Select Facility Management Company</option>
            <option value="">Management Company</option>
           </select>
            <input type="email" placeholder='Company Email Address' required/>
            <input type="text" placeholder='Mobile Number' required/>
            <select id="">
            <option value="">Select State</option>
            <option value="">Arvind</option>
           </select>
           <select id="city">
            <option value="">Select City</option>
            <option value="">Arvind</option>
           </select>
           <input className='pin' type="text" placeholder='PinCode' required/>
            <input type="text" placeholder='GST Number' required/>
            <input type="text" placeholder='Fax Number' required/>

        </form>
    </div>
   <SaveResetBtn link1="/pay"/>
</div>
</div>
    </div>
  )
}
