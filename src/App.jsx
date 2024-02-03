
import './App.css';
import NavigationBar from './Components/NavigationBar/navigationBar';
import SectionA from './Components/SectionA/sectionA';
import SectionB from './Components/SectionB/sectionB';
import SectionC from './Components/SectionC/sectionC';
import ServiceSection from './Components/ServicesSection/servicesSection';
import BlogSection from './Components/BlogSection/BlogSection';
import HireMeSection from './Components/HireMeSection/hireMeSection';
import Footer from './Components/Footer/footer';
import Portfolio from './Components/Portfolio/portfolio';
import Blog from './Components/Blog/blog';
import About from './Components/About/about';
import MessageSent from './Components/MessageSent/messageSent';
import { Route,Routes } from 'react-router-dom';

import {useRef} from "react";
import { useState } from 'react';


function App() {
  const [startAnimation,setStartAnimation] = useState(false) ;
  const myAnimation=()=>{
  
  setStartAnimation(!startAnimation) ;
  setTimeout(setStartAnimation,1000)
  
  }
  const services = useRef(null);
  const hireme = useRef(null);
  const scrollSection =(elementRef)=>{
   window.scrollTo({
    top:elementRef.current.offsetTop,
    behavior: "smooth",
    
   }
   )

  }
  
  
  return(
    <div>
    
   <NavigationBar hireMe={hireme} services={services} scrollSection={scrollSection} startAnimation={startAnimation} setStartAnimation={myAnimation}></NavigationBar>
   
   <div>
   <Routes>
   <Route path="/"  element={
    <div>
   <SectionA></SectionA>
   <SectionB></SectionB>
   <ServiceSection services={services} startAnimation={startAnimation}></ServiceSection>
   <SectionC></SectionC>
   <BlogSection></BlogSection>
   <HireMeSection hireMe={hireme}></HireMeSection>
   
   </div>

   }/>
   <Route path="/Portfolio/portfolio"  element={<Portfolio/>}/>
   <Route path="/Blog/blog"  element={<Blog/>}/>
   <Route path="/About/about" element={<About/>}/>
   <Route path="/Messagesent/messagesent" element={<MessageSent/>}/>
   
   </Routes>
   
   </div>
   
   <Footer></Footer>
</div>

  )
}

export default App
