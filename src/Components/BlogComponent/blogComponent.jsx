import "./BlogComponent.css"



function BlogPost(myProps){

    return(

        <div className="blogpostdiv">
            <div className="blogpostimg">
                <img src={myProps.postImg}></img>
            </div>
            <p>{myProps.postText}</p>
        </div>
    )
}

export default BlogPost