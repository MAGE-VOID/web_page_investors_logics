import React from "react";
import { Link } from "react-router-dom";

function Parte4() {
  return (
    <div>
      <h3>More</h3>
      <ul>
        <li>
          <Link to="/documentation/about-us">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/documentation/assistance-and-policies/help-center">
            Help Center
          </Link>
        </li>
        <li>
          <Link to="/documentation/assistance-and-policies/terms-and-conditions">
            Terms and Conditions
          </Link>
        </li>
        <li>
          <Link to="/documentation/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Parte4;
