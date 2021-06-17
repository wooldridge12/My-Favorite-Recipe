import React, { useContext, useEffect } from "react"
import "./Page.css"
import { LikeContext } from "./PageProvider"
// import { PostContext } from "../Posts/PostProvider"


export const PageList = () => {
    const { likes, getLikes, getLikesByUserId } = useContext(LikeContext)
    // const { posts, getPosts } = useContext(PostContext)
    
    useEffect(() => {
        console.log("List: useEffect - getLikes")
        const currentUserId = parseInt(localStorage.getItem("myFavoriteRecipe_user"))
        getLikesByUserId(currentUserId)
    }, [])


        
        return(
            <section className="likes">
            {
                likes.map(like => {
                    return (
                        <div className="like" value={`like--${like.id}`}>
                            <div className="likeGroupBox">
                                <div className="titleOfLikes">{like.post.title}</div><br/>
                                <img className="likePostImage"
                                    src={like.post.imageURL} />
                                {like.post.ingredients}<br/>
                                <div className="spaceBetweenText">
                                {like.post.instructions}</div>
                            </div>
                        </div>

)
                })
            }
        </section>
    )

}