import axios from "axios";
import   react, { useEffect, useState } from "react"
function Driver (){

const[list,setlist]=useState([''])
    useEffect(()=>{
        axios.get("http://localhost:1337/api/driver").then((Response)=>{


            setlist(Response.data)
        })
    },[])
    return(
<div class="card-body">
<div class="table-responsive no-radius">
<table class="table table-hover table-center">
<thead>

<tr>
<th>TdName</th>
<th>Driver Name</th>
<th class="text-center">Driver Mobile Number</th>
<th class="text-center">Driver Address</th>
<th class="text-end">Driver License Number</th>
<th class="text-end">Driver License Image</th>
</tr>
</thead>

{ list.map((val)=>{
    return(
        <>
    
<tbody>
<tr>
<td class="text-nowrap">
<div class="font-weight-600">{val.t_dname}</div>
</td>
<td class="text-nowrap">{val.d_name}</td>
<td class="text-nowrap">{val.d_mobile_number}</td>
<td class="text-center">{val.d_address}</td>
<td class="text-center">{val.d_licencse_number}</td>
<td class="text-center"><img src={"http://localhost:1337/public/"+val.d_licencseimage} style={{width:"50px"}}></img></td>



                           
                           



</tr>

</tbody>
    
        
</>
    )
})
}
</table>
</div>
</div>

    )
}export default Driver;