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
          <p>Feb 11 2024 Blog</p>
          <a className="bloglinks"  href="https://medium.com/@robsonmanata/building-a-restful-api-with-node-js-express-and-mongodb-daa2ba223dda"><h5>Building a RESTful API with Node.js, Express, and MongoDB</h5>
          </a>
          <span></span>
          </div>
          <div>
          
          <p>April 16 Blog</p>
          <Link className="bloglinks"  to="/Blog/blog"><h5>Effective database management .</h5>
          </Link>
          <span></span>
          </div>

          <div>
          <p>October 24 Blog</p>
          <Link className="bloglinks" to="/Blog/blog"><h5>Responsive website design.</h5>
          </Link>
          <span></span>
          </div>

          </div>
         
        </div>
    )
    }
    export default BlogSection