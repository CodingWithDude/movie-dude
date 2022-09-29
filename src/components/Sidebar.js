import React, { useState, useEffect } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import { Drawer, styled } from "@mui/material";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SvgIcon from "@mui/material/SvgIcon";

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
    id: 28,
  },
  {
    text: "Adventure",
    icon: <i className="fa-solid fa-compass"></i>,
    id: 12,
  },
  {
    text: "Animation",
    icon: <i className="fa-solid fa-palette"></i>,
    id: 16,
  },
  {
    text: "Comedy",
    icon: <i className="fa-solid fa-face-grin-tears"></i>,
    id: 35,
  },
  {
    text: "Crime",
    icon: <i className="fa-solid fa-handcuffs"></i>,
    id: 80,
  },
  {
    text: "Documentary",
    icon: <i className="fa-solid fa-camera-movie"></i>,
    id: 99,
  },
  {
    text: "Drama",
    icon: <i className="fa-solid fa-masks-theater"></i>,
    id: 18,
  },
  {
    text: "Family",
    icon: <i className="fa-solid fa-family-pants"></i>,
    id: 10751,
  },
  {
    text: "Fantasy",
    icon: <i className="fa-sharp fa-solid fa-wand-sparkles"></i>,
    id: 14,
  },
  {
    text: "History",
    icon: <i className="fa-solid fa-hourglass-half"></i>,
    id: 36,
  },
  {
    text: "Horror",
    icon: <i className="fa-solid fa-knife-kitchen"></i>,
    id: 27,
  },
  {
    text: "Music",
    icon: <i className="fa-solid fa-music"></i>,
    id: 10402,
  },
  {
    text: "Mystery",
    icon: <i className="fa-solid fa-user-secret"></i>,
    id: 9648,
  },
  {
    text: "Romance",
    icon: <i className="fa-solid fa-heart"></i>,
    id: 10749,
  },
  {
    text: "Science Fiction",
    icon: <i className="fa-solid fa-robot-astromech"></i>,
    id: 878,
  },
  {
    text: "TV Movie",
    icon: <i className="fa-solid fa-tv"></i>,
    id: 10770,
  },
  {
    text: "Thriller",
    icon: <i className="fa-solid fa-skull"></i>,
    id: 53,
  },
  {
    text: "War",
    icon: <i className="fa-solid fa-swords"></i>,
    id: 10752,
  },
  {
    text: "Western",
    icon: <i className="fa-solid fa-user-cowboy"></i>,
    id: 37,
  },
];

const Sidebar = ({ windowLength, drawerWidth, setMovies }) => {
  const [genreSearchValue, setGenreSearchValue] = useState(null);
  const StyledDrawer = styled(Drawer)({
    display: windowLength >= 600 ? "block" : "none",
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
      borderRightWidth: 0,
    },
  });

  const getGenreRequest = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=bd248f777e0f5aaa9962bae98c088f34&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreSearchValue}&with_watch_monetization_types=flatrate`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson.results);
    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  };

  useEffect(() => {
    if (genreSearchValue) {
      getGenreRequest(genreSearchValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genreSearchValue]);

  return (
    <StyledDrawer variant="permanent" anchor="left">
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
          <ListItem
            onClick={() => setGenreSearchValue(item.id)}
            key={item.text}
            button
          >
            <ListItemIcon>
              <SvgIcon color="primary" fontSize="large">
                {item.icon}
              </SvgIcon>
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default Sidebar;
