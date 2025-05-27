import axios from "axios";
import   react, { useEffect, useState } from "react"
function Viewtd (){

    
        const[list,setlist]=useState([''])
        useEffect(()=>{
            axios.get("http://localhost:1337/api/viewtd").then((Response)=>{
    
    
                setlist(Response.data)
            })
        },[])
        return(

            


            
    <div class="card-body">
    <div class="table-responsive no-radius">
    <table class="table table-hover table-center">
    <thead>
    
    <tr>
    
    <th>Truck Id</th>
    <th class="text-center">Truck Number</th>
    <th class="text-center">Truck Description</th>
    <th class="text-end">Driver Name</th>
   
    </tr>
    </thead>
    
    { list.map((val)=>{
        return(
            <>
        
    <tbody>
    <tr>
    <td class="text-nowrap">
    <div class="font-weight-600">{val.tid}</div>
    </td>
    <td class="text-nowrap">{val.t_number}</td>
    <td class="text-center">{val.t_description}</td>
    <td class="text-nowrap">{val.d_name}</td>
    
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
    }export default Viewtd;