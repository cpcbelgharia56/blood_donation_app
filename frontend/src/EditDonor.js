import { useEffect, useState } from "react"
import {useLocation} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


function EditDonor(){
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [contact, setContact] = useState("")
    const [bloodgroup, setBdgroup] = useState("")
    // const [message, setMessage] = useState("")

    const location = useLocation();

    const navigate = useNavigate();

    const Update = async () =>{
        const new_donor =  {
            "name": name,
            "email": email,
            // "password": password,
            "address": address,
            "contact": contact,
            "bloodgroup": bloodgroup
        }

        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(new_donor)
        };

        const response = await fetch(`http://localhost:5000/updateDonor/${id}`, requestOptions);
        const data = await response.json();

        if(data._id!=null)
        {
            alert('Updated Successfully!');
            navigate('/DonorList');
        }
        else
        {
            alert("Update Failed");
        }
    }

    const getDataById = async (id) =>{
        const response = await fetch('http://localhost:5000/getDonorById/'+id);
        const data = await response.json();
        setName(data.name);
        setEmail(data.email);
        // setPassword(data.password);
        setAddress(data.address);
        setContact(data.contact);
        setBdgroup(data.bloodgroup);
    }

    useEffect(() => {
        const id = location.state.id;
        setId(id)
        getDataById(id);
    },[]);


    return(
        <>
            <table className="Registration">
                
                    <p style={{color: 'black',fontSize: "24px", fontWeight: "700"}}>Donor Profile Update</p>

                <tr>
                    <td style={{color: '#6d0606', fontSize: "18px"}}><b>Enter Name : </b></td>
                    <td><input style={{borderRadius: "4px", border: "1px solid black"}} type="text" name="" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} value={name} required/></td>
                </tr> 
                <tr>
                    <td style={{color: '#6d0606', fontSize: "18px"}}><b>Enter Email : </b></td>
                    <td><input style={{borderRadius: "4px", border: "1px solid black"}} type="text" name="" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value={email} required/></td>
                </tr>
                {/* <tr>
                    <td style={{color: '#6d0606', fontSize: "18px"}}><b>Enter Password : </b></td>
                    <td><input style={{borderRadius: "4px", border: "1px solid black"}} type="text" name="" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} value={password} required/></td>
                </tr> */}
                <tr>
                    <td style={{color: '#6d0606', fontSize: "18px"}}><b>Enter Address : </b></td>
                    <td><input style={{borderRadius: "4px", border: "1px solid black"}} type="text" name="" placeholder="Enter your Address" onChange={(e) => setAddress(e.target.value)} value={address} required/></td>
                </tr>
                <tr>
                    <td style={{color: '#6d0606', fontSize: "18px"}}><b>Enter Contact no.: </b></td>
                    <td><input style={{borderRadius: "4px", border: "1px solid black"}} type="text" name="" placeholder="Enter your Contact" onChange={(e) => setContact(e.target.value)} value={contact} required/></td>
                </tr>
                <tr>
                    <td style={{color: '#6d0606', fontSize: "18px"}}><b>Enter Blood group : </b></td>
                    <td><input style={{borderRadius: "4px", border: "1px solid black"}} type="name" name="" placeholder="Enter Blood group" onChange={(e) => setBdgroup(e.target.value)} value={bloodgroup} required/></td>
                </tr>
                
                <input className="register" onClick={Update} type="Submit" value="Update"/>
        
            </table>

        </>
    );
}
export default EditDonor;