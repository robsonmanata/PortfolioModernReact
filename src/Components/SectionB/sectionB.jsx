import "./sectionB.css"

function SectionB(){
    let currentDate = new Date()
    let year = currentDate.getFullYear()
    let initialYear = 2019;
    let experience =  year -initialYear;
    return (
        <div className="sectionB">
<div className="discussiondiv">
<div>
<h3>-contact</h3>
<h2>Any type of query & Discussion .</h2>
<p>I am more than happy to take the time and 
talk to you or answer any questions about your 
project idea and how it can be implemented .</p>
<a>send a message ✉</a>
</div>
</div>

<div className="experience">
<div>
<h2>You can not use up creativity the more you use , the
 more you have at your disposal .</h2>
        <h5>-Maya Angelou-</h5>
        <p>I have been building websites and web applications for 
        quite a while working mostly as a freelancer and on personal 
        projects check out my portfolio to have a feel of what I am 
        capable of .</p>
        <h6><b>{experience}</b> Years of experience <b>100%</b> project success</h6>
       
        </div>
    
</div>

        </div>
    )
}


export default SectionB