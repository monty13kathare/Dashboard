import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/SaveResetBtn.css"

export const SaveResetBtn = (props) => {
  return (
    
         <div className="SaveResetBtn">
     <Link to={props.link1}>
     <button className='save' >Save & Continue <i class="fa-solid fa-chevron-right"></i></button>
     </Link>
        <button className='reset'><i class="fa-solid fa-rotate-right"></i> Reset</button>
    </div>
    
  )
}
