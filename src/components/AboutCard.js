import React from "react";
function AboutCard(props){
    return(
        <div className="container-fluid">
    <div className={props.cname} id={props.idname}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
    </div>
    </div>);
}
export default AboutCard;