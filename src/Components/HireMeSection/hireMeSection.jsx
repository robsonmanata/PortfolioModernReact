import"./hireMeSection.css";
import { useState,useRef } from "react";
import emailjs, { init } from "@emailjs/browser";






function HireMeSection(myProps){

  init("RoGSsygyEbD893MjK");
  const form = useRef();
    const [inputs, setInputs] = useState({});
    

    const handleChange = (event) => {
      
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      emailjs.sendForm("service_9r31use", "template_orb36ga", form.current,"RoGSsygyEbD893MjK").then(
        (result) => {
          alert("Message Sent Successfully");
          alert(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
      console.log(inputs);
      setTimeout(function () { window.location.href =  
        "/Messagesent/messagesent";}
     ,3000 )
    }



    return(
        <div id="hireMeid" ref={myProps.hireMe} className="hireMe">
        <div className="callToAction">
            <h1>Got a project? lets talk.</h1>
            
        </div>
        <div className="formdiv">

            <h1>Tell me about your vision for<br></br> the project and lets make<br></br> that vision a reality .</h1>
           <form ref={form} onSubmit={handleSubmit}>
            <input type="text" name="Name" placeholder="Name" onChange={handleChange}></input>
            <input type="email" name="Email" placeholder="Email*" onChange={handleChange} required></input>
            <input type="tel" name="phonenumber" placeholder="+phone" onChange={handleChange}></input>
            <select id="service" name="Services" onChange={handleChange}>
            <option value="Services">Services</option>
        <option value="website design">website design</option>
        <option value="web application">web application</option>
        <option value="graphic projects">graphic design projects</option>
        <option value="database Optimisation">database Optimisation</option>
      </select>
            <textarea name="message"placeholder="" onChange={handleChange} required></textarea>
            <input type="submit" name="Submit"></input>
            
           </form>
        </div>

        </div>
    )
}

export default HireMeSection;