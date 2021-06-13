import React, { useContext, useEffect, useState } from "react"
import { PostContext } from "../Posts/PostProvider"
import "./Posts.css"
import { useHistory } from "react-router-dom"

export const PostForm = () => {
    const { addPost } = useContext(PostContext)

    const [post, setPost] = useState({
        userId: 0,
        title: "",
        imageURL:"",
        ingredients:"",
        instructions:""
    });

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const  newPost = {...post}
        newPost[event.target.id] = event.target.value
        setPost(newPost)
    }

    const handleClickSavePost = (event) => {
        
        event.preventDefault()

        const newPost = {
            // userId: userId,
            title: post.title,
            imageURL: post.imageURL,
            ingredients: post.ingredients,
            instructions: post.instructions
        }
        addPost(newPost)
        .then(() => history.push("/posts"))
    }
    
    return (
        <form className="postForm">
            <h2 className="postFormTitle">New Recipe</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" required autoFocus className="form-control" placeholder="Title" value={post.title} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="text">Image URL:</label>
                    <input type="text" id="imageURL" required autoFocus className="form-control" placeholder="Image URL" value={post.imageURL} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="ingredients">Ingredients:</label>
                    <textarea type="text" id="ingredients" required autoFocus className="form-control" placeholder="1. 1/2 cup of flour, 2. 3 eggs" value={post.ingredients} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="instructions">Instructions:</label>
                    <textarea type="text" id="instructions" required autoFocus className="form-control" placeholder="1. pour flour into a mixing bowl, 2. crack eggs and add to flour" value={post.instructions} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <button className="submitPostButton" onClick={handleClickSavePost}>Submit Post</button>
        </form>
    )
}
