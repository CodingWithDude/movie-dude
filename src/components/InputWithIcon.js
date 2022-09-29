import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SvgIcon from "@mui/material/SvgIcon";

export default function InputWithIcon() {
  const handleSubmit = (e) => {
    e.preventDefault();
    document.searchForm.searchInput.blur();
    console.log("submitted");
  };

  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
      }}
    >
      <FormControl onSubmit={handleSubmit} variant="standard">
        <form name="searchForm">
          <Input
            name="searchInput"
            placeholder="Search..."
            spellCheck="false"
            autoComplete="off"
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SvgIcon
                  sx={{ "&:hover": { cursor: "pointer" } }}
                  onClick={handleSubmit}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </SvgIcon>
              </InputAdornment>
            }
          />
        </form>
      </FormControl>
    </Box>
  );
}
