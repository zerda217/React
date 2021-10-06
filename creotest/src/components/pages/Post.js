import React from 'react'

const Post = ({match}) => {
    return (
        <p>
            {match.params.id}페이지
        </p>
    )
}

export default Post
