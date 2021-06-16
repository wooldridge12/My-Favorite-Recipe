import React, { useState, createContext } from "react"

export const LikeContext = createContext()

export const LikeProvider = (props) => {
    const [likes, setLikes] = useState([])
//give me the likes 
    const getLikes = () => {
        return fetch("http://localhost:8088/likes")
            .then(res => res.json())
            .then(setLikes)
    }

    const getCurrentUserLikes = (userId) => {
        return fetch(`http://localhost:8088/likes?userId=${userId}`)
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

    return (
        <LikeContext.Provider value={{
            likes, getLikes, addLikes, getCurrentUserLikes
        }}>
            {props.children}
        </LikeContext.Provider>
    )
}