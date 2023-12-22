import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
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
  const coursesArray = courses && courses.courses ? courses.courses : [];
  var len = true;
  if (coursesArray.length == 0) len = false;
  return (
    <div>
      {len ? (
        <>
          <Typography
            variant="h4"
            component="div"
            textAlign={"center"}
            marginTop={"50px"}
          >
            We have the following courses on our website!
            <br />
            <br />
          </Typography>
          <Grid container spacing={3}>
            {coursesArray.map((course, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <a href={`http://localhost:5173/courses/${course.id}`}>
                    <img
                      src={course.imageLink}
                      alt="Image"
                      width={500}
                      height={200}
                    />
                  </a>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {course.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {course.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <Typography
          variant="h4"
          component="div"
          textAlign={"center"}
          marginTop={"50px"}
        >
          Kindly Login or Signup to see courses!
        </Typography>
      )}
    </div>
  );
};

export default Courses;
