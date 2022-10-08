import React from 'react'
import "../styles/LastComponent.css"
import { BreadCrumbs } from './BreadCrumbs'
import { LeftComponent } from './LeftComponent'

export const LastComponent = () => {
  return (
    <div className='container'>
        <div className="leftContent">
            <LeftComponent/>
        </div>
        <div className="rightContent">
        <BreadCrumbs title="Add Client" name1="Client Master" name2="Add Client" name3="Succes"/>
        <div className="success">
        <i class="fa-solid fa-circle-check"></i>
        <h5>You have successfully added Infosys.</h5>
        <button className='AddClient'> Add More Clients</button>
         <button className='GoMaster'>Go to Client Master</button>
        </div>
        <div className="SuccessDiv">
            <div className="Card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Integrated_Service_Solutions_%28logo%29.svg/1200px-Integrated_Service_Solutions_%28logo%29.svg.png" alt="" />
                <h5>ISS Facility Services</h5>
                <p>4 Clients</p>
                <button>Add FCM</button>
                <p>View All</p>
            </div>
            <div className="Card">
                <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1415386231/utypaslbyxwfuwhfdzxd.png" alt="" />
                <h5>Infosys</h5>
                <p>--</p>
                <button>Add Client</button>
                <p>View All</p>
            </div>
            <div className="Card">
            <i class="fa-solid fa-house"></i>
                <h5>Sites</h5>
                <p>--</p>
                <button className='config'>Go to Config</button>
                <p>View All</p>
            </div>
            <div className="Card card1">
            <i class="fa-solid fa-house"></i>
                <h5>Tenant Groups</h5>
                <p>--</p>
                <button>Add Tenant Group</button>
                <p>View All</p>
            </div>
            <div className="Card card1">
            <i class="fa-solid fa-house"></i>
                <h5>Tenants</h5>
                <p>--</p>
                <button>Add Tenant</button>
                <p>View All</p>
            </div>
        </div>
        </div>
    </div>
  )
}
