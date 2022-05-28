import { useState } from 'react';
import { Input } from 'components/Dashboard/NewPost.style';
import postsArray from 'data/PostsList';

const NewPost = ({ loggedUser }) => {
    const [postDescription, setPostDescription] = useState('');

    const handleKeyDown = (e) => {

        if (e.key === 'Enter' && e.target.value !== '') {
            setPostDescription(e.target.value)
            e.target.value = '';

            console.log(postDescription)
            postsArray.push({
                author: loggedUser,
                description: postDescription,
                img: 'https://images.unsplash.com/photo-1653672665907-b4ab7ed87237?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=740&q=80'
            })

            console.log(postsArray)
        }
    }

    return (
        <Input type="text" placeholder="What's on Your mind?" onKeyDown={handleKeyDown} />
    )
}

export default NewPost