import React from "react";
import AboutCard from "./AboutCard";
import ProfImg from "./images/suhas.png";
function About(){
    return( <div>
     <img src={ProfImg} className="suhas-pic" />
    <AboutCard cname="intro-ele" title="A passionate individual who aspires to be an accomplished Software Engineer." content={[<b>A believer of excellence</b>," having the zeal to up-skill, being efficient & productive for the company & develop as well as diversify my professional skill-set."]} />
    <AboutCard cname="intro-ele" idname="about" title="About" content="Currently persuing B.E in Computer Science and Engineering at K.S School of Engineering and Management. I am based in Bengaluru, India in a family for three. There are 3 things which I value the most in life: time, passion and family. I consider myself as a 'forever student' trying to gain knowledge each and every day. My biggest role model would be my father who taught me to believe in myself and not to give up, he always said that hard-work pays out eventually if not immediately." />
    </div>);
}
export default About;