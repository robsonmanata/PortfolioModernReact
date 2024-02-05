import "./sectionC.css"
import Project from "../Project/project"
import jumpingCastle from "/images/jumpingCastle.png"
import Keeper from "/images/keeperapp.png";
import Pictorial from "/images/Pictorial.png";
import {Link} from "react-router-dom"


function SectionC() {

    return(
        <div>
        <div className="sectionC">
        <div>
<span className="spanname"></span>
<Link to="/Portfolio/portfolio"><h6>SOME OF MY LATEST WORK</h6></Link>

<span className="spanname"></span>
</div>
<div >
<Project title="Bouncing castle hiring
Website" siteimage={jumpingCastle} sitelink="https://jade-tanuki-07db8e.netlify.app/"></Project>
<Project title="Pictorial web MERN application" 
           siteimage={Pictorial} 
           sitelink="https://pictorial.netlify.app/">
           </Project>
           <Project title="keeper web application Interactive UI design" 
           siteimage={Keeper} 
           sitelink="https://robsonmanata.github.io/Keeper_app/">
           </Project>
</div>


        </div>
        <Link  className="explore"to="/Portfolio/portfolio">Explore more</Link>
        </div>
    )
}


export default SectionC

