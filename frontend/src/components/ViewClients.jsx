import { Pagination } from '@mui/material';
import React from 'react';
import "../styles/ViewClients.css";
import { BreadCrumbs } from './BreadCrumbs';
import { LeftComp2 } from './LeftComp2';
import { TableData } from './TableData';





const ViewClients = () => {

  

  return (
    <div className='container'>
<div className="leftContent">
  <LeftComp2 link="/add"/>
</div>
<div className="rightContent">
<BreadCrumbs title="View Clients" name1="Client Master" name2="View Clients" />
<div className="tableContent">
<div className="topHeader">
    <div className="search2">
    <i class="fa-solid fa-magnifying-glass"></i>
    <input type="search" placeholder='Search'/>
    </div>
   <div className="buttons">
   <select>
    <option value="Columns">Columns</option>
    <option value="Columns">Columns</option>
    <option value="Columns">Columns</option>
   </select>
  <button><i class="fa-solid fa-download"></i> Export</button>
   </div>
</div>
<div className="table">
<TableData/>
<div className="pagination">
<Pagination count={50} variant="outlined" shape="rounded" />
<div className="nextBtn">
  <button className='preBtn'><i class="fa-solid fa-chevron-left"></i> Previous</button>
  <button >Next <i class="fa-solid fa-angle-right"></i></button>
</div>
</div>
</div>
</div>

</div>
    </div>
  )
}

export default ViewClients