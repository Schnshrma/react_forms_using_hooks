import React, { useState } from "react";

const App = () => {
    const[fullName,SfullName] =useState({fname:"",lname:"",email:"",phone:""});   
 const Cl =(e) =>{
     alert("Form Submited");
    e.preventDefault(); 
    //var temp = document.getElementById("data").value.toUpperCase();
    //console.log(fname);
 
 }
 const inputEvent = (event) => {

    const value = event.target.value;
    const name = event.target.name;
   SfullName((pre) => {
       return{
           ...pre,
           [name]:value
       }
//        if(name === "fname"){
//            return{
//                fname: value,
//                lname: pre.lname,
//                email:pre.email,
//                phone:pre.phone
//            }
//        }else if(name === "lname")
//        {
//         return{
//             lname: value,
//             fname: pre.fname,
//             email:pre.email,
//             phone:pre.phone
//         }
//        }else if(name === "email")
//        {
//         return{
//             lname: pre.lname,
//             fname: pre.fname,
//             email:value,
//             phone:pre.phone
//         }
//        }else if(name === "phone")
//        {
//         return{
//             lname: pre.lname,
//             fname: pre.fname,
//             email:pre.email,
//             phone:value
//         }
//        }
   })
}
 

    return (
      <>
      <div className="main_div">
          <form onSubmit={Cl}>
          <div>
              <h1>Hello {fullName.fname.toUpperCase()} {fullName.lname.toUpperCase()}</h1>
              <h3>{fullName.email}</h3>
              <p>{fullName.phone}</p>
              <input type='text' placeholder="Enter Your First Name" name="fname" onChange={inputEvent} value={fullName.fname}/>
              <input  type='text' placeholder="Enter Your Last Name" name="lname" onChange={inputEvent} value={fullName.lname}/>
              <input  type='text' placeholder="Enter Your Email" name="email" onChange={inputEvent} value={fullName.email}/>
              <input  type='text' placeholder="Enter Your Phone Number" name="phone" onChange={inputEvent} value={fullName.phone}/>
              { <button type="submit">click here To Submit</button> }
          </div>
          </form>
          </div>
      </>
    );
}
export default App;