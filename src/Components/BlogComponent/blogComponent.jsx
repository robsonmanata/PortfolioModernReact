import "./BlogComponent.css"



function BlogPost(myProps){

    return(
        <div className="blogpostanchor">
        <a href={myProps.link}>
        <div className="blogpostdiv">
            <div className="blogpostimg">
                <img src={myProps.postImg} loading="lazy"></img>
            </div>
            <p>{myProps.postText}</p>
        </div>
        </a>
        </div>
    )
}

export default BlogPost