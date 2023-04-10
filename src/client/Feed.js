import React, { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';

const GET_POSTS = gql`
{
    posts {
    id
    text
    user {
        avatar
        username
        }
    }
}`;

const ADD_POSTS = gql`
    mutation addPost($post: PostInput!) {
        addPost (post: $post) {
            id
            text
            user {
                username
                avatar
            }
        }
    }
`;



const Feed = () => {
    const [postContent, setPostContent] = useState('');
    const { loading, error, data } = useQuery(GET_POSTS);
    const [ addPost ] = useMutation(ADD_POSTS, {
        update(cache, { data: {addPost} }) {
            const data = cache.readQuery({ query: GET_POSTS});
            const newData = { posts: [addPost, ...data.posts]};
            cache.writeQuery({ query: GET_POSTS, data: newData });
        }
    });
    
    const handleSubmit = (event) => {
        event.preventDefault();
        addPost({ variables: { post: { text: postContent } } } );
        setPostContent('');
    };

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const { posts } = data;

    return (
        <div className="container">
            <div className="postForm">
                <form onSubmit={handleSubmit}>
                    <textarea value={postContent} onChange={(e) =>
                        setPostContent(e.target.value)}
                        placeholder="Write your custom post!" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div className="feed">
                {posts.map((post, i) =>
                    <div key={post.id} className="post">
                        <div className="header">
                            <img src={post.user.avatar} />
                            <h2>{post.user.username}</h2>
                        </div>
                        <p className="content">
                            {post.text}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Feed