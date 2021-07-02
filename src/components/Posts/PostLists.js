import React, { useContext, useEffect, useState } from "react"
import { PostContext } from "./PostProvider"
import "./Posts.css"
import { useHistory } from "react-router-dom"

//useContext is using getPosts which gets the the posts on page reload using the useEffect hook. Also is setting getPosts to posts so i can map through posts to allow me to iterate through each post to give me the title of each post etc.
export const PostList = () => {
    const { posts, getPosts, removePost, addPostToLikesPage } = useContext(PostContext)

    //The useEffect() hook allows the component to reach out into the world for anything that cannot be handled during render. In this case, it is the API calls for the posts.
    //useEffect runs after every render (by default), and can optionally clean up for itself before it runs again.
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
                                
                                {(post.userId === parseInt(localStorage.getItem("myFavoriteRecipe_user"))) ? <button className="removeButton" onClick={ event => {
                                    event.preventDefault()
                                    handleRemove()
                                    }}>Remove Post</button> : <> </>}

                                

                                <button className="addTo" onClick={handleAddingToLikes}>Add To My CookBook</button>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}