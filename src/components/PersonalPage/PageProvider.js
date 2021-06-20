import React, { useState, createContext } from "react"

export const LikeContext = createContext()

export const LikeProvider = (props) => {
    const [likes, setLikes] = useState([])
    //give me the likes PLUS give the the posts attached to likes 
    const getLikes = () => {
        return fetch("http://localhost:8088/likes?_expand=post")
            .then(res => res.json())
            .then(setLikes)
    }

    const getLikesByUserId = (userId) => {
        return fetch(`http://localhost:8088/likes?_expand=user&userId=${userId}&_expand=post`)
            .then(res => res.json())
            .then(setLikes)
    }
    //allow me to add likes by the POST method
    const addLikes = like => {
        return fetch("http://localhost:8088/likes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(like)
        })
            .then(response => response.json())
    }

    const removeFromLikes = (likeId) => {
        return fetch(`http://localhost:8088/likes/${likeId}`, {
            method: "DELETE"
        })
            .then(getLikes)
    }

    return (
        <LikeContext.Provider value={{
            likes, getLikes, addLikes, getLikesByUserId, removeFromLikes
        }}>
            {props.children}
        </LikeContext.Provider>
    )
}