import React from 'react';
import { Card,Button } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
import './contact.css';
import contactus from './images/contactus.jpg';

const Contact = () => {
    return (
        <div>
            <div>
            <img src={contactus} alt="browser not compatible"/>

            </div>
      
        <div className="contactmenu">
          <Card className='thirdcontainercards__first'style={{ width: '18rem', height: "25rem", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}} bg = "transparent">
      <Card.Title className="fs-4 text-center p-4"><Icon.Headset color="rgb(12, 181, 12)" size={80} /></Card.Title>
      <h2 style={{marginLeft: "30px"}}>Call us</h2>
          <Card.Body class= "fs-6 p-4" >
                          <br></br>
                          <Icon.Check color="rgb(12, 181, 12)" size={30} />8747058948<br></br>
                      </Card.Body>
                    </Card>
                    <Card className='thirdcontainercards__first'style={{ width: '18rem', height: "25rem", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}} bg = "transparent">
      <Card.Title className="fs-4 text-center p-4"><Icon.Mailbox color="rgb(12, 181, 12)" size={80} /></Card.Title>
      <h2 style={{marginLeft: "30px"}}>Mail Us</h2>
          <Card.Body class= "fs-6 p-4" >
                          <br></br>
                          <Icon.Check color="rgb(12, 181, 12)" size={30} />Info@cottonbridge.in<br></br>
                      </Card.Body>
                    </Card>
                    <Card className='thirdcontainercards__first'style={{ width: '18rem', height: "25rem", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}} bg = "transparent">
      <Card.Title className="fs-4 text-center p-4"><Icon.Globe2 color="rgb(12, 181, 12)" size={80} /></Card.Title>
      <h2 style={{marginLeft: "30px"}}>Visit us</h2>
          <Card.Body class= "fs-6 p-4" >
                          <br></br>
                          <Icon.Check color="rgb(12, 181, 12)" size={30} />www.cottonbridge.in<br></br>
                      </Card.Body>
                    </Card>
        </div>
        </div>

    )
}

export default Contact
