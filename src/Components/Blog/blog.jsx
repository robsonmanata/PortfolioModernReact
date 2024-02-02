import "./blog.css"
import BlogPost from "../BlogComponent/blogComponent"
import  Effectivedatabase from "/images/Effective-Database-Management-Cover-01.png"
import Responsivedesign from "/images/responsive-design-ss-1-800x450.jpg"
import Accesible from "/images/Slide27articlesaccessible-design-for-users-with-disabilities.png"

function Blog(){
    return(

        <div className="blog">
<BlogPost postText="Data is a key asset for any association. It’s 
what drives member engagement, increases member retention, creates additional 
revenue, and enhances marketing efforts. The majority of associations are not 
doing as bad as they think at managing data. Still, there are always opportunities 
for improvement."
postImg={ Effectivedatabase}

>
</BlogPost>
<BlogPost postText="Data is a key asset for any association. It’s 
what drives member engagement, increases member retention, creates additional 
revenue, and enhances marketing efforts. The majority of associations are not 
doing as bad as they think at managing data. Still, there are always opportunities 
for improvement."
postImg={ Responsivedesign}
>
</BlogPost>
<BlogPost postText="Data is a key asset for any association. It’s 
what drives member engagement, increases member retention, creates additional 
revenue, and enhances marketing efforts. The majority of associations are not 
doing as bad as they think at managing data. Still, there are always opportunities 
for improvement."
postImg={Accesible}
>
</BlogPost>
        </div>
        
    )
}

export default Blog