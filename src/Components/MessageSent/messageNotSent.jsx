import "./messageSent.css"
import notsentMessage from "/images/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg"



function MessageNotSent(){
return(
    <div className="messagesent">
    <div className="msgimg">
    <img src={notsentMessage}></img>
    </div>
        <h1>Something went wrong</h1>
        <p>Try sending your message again</p>
    </div>
)

}
export default  MessageNotSent ;