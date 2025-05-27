import axios from "axios";
import   react, { useEffect, useState } from "react";
function Viewfd (){

    
        const[list,setlist]=useState(['']);
        const[totalAmount,setTotalAmount]=useState('');
        useEffect(()=>{
            axios.post("http://localhost:1337/api/viewfd").then((Response)=>{
    
    
               setlist(Response.data);
            })
        },[]);

      
    useEffect ( ()=> {

   
          axios.post("http://localhost:1337/api/totalamount").then((response)=>{
            setTotalAmount(response.data.totalamount);
        });
         

   
    //fetchTotalAmount();

     },[]);



    const [dates, setDates] = useState([])


   // useEffect(()=>{
    //     axios.get("http://localhost:1337/api/date").then((Response)=>{


  //         setDates(Response.data)
  //     })
 // },[]);

  const[disable, setDisable] = useState(true);
  const[todate, setTodate] =useState([]);
  const[fromdate, setFromdate] = useState([]);

   const[todateformat, setTodateformat] = useState('');
   const[fromdateformat, setfromdateformat] = useState('');

   const handletodate= (e)=>{
    const gettodatevalue = e.target.value;
    alert(gettodatevalue);
    const setdateformat = gettodatevalue.split('-');

    const settoyear =setdateformat[0];
    const settomonth =setdateformat[1];
    const settodate =setdateformat[2];

  var setTodateformat1 = settoyear+""+settomonth+""+settodate;
    setTodate(gettodatevalue);
    setTodateformat(setTodateformat1);
    setDisable(false);
    // console.log(setTodateformat);

    }

   const handlefromdate= (e)=>{
    const getfromdatevalue = e.target.value;
    const setdateformat = getfromdatevalue.split('-');

    const settoyear =setdateformat[0];
    const settomonth =setdateformat[1];
    const settodate =setdateformat[2];
        

    const setfromformatedate = settoyear+""+settomonth+""+settodate;

    setFromdate(getfromdatevalue);
    setfromdateformat(setfromformatedate);

    // console.log(setfromformatedate);

  }

  const handleSubmit = (e)=>{
        
  
    e.preventDefault();
    alert(todateformat);
    axios.post("http://localhost:1337/api/datees",{todate:todateformat,fromdate:fromdateformat}).then((response)=>{
       alert(response.data);
    setlist(response.data);

  },[]);
  }

  
        const[lst,setdatalist]=useState(['']);
        const[truck,settruckid]=useState(['']);
        useEffect(()=>{
            axios.get("http://localhost:1337/api/truck2").then((Response)=>{      
                setlist(Response.data)
                setdatalist(Response.data)
            })
        },[]);


    // alert("todate"+todate+ "from date"+ fromdate);


  

 return(

 <form >
            
  <div class="card-body">

  <div style={{ margin: 10}}>
  <input type="Date" name= "todate" placeholder="Date " required id="date" onChange={(e)=>handletodate(e)}/> 


  <div style={{ margin: 20}}>
   <input type="Date" name= "fromdate" placeholder="Date " required id="date" onChange={(e)=>handlefromdate(e)} />
  
  <div>
  <div style={{ margin: 30}}>
  <button class="btn btn-dark btn-block border-0 py-0" type="button"  onClick={(e)=>handleSubmit(e)}>SUBMIT</button>
 </div>

 

 </div>
 </div>
 </div>






    <div class="table-responsive no-radius">
    <table class="table table-hover table-center">
    <thead>
    
    <tr>
    
    <th>Truck Id</th>
    <th class="text-center">Truck Number</th>
    <th class="text-center">Truck Description</th>
    <th class="text-end">Driver Name</th>
    <th class="text-center">Fuel Amount</th>
    </tr>
    </thead>
    
   

            
        
    <tbody>
    { list.map((val)=>{
        return(
            <>
    <tr>
    <td class="text-nowrap">
    <div class="font-weight-600">{val.tid}</div>
    </td>
    <td class="text-nowrap">{val.t_number}</td>
    <td class="text-center">{val.t_description}</td>
    <td class="text-nowrap">{val.d_name}</td>
    <td class="text-nowrap">{val.f_amount}</td>
  </tr>

        
            
    </>
        )
    })
    }
  </tbody>

    </table>

    <div>
      <screenLeft>
    <h2>Total Amount: {totalAmount}</h2>
    </screenLeft>
  </div>

    </div>
    </div>
    </form>


        )


}
export default Viewfd;