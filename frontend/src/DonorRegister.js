import './App.css';
import { useState } from "react";
import DonorList from "./DonorList";
function DonorRegister(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [contact, setContact] = useState("")
    const [bdgroup, setBdgroup] = useState("")
    // const [message, setMessage] = useState("")

    const register = async () =>{
        const new_donor =  {
            "name": name,
            "email": email,
            "password": password,
            "address": address,
            "contact": contact,
            "bloodgroup": bdgroup
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(new_donor)
        };

        const response = await fetch('http://localhost:5000/registerdonor', requestOptions);
        const data = await response.json();

        if(data._id!=null)
        {
            alert("Registration Successfully")
            window.location.reload()
        }
        else
        {
            alert("Registration Failed")
        }
    }

    return(
        <>
        <table className="Registration">

            <p style={{color: 'black',fontSize: "24px", fontWeight: "700"}}>Registration</p>
            
            <tr className='text-details'>
                <td style={{color: '#6d0606', fontSize: "18px"}}><b>Enter Name : </b></td>
                <td><input style={{borderRadius: "4px", border: "1px solid black"}} type="text" name="" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} required/></td>
            </tr> 
            <tr className='text-details'>
                <td style={{color: '#6d0606', fontSize: "18px"}}><b>Enter Email : </b></td>
                <td><input style={{borderRadius: "4px", border: "1px solid black"}} type="text" name="" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} required/></td>
            </tr>
            <tr className='text-details'>
                <td style={{color: '#6d0606', fontSize: "18px"}}><b>Enter Password : </b></td>
                <td><input style={{borderRadius: "4px", border: "1px solid black"}} type="text" name="" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} required/></td>
            </tr>
            <tr className='text-details'>
                <td style={{color: '#6d0606', fontSize: "18px"}}><b>Enter Address : </b></td>
                <td><input style={{borderRadius: "4px", border: "1px solid black"}} type="text" name="" placeholder="Enter your Address" onChange={(e) => setAddress(e.target.value)} required/></td>
            </tr>
            <tr className='text-details'>
                <td style={{color: '#6d0606', fontSize: "18px"}}><b>Enter Contact no. : </b></td>
                <td><input style={{borderRadius: "4px", border: "1px solid black"}} type="text" name="" placeholder="Enter your Contact" onChange={(e) => setContact(e.target.value)} required/></td>
            </tr>
            <tr className='text-details'>
                <td style={{color: '#6d0606', fontSize: "18px"}}><b>Enter Blood group : </b></td>
                <td><input style={{borderRadius: "4px", border: "1px solid black"}} type="name" name="" placeholder="Enter Blood group" onChange={(e) => setBdgroup(e.target.value)} required/></td>
            </tr>
            
            <input className="register" onClick={register} type="Submit" value="Registration"/>
            
        </table>
        

        {/* <DonorList></DonorList> */}
        </>
    )
}
export default DonorRegister;