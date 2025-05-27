import axios from "axios";
import   react, { useEffect, useState } from "react"
function Truck (){

    
        const[list,setlist]=useState([''])
        useEffect(()=>{
            axios.get("http://localhost:1337/api/truck").then((Response)=>{
    
    
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
   
    <div class="col-lg-5 py-5 py-lg-0" >
                    <div class="bg-primary py-5 px-4 px-sm-5">
                        <form class="py-5" >                  
                            
                           
                        
                            <div>
                                <button class="btn btn-dark btn-block border-0 py-4" type="submit" >SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
    </tr>
    </thead>
    
    { list.map((val)=>{
        return(
            <>
        
    <tbody>
    <tr>
    <td class="text-nowrap">{val.tid}
   
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
    }export default Truck;