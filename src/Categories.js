import React from "react";
import cotton1 from './images/cotton1.jpg';
import cotton2 from './images/cotton2.jpg';
import cotton3 from './images/cotton3.jpg';
import { Card,Button } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
import "./Categories.css";

function Categories() {
    return (
        <div>
        <div className="categoriescard">
        <Card className='categoriescard__first'style={{ width: '18rem', height: "25rem", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}} bg = "transparent">
      <Card.Title className="fs-4 text-center p-4"><Icon.Cart color="rgb(12, 181, 12)" size={80} /></Card.Title>
      <h2 style={{marginLeft: "30px"}}>Benefits for Farmers</h2>
          <Card.Body class= "fs-6 p-4" >
                          <br></br>
                          <h4 color="rgb(12, 181, 12)">engaged in agriculture, raising living organisms for food or raw materials</h4>
                          <Button variant="primary">Know More...</Button>                  
                      </Card.Body>
                    </Card>
                    <Card className='categoriescard__first'style={{ width: '18rem', height: "25rem", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}} bg = "transparent">
      <Card.Title className="fs-4 text-center p-4"><Icon.People color="rgb(12, 181, 12)" size={80} /></Card.Title>
      <h2 style={{marginLeft: "30px"}}>Mechanical Providers</h2>
          <Card.Body class= "fs-6 p-4" >
          <br></br>
<h4>relates to the mechanical structures and devices used in farming or other agriculture</h4>
<Button variant="primary">Know More...</Button>
                      </Card.Body>
                    </Card>
                    <Card className='categoriescard__first'style={{ width: '18rem', height: "25rem", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}} bg = "transparent">
      <Card.Title className="fs-4 text-center p-4"><Icon.People color="rgb(12, 181, 12)" size={80} /></Card.Title>
      <h2 style={{marginLeft: "30px"}}>Supplier</h2>
          <Card.Body class= "fs-6 p-4" >
                          <br></br>
                          <h4>carrying on the business of selling fertilisers whether wholesale or retain or Industrial use, and includes a manufacturer and importer</h4>
                          <Button variant="primary">Know More...</Button>                      </Card.Body>
                    </Card>
                    </div>
<div  className="categoriescard">
<Card className='thirdcontainercards__first'style={{ width: '18rem', height: "25rem", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}} bg = "transparent">
      <Card.Title className="fs-4 text-center p-4"><Icon.People color="rgb(12, 181, 12)" size={80} /></Card.Title>
      <h2 style={{marginLeft: "30px"}}>Public/Guests</h2>
          <Card.Body class= "fs-6 p-4" >
          <br></br>
                          <h4>Cottonbridge is seeking expertise and support from people who share our vision for empowering communities with agricultural information using technology.</h4>
                          <Button variant="primary">Know More...</Button>                      </Card.Body>

                    </Card>
                    <Card className='thirdcontainercards__first'style={{ width: '18rem', height: "25rem", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}} bg = "transparent">
      <Card.Title className="fs-4 text-center p-4"><Icon.People color="rgb(12, 181, 12)" size={80} /></Card.Title>
          <h2 style={{marginLeft: "30px"}}>Administrator</h2>
          <Card.Body class= "fs-6 p-4" >
          <br></br>
                          <h4>Analyze materials and personnel needs prior to the onset of each phase.</h4>
                          <Button variant="primary">Know More...</Button>                      </Card.Body>                    </Card>


</div>
</div>
                );
}
                export default Categories;


