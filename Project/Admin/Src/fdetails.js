import React from "react";
import axios from 'axios'
function Fdetails(){

    const datasub=()=>{
  
        var tnumber=document.getElementById("tnumber").value;
        
        var tdescription=document.getElementById("tdescription").value;
       
        var dname=document.getElementById("dname").value;

        var famount=document.getElementById("famount").value;
        
        axios.post("http://localhost:1337/api/Fdetails",{tnumber:tnumber,dname:dname,tdescription:tdescription,famount:famount}).then((response)=>{

        if(response.data.msg){
            alert(response.data.msg)
        }
        else{
            alert("Fuel detalis added Sucessfully")
        }
    })
  


    }
     
    return(

<>
        <div class="jumbotron jumbotron-fluid mb-5">
        <div class="container text-center py-5">
            <h1 class="text-white display-3">Add Fuel Details</h1>
            <div class="d-inline-flex align-items-center text-white">
                <p class="m-0"><a class="text-white" href="/">Home</a></p>
                <i class="fa fa-circle px-3"></i>
                
            </div>
        </div>
    </div>

    <center>
 <div class="col-lg-5 py-5 py-lg-0" >
                    <div class="bg-primary py-5 px-4 px-sm-5">
                        <form class="py-5" onSubmit={()=>datasub()}>
                            
                            <div class="form-group">
                                <input type="text" class="form-control border-0 p-4" placeholder="Enter Truck Number " required id="tnumber" />
                            </div>
                            <div class="form-group">
                            <input type="text" class="form-control border-0 p-4" placeholder="Enter Truck description " required id="tdescription" /> 
                            </div>
                            <div class="form-group">
                            <input type="text" class="form-control border-0 p-4" placeholder="Enter Driver Name " required id="dname" /> 
                            </div>
                            <div class="form-group">
                            <input type="text" class="form-control border-0 p-4" placeholder="Enter Fuel Amount " required id="famount" /> 
                            </div>
                        
                            <div>
                                <button class="btn btn-dark btn-block border-0 py-4" type="submit" >SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
                </center>



    
</>
    )
}export default Fdetails;

