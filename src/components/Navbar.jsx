import React from "react";
import { Switch, FormControlLabel, styled } from "@mui/material";

// Custom styled switch component
const CustomSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-track": {
    backgroundColor: "#fff", // White background for the track
  },
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: theme.palette.success.main,
    "&:hover": {
      backgroundColor: theme.palette.success.light,
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: theme.palette.success.main, // Change this to any color you want when checked
  },
}));

const Navbar = ({ checked, setChecked }) => {
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="flex justify-end items-center py-4 px-8">
      <div className="flex items-center">
        <p className="mr-8">Admin</p>
        <FormControlLabel
          control={<CustomSwitch checked={checked} onChange={handleChange} />}
        />
        <p className="mr-16">User</p>
        <i className="fa-solid fa-right-from-bracket"></i>
      </div>
    </div>
  );
};

export default Navbar;
