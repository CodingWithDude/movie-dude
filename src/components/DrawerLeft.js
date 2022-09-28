import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;

const categoryItems = [
  {
    text: "Popular",
    icon: (
      <img
        src="https://img.icons8.com/ios/100/000000/movie--v1.png"
        alt="Popular"
        width="30"
      />
    ),
    path: "/",
  },
  {
    text: "Top Rated",
    icon: (
      <img
        src="https://img.icons8.com/ios/100/000000/star--v1.png"
        alt="Top Rated"
        width="30"
      />
    ),
    path: "/",
  },
  {
    text: "Upcoming",
    icon: (
      <img
        src="https://img.icons8.com/ios/100/000000/movie-theater--v1.png"
        alt="Upcoming"
        width="30"
      />
    ),
    path: "/",
  },
];

const genreItems = [
  {
    text: "Action",
    icon: (
      <img
        src="https://img.icons8.com/ios/100/000000/action.png"
        alt="Action"
        width="30"
      />
    ),
    path: "/",
  },
  {
    text: "Adventure",
    icon: (
      <img
        src="https://img.icons8.com/ios/100/000000/compass--v1.png"
        alt="Adventure"
        width="30"
      />
    ),
    path: "/",
  },
  {
    text: "Animation",
    icon: (
      <img
        src="https://img.icons8.com/ios/100/000000/animation--v1.png"
        alt="Animation"
        width="30"
      />
    ),
    path: "/",
  },
  {
    text: "Comedy",
    icon: (
      <img
        src="https://img.icons8.com/ios/100/000000/comedy--v1.png"
        alt="Comedy"
        width="30"
      />
    ),
    path: "/",
  },
  {
    text: "Crime",
    icon: (
      <img
        src="https://img.icons8.com/ios/100/000000/crime--v1.png"
        alt="Crime"
        width="30"
      />
    ),
    path: "/",
  },
  {
    text: "Documentary",
    icon: (
      <img
        src="https://img.icons8.com/ios/100/000000/documentary--v1.png"
        alt="Documentary"
        width="30"
      />
    ),
    path: "/",
  },
  {
    text: "Drama",
    icon: (
      <img
        src="https://img.icons8.com/ios/100/000000/drama--v1.png"
        alt="Drama"
        width="30"
      />
    ),
    path: "/",
  },
  {
    text: "Family",
    icon: (
      <img
        src="https://img.icons8.com/ios/100/000000/family--v1.png"
        alt="Family"
        width="30"
      />
    ),
    path: "/",
  },
  {
    text: "Fantasy",
    icon: (
      <img
        src="https://img.icons8.com/ios/100/000000/fantasy--v1.png"
        alt="Fantasy"
        width="30"
      />
    ),
    path: "/",
  },
  {
    text: "History",
    icon: (
      <img
        src="https://img.icons8.com/ios/100/000000/historical--v1.png"
        alt="History"
        width="30"
      />
    ),
    path: "/",
  },
  {
    text: "Horror",
    icon: (
      <img
        src="https://img.icons8.com/ios/100/000000/horror--v1.png"
        alt="Horror"
        width="30"
      />
    ),
    path: "/",
  },
  {
    text: "Music",
    icon: (
      <img
        src="https://img.icons8.com/ios/100/000000/music--v1.png"
        alt="Music"
        width="30"
      />
    ),
    path: "/",
  },
  {
    text: "Mystery",
    icon: (
      <img
        src="https://img.icons8.com/ios/100/000000/spy--v1.png"
        alt="Mystery"
        width="30"
      />
    ),
    path: "/",
  },
  {
    text: "Romance",
    icon: (
      <img
        src="https://img.icons8.com/ios/100/000000/romance--v1.png"
        alt="Romance"
        width="30"
      />
    ),
    path: "/",
  },
  {
    text: "Science Fiction",
    icon: (
      <img
        src="https://img.icons8.com/ios/100/000000/sci-fi--v1.png"
        alt="Science Fiction"
        width="30"
      />
    ),
    path: "/",
  },
  {
    text: "TV Movie",
    icon: (
      <img
        src="https://img.icons8.com/ios/100/000000/tv--v1.png"
        alt="TV Movie"
        width="30"
      />
    ),
    path: "/",
  },
  {
    text: "Thriller",
    icon: (
      <img
        src="https://img.icons8.com/ios/100/000000/thriller--v1.png"
        alt="Thriller"
        width="30"
      />
    ),
    path: "/",
  },
  {
    text: "War",
    icon: (
      <img
        src="https://img.icons8.com/ios/100/000000/battle--v1.png"
        alt="War"
        width="30"
      />
    ),
    path: "/",
  },
  {
    text: "Western",
    icon: (
      <img
        src="https://img.icons8.com/ios/100/000000/western--v1.png"
        alt="Western"
        width="30"
      />
    ),
    path: "/",
  },
];

const DrawerLeft = () => {
  return (
    <Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          borderRightWidth: 4,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRightWidth: 4,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
          alignItems="center"
        >
          <Typography>MovieDude</Typography>
        </Toolbar>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Categories
            </ListSubheader>
          }
        >
          {categoryItems.map((item) => (
            <ListItem key={item.text} button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ borderBottomWidth: 4 }} />
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Genres
            </ListSubheader>
          }
        >
          {genreItems.map((item) => (
            <ListItem key={item.text} button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default DrawerLeft;
