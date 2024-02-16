import "./about.css"
import Robson from "/images/Robson.png"
import Brain from "/images/brainstorm-power-thinking-abstract-brain-logo-vector-22755704-removebg-preview.png"
import codesymbol from "/images/codesymbol.png"
import database from "/images/database.png"
import gears from "/images/gears.png"
function About(){

    return(
        <div>
        <div className="about">
        <div className="circle">
         <span></span>
        </div>
        <img className="circleimg" src={Robson}></img>
        <div className="aboutme">
            <h1>About Me</h1>
            <p>I am <u>Robson Manata</u> a <u>Front</u>end and <u>Back</u>end developer based in Poland , 
            I enjoy turning complex problems into simple , beautiful and intuitive designs . 
            When i am not coding or pushing pixels , you will find me cooking , 
            on a football pitch or working out .</p>
        </div>
</div>
        <div className="brain">
        <div className="brainimage">
            <img src={Brain}></img>
        </div>
          
          <div className="coder">
           <h1>Coder</h1>
           <p>Front End/Back End Developer who focuses on writing clean , elegent and efficient code 
           insuring the best possible functionality .</p>
          </div>

          <div className="designer">
            <h1>Designer</h1>
            <p>UI/UX Designer with a passion for designing beautiful and functional user experience . 
            I belive every detail counts</p>
            </div>

        </div>

        <div className="skills">
        
        <h1><span></span> Skills Overview <span></span></h1>
        
        <div className="skillsContainer">
        <div>
            <img src={codesymbol}></img>
            <p>javascipt/ES6</p>
            <p>React</p>
            <p>Css/Html</p>
            <p>jquery</p>
        </div>
        <div>
            <img src={database}></img>
            <p>Nodejs</p>
            <p>Expressjs</p>
            <p>Mongodb</p>
            <p>Mysql</p>
            <p>APIs</p>

        </div>

        <div>
            <img src={gears}></img>
            <p>java</p>
            <p>C++</p>
            <p>linux</p>
            <p>Git</p>
            <p>CCNA Routing and Switching:Networking</p>
            <p>Cyber security essentials</p>
            <p>AdobeInDesign</p>
        </div>

        </div>


        </div>
        </div>
    )
}

export default About
