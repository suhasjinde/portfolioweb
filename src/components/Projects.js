import React from "react";
import PCard from "./PCard"; 
function Projects(){
    return(<div className="container-fluid" id="projects">
    <h1>Projects</h1>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <PCard cname="projectCard" title="Azure cloud solution : Internship project.
" content={<div className="divproject">The main objective of this project was to develop a cloud solution consisting services like compute, storage,
network etc. for a company to run on cloud platform:<ul><li>
Vnets and peering of Vnets to establish communication between Vnets.</li><li>
Azure VM for cloud computation, assigning public IP for each VM inside their respective Vnets.</li><li>
Creating Azure blob storage to store large amount of unstructured data on cloud, SQL database for</li><li>
structured data, data disks on respective VMs and creating file shares and mounting it on VMs.</li><li>
Creating an Azure policy to ensure all VMs are enabled for backup.</li><li>
Backing up VMs and creating an alert in Azure monitor for CPU threshold breach.</li></ul></div>} />
    </div>
    <div className="carousel-item">
    <PCard cname="projectCard" title="Trip Logs : 7th sem Btech project." content={<div className="divproject">Trip Logs is a mobile friendly web application developed to offer travel services where user can book and
manage travel tickets.<ul><li>
Front end was developed using HTML5, CSS, javaScript, bootstrap 4.</li><li>
Backend was developed using NodeJS and mongoDB.</li><li>
Npm modules used: expressJS, passportJS, mongoose-encryption, lodash, ejs, etc.</li></ul>
</div>} />
    </div>
    <div class="carousel-item">
    <PCard cname="projectCard" title="Weather analysis system : personal interest project.
" content={<div className="divproject">Using data mining methods and machine learning, I trained a model to classify the weather as partly cloudy,
mostly cloudy, foggy and overcast.<ul><li>
Dataset: weather dataset from kaggle.com</li><li>
logistic regression model of scikit learn was used to train the model.</li><li>
The model was able to predict weather as partly cloudy, mostly cloudy, foggy and overcast on giving the
input to the trained model.</li>
</ul></div>} />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
    );
}
export default Projects;