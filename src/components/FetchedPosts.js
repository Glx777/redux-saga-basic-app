import React from "react"
import { useDispatch, useSelector } from "react-redux"

import Post from "./Post"
import { Loader } from "./Loader"

import { fetchPosts } from "../redux/actions"

export default () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)
    const isLoading = useSelector(state => state.app.loading)

    if (isLoading) {
        return (
            <Loader />
        )
    }
    
    if (!posts || !posts.length) {
        return <button className="btn btn-primary" onClick={() => dispatch(fetchPosts())}>Загрузить</button>
    }

    return posts.map(post => <Post post={post} key={post.id} />)
} 