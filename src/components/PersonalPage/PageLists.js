import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import "./Page.css"
import { LikeContext } from "./PageProvider"
// import { PostContext } from "../Posts/PostProvider"


export const PageList = () => {
    const { likes, removeFromLikes, getLikesByUserId } = useContext(LikeContext)
    // const { getPosts } = useContext(PostContext)

    useEffect(() => {
        console.log("List: useEffect - getLikes")
        const currentUserId = parseInt(localStorage.getItem("myFavoriteRecipe_user"))
        getLikesByUserId(currentUserId)
    }, [])

    const history = useHistory()

    
    // const handleRemovingFromLikes = () => {
    //     removeFromLikes(likeId)
    //         .then(() => {
    //             history.push("/likes")
    //         })
    //     }

    return (
        <section className="likes">
            {
                likes.map(like => {
                        
                        
                    return (
                        <div className="like" value={`like--${like.id}`}>
                            <div className="likeGroupBox">
                                <div className="titleOfLikes">{like.post.title}</div>
                                <img className="likePostImage"
                                    src={like.post.imageURL} />
                                {like.post.ingredients}
                                <div className="spaceBetweenText">
                                    {like.post.instructions}</div>

                                <button onClick={() => {
                                     removeFromLikes(like.id)
                                     .then(() => {
                                         history.push("/likes")
                                     })
                                }}>Remove from my CookBook</button>
                            </div>
                        </div>

                    )
                })
            }
        </section>
    )

}