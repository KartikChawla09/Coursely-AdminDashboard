import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./Signup";
import ButtonAppBar from "./ButtonAppBar";
import Signin from "./Signin";
import AddCourse from "./AddCourse";
import Courses from "./Courses";
import Course from "./Course";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/signin"
          element={
            <div
              style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "#eeeeee",
              }}
            >
              <ButtonAppBar /> <Signin />
            </div>
          }
        />
        <Route
          path="/signup"
          element={
            <div
              style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "#eeeeee",
              }}
            >
              <ButtonAppBar /> <Signup />
            </div>
          }
        />
        <Route
          path="/addcourse"
          element={
            <div
              style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "#eeeeee",
              }}
            >
              <ButtonAppBar /> <AddCourse />
            </div>
          }
        />

        <Route
          path="/courses"
          element={
            <div
              style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "#eeeeee",
              }}
            >
              <ButtonAppBar /> <Courses />
            </div>
          }
        />
        <Route
          path="/courses/:CourseId"
          element={
            <div
              style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "#eeeeee",
              }}
            >
              <ButtonAppBar /> <Course />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

function TodoApp(props) {
  return <div>{props.text}</div>;
}

export default App;
