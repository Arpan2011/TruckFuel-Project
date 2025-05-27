import   react from "react";
import axios from 'axios'

function Login (){
    const submitdata=()=>{      
        var uname=document.getElementById("Username").value;        
        var up1=document.getElementById("Password").value;
        
axios.post("http://localhost:1337/api/adminlogin",{un:uname,up:up1}).then((response)=>{

if(response.data.msg){
    window.location="/Login";
    alert(response.data.msg);
}
else{
   
     let store = {aid :response.data[0].aid ,a_name:response.data[0].a_name,a_email:response.data[0].a_email}
    sessionStorage.setItem("adminlogin",JSON.stringify(store));
    window.location="/";
    alert("Login Successfully");
    //
}

}
)        
        }
        
        
        
          return (
            <>
         
            <div class="jumbotron jumbotron-fluid mb-5">
            <div class="container text-center py-5">
                <h1 class="text-white display-3">Login</h1>
                <div class="d-inline-flex align-items-center text-white">
                    <p class="m-0"><a class="text-white" href="">Home</a></p>
                    
                    
                </div>
            </div>
        </div>
        
        
                          <div class="col-lg-7">
                          <h6 class="text-primary text-uppercase font-weight-bold">Login</h6>
                        
                           <div class="contact-form bg-secondary" style={{padding:"30px"}}>
                            <div id="success"></div>
                            <form   onSubmit={submitdata}>
                                <div class="control-group">
                                    <input type="text" class="form-control border-0 p-4" id="Username" placeholder="Your Username"
                                        required="required" data-validation-required-message="Please enter your username" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                
                                <div class="control-group">
                                    <input type="text" class="form-control border-0 p-4" id="Password" placeholder="Your Password"
                                        required="required"
                                        data-validation-required-message="Please enter your password"/>
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button class="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Submit
                                   </button>
                                   <div class="forgetpassword">
            <span class="psw">Forgot <a href="#">password?</a></span>
            </div>
                                   
                                </div>
                            </form>
                        </div>
                    </div>
                
            
        
        </>
          );
        }
        
export default Login