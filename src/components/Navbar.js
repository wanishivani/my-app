import { AppBar, Box, Toolbar, Button } from "@mui/material";

import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
const Navbar = () => {
  const {  isAuthenticated } =
    useAuth0();
   
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logout Clicked");
    navigate("/login");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Expense Tracker
            </Typography>
              <Button
                component={NavLink}
                to="/login"
                style={({ isActive }) => {
                  return { backgroundColor: isActive ? "#6d1b7b" : "" };
                }}
                sx={{ color: "white", textTransform: "none" }}
              >
                Login/Registration
              </Button>
            
            { isAuthenticated && (
              <Button
                component={NavLink}
                to="/dashboard"
                style={({ isActive }) => {
                  return { backgroundColor: isActive ? "#6d1b7b" : "" };
                }}
                sx={{ color: "white", textTransform: "none" }} 
              >
                Dashboard
              </Button>)}

            
              <Button
                component={NavLink}
                to="/passwordchange"
                style={({ isActive }) => {
                  return { backgroundColor: isActive ? "#6d1b7b" : "" };
                }}
                sx={{ color: "white", textTransform: "none" }}
              >
                Change Password
              </Button>
            

            
              <Button
                component={NavLink}
                to="/contact"
                style={({ isActive }) => {
                  return { backgroundColor: isActive ? "#6d1b7b" : "" };
                }}
                sx={{ color: "white", textTransform: "none" }}
              >
                Contact
              </Button>
            
            <Button
              component={NavLink}
              to="/about"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b" : "" };
              }}
              sx={{ color: "white", textTransform: "none" }}
            >
              About
            </Button>
              <Button
              component={NavLink}
                to="/login"
                style={({ isActive }) => {
                  return { backgroundColor: isActive ? "#6d1b7b" : "" };
                }}
                sx={{ color: "white", textTransform: "none"}}
                onClick={handleLogout} 
              >
                Logout
              </Button>

          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
