import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function PostCard({ post }) {
    return (
        <Card sx={{ maxWidth: 250, height: 350 }}>
            <CardMedia
                component="img"
                height="140"
                image="{post.image}"
                alt="{post.image}"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {post.content}        
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    {post.user}        
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex'}}>
                <Box alignSelf='flex-end'>

                <Button size="small">View</Button>
                <Button size="small">Like</Button>
                <Button size="small" >Comment</Button>
                </Box>
            </CardActions>
        </Card>
    );
}
