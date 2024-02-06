
import "./navigationBar.css"
import logo from "/images/presto-1-removebg-preview.png"
import { useState } from "react";
import {Link} from 'react-router-dom';



 function NavigationBar(myProps) {
  

  const[animated,Setanimation] =useState(false); 

    const animation = ()=> {
      Setanimation(!animated);   
  }
    return(  
      <div> 
<div className="navigation">
<div className="imga">
<Link onClick={()=> animated? animation():null} to="/">
<img  src={logo} alt="logo"></img>
</Link>

</div>

<div className={"dropdown"}>
<div onClick={()=>animation()} className={animated? 'humburger1 ':"humburger"}>
<span></span>
<span></span>
<span></span>
</div>  
</div>

    <Link to="/About/about">About</Link>
     <Link onClick={()=>{myProps.scrollSection(myProps.services);myProps.setStartAnimation(); animation()}}  to={`/#servicesid`}>Services</Link>
    
    <Link to="/Portfolio/portfolio">Portfolio</Link>
    <Link onClick={()=>animation()} to="/Blog/blog">Blog</Link>
    <button onClick={()=>{myProps.scrollSection(myProps.hireMe) ; animation()}}><Link to={`/#hireMeid`}>Hire Me</Link></button>
    
    </div> 
    <div className={animated? "dropdown-content1":"dropdown-content"}>
    <Link onClick={()=>animation()} to="/About/about">About</Link>
    <Link onClick={()=>{myProps.scrollSection(myProps.services) ;myProps.setStartAnimation();animation()}} to={`/#servicesid`}>Services</Link>
    <Link onClick={()=>animation()} to="/Portfolio/portfolio">Portfolio</Link>
    <Link onClick={()=>animation()} to="/Blog/blog">Blog</Link>
    <button onClick={()=>{myProps.scrollSection(myProps.hireMe) ; animation()}}><Link to="/#hireMeid">Hire Me</Link></button>
  </div>  

</div>

    )
}

export default NavigationBar;
