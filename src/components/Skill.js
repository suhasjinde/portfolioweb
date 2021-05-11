import React from "react";
import SkillCard from "./SkillCard";
import SkillImg1 from "./images/MERN.png";
import SkillImg2 from "./images/datascience.jpg";
import SkillImg3 from "./images/msazure.jpg";

function Skill(){

    return(<div id="skill" className="alternate-div">
        <h1>IT Domains</h1>
        <h6>Technical Domains which im eager to build my knowledge on and master one day!</h6>
        <div className="row">
                <SkillCard title="MERN Full Stack Development" imgURL={SkillImg1} />
                <SkillCard title="Data  Science" imgURL={SkillImg2} />
                <SkillCard title="Azure Cloud Computing" imgURL={SkillImg3} />
        </div>
    </div>);
}
export default Skill;