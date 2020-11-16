import React from 'react'

const Posts = ({ loading, posts }) => {
    if(loading) {
        return(<div className="loader"></div>)
    }

    return (
        <ul className="posts-list">
            {
                posts.map(post => (
                    <li key={post.id} className="posts" >
                        {post.title}
                    </li>
                ))
            }
        </ul>
    )
}

export default Posts
