import React from 'react';
import service from './images/service.jpg';
import './service.css';

const Service = () =>
{
return(
    <div className="servicemenu">
        <img src={service} alt="browser not compatible"/>
    <ul type="disc">
    <li>
        We will onboard Farmers to web Platform through technology.
        </li>
        <li>
        Live Price will be updated to farmers through app with the help of technology.</li>
        <li>
        Farmers needs to mark their Interests based on that our team will purchase the cotton.
        </li>
        <li>
        Will organize the supply Chain process from Farmers, Ginning &amp; Spinning mills.
        </li>
        <li>
        We will enable platform for Ginning &amp; Spinning mills to raise orders as per there requirement.
        </li>
        <li>
        Spinning mills can post there standards of requirement which helps them to source right lint's as per requirements of their clients.
        </li>
        <li>
        We will establish cotton ginning mills in cotton rich areas where there is no cotton mills (2<sup>nd</sup> phase),
        </li> 
    </ul>
</div>
)
}
export default Service;