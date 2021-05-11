import React from "react";
import PCard from "./PCard";
function Experience(){
    return(
        <div className="experience container-fluid" id="experience">
        <h1>Experience|Trainings</h1>
            <PCard cname="exps" title="Azure Cloud Computing Internship" content={ <p>Microsoft Azure, commonly referred to as Azure is a cloud computing service
created by Microsoft for building, testing, deploying, and managing applications and
services through Microsoft-managed data centers. I Gained knowledge about cloud computing and Microsoft Azure, this internship helped to
me to get familiar with various cloud resources and services provided by Azure and cloud
computing in general.
<a href="https://drive.google.com/file/d/1esWerRzIpLPsKt8oBPVF7iCP-l8ERUfO/view?usp=sharing"> Link to the internship report</a>  </p>} />
            <PCard cname="exps" title="Java Full Stack Training" content="Undergoing Java full stack training at Pentagon space Pvt limited, Bengaluru.
" />
        </div>
    );
}
export default Experience;