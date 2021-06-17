import React, { useContext, useEffect, useState } from "react"
import { PostContext } from "./PostProvider"
import "./Posts.css"
import { useHistory } from "react-router-dom"
// import { AppView } from "../AppView"
// import userEvent from "@testing-library/user-event"

export const PostList = () => {
    const { posts, getPosts, removePost, addPostToLikesPage } = useContext(PostContext)


    useEffect(() => {
        console.log("PostList: useEffect - getPosts")
        getPosts()
    }, [])

    const history = useHistory()



    return (
        <>
            <div className="movePostButton">
                <button className="postButton" onClick={
                    () => history.push("posts/create")
                }>POST</button>
            </div>
            <section className="posts">
                {

                    //mapping through the array of posts to grab a single post object and display it with the proper attachments
                    posts.map(post => {

                        const handleRemove = () => {
                            removePost(post.id)
                                .then(() => {
                                    history.push("/posts")
                                })
                        }

                        const handleAddingToLikes = () => {
                            addPostToLikesPage({
                                userId: parseInt(localStorage.getItem("myFavoriteRecipe_user")),
                                postId: post.id
                            })
                        }
                        return (
                            <div className="post" id={`post--${post.id}`}>
                                <div className="postTitle postText">
                                    <strong>{post.title}</strong>
                                </div>
                                <div className="postCreator">
                                </div>

                                <img className="postImage"
                                    src={post.imageURL} />


                                <div className="postIngredients postText">
                                    <strong>Ingredients</strong>: {post.ingredients}
                                </div>
                                <div className="postInstructions postText">
                                    <strong>Instructions</strong>: {post.instructions}
                                </div>
                                <button className="removeAndAddButtons" onClick={handleRemove}>Remove Post</button>
                                <button className="addTo" onClick={handleAddingToLikes}>Add To My CookBook</button>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}