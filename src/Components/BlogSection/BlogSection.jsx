import "./BlogSection.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {Link}  from "react-router-dom"



function BlogSection() {

    return(
        <div className="BlogSection">
          <div className="BlogLeft">
            <h4><Link className ="Bloglink" Link to="/Blog/blog">Blog</Link></h4>
            <h2>What is new on my blog and news .</h2>
          </div>
          <div className="BlogRight">
          <div>
          <p>Feb 26 Blog</p>
          <h5>A couple of tips for designing websites which are disability friendly .
          <a><FontAwesomeIcon className="highlight" size="1x" icon={faArrowRight} transform="grow-6">
            export default BlogSection
          </FontAwesomeIcon></a> 
          </h5>
          
          <span></span>
          </div>
          <div>
          <p>Feb 26 Blog</p>
          <h5>A couple of tips for designing websites which are disability friendly .
          <a><FontAwesomeIcon className="highlight" size="1x" icon={faArrowRight} transform="grow-6">
            export default BlogSection
          </FontAwesomeIcon></a> 
          </h5>
          
          <span></span>
          </div>
          <div>
          <p>Feb 26 Blog</p>
          <h5>A couple of tips for designing websites which are disability friendly .
          <a><FontAwesomeIcon className="highlight" size="1x" icon={faArrowRight} transform="grow-6">
            export default BlogSection
          </FontAwesomeIcon></a> 
          </h5>
          
          <span></span>
          </div>
          </div>
         
        </div>
    )
    }
    export default BlogSection