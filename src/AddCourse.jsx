import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Card, TextField, Typography } from "@mui/material";
const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  return (
    <div>
      <center style={{ paddingTop: 100 }}>
        <Typography variant="h6" style={{ marginBottom: 20 }}>
          <div>Hey Admin! Add a new Course!</div>
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
                setTitle(e.target.value);
              }}
              fullWidth
              id="course_title"
              label="Course Title"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              fullWidth
              id="course_description"
              label="Course Description"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              onChange={(e) => {
                setLink(e.target.value);
              }}
              fullWidth
              id="image_link"
              label="Add Link to Thumbnail Image"
              variant="outlined"
            />
            <br />
            <br />
            <Button
              size={"large"}
              variant="outlined"
              onClick={() => {
                const token = localStorage.getItem("token");
                fetch("http://localhost:3000/admin/courses", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: token, // Include the token in the Authorization header
                  },
                  body: JSON.stringify({
                    title: title,
                    description: description,
                    imageLink: link,
                    published: true,
                  }),
                });
                window.location = "/courses";
              }}
            >
              Add Course
            </Button>
            <Button
              style={{ marginLeft: 20 }}
              size={"large"}
              variant="outlined"
              onClick={() => {
                window.location = "/courses";
              }}
            >
              Go Back!
            </Button>
          </div>
        </Card>
      </center>
    </div>
  );
};

export default AddCourse;
