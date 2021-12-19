import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import axios from 'axios'

import Box from '@mui/material/Box';
import PostCard from '../components/PostCard'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Posts = () => {

    // const { postname } = useParams()

    const [posts, setPosts] = useState([])

    useEffect(() => {
        handleFetch()
    }, [])

    const handleFetch = () => {
        axios.get("http://127.0.0.1:8000/api/posts/")
            // .then(response => {
            //     setPosts(response.data.all())
            // })
            .then(function (response) {
                setPosts(response.data)
                // handle success
                console.log(response.data);
            })
            .catch(err => console.error(err))
    }

    return (
        <div>Posts
            <Box sx={{ flexGrow: 1}}>

                <Grid container gap={3} spacing={2} sx={{ flexGrow:1, justifyContent: 'center'}}>

                    {posts.map(post => (
                        <Item xs={8}>
                            <PostCard key={post.id} post={post} />
                        </Item>
                    ))}

                </Grid>
            </Box>

        </div>
    )
}

export default Posts