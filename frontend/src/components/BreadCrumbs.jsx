import { Breadcrumbs, Link } from '@mui/material'
import React from 'react';
import "../styles/BreadCrumbs.css"

export const BreadCrumbs = (props) => {
  return (
    
      <div className="head">
    <div className="breadcrumb">
        <h4>{props.title}</h4>
        <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover"  color="text.primary" href="/">
          {props.name1}
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href={props.links}
        >
          {props.name2}
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href={props.links1}
        >
          {props.name3}
        </Link>
       
      </Breadcrumbs>
    </div>
    <i class="fa-solid fa-bell"></i>
</div>  
    
  )
}
