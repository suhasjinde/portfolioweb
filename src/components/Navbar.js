/*jshint esversion:6 */
import React, {useState} from "react";
function Navbar(){
    var [brandname,statefun]=useState("Suhas R Jinde");
    function MousedOver(){
        statefun("What's Up?");
    }
    function MousedOut(){
        statefun("Suhas R Jinde");
    }
    return(<div>
    <nav className="navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand" href="#" onMouseOver={MousedOver} onMouseOut={MousedOut}>{brandname}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#about">About me <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#projects">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#skill">IT Domains</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Programming Languages
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#python">Python</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#java">Java</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#javascript">Javascript</a>
        </div>
        
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#experience">Experience | Trainings</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://drive.google.com/file/d/1VSrC-M7DH2xOl30z38RbOZWFgPk1jKBA/view?usp=sharing">Certificates</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Contact me</a>
      </li>
    </ul>
  </div>
</nav>
</div>
);
}
export default Navbar;