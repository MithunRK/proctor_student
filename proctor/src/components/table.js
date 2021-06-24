import React, { useState,useEffect } from 'react';
import '../app.css';
import MaterialTable from 'material-table';
const Table=()=>{
   
   const columns=[
     {
      title: 'Name',field: 'name'
     },
     {
      title: 'USN',field: 'usn'
     },
     {
      title: 'Department',field: 'department'
     },
     {
      title: 'Email',field: 'email'
     },
     
     {
      title: 'Section',field: 'section'
     },
     {
      title: 'PhoneNumber',field: 'mobile_no'
     }
   ]
   const [data, setData] = useState([])
   useEffect(()=>{
       fetch("http://localhost:3000/studinformation")
       .then(resp=>resp.json())
       .then(resp=>{
        setData(resp)})
   },[])
  return(
     <div className="table">
       <MaterialTable 
        title="" 
        data={data}
        columns={columns}
        options={{
          search:true,
          paging:false,
          exportButton:true
        }}
       />
     </div>
  )
}

export default Table;