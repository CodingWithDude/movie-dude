import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SvgIcon from "@mui/material/SvgIcon";

const drawerWidth = 240;

const categoryItems = [
  {
    text: "Popular",
    icon: <i className="fa-solid fa-film"></i>,
    path: "/",
  },
  {
    text: "Top Rated",
    icon: <i className="fa-solid fa-star"></i>,
    path: "/",
  },
  {
    text: "Upcoming",
    icon: <i className="fa-solid fa-ticket"></i>,
    path: "/",
  },
];

const genreItems = [
  {
    text: "Action",
    icon: <i className="fa-solid fa-siren-on"></i>,
    path: "/",
  },
  {
    text: "Adventure",
    icon: <i className="fa-solid fa-compass"></i>,
    path: "/",
  },
  {
    text: "Animation",
    icon: <i className="fa-solid fa-palette"></i>,
    path: "/",
  },
  {
    text: "Comedy",
    icon: <i className="fa-solid fa-face-grin-tears"></i>,
    path: "/",
  },
  {
    text: "Crime",
    icon: <i className="fa-solid fa-handcuffs"></i>,
    path: "/",
  },
  {
    text: "Documentary",
    icon: <i className="fa-solid fa-camera-movie"></i>,
    path: "/",
  },
  {
    text: "Drama",
    icon: <i className="fa-solid fa-masks-theater"></i>,
    path: "/",
  },
  {
    text: "Family",
    icon: <i className="fa-solid fa-family-pants"></i>,
    path: "/",
  },
  {
    text: "Fantasy",
    icon: <i className="fa-sharp fa-solid fa-wand-sparkles"></i>,
    path: "/",
  },
  {
    text: "History",
    icon: <i className="fa-solid fa-hourglass-half"></i>,
    path: "/",
  },
  {
    text: "Horror",
    icon: <i className="fa-solid fa-knife-kitchen"></i>,
    path: "/",
  },
  {
    text: "Music",
    icon: <i className="fa-solid fa-music"></i>,
    path: "/",
  },
  {
    text: "Mystery",
    icon: <i className="fa-solid fa-user-secret"></i>,
    path: "/",
  },
  {
    text: "Romance",
    icon: <i className="fa-solid fa-heart"></i>,
    path: "/",
  },
  {
    text: "Science Fiction",
    icon: <i className="fa-solid fa-robot-astromech"></i>,
    path: "/",
  },
  {
    text: "TV Movie",
    icon: <i className="fa-solid fa-tv"></i>,
    path: "/",
  },
  {
    text: "Thriller",
    icon: <i className="fa-solid fa-skull"></i>,
    path: "/",
  },
  {
    text: "War",
    icon: <i className="fa-solid fa-swords"></i>,
    path: "/",
  },
  {
    text: "Western",
    icon: <i className="fa-solid fa-user-cowboy"></i>,
    path: "/",
  },
];

const DrawerLeft = () => {
  return (
    <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <Drawer
        sx={{
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
            justifyContent: "center",
          }}
        >
          <Typography>MovieDude</Typography>
        </Toolbar>
        <List
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

// import React from "react";
// import { Box } from "@mui/system";

// const Sidebar = () => {
//   return (
//     <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
//       Sidebar
//     </Box>
//   );
// };

// export default Sidebar;
