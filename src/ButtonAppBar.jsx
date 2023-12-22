import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useState, useEffect } from "react";

export default function ButtonAppBar() {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    function callback2(data) {
      setFlag(data.flag);
      console.log(data.flag);
    }
    function callback1(res) {
      res.json().then(callback2);
    }
    const token = localStorage.getItem("token");
    fetch("http://localhost:3000/admin/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }).then(callback1);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {!flag ? (
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Coursely
            </Typography>
            <Button
              onClick={() => {
                window.location = "/signup";
              }}
              color="inherit"
            >
              Sign Up
            </Button>
            <Button
              onClick={() => {
                window.location = "/signin";
              }}
              color="inherit"
              style={{ marginRight: 30 }}
            >
              Sign In
            </Button>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Coursely
            </Typography>
            <Button
              style={{ color: "white", marginRight: 0, marginLeft: 40 }}
              onClick={() => {
                window.location = "/addcourse";
              }}
            >
              Add Course
            </Button>
            <Button
              style={{ color: "white", marginRight: 20, marginLeft: 20 }}
              onClick={() => {
                localStorage.setItem("token", "null");
                setFlag(false);
                window.location = "/signup";
              }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      )}
    </Box>
  );
}
