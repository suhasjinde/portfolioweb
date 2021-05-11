import React from "react";
function SkillCard(props){

    return(<div className="skill-card col-lg-4 col-md-4" id={props.id}>
    <h3>{props.title}</h3>
    <img src={props.imgURL} alt="image" className="skill-img" />
    </div>);
}
export default SkillCard;