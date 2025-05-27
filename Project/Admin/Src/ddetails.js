import React, { useState } from "react";
import axios from 'axios'
 
function Ddetails(){

    const [image , driveimg] = useState("");
    const [filename , setfilename] = useState("");
    const datasub=()=>{
     //   e.preventDefault();
        var dname=document.getElementById("dname").value;      
        var dnumber=document.getElementById("dnumber").value;     
        var daddress=document.getElementById("daddress").value;        
       
        var dlicensenumber=document.getElementById("dlicensenumber").value;

        var formdata = new FormData()
        
        formdata.append("dname",dname);
        formdata.append("dnumber",dnumber);
        formdata.append("daddress",daddress);
      
        formdata.append("dlicensenumber",dlicensenumber);
        formdata.append("lcimage",filename);
        //alert(image);
       //alert(formdata);

        axios.post("http://localhost:1337/api/Ddetails",formdata,{headers:{"Content-Type":"multipart/form-data"}}).then((response)=>{

        if(response.data.msg){
            alert(response.data.msg)
        }
        else{
            alert("Driver detalis added Sucessfully")
        }
    })

}

const Viewimage = (e) =>{
 
    const file = e.target.files[0];
   setfilename(e.target.files[0]);
    if(file){
       
        const reader = new FileReader();
        reader.onloadend = () => {
        driveimg(reader.result);
        };
       // alert(file);
        reader.readAsDataURL(file);
    }

    
}

    
           return(
<>
        <div class="jumbotron jumbotron-fluid mb-5">
        <div class="container text-center py-5">
            <h1 class="text-white display-3">Add Driver Details</h1>
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
                                <input type="text" class="form-control border-0 p-4" placeholder="Enter Driver Name" required id="dname" />
                            </div>
                            <div class="form-group">
                                <input type="number" class="form-control border-0 p-4" placeholder="Enter Driver Mobile Number " required id="dnumber" />
                            </div>
                            <div class="form-group">
                            <input type="text" class="form-control border-0 p-4" placeholder="Enter Driver Address " required id="daddress" /> 
                            </div>
                            <div class="form-group">
                            <input type="text" class="form-control border-0 p-4" placeholder="Enter Driver license Number " required id="dlicensenumber" /> 
                            </div>


                            <div class="form-group">
                            <input type="file" onChange={Viewimage} class="form-control border-0 p-4" placeholder="Enter Driver License " required id="dlicense" /> 
                            {image && (
                                <div>
                                    <h4>Image Preview:</h4>
                                    <img 
                                    src={image}
                                    alt="Preview"
                                    style={{ maxWidth: "100%" , maxHeight: "100px"}}
                                    />
                                    </div>
                            )}
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

}export default Ddetails;