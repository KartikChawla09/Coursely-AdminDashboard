import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Card, TextField, Typography } from "@mui/material";
import "./Signup.css";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <center style={{ paddingTop: 150 }}>
        <Typography variant="h6" style={{ marginBottom: 20 }}>
          <div>Welcome to Coursely! Sign Up Below</div>
        </Typography>
        <Card variant={"outlined"} style={{ width: 400 }}>
          <div
            style={{
              border: "2px solid black",
              padding: 20,
            }}
          >
            <TextField
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              fullWidth
              id="username"
              label="Username"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              fullWidth
              id="password"
              label="Password"
              variant="outlined"
            />
            <br />
            <br />
            <Button
              size={"large"}
              variant="outlined"
              onClick={() => {
                fetch("http://localhost:3000/admin/signup", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    email: username,
                    password: password,
                  },
                })
                  .then((response) => response.json())
                  .then((data) => {
                    // Store the token in local storage
                    localStorage.setItem("token", "Bearer " + data.token);
                    // Handle other logic, e.g., redirect to another page
                  })
                  .catch((error) =>
                    console.error("Error during Signup:", error)
                  );
                window.location = "/courses";
              }}
            >
              Sign Up
            </Button>
          </div>
        </Card>
      </center>
    </>
  );
};

export default Signup;
