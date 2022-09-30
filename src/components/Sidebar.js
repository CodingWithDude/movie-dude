import React, { useState, useEffect } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import { Drawer, styled, Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SvgIcon from "@mui/material/SvgIcon";
import useFetch from "../hooks/useFetch";

const categoryItems = [
  {
    text: "Popular",
    icon: <i className="fa-solid fa-film"></i>,
    id: "popular",
  },
  {
    text: "Top Rated",
    icon: <i className="fa-solid fa-star"></i>,
    id: "top_rated",
  },
  {
    text: "Upcoming",
    icon: <i className="fa-solid fa-ticket"></i>,
    id: "upcoming",
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
  const [url, setUrl] = useState(null);
  const { data } = useFetch(url);
  const StyledDrawer = styled(Drawer)({
    display: windowLength >= 600 ? "block" : "none",
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
      borderRightWidth: 0,
    },
  });

  const getGenreRequest = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=bd248f777e0f5aaa9962bae98c088f34&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`
    );
    const responseJson = await response.json();
    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  };

  const getCategoryRequest = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=bd248f777e0f5aaa9962bae98c088f34&language=en-US&page=1`
    );
    const responseJson = await response.json();
    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  };

  useEffect(() => {
    if (url) {
      getGenreRequest(url);
      console.log(data);
      setMovies(data);
    }
  }, [url]);

  return (
    <StyledDrawer variant="permanent" anchor="left">
      <Toolbar
        sx={{
          justifyContent: "center",
        }}
      >
        <Typography>MovieDude</Typography>
      </Toolbar>
      <Box>
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
            <ListItem
              onClick={() => getCategoryRequest(item.id)}
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
              onClick={() => getGenreRequest(item.id)}
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
      </Box>
    </StyledDrawer>
  );
};

export default Sidebar;
