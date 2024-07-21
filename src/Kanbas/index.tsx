import { Routes, Route, Navigate, useParams, useLocation } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import {FaAlignJustify} from "react-icons/fa";
import Grades from './Grades';
import { courses } from "../Database";


export default function Courses() {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();
    return (
      <div id="wd-courses">
          <h2 className="text-danger">
              <FaAlignJustify className="me-4 fs-4 mb-1"/>
              {course && course.name} &gt; {pathname.split("/")[4]}
          </h2>
          <hr/>
          <div>
              <CoursesNavigation/>
              <div>
                  <Routes>
                      <Route path="/" element={<Navigate to="Home"/>}/>
                      <Route path="Home" element={<Home/>}/>
                      <Route path="Modules" element={<Modules/>}/>
                      <Route path="Piazza" element={<h1>Piazza</h1>}/>
                      <Route path="Zoom" element={<h1>Zoom</h1>}/>
                      <Route path="Assignments" element={<Assignments/>}/>
                      <Route path="Assignments/:id" element={<AssignmentEditor/>}/>
                      <Route path="Quizzes" element={<h1>Quizzes</h1>}/>
                      <Route path="Grades" element={<Grades />} />
                      <Route path="Grades/:id" element={<Grades/>}/>
                  </Routes>
              </div>
          </div>
      </div>
  );
}

