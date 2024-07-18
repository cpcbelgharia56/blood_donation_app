import './App.css';
import { useEffect, useState } from "react";
function SearchDonor() {

    const [alldoners, setAlldonors] = useState([]);
    const [address, setAddress] = useState([]);
    const [bloodgroup, setBloodgroup] = useState([]);
    // const [alluser, setAlluser] = useState([]);

    const getData = async () => {
        const response = await fetch('http://localhost:5000/getAllDonor');
        const data = await response.json();
        setAlldonors(data)
    }

    // const getDataUser = async () => {
    //     const response = await fetch('http://localhost:5000/getAlluser');
    //     const data = await response.json();
    //     setAlluser(data)
    // }

    useEffect(() => {
        getData()
    }, [])

    // useEffect(() =>{
    //     getDataUser()
    //  }, [])

    const filterByAddress = async (value) => {
        if (value === null || value === "") {
            getData()
        }
        else {
            const response = await fetch(`http://localhost:5000/searchDonorByAddress/${value}`)
            const data1 = await response.json()
            setAlldonors(data1)
        }
    }

    const searchbybloodgroup = async (val) => {
        if (val === null || val === "") {
            getData()
        }
        else {
            setBloodgroup(val)
            const response = await fetch(`http://localhost:5000/searchDonorByBloodgroup/${val}`)
            const data2 = await response.json()
            setAlldonors(data2)
        }
    }


    const searchboth = async (val) => {

        setAddress(val)        // address ta ke set korar jonno nich theke tolar por

        if (val == null || val == "") {
            getData()
        }

        else {

            const search_donor = {

                "address": val,
                "bloodgroup": bloodgroup
            }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(search_donor)
            };

            const response = await fetch('http://localhost:5000/searchByBoth', requestOptions)
            const data = await response.json();
            setAlldonors(data)
        }


    }

    return (
        <>
            <p className='search-head'>Search Donors</p>
            <div>
                <div class="container-fluid" >
                    <form class="d-flex">
                        <input class="form-control me-2" onChange={(e) => searchboth(e.target.value)} type="search" placeholder="Search bloodgroup by address" aria-label="Search" style={{ width: "82%", marginLeft: "10px" }} />
                        <select class="form-select" onChange={(e) => searchbybloodgroup(e.target.value)} aria-label="Default select example" style={{ width: '15%', marginLeft: '12px' }}>
                            <option value="" selected>select bloodgroup</option>
                            <option value="A+">A+</option>
                            <option value="B+">B+</option>
                            <option value="AB+">AB+</option>
                            <option value="O+">O+</option>
                            <option value="A-">A-</option>
                            <option value="B-">B-</option>
                            <option value="AB-">AB-</option>
                            <option value="O-">O-</option>
                        </select>
                    </form>
                </div>
            </div>
            <br />
            <table class="table table-dark table-striped donorlist">
                <table class="table">
                    <thead style={{ textAlign: "center" }}>
                        <tr>
                            <th scope="col">Sl No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            {/* <th scope="col">Password</th> */}
                            <th scope="col">Address</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Blood Group</th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: "center" }}>
                        {
                            alldoners.map((data, index) =>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td><b>{data.name}</b></td>
                                    <td><b>{data.email}</b></td>
                                    {/* <td><b>{data.password}</b></td> */}
                                    <td><b>{data.address}</b></td>
                                    <td><b>{data.contact}</b></td>
                                    <td><b>{data.bloodgroup}</b></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </table>


        </>
    );
}
export default SearchDonor;