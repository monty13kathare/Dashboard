import React from 'react'
import { BreadCrumbs } from './BreadCrumbs'
import { LeftComponent } from './LeftComponent'
import { StepComponent } from './StepComponent'
import "../styles/PaymentSetup.css";
import { Checkbox, FormControlLabel, Radio } from '@mui/material';
import { SaveResetBtn } from './SaveResetBtn';

export const PaymentSetup = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }


  return (
    <div className='container'>
    <div className="leftContent">
        <LeftComponent/>
    </div>
    <div className="rightContent">
    <BreadCrumbs title="Add Client" name1="Client Master" name2="Add Client" name3="Paymemt Setup"/>
    <div className="Payment">
    <div className="stepper2">
    <div className='steps2'>
<div className="step1 s1">
    <p><i class="fa-solid fa-circle-check"></i></p>
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
<div className="step3 s1">
     <p>04</p>
    <h4>MODULES SETUP</h4>
</div>

    </div>
    </div>
    <div className="titleName">
        <h3>Payment Setup</h3>
        <p>Set up payments for the client.</p>
    </div>
    <div className="InputField">
        <form action="#" onSubmit={handleSubmit}>
            <input className='inp1' type="text" placeholder='Billing Address' required/>
            <select id="" required>
            <option value="">Select State</option>
            <option value="">Chhattisgarh</option>
            <option value="">Bihar</option>
            <option value="">UttarPradesh</option>
           </select>
           <select id="slc2" required>
            <option value="">Select City</option>
            <option value="">Raipur</option>
            <option value="">Delhi</option>
            <option value="">Pune</option>
           </select>
            <input className='inp2' type="text" placeholder='Pincode' required/>
            <select id="slc3" required>
            <option value="">Select Number of Site Access</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
           </select>
           <div className="totalAmt">
            <span>Rs.</span>
            <input type="text" placeholder='Payable Amount per Site' required/>
            <p>Total:</p>
            <p><span>Rs</span>000000</p>
           </div>
          
           <input  type="text" placeholder='Discount (%)' required/>
            <input type="text" placeholder='Reason' required/>
        </form>
    </div>
    <div className="Pay">
        <div className="payMode">
            <h4>Payment Mode</h4>
            <div className="checkBox">
            <FormControlLabel control={<Checkbox  />} label="UPI" />
            <FormControlLabel control={<Checkbox  />} label="Net Banking" />
            <FormControlLabel control={<Checkbox  />} label="Cash" />
            <FormControlLabel control={<Checkbox  />} label="Cheque" />
            <FormControlLabel control={<Checkbox  />} label="Other" />
            </div>
        </div>
        <div className="payStatus">
            <h4>Payment Status</h4>
            <div className="checkBox">
            <FormControlLabel value="Paid" control={<Radio />} label="Paid" />
           <FormControlLabel value="Pending" control={<Radio />} label="Pending" />
            </div>
          
        </div>
       
    </div>
    <SaveResetBtn link1="theme"/>
    </div>
    </div>
    </div>
  )
}
