import React from "react";
import { Link } from "react-router-dom";

function Parte2() {
  return (
    <div>
      <h3>
        <Link to="/documentation">
          How To Start
        </Link>
      </h3>
      <ul>
        <li>
          <Link to="/documentation/table-of-contents/what-is-forex">
            What is Forex
          </Link>
        </li>
        <li>
          <Link to="/documentation/table-of-contents/algorithmic-trading">
            Algorithmic Trading
          </Link>
        </li>
        <li>
          <Link to="/documentation/best-brokers">
            Best Brokers
          </Link>
        </li>
        <li>
          <Link to="/documentation/infrastructure/virtual-private-server">
            Virtual Private Server
          </Link>
        </li>
        <li>
          <Link to="/documentation/infrastructure/cybersecurity-and-scams">
            Cybersecurity and Scams
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Parte2;
