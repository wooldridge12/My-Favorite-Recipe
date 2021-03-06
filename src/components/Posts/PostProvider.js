import React, { useState, createContext } from "react"

export const PostContext = createContext()

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([])
    //get me the post array of objects
    const getPosts = () => {
        return fetch("http://localhost:8088/posts")
        //convert string from json into an object
            .then(res => res.json())
            .then(setPosts)
    }
    //Making a function to with the method of POST so i can add post 
    const addPost = post => {
        return fetch("http://localhost:8088/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
            .then(response => response.json())
    }

    //making a function with the method of delete
    //pulling in postId to delete post by post.id
    const removePost = postId => {
        return fetch(`http://localhost:8088/posts/${postId}`, {
            method: "DELETE"
        })
            .then(getPosts)
    }

    const addPostToLikesPage = post => {
        return fetch(`http://localhost:8088/likes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
            .then(response => response.json())
    }

    return (
        <PostContext.Provider value={{
            posts, getPosts, addPost, removePost, addPostToLikesPage
        }}>
            {props.children}
        </PostContext.Provider>
    )
}