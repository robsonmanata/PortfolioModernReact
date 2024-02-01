import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import logo from "/images/presto-1-removebg-preview.png"






function Footer() {
    let year=new Date().getFullYear();

    return(
        <div className="footer">
        <div>
        <img  src={logo} alt="logo"></img>
</div>
              <div className="footersocials">
            <a href="https://www.instagram.com/webart_inc/"><FontAwesomeIcon className="highlight" size="1x" icon={faInstagram} transform="grow-6"></FontAwesomeIcon></a>
            <a href="https://twitter.com/Robsonmanata"><FontAwesomeIcon  className="highlight" size="1x" icon={faXTwitter} transform="grow-6"></FontAwesomeIcon></a>
            <a href="https://www.linkedin.com/in/robson-manata-07926a180"><FontAwesomeIcon  className="highlight" size="1x" icon={faLinkedin} transform="grow-6"></FontAwesomeIcon></a>
        </div>
        <div className="copyright">
        <p>© {year} Robson Manata</p>
        </div>
        </div>
    )
}

export default Footer