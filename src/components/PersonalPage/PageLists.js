import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import "./Page.css"
import { LikeContext } from "./PageProvider"

export const PageList = () => {
    const { likes, removeFromLikes, getLikesByUserId } = useContext(LikeContext)
//useEffect to get currentUserId and also will get the post to the bottom through the getUserByUserId.
    useEffect(() => {
        console.log("List: useEffect - getLikes")
        const currentUserId = parseInt(localStorage.getItem("myFavoriteRecipe_user"))
        getLikesByUserId(currentUserId)
    }, [])

    const history = useHistory()

    return (
        <section className="likes">
            {
                likes.map(like => {

//Built out the delete function in the onClicked button feature. 
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