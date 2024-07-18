import React, { useEffect, useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Forgotpassword = () => {

    const location = useLocation();

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    // const [message, setMessage] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [OTP, setOTP] = useState('')
    const [userOTP, setUserOTP] = useState('')

    const [flag, setFlag] = useState(0)
    const [flag1, setFlag1] = useState(0)

    const validateEmail = async () => {
        const x = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000)
        setOTP(x)
        const new_user = {
            "email": email,
            "otp": x
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(new_user)
        };

        const response = await fetch('http://localhost:5000/send-email', requestOptions);
        const data = await response.json();

        if (data.message === '1') {
            setEmail(email)
            //setFlag(1)
            alert("Mail Sent Successfully, Check Your Mailbox")
        }
        else if (data.message === "0") {
            alert("Mail Not Sent")
        }
        else {
            alert("Sorry Your Email is Not Registered, Try Again")
        }
    }

    const validateOTP = () => {
        console.log("OTP: " + OTP + " " + "User OTP: " + userOTP)
        if (userOTP == OTP) {
            setFlag(2)
            alert("OTP is valid")
        }
        else {
            alert("OTP Not Matched, Try Again...!!!")
        }
    }

    const updatePassword = async () => {
        // alert("update")
        const new_user = {
            "password": password
        }

        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(new_user)
        };

        if (password == cpassword) {
            const response = await fetch('http://localhost:5000/changePassword/' + email, requestOptions);
            const data = await response.json();

            console.log(52, data)
            if (data._id != null) {
                alert("Password Updated Successfully")
                window.location.href = "/UserLogin"
            }
            else {
                alert("Password Not Updated, Try Again")
            }
        }
        else {
            alert("Password and Confirm Password are not same")
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

    const showPass = (id) => {
        if (flag1 == 0) {
            setFlag1(1)
        }
        else{
            setFlag1(0)
        }
    }

    return (
        <>
            {
                flag == 0 ?
                    <>
                        <table className="Registration">

                            <p style={{ color: 'black', fontSize: "24px", fontWeight: "700" }}>Forgot Password</p>
                            <tr className='text-details'>
                                <td style={{ color: '#6d0606', fontSize: "19px" }}><b>Enter Your Email : </b></td>
                                <td>
                                    <input style={{ borderRadius: "4px", border: "1px solid black", height: "35px", marginRight: '55px' }} type="text" name="" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} required />
                                </td>
                            </tr>
                            <tr className='text-details'>
                                <td style={{ display: "flex", justifyContent: 'center', padding: '10px', margin: '10px -2px 9px -10px' }}>
                                    <input style={{ borderRadius: "4px", border: "1px solid black", width: '100%', height: '34px' }} type="text" name="" placeholder="Enter OTP" onChange={(e) => setUserOTP(e.target.value)} required />
                                </td>
                                <td style={{ color: '#6d0606', fontSize: "18px" }}>
                                    <input type="Submit" value="Get OTP" onClick={validateEmail} />
                                </td>
                            </tr>
                            <tr className='text-details'>
                                <td style={{ color: '#6d0606', fontSize: "15px" }}>
                                    <input className="register" onClick={validateOTP} type="Submit" value="Varify" />
                                </td>
                            </tr>
                        </table>
                    </>
                    :
                    <>
                        <table className="Registration">

                            <p style={{ color: 'black', fontSize: "24px", fontWeight: "700" }}>Donor Login</p>
                            <tr className='text-details'>
                                <td style={{ color: '#6d0606', fontSize: "18px" }}><b>Enter Your Password : </b></td>
                                {
                                    flag1 == 0 ?
                                        <>
                                            <td><input style={{ borderRadius: "4px", border: "1px solid black" }} type="password" name="" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} required />
                                            </td>
                                            <td><button onClick={showPass}><FaEye /></button></td>
                                        </>
                                        :
                                        <>
                                            <td><input style={{ borderRadius: "4px", border: "1px solid black" }} type="text" name="" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} required />
                                            </td>
                                            <td><button onClick={showPass}><FaEyeSlash />
                                            </button></td>
                                        </>
                                }
                            </tr>
                            <tr className='text-details'>
                                <td style={{ color: '#6d0606', fontSize: "18px" }}><b>Confirm Your Password : </b></td>
                                {
                                    flag1 == 0 ?
                                        <>
                                            <td><input style={{ borderRadius: "4px", border: "1px solid black" }} type="password" name="" placeholder="Enter your Password" onChange={(e) => setCpassword(e.target.value)} required />
                                            </td>
                                            <td><button onClick={showPass}><FaEye /></button></td>
                                        </>
                                        :
                                        <>
                                            <td><input style={{ borderRadius: "4px", border: "1px solid black" }} type="text" name="" placeholder="Enter your Password" onChange={(e) => setCpassword(e.target.value)} required />
                                            </td>
                                            <td><button onClick={showPass}><FaEyeSlash />
                                            </button></td>
                                        </>
                                }
                            </tr>
                            <tr className='text-details'>
                                <td style={{ color: '#6d0606', fontSize: "15px" }}>
                                    <input className="register" onClick={updatePassword} type="Submit" value="Change Password" />
                                </td>
                            </tr>
                        </table>
                    </>
            }
        </>
    )
}

export default Forgotpassword