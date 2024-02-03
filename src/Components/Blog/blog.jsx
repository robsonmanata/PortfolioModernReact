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
link={ "https://www.multiview.com/association/blog/10-simple-rules-for-effective-database-management"}

>
</BlogPost>
<BlogPost postText="It's no secret that more and more people are accessing the internet using their mobile
 devices in addition to or in place of desktop computers. In fact, there are almost 7 billion mobile users 
 worldwide. (For reference, the world population is currently 7.8 billion. That’s a lot of mobile activity.)

But what they're doing on those mobile devices is even more compelling for marketers like us."
postImg={ Responsivedesign}
link={"https://blog.hubspot.com/marketing/responsive-web-design"}
>
</BlogPost>
<BlogPost postText="Over 15% of the world’s population of which more than 1 billion 
people have disability, shown in a report by WHO (world health organization) and this 
number will increase to double by the year 2050.
As we are living in a fast-paced world with lots of information without any cost is
 available at our disposal."
postImg={Accesible}

link={"https://uxplanet.org/accessible-design-is-for-all-bb83bb2b4b2f"}
>
</BlogPost>
        </div>
        
    )
}

export default Blog