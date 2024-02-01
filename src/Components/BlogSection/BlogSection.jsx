import "./BlogSection.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'



function BlogSection() {

    return(
        <div className="BlogSection">
          <div className="BlogLeft">
            <h4>Blog</h4>
            <h2>What is new on <br></br>my blog and <br></br>news .</h2>
          </div>
          <div className="BlogRight">
          <div>
          <p>Feb 26 Blog</p>
          <h4>A couple of tips for designing websites which are disability friendly .
          <a href="https://www.instagram.com/webart_inc/"><FontAwesomeIcon className="highlight" size="1x" icon={faArrowRight} transform="grow-6"></FontAwesomeIcon></a> 
          </h4>
          
          <span></span>
          </div>
          <div>
          <p>Feb 26 Blog</p>
          <h4>A couple of tips for designing websites which are disability friendly .
          <a href="https://www.instagram.com/webart_inc/"><FontAwesomeIcon className="highlight" size="1x" icon={faArrowRight} transform="grow-6"></FontAwesomeIcon></a> 
          </h4>
          
          <span></span>
          </div>
          <div>
          <p>Feb 26 Blog</p>
          <h4>A couple of tips for designing websites which are disability friendly .
          <a href="https://www.instagram.com/webart_inc/"><FontAwesomeIcon className="highlight" size="1x" icon={faArrowRight} transform="grow-6"></FontAwesomeIcon></a> 
          </h4>
          
          <span></span>
          </div>
          </div>
         
        </div>
    )
}

export default BlogSection