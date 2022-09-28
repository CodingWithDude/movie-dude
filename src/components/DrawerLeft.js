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
import SvgIcon from "@mui/material/SvgIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const drawerWidth = 240;

const categoryItems = [
  {
    text: "Popular",
    icon: <i class="fa-solid fa-film"></i>,
    path: "/",
  },
  {
    text: "Top Rated",
    icon: <i class="fa-solid fa-star"></i>,
    path: "/",
  },
  {
    text: "Upcoming",
    icon: <i class="fa-solid fa-ticket"></i>,
    path: "/",
  },
];

const genreItems = [
  {
    text: "Action",
    icon: <i class="fa-solid fa-siren-on"></i>,
    path: "/",
  },
  {
    text: "Adventure",
    icon: <i class="fa-solid fa-compass"></i>,
    path: "/",
  },
  {
    text: "Animation",
    icon: <i class="fa-solid fa-palette"></i>,
    path: "/",
  },
  {
    text: "Comedy",
    icon: <i class="fa-solid fa-face-grin-tears"></i>,
    path: "/",
  },
  {
    text: "Crime",
    icon: <i class="fa-solid fa-handcuffs"></i>,
    path: "/",
  },
  {
    text: "Documentary",
    icon: <i class="fa-solid fa-camera-movie"></i>,
    path: "/",
  },
  {
    text: "Drama",
    icon: <i class="fa-solid fa-masks-theater"></i>,
    path: "/",
  },
  {
    text: "Family",
    icon: <i class="fa-solid fa-family-pants"></i>,
    path: "/",
  },
  {
    text: "Fantasy",
    icon: <i class="fa-sharp fa-solid fa-wand-sparkles"></i>,
    path: "/",
  },
  {
    text: "History",
    icon: <i class="fa-solid fa-hourglass-half"></i>,
    path: "/",
  },
  {
    text: "Horror",
    icon: <i class="fa-solid fa-knife-kitchen"></i>,
    path: "/",
  },
  {
    text: "Music",
    icon: <i class="fa-solid fa-music"></i>,
    path: "/",
  },
  {
    text: "Mystery",
    icon: <i class="fa-solid fa-user-secret"></i>,
    path: "/",
  },
  {
    text: "Romance",
    icon: <i class="fa-solid fa-heart"></i>,
    path: "/",
  },
  {
    text: "Science Fiction",
    icon: <i class="fa-solid fa-robot-astromech"></i>,
    path: "/",
  },
  {
    text: "TV Movie",
    icon: <i class="fa-solid fa-tv"></i>,
    path: "/",
  },
  {
    text: "Thriller",
    icon: <i class="fa-solid fa-skull"></i>,
    path: "/",
  },
  {
    text: "War",
    icon: <i class="fa-solid fa-swords"></i>,
    path: "/",
  },
  {
    text: "Western",
    icon: <i class="fa-solid fa-user-cowboy"></i>,
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
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRightWidth: 0,
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
          <Typography>
            MovieDude
            <FontAwesomeIcon icon="fa-light fa-film" />
          </Typography>
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
              <ListItemIcon>
                <SvgIcon color="primary" fontSize="large">
                  {item.icon}
                </SvgIcon>
              </ListItemIcon>
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
              <ListItemIcon>
                <SvgIcon color="primary" fontSize="large">
                  {item.icon}
                </SvgIcon>
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default DrawerLeft;
