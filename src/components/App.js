import React from 'react';
import Header from "./Header";
import About from "./About";
import Skill from "./Skill";
import Projects from "./Projects";
import ProgLang from "./ProgLang";
import Experience from "./Experience";
import Contact from "./Contact";
function App(){
    return (<div><div className="introduction">
    <Header />
    <About /></div>
    <Skill />
    <Experience />
    <ProgLang />
    <Projects />
    <Contact />
    
    </div>);
}
export default App;
