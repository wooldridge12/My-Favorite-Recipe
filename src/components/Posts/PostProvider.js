import React, { useState, createContext } from "react"

export const PostContext = createContext()

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([])
    //get me the post array of objects
    const getPosts = () => {
        return fetch("http://localhost:8088/posts")
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

    return (
        <PostContext.Provider value={{
            posts, getPosts, addPost
        }}>
            {props.children}
        </PostContext.Provider>
    )
}