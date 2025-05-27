import axios from "axios";
import   react, { useEffect, useState } from "react"
function Payment (){

    
        const[list,setlist]=useState([''])
        useEffect(()=>{
            axios.get("http://localhost:1337/api/payment").then((Response)=>{
    
    
                setlist(Response.data)
            })
        },[])
        return(
    <div class="card-body">
    <div class="table-responsive no-radius">
    <table class="table table-hover table-center">
    <thead>
    
    <tr>
    
    
    <th class="text-center">Truck Number</th>
    <th class="text-end">Driver Name</th>
    <th class="text-end">Payment Id</th>
    <th class="text-end">Date</th>
    <th class="text-end">Payment Amount</th>

    </tr>
    </thead>
    
    { list.map((val)=>{
        return(
            <>
        
    <tbody>
    <tr>
    <td class="text-nowrap">
    <div class="font-weight-600">{val.t_number}</div>
    </td>
    <td class="text-nowrap">{val.d_name}</td>
    <td class="text-center">{val.p_id}</td>
    <td class="text-nowrap">{val.p_amount}</td>

    
    <td class="text-nowrap">{val.p_datetime}</td>
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
    }export default Payment;