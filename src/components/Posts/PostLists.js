import React, { useContext, useEffect, useState } from "react"
import { PostContext } from "./PostProvider"
import "./Posts.css"
import { useHistory } from "react-router-dom"


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
                            if (post.userId === parseInt(localStorage.getItem("myFavoriteRecipe_user"))) {
                            removePost(post.id) }
                            else return `<br />`
                        }
                        //setting each user up as different users so they dont have the same likes.
                        const handleAddingToLikes = () => {
                            addPostToLikesPage({
                                //using localStorage to getItem by myFavortieRecipe_user.
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
                                
                                <button className="removeButton" onClick={handleRemove}>Remove Post</button>

                                <button className="addTo" onClick={handleAddingToLikes}>Add To My CookBook</button>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}