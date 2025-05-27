import   react from "react"
import axios from 'axios'
function Tdetails(){
   

        const datasub=()=>{
            
            var tnumber=document.getElementById("tnumber").value;
        
            var dname=document.getElementById("dname").value;
          
            var tdescription=document.getElementById("tdescription").value;
          

            axios.post("http://localhost:1337/api/Tdetails",{tnumber:tnumber,up:dname,tdescription:tdescription,}).then((response)=>{

            if(response.data.msg){
                alert(response.data.msg)
            }
            else{
                alert("Truck detalis added Sucessfully")
            }
        })
        }
    
    return(

       
 <>
                    <div class="jumbotron jumbotron-fluid mb-5">
                    <div class="container text-center py-5">
                        <h1 class="text-white display-3">Add Truck Details</h1>
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
                            <input type="text" class="form-control border-0 p-4" placeholder="Enter Driver Name " required id="dname" /> 
                            </div>
                            <div class="form-group">
                            <input type="text" class="form-control border-0 p-4" placeholder="Enter Truck Description " required id="tdescription" /> 
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
 }export default Tdetails;
