import React from "react";
import Box from "@mui/material/Box";

const MainContent = ({ windowLength }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignSelf: "flex-end",
        border: "1px solid black",
        width: windowLength >= 600 ? "calc(100% - 240px)" : "100%",
      }}
    >
      MainContent
    </Box>
  );
};

export default MainContent;
