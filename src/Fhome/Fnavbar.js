import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../src/images/cottonlogo.jpg";


const Fnavbar = () => {

    return (
        <div className="container-fluid nav-bg">
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <img src={logo} className="navbar-brand" alt="logo" />
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page">Home</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </nav>
                </div>
            </div>
        </div>
        )
}
export default Fnavbar