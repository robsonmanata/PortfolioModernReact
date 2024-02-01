import "./sectionA.css"
import mainpageimg from "/images/imgbin_cube-graphics-three-dimensional-space-data-png.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'





function SectionA(){
    return(
        <div className="first-section">
    <div className="left-item">
    <div>
        <h1>Robson <br></br> Manata</h1>
        <span className="spanName"></span>
        </div>
        <div className="socials">
            <a href="https://www.instagram.com/webart_inc/"><FontAwesomeIcon className="highlight" size="1x" icon={faInstagram} transform="grow-6"></FontAwesomeIcon></a>
            <a href="https://twitter.com/Robsonmanata"><FontAwesomeIcon  className="highlight" size="1x" icon={faXTwitter} transform="grow-6"></FontAwesomeIcon></a>
            <a href="https://www.linkedin.com/in/robson-manata-07926a180"><FontAwesomeIcon  className="highlight" size="1x" icon={faLinkedin} transform="grow-6"></FontAwesomeIcon></a>
        </div>
    </div>
     <div className="right-item">
    <img src={mainpageimg}></img>
     </div>
     <div className="left-item1">
     <div>
   <h1>UI/UX Designer</h1>
   <p>I take pride in creating beautiful and intuitive interface designs that 
      that will leave a lasting impression on your clients
     </p>
      </div>
      <div>
      <h1>Developer</h1>
      <p>
       My proficiency in coding and software architectural design 
       allow me to create high performing, highly functional  
       responsive websites and apps . </p>
       </div>
       
     </div>
     
     
</div>
    )
}

export default SectionA;