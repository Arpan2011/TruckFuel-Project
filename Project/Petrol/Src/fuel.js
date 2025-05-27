import axios from "axios";
import   react, { useEffect, useState } from "react"
function Fuel (){

    const[fuel,setfuel]=useState();
    const datasub=(e,tid)=>{
  
e.preventDefault();
var fuelamt=fuel;
        var tid=tid;
           
        axios.post("http://localhost:1337/api/fuel",{famount:fuelamt,tid:tid}).then((response)=>{
        if(response.data.msg){
            alert(response.data.msg)
        }
        else{
            alert("Fuel detalis added Sucessfully")
        }
    })
      }
   
        const[list,setlist]=useState(['']);
        const[lst,setdatalist]=useState(['']);
        const[truck,settruckid]=useState(['']);
        useEffect(()=>{
            axios.get("http://localhost:1337/api/truck1").then((Response)=>{      
                setlist(Response.data)
                setdatalist(Response.data)
            })
        },[])

const gettruck=(e)=>{
    e.preventDefault();
  var tid=document.getElementById("tid").value;



  axios.get("http://localhost:1337/api/transports",{params:{ttid:tid}}).then((Response)=>{      
    setdatalist(Response.data)
},[tid])
  

}

const getfule=(fuel)=>{
 
  setfuel(fuel);

}





        return(
    <div class="card-body">
    <div class="table-responsive no-radius">



<select onChange={(e)=>gettruck(e)}  id="tid">
    <option>Select Truck</option>
{ list.map((val)=>{
        return(
            <>
    <option value={val.tid}>{val.t_number}</option>

    </>
        )
    })
    }
</select>


    <table class="table table-hover table-center">
    <thead>
    
    <tr>
    
    <th>Truck Id</th>
    <th class="text-center">Truck Number</th>
    <th class="text-center">Truck Description</th>
    <th class="text-end">Driver Name</th>
    <th class="text-end">Fuel Amount</th>
    </tr>
    </thead>





    <tbody>

    
    { 
    truck!="" ?
    <>
    
    
    </>
    :
    <>
    
    {
    
    
    lst.map((val)=>{
        return(
            <>        
    <tr>
    <td class="text-nowrap">{val.tid}    
    </td>    
    <td class="text-nowrap">{val.t_number}</td>   
    <div className = 'dropdown-menu'>
    </div>
    <td class="text-center">{val.t_description}</td>
    <td class="text-nowrap">{val.d_name}</td>
    <screenLeft>
    <td class="text-form-control border-0 p-4">{val.f_amount}</td>
    </screenLeft>
    <td>
    <div class="col-lg-5 py-5 py-lg-0" >
                    <div class="bg-primary py-5 px-4 px-sm-5">
                        <form class="py-5" onSubmit={(e)=>datasub(e,val.tid)}>                  
                            
                            <div class="form-group">
                            <input type="text" class="form-control border-0 p-4" placeholder="Enter Fuel Amount " required id="fuelamt"  onChange={(e)=>getfule(e.target.value)}/> 
                          
                            </div>
                        
                            <div>
                                <button class="btn btn-dark btn-block border-0 py-4" type="submit" >SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>

                </td>


    </tr>                
    </>
        )
    })
    }
    
</>
}
</tbody>
   
    </table>
    </div>
    </div>
    
        )
    }export default Fuel;