import React from "react";
function Header(){
    let admin = JSON.parse(sessionStorage.getItem("adminlogin"))
    
return(
    <div>
  <div class="container-fluid bg-dark">
        <div class="row py-2 px-lg-5">
            <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center text-white">
                    <small><i class="fa fa-phone-alt mr-2"></i>+012 345 6789</small>
                    <small class="px-3">|</small>
                    <small><i class="fa fa-envelope mr-2"></i>info@truckfuel.com</small>
                </div>
            </div>
            <div class="col-lg-6 text-center text-lg-right">
                <div class="d-inline-flex align-items-center">
                    <a class="text-white px-2" href="">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="text-white px-2" href="">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a class="text-white px-2" href="">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="text-white px-2" href="">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a class="text-white pl-2" href="">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>



  
    <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
            <a href="index.html" class="navbar-brand ml-lg-3">
                <h1 class="m-0 display-5 text-uppercase text-primary"><i class="fa fa-truck mr-2"></i>Truckfuel</h1>
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                <div class="navbar-nav m-auto py-0">
                <a href="/" class="nav-item nav-link">Home</a>
                <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Truck Details</a>
                        <div class="dropdown-menu rounded-0 m-0">
                            <a href="/Tdetails" class="dropdown-item">Add Truck Details</a>
                            <a href="/Viewtd" class="dropdown-item">View Truck Details</a>
                        </div>
                        </div>
                     
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Driver Details</a>
                        <div class="dropdown-menu rounded-0 m-0">
                            <a href="/Ddetails" class="dropdown-item">Add Driver Details</a>
                            <a href="/Viewdd" class="dropdown-item">View Driver Details</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Payment & Report Details</a>
                        <div class="dropdown-menu rounded-0 m-0">
                            <a href="/Pdetails" class="dropdown-item">Add Payment & Report Details</a>
                            <a href="/Viewpd" class="dropdown-item">View Payment & Report Details</a>
                        </div>
                        </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Fuel</a>
                        <div class="dropdown-menu rounded-0 m-0">
                            <a href="/Fdetails" class="dropdown-item">Add Fuel Details</a>
                            <a href="/Viewfd" class="dropdown-item">View Fuel Details</a>
                        </div>
                    </div>
                   {sessionStorage.getItem("adminlogin")==null ?
                   <>
                   <a href="/Login" class="nav-item nav-link">Login</a>
                   </>
:
<>
<a href="#" class="nav-item nav-link">{admin.a_name}</a>
</>
                   }
                    
                </div>
                </div>
             
        </nav>
    </div>
    </div>
)
}export default Header;