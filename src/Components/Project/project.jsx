import "./project.css"

function Project(myProp){

    return(

        <div className="myProject">
        <a href={myProp.sitelink}>
        <div className="project">
        <div className="imgContainer">
        <img src={myProp.siteimage} loading="lazy"></img>
        </div>
        <p>{myProp.title}</p>
        </div>
        </a>
        </div>
    )
}

export default Project