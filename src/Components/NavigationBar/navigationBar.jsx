
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
<a onClick={()=>animation()} ><Link to="/">
<img  src={logo} alt="logo"></img>
</Link>
</a>
</div>

<div className={"dropdown"}>
<div onClick={()=>animation()} className={animated? 'humburger1 ':"humburger"}>
<span></span>
<span></span>
<span></span>
</div>  
</div>

    <a href="#"><Link to="/About/about">About</Link></a>
    <a onClick={()=>{myProps.scrollSection(myProps.services);myProps.setStartAnimation(); animation()}} > <Link to={`/#servicesid`}>Services</Link></a>
    
    <a href="#"><Link to="/Portfolio/portfolio">Portfolio</Link></a>
    <a onClick={()=>animation()}><Link to="/Blog/blog">Blog</Link></a>
    <a onClick={()=>{myProps.scrollSection(myProps.hireMe) ; animation()}}><button><Link to={`/#hireMeid`}>Hire me</Link></button></a>
    
    </div> 
    <div className={animated? "dropdown-content1":"dropdown-content"}>
  <a onClick={()=>animation()} ><Link to="/About/about">About</Link></a>
    <a onClick={()=>{myProps.scrollSection(myProps.services) ;myProps.setStartAnimation();animation()}}><Link to={`/#servicesid`}>Services</Link></a>
    <a onClick={()=>animation()} ><Link to="/Portfolio/portfolio">Portfolio</Link></a>
    <a onClick={()=>animation()} ><Link to="/Blog/blog">Blog</Link></a>
    <a onClick={()=>{myProps.scrollSection(myProps.hireMe) ; animation()}}><button><Link to="/#hireMeid">Hire me</Link></button></a>
  </div>  

</div>

    )
}

export default NavigationBar;
