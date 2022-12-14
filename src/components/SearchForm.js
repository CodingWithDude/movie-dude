import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";

import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SvgIcon from "@mui/material/SvgIcon";

export default function InputWithIcon({
  setSearchSubmitted,
  searchValue,
  setSearchValue,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    document.searchForm.searchInput.blur();
    setSearchSubmitted(true);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      name="searchForm"
    >
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
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
    </Box>
  );
}
