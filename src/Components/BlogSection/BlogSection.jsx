import "./BlogSection.css"
import {Link}  from "react-router-dom"



function BlogSection() {

    return(
        <div className="BlogSection">
          <div className="BlogLeft">
            <Link className ="Bloglink" to="/Blog/blog"><h4>Blog</h4></Link>
            <h2>What is new on my blog and news .</h2>
          </div>
          <div className="BlogRight">
          <div>
          <p>Feb 26 Blog</p>
          <Link className="bloglinks"  to="/Blog/blog"><h5>A couple of tips for designing websites which are disability friendly .</h5>
          </Link>
          <span></span>
          </div>
          <div>
          
          <p>Feb 26 Blog</p>
          <Link className="bloglinks"  to="/Blog/blog"><h5>Effective database management .</h5>
          </Link>
          <span></span>
          </div>

          <div>
          <p>Feb 26 Blog</p>
          <Link className="bloglinks" to="/Blog/blog"><h5>Responsive website design.</h5>
          </Link>
          <span></span>
          </div>

          </div>
         
        </div>
    )
    }
    export default BlogSection