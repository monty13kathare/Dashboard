import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/LeftComponent.css"

export const LeftComponent = (props ) => {

  
  return (
    <>
      
<h2 className='t1'>Company name</h2>
<div className="search">
<i class="fa-solid fa-magnifying-glass"></i>
    <input type="search" placeholder='Search modules'/>
</div>
<h2 className='t2'>client master</h2>
<p className='btn b1'>View Clients</p>
<Link to={props.link}>
<p className='btn b2'>Add Client</p>
</Link>

<div className="profile">
    <img src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg&w=1200" alt="" />
    <span></span>
    <div className="name">
        <h4>Arvind Kathare</h4>
        <p>arvindkathare13@gmail.com</p>
    </div>
    <i class="fa-solid fa-right-from-bracket"></i>
</div>

    </>
  )
}
