import React from "react";
function Header(){
	
	let admin = JSON.parse(sessionStorage.getItem("prtrollogin"))
 return (


 <div class="banner jarallax">
		<div class="agileinfo-dot">
			<div class="w3layouts-header-top">
				<div class="w3-header-top-grids">
					<div class="w3-header-top-left">
						<p><i class="fa fa-volume-control-phone" aria-hidden="true"></i> +1 234 567 8901</p>
					</div>
					<div class="w3-header-top-right">
						<div class="agileinfo-social-grids">
							<ul>
								<li><a href="#"><i class="fa fa-facebook"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-rss"></i></a></li>
								<li><a href="#"><i class="fa fa-vk"></i></a></li>
							</ul>
						</div>
						<div class="w3-header-top-right-text">
							<p><i class="fa fa-home" aria-hidden="true"></i> 1st Street , NewYork city</p>
						</div>
						<div class="clearfix"> </div>
					</div>
					<div class="clearfix"> </div>
				</div>
			</div>
			<div class="head">
				<div class="container">
					<div class="navbar-top">
						
							<div class="navbar-header">
							  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							  </button>
								 <div class="navbar-brand logo ">
									<h1><a href="index.html"><i class="fa fa-tint" aria-hidden="true"></i> Oil <span>Station</span></a></h1>
								</div>

							</div>

							
							<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							 <ul class="nav navbar-nav link-effect-4">
							 
							 {sessionStorage.getItem("prtrollogin")==null ?
                   <>
				    
                   <a href="/Login" class="nav-item nav-link">Login</a>
                   </>
:
<>
<a href="#" class="nav-item nav-link">{admin.a_name}</a>
</>
                   }         
				                  
								<li><a href="/" class="scroll">Home</a> </li>         
								<li><a href="/Truck" class="scroll">Truck Details</a> </li>
								<li><a href="/Driver" class="scroll">Driver Details</a></li>
								<li><a href="/Fuel" class="scroll">Fuel Details</a></li>
								<li><a href="/Payment" class="scroll">Payment & Report</a></li>
							  </ul>
							</div>
						</div>

						
				</div>
			</div>


        </div>
</div>
)

}export default Header;