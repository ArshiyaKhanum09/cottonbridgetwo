import React from "react";
import {Link} from 'react-router-dom';
import Logo from './images/cottonlogo.jpg';
import './Farmershome.css';
import { Button} from 'react-bootstrap';
import farmertoretail from './images/farmertoretail.jpeg';
import mainimage from './images/mainimage.jpg';


function Farmershome()
{
    return(
        <div>
          <div className="Visioncontainer">
                <div className="Visiontext">
                <h2>Vision</h2>
                <h3>To create organized platform in cotton sector to Farmers, Ginners, Spinners Enabling optimized Supply chain & services with End to End solution.</h3>
                
                </div>
                <div className="Visionimage">
                  <img className="Visionimage" src={farmertoretail} alt="browser not compatible" />
                  
                </div>

            </div>
            <div className="Misioncontainer">
             <div className="Misionimage">
             <img className="Misionimage" src={mainimage} alt="browser not compatible" />
             </div>
             <div className="Misiontext">
             <h2>Mission</h2>
                <h3>We will establish Systematic Approach to overall process from Farmer to cotton Mills in India. Will simplify the overall Process by using User Interface.</h3>
             </div>
            </div>
            
        </div>
        
    )
}
export default Farmershome