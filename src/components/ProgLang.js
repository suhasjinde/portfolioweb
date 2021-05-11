import React from "react";
import ProgCard from "./ProgCard";
import SkillImg4 from "./images/python.png";
import SkillImg5 from "./images/java.png";
import SkillImg6 from "./images/js.png";

function ProgLang(){
    return(<div id="programming">
    <h1>Programming</h1>
    <h6>These are my favorite programming languages!</h6>
    <div className="row container-fluid">
            <ProgCard id="python" title="Python" url={SkillImg4} content="Python was just a Hobby project!!" />
            <ProgCard id="java" title="Java" url={SkillImg5} content="Did you know Java is the 2nd most popular programming language!" />
            <ProgCard id="javascript" title="JavaScript" url={SkillImg6} content="In many other programming languages you have to put semicolon(;) in the end of a statement. In JavaScript you can start with a semicolon, Example: ;var a=5 " />
            
    </div>
</div>);

}
export default ProgLang;