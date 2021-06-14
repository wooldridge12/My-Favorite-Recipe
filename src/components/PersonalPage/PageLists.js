import React, { useContext, useEffect } from "react"
import "./Page.css"
import { LikeContext } from "./PageProvider"
import { PostContext } from "../Posts/PostProvider"


export const PageList = () => {
    const { likes, getLikes } = useContext(LikeContext)
    // const { posts, getPosts } = useContext(PostContext)
    
    useEffect(() => {
        console.log("CustomerList: useEffect - getLikes")
        getLikes()
    }, [])

        
        // const likeId = parseInt(post)
        
        return(
            <section className="likes">
            {
                likes.map(like => {
                    return (
                        <div className="like" value={`like--${like.id}`}>
                            <div>
                                {like.id}
                            </div>
                        </div>

)
                })
            }
        </section>
    )

}