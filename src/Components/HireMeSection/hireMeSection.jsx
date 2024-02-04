import"./hireMeSection.css";
import { useState } from "react";






function HireMeSection(myProps){

    const [inputs, setInputs] = useState({});
    

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
      setTimeout(function () { window.location.href =  
        "http://localhost:5173/Messagesent/messagesent";}
     ,3000 )
    }



    return(
        <div id="hireMeid" ref={myProps.hireMe} className="hireMe">
        <div className="callToAction">
            <h1>Got a project? lets talk.</h1>
            
        </div>
        <div className="formdiv">

            <h1>Tell me about your vision for<br></br> the project and lets make<br></br> that vision a reality .</h1>
           <form  onSubmit={handleSubmit}>
            <input type="text" name="Name" placeholder="Name" onChange={handleChange}></input>
            <input type="email" name="Email" placeholder="Email" onChange={handleChange}></input>
            <select id="service" name="Services" onChange={handleChange}>
            <option value="Services">Services</option>
        <option value="website design">website design</option>
        <option value="web application">web application</option>
        <option value="graphic projects">graphic projects</option>
        <option value="database Optimisation">database Optimisation</option>
      </select>
            <textarea name="message"placeholder="" onChange={handleChange}></textarea>
            <input type="file" name="file" placeholder="upload" onChange={handleChange}></input>
            <input type="submit" name="Submit"></input>
            
           </form>
        </div>

        </div>
    )
}

export default HireMeSection;