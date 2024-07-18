import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {useNavigate} from 'react-router-dom';

function DonorList(){

    const [alldoners, setAlldonors] = useState([])

    const navigate = useNavigate();

    const getData = async () =>{
        const response = await fetch('http://localhost:5000/getAllDonor');
        const data = await response.json();
        setAlldonors(data)
    }

    useEffect(() =>{
       getData()
    }, [])

    const getEdit = (id) =>{
    
        navigate('/EditDonor', {state: {"id": id}});
    }

    const getDelete = async(id) =>{
        if(window.confirm('Are u sure to delete this record? '))
      {
            const requestOptions = {
                method: 'Delete',
                headers: { 'Content-Type': 'application/json' },
            };
            
            const response = await fetch('http://localhost:5000/deleteDonor/'+id, requestOptions);
                   
           
            alert("Deleted Successfully")

            window.location.reload()
      }
    }

    return(
        <>
            <table class="table table-dark table-striped donorlist">
                <table class="table">
                    <thead style={{textAlign: "center"}}>
                        <tr>
                        <th scope="col">Sl No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Address</th>
                        <th scope="col">Contact</th>
                        <th scope="col">BloodGroup</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody style={{textAlign: "center"}}>
                            {
                                alldoners.map((data,index) =>
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td><b>{data.name}</b></td>
                                    <td><b>{data.email}</b></td>                       
                                    <td><b>{data.password}</b></td>
                                    <td><b>{data.address}</b></td>
                                    <td><b>{data.contact}</b></td>
                                    <td><b>{data.bloodgroup}</b></td>
                                    <td>
                                        <button className="search-btn" style={{margin:'7px'}} onClick={(e) => getEdit(data._id)}>Edit</button>
                                        <button className="search-btn" style={{margin:'7px'}} onClick={(e) => getDelete(data._id)}>Delete</button>                            
                                    </td>
                                    </tr>
                                )
                            }
                    </tbody>
                </table>
            </table>

        </>
    )
}
export default DonorList;