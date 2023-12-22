import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  TextField,
  Container,
  Button,
} from "@mui/material";

const Course = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const { CourseId } = useParams();
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");

    function callback2(data) {
      setCourses(data);
    }
    function callback1(res) {
      res.json().then(callback2);
    }
    fetch("http://localhost:3000/admin/courses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }).then(callback1);
  }, []);
  var course = {};
  const coursesArray = courses && courses.courses ? courses.courses : [];
  for (let i = 0; i < coursesArray.length; i++) {
    if (coursesArray[i].id == CourseId) course = coursesArray[i];
  }
  return (
    <div style={{ marginTop: 150, display: "flex" }}>
      <Container maxWidth="sm">
        <Card>
          <img src={course.imageLink} alt="Image" width={600} height={200} />
          <CardContent>
            <Typography variant="h5" component="div">
              {course.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {course.description}
            </Typography>
          </CardContent>
        </Card>
      </Container>
      <center style={{ marginTop: -50, marginRight: 200 }}>
        <Typography variant="h6" style={{ marginBottom: 20 }}>
          <div>Edit Course Details!</div>
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
                fetch("http://localhost:3000/admin/courses/" + CourseId, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: token, // Include the token in the Authorization header
                  },
                  body: JSON.stringify({
                    id: CourseId,
                    title: title,
                    description: description,
                    imageLink: link,
                    published: true,
                  }),
                });
                window.location = "/courses";
              }}
            >
              Edit Course
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

export default Course;
