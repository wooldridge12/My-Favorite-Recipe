import React, { useContext, useEffect } from "react"
import "./Page.css"
import { LikeContext } from "./PageProvider"
// import { PostContext } from "../Posts/PostProvider"


export const PageList = () => {
    const { likes, getLikes } = useContext(LikeContext)
    // const { posts, getPosts } = useContext(PostContext)
    
    useEffect(() => {
        console.log("List: useEffect - getLikes")
        getLikes()
    }, [])

        
       
        
        return(
            <section className="likes">
            {
                likes.map(like => {
                    return (
                        <div className="like" value={`like--${like.id}`}>
                            <div className="likeGroupBox">
                                <div className="titleOfLikes">{like.title}</div><br/>
                                <img className="likePostImage"
                                    src={like.imageURL} />
                                {like.ingredients}<br/>
                                <div className="spaceBetweenText">
                                {like.instructions}</div>
                            </div>
                        </div>

)
                })
            }
        </section>
    )

}