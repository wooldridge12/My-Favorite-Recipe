import React, { useContext, useEffect } from "react"
import { PostContext } from "./PostProvider"
import "./Posts.css"
import { useHistory } from "react-router-dom"
import { AppView } from "../AppView"

export const PostList = () => {
    const { posts, getPosts } = useContext(PostContext)

    useEffect(() => {
        console.log("PostList: useEffect - getPosts")
        getPosts()
    }, [])

        const history = useHistory()

    return (
        <>
        <div>
            <button onClick={
                () => history.push("posts/create")
            }>POST</button>
        </div>
        <section className="posts">
            {
                //mapping through the array of posts to grab a single post object and display it with the proper attachments
                posts.map(post => {
                    return (
                        <div className="post" id={`post--${post.id}`}>
                            <div className="postTitle">
                                Title: {post.title}
                            </div>
                            <div className="postCreator">
                            </div>
                            <img className="postImage"
                                src={post.imageURL} />
                            
                            <div className="postIngredients">
                                Ingredients: {post.ingredients}
                            </div>
                            <div className="postInstructions">
                                Instructions: {post.instructions}
                            </div>
                        </div>
                    )
                })
            }
        </section>
        </>
    )
}