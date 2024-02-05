import "./messageSent.css"
import sentMessage from "/images/paperplane.png"



function MessageSent(){
return(
    <div className="messagesent">
    <div className="msgimg">
    <img src={sentMessage}></img>
    </div>
        <h1>Way to go</h1>
        <p>Your message has been sent</p>
    </div>
)

}
export default  MessageSent ;