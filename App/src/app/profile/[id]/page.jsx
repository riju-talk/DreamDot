import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Avatar,
  Button,
  Tabs,
  Tab,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
  Divider,
} from "@mui/material";
import { Favorite, Share, Comment, Edit, Message, Add } from "@mui/icons-material";

const posts = [
  {
    id: 1,
    image: "https://via.placeholder.com/600",
    content: "Exploring the vastness of space. ✨🚀 #CosmicJourney",
    likes: 24,
    comments: 5,
  },
  {
    id: 2,
    image: "https://via.placeholder.com/600",
    content: "When technology meets creativity. 💻🎨 #Inspiration",
    likes: 45,
    comments: 12,
  },
];

export default function ProfilePage() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 3, marginBottom: 4 }}>
        {/* Profile Header */}
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Avatar
              src="https://via.placeholder.com/150"
              sx={{ width: 128, height: 128, border: "4px solid #3f51b5" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" fontWeight="bold">
              John Doe
            </Typography>
            <Typography variant="body1" color="text.secondary">
              @johndoe
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              Software engineer, explorer, and creative thinker. Love technology and the cosmos! 🌌
            </Typography>
            <Grid container spacing={2} mt={2}>
              <Grid item>
                <Button variant="contained" color="primary" startIcon={<Message />}>
                  Message
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" startIcon={<Add />}>Follow</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" startIcon={<Edit />} sx={{ float: "right" }}>
              Edit Profile
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Tabs */}
      <Paper elevation={3} sx={{ borderRadius: 3, marginBottom: 4 }}>
        <Tabs centered>
          <Tab label="Posts" />
          <Tab label="About" />
          <Tab label="Friends" />
          <Tab label="Photos" />
        </Tabs>
      </Paper>

      {/* Posts Section */}
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid item xs={12} key={post.id}>
            <Card sx={{ borderRadius: 3 }}>
              <CardHeader title="John Doe" subheader="5 mins ago" />
              <CardMedia
                component="img"
                height="300"
                image={post.image}
                alt="Post image"
              />
              <CardContent>
                <Typography variant="body1" color="text.primary">
                  {post.content}
                </Typography>
              </CardContent>
              <Divider />
              <CardActions disableSpacing>
                <IconButton aria-label="like post">
                  <Favorite color="error" />
                  <Typography variant="body2" sx={{ marginLeft: 0.5 }}>
                    {post.likes}
                  </Typography>
                </IconButton>
                <IconButton aria-label="comment">
                  <Comment />
                  <Typography variant="body2" sx={{ marginLeft: 0.5 }}>
                    {post.comments}
                  </Typography>
                </IconButton>
                <IconButton aria-label="share">
                  <Share />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
