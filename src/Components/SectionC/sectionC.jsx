import "./sectionC.css"
import Project from "../Project/project"
import jumpingCastle from "/images/jumpingCastle.png"
import Keeper from "/images/keeperapp.png";
import Pictorial from "/images/pictorial.png";


function SectionC() {

    return(
        <div className="sectionC">
        <div>
<span className="spanname"></span>
<h6>SOME OF MY LATEST WORK</h6>
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
    )
}


export default SectionC