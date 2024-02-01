import "./portfolio.css";
import Project from "../Project/project";
import jumpingCastle from "/images/jumpingCastle.png";
import Pictorial from "/images/pictorial.png";
import Storelocatore from "/images/storelocater.png";
import Dogfinder from "/images/dogTinder.png";
import Keeper from "/images/keeperapp.png";
import Todolist from "/images/todolist.png";
import Newsletter from "/images/signup.png";




function Portfolio(){
    return(

        <div className="portfolio">

            <Project title="Bouncing castle hiring Website" 
            siteimage={jumpingCastle} 
            sitelink="https://jade-tanuki-07db8e.netlify.app/">
            </Project>

           <Project title="Pictorial web MERN application" 
           siteimage={Pictorial} 
           sitelink="https://pictorial.netlify.app/">
           </Project>

           <Project title="Store locator Web application" 
           siteimage={Storelocatore} 
           sitelink="https://stormy-everglades-81765.herokuapp.com">
           </Project>

           <Project title="Dogfinder website Responsive UI design" 
           siteimage={Dogfinder} 
           sitelink="https://robsonmanata.github.io/dogfinder/">
           </Project>

           <Project title="keeper application Interactive design" 
           siteimage={Keeper} 
           sitelink="https://robsonmanata.github.io/Keeper_app/">
           </Project>

           <Project title="To-DO application Interactive UI design " 
           siteimage={Todolist} 
           sitelink="https://pure-lake-95197.herokuapp.com/">
           </Project>

           <Project title="News letter page mailchimp" 
           siteimage={Newsletter} 
           sitelink="https://fathomless-forest-11609.herokuapp.com">
           </Project>


        </div>
    )
}
export default Portfolio;