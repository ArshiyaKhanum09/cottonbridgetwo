import React from "react";
import {Link} from 'react-router-dom';
import Logo from './images/cottonlogo.jpg';
import './Farmershome.css';
import { Button} from 'react-bootstrap';
import './Navigate.css';

function Navigatebar()
{
    return(
        <div>
            <div className="logocontainer">
            <img src={Logo} className="logo" alt="Logoimage" />
            <nav className="logomenubar">
  <Link className="logomenuitems" to="/Home">Home</Link>
  <Link className="logomenuitems" to="/about">About</Link>
  <Link className="logomenuitems" to="/Service">Services</Link>
  <Link className="logomenuitems" to="/Contact">Contact</Link>
  <Link className="loginmenu" to="/Categories">Categories</Link>
  <Link className="loginmenu" to="/Login"><Button type="button">
          Login
     </Button></Link>
  <Link to="/Signin"><Button className="logomenuitems" type="button">
          Signup
     </Button></Link>
   {/*  <Button className='logomenubarb tns'  size="md" onClick="#">Login</Button>
    <Button className='logomenubarbtns' size="md" onClick="#">Sign up</Button> */}
  
</nav> 
</div>
</div>
)
}
export default Navigatebar;

