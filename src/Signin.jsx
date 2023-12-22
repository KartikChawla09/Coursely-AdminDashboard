import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Card, TextField, Typography } from "@mui/material";
// import "./Signin.css";
const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <center style={{ paddingTop: 150 }}>
        <Typography variant="h6" style={{ marginBottom: 20 }}>
          <div>Welcome back to Coursely! Sign In Below</div>
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
                fetch("http://localhost:3000/admin/login", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    email: username,
                    password: password,
                  },
                })
                  .then((response) => response.json())
                  .then((data) => {
                    localStorage.setItem("token", "Bearer " + data.token);
                  })
                  .catch((error) =>
                    console.error("Error during login:", error)
                  );
                window.location = "/courses";
              }}
            >
              Sign In
            </Button>
          </div>
        </Card>
      </center>
    </>
  );
};

export default Signin;
