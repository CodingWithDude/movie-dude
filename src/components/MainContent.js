import { Box, styled, Typography } from "@mui/material";

const MainContent = ({ windowLength, drawerWidth }) => {
  const StyledBox = styled(Box)({
    display: "flex",
    alignSelf: "flex-end",
    width: windowLength >= 600 ? `calc(100% - ${drawerWidth}px)` : "100%",
  });

  return (
    <StyledBox p={2}>
      <Typography>MainContent</Typography>
    </StyledBox>
  );
};

export default MainContent;
