import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Home from "./Home";
import DonorRegister from "./DonorRegister";
import DonorList from "./DonorList";
import EditDonor from "./EditDonor";
import Footer1 from "./Footer1";
import SearchDonor from "./SearchDonor";
import UserLogin from "./UserLogin";
import DonorLogin from "./DonorLogin";
import { useEffect, useState } from "react";
import Forgotpassword from "./Forgotpassword";
import About from "./About";
import { BiSolidPhoneCall } from "react-icons/bi";

function Main() {

    const [flag, setFlag] = useState(0)

    useEffect(() => {
        if (localStorage.getItem('loggedUser')) {
            setFlag(1)
        }
    }, [])

    const logout = () => {
        localStorage.removeItem('loggedUser')
        alert("Donor Logout Successfully")
        window.location.href = "/"
    }

    return (
        <>
            <Router>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-droplet" style={{color: "#fa0000",}} /> */}
                        <a class="navbar-brand" href="#" style={{ color: "red", fontWeight: "bold", fontSize: "23px"}}>Blood-Donation</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{ gap: '4px', fontSize: "17px", fontWeight: "600px"}}>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" href="#" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" href="#" to="/About">About</Link>
                                </li>
                                {
                                    flag == 1 ?
                                        <>
                                            <li class="nav-item">
                                                <Link class="nav-link active" aria-current="page" href="#" to="/DonorList">DonorList</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link active" aria-current="page" href="#" to="/SearchDonor">Search</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link active" aria-current="page" href="#" to="/DonorRegister">Registration</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link active" aria-current="page" href="#" to="/" onClick={logout}>Logout</Link>
                                            </li>
                                        </>
                                        :
                                        <>
                                            {/* <li class="nav-item">
                                                <Link class="nav-link active" aria-current="page" href="#" to="/UserLogin">User Login</Link>
                                            </li> */}
                                            <li class="nav-item">
                                                <Link class="nav-link active" aria-current="page" href="#" to="/DonorRegister">Registration</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link active" aria-current="page" href="#" to="/DonorLogin">Login</Link>
                                            </li>
                                        </>
                                }
                            </ul>
                            <form class="d-flex">
                                <p class="contact me-2"><BiSolidPhoneCall/></p>
                                <p class="contact me-2">+91-9330163527</p>
                            </form>
                        </div>
                    </div>
                </nav>


                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/About" element={<About></About>}></Route>
                    <Route path='/DonorRegister' element={<DonorRegister />}></Route>
                    <Route path='/DonorList' element={<DonorList></DonorList>}></Route>
                    <Route path='/EditDonor' element={<EditDonor></EditDonor>}></Route>
                    <Route path='/SearchDonor' element={<SearchDonor></SearchDonor>}></Route>
                    <Route path='/UserLogin' element={<UserLogin></UserLogin>}></Route>
                    <Route path='/DonorLogin' element={<DonorLogin />}></Route>
                    <Route path="/forgotpassword" element={<Forgotpassword></Forgotpassword>}></Route>
                </Routes>

                <Footer1></Footer1>

            </Router>
        </>
    )
}
export default Main;