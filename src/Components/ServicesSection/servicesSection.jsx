import "./serviceSection.css"





function ServiceSection(myProps){
    
    
    return(
        <div ref={myProps.services} className={myProps.startAnimation? "services":"services1"}>
        <div>
            <h1>Responsive Web Designing</h1>
        </div>
        <div>
            <h1>Web Application Development </h1>
        </div>
        <div>
        <h1>Full Stack Developement</h1>
        </div>

        </div>
    )
}

export default ServiceSection