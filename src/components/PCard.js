import React from "react";
function PCard(props){
    return(
          <div className={props.cname} id="pcard">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}
export default PCard;
