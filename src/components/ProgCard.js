import React from "react";
function ProgCard(props){
    return(
<div class="flip-box col-lg-4 col-md-6" id={props.id}>
    <div class="flip-box-inner">
        <div class="flip-box-front">
            <img src={props.url} alt="image" className="rotatingimg" />
        </div>
        <div class="flip-box-back">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
  </div>
</div>
    );
}
export default ProgCard;