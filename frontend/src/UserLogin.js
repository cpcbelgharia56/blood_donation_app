import React, { useState } from 'react';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const UserLogin = () => {

    const location = useLocation();

    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [flag, setFlag] = useState(0)
    // const [message, setMessage] = useState("")

    const login = async () => {
        const new_donor = {
            "name": name,
            "email": email,
            "password": password
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(new_donor)
        };

        const response = await fetch('http://localhost:5000/loginUser', requestOptions);
        const data = await response.json();

        if (data.message == 0) {
            localStorage.setItem("loggedUser",email)
            alert("User Login Successfully")
            window.location.reload()
            navigate('/Home');
        }
        else {
            alert("User Login Failed")
        }
    }

    const showHide = (id) => {
        if (flag == 0) {
            setFlag(1)
        }
        else {
            setFlag(0)
        }
    }
    return (
        <>
            <table className="Registration">

                <p style={{ color: 'black', fontSize: "24px", fontWeight: "700" }}>User Login</p>

                <tr className='text-details'>
                    <td style={{ color: '#6d0606', fontSize: "18px" }}><b>Enter Name : </b></td>
                    <td><input style={{ borderRadius: "4px", border: "1px solid black" }} type="text" name="" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} required /></td>
                </tr>
                <tr className='text-details'>
                    <td style={{ color: '#6d0606', fontSize: "18px" }}><b>Enter Email : </b></td>
                    <td><input style={{ borderRadius: "4px", border: "1px solid black" }} type="text" name="" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} required /></td>
                </tr>
                <tr className='text-details'>
                    <td style={{ color: '#6d0606', fontSize: "18px" }}><b>Enter Password : </b></td>
                    {
                        flag == 0 ?
                            <>
                                <td><input style={{ borderRadius: "4px", border: "1px solid black" }} type="password" name="" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} required />
                                </td>
                                <td><button onClick={showHide}><FaEye /></button></td>
                            </>
                            :
                            <>
                                <td><input style={{ borderRadius: "4px", border: "1px solid black" }} type="text" name="" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} required />
                                </td>
                                <td><button onClick={showHide}><FaEyeSlash />
                                </button></td>
                            </>
                    }
                </tr>
                <tr className='text-details'>
                    <td style={{ color: 'black', fontSize: "15px", fontWeight: "bold" }}>
                        <Link to='/forgotpassword'>Forgot Password ?</Link>
                    </td>
                </tr>
                <tr className='text-details'>
                    <td style={{ color: '#6d0606', fontSize: "15px" }}>
                        <input className="register" onClick={login} type="Submit" value="Login" />
                    </td>
                </tr>
            </table>
        </>
    )
}

export default UserLogin;