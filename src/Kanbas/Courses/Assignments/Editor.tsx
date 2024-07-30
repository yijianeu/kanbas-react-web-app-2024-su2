import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as db from "../../Database";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const assignment = assignments.find((assignment: any) => assignment._id === id);
    
    const [title, setTitle] = useState((assignment&&assignment.title) || "New Assignment");
    const course = (assignment&&assignment.course) || cid;
    const [points, setPoints] = useState((assignment&&assignment.points) || 100);
    const [available, setAvailable] = useState((assignment&&assignment.available) || "");
    const [due, setDue] = useState((assignment&&assignment.due) || "");
    const [description, setDescription] = useState((assignment&&assignment.description) || "New Assignment Description");
    const defaultDescription = (
        <>
        <p>The assignment is <span className="text-danger">available online</span> </p>
        <p>Submit a link to the landing page of
            your web application running on Netlify.</p>
        <p>The landing page should include the follwing:</p>
        <ul>
            <li>your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>Links to the Kanbas application</li>
            <li>Links to all relevant source code repositories</li>
        </ul>
        <p>The Kanbas application should include a link to navigate back to the landing page.</p>
        </>
    );

    const newAssignment = {
        _id: id,
        title: title,
        course: course,
        points: points,
        available: available,
        due: due,
        description: description,
    };
    const location = useLocation();
    const showDefaultDescription = description.includes("default");
    const checkNew = location.pathname.includes("newAssignment");
    return (
        <div id="wd-assignments-editor" 
        className="container">
            <div id="wd-assignments-name" className="mb-3">
                <label htmlFor="wd-name" className="col-form-label">
                    Assignment Name</label>
                <div id="wd-assignment-name-input">
                    <input id="wd-name" value={title} className="form-control" 
                    onChange={(e) => setTitle(e.target.value)}/>
                </div>
            </div>

            <div id="wd-description" className="form-control mb-3">
                {showDefaultDescription && defaultDescription}
                {!showDefaultDescription && (
                    <input value={description} className="form-control mb-3"
                    onChange={(e) => setDescription(e.target.value)}/>
                )}
            </div>

            <form>
                <div id="wd-assignments-points" className="mb-3 form-group row">
                    <div className="col-4 position-relative">
                        <label htmlFor="wd-points" className="position-absolute end-0">Points</label>
                    </div>
                    <div className="col-8">
                        <input id="wd-points" value={points} className="form-control" 
                        onChange={(e) => setPoints(e.target.value)}/>
                    </div>
                </div>

                <div id="wd-assignments-group" className="mb-3 form-group row">
                    <div className="col-4 position-relative">
                        <label htmlFor="wd-group" className="position-absolute end-0">Assignment Group</label>
                    </div>
                    <div className="col-8">
                        <select id="wd-group" className="form-select">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                    </div>
                </div>

                <div id="wd-display-grade-as" className="mb-3 form-group row">
                    <div className="col-4 position-relative">
                        <label htmlFor="wd-display-grade-as"
                            className="position-absolute end-0">
                            Display Grade as</label>
                    </div>
                    <div className="col-8">
                        <select id="wd-display-grade-as" className="form-select">
                            <option value="Percentage">percentage</option>
                            <option value="Percentage">GPA</option>
                        </select>
                    </div>
                </div>

                <div id="wd-submission-type" className="mb-3 form-group row">
                    <div className="col-4 position-relative">
                        <label htmlFor="wd-submission-type"
                            className="position-absolute end-0">
                            Submission Type</label>
                    </div>
                    <div className="col-8">

                        <div className="form-control">
                            <select id="wd-submission-type" className="form-select mt-2 mb-3">
                                <option value="Online">Online</option>
                                <option value="Online">OnSite</option>
                            </select>
                            <label className="mb-2"><strong>Online Entry Option</strong></label>

                            <div className="form-check mb-2">

                                <input type="checkbox"
                                    name="Online Entry Options"
                                    id="wd-text-entry"
                                    className="form-check-input" />
                                <label htmlFor="wd-text-entry"
                                    className="form-check-label"
                                >Text Entry</label>
                            </div>

                            <div className="form-check mb-2">

                                <input type="checkbox"
                                    name="Online Entry Options"
                                    id="wd-website-url"
                                    className="form-check-input" />
                                <label htmlFor="wd-website-url"
                                    className="form-check-label"
                                >Website URL</label>
                            </div>

                            <div className="form-check mb-2">

                                <input type="checkbox"
                                    name="Online Entry Options"
                                    id="wd-media-recordings"
                                    className="form-check-input" />
                                <label htmlFor="wd-media-recordings"
                                    className="form-check-label"
                                >Media Recordings</label>
                            </div>

                            <div className="form-check mb-2">

                                <input type="checkbox"
                                    name="Online Entry Options"
                                    id="wd-student-annotaion"
                                    className="form-check-input" />
                                <label htmlFor="wd-student-annotaion"
                                    className="form-check-label"
                                >Student Annotation</label>
                            </div>

                            <div className="form-check mb-2">

                                <input type="checkbox"
                                    name="Online Entry Options"
                                    id="wd-file-upload"
                                    className="form-check-input" />
                                <label htmlFor="wd-file-upload"
                                    className="form-check-label"
                                >File Uploads</label>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="wd-assignment-visibility" className="mb-5 form-group row">
                    <div className="col-4 position-relative">
                        <label htmlFor="wd-assign-to" 
                        className="position-absolute end-0">
                            Assign
                            </label>
                    </div>

                    <div className="col-8 ">
                        <div className="form-control">
                            <div className="mb-2">
                                <label htmlFor="wd-assign-to"><strong>Assign to</strong></label>
                                <input id="wd-assign-to" value="Everyone"
                                    className="form-control" />
                            </div>

                            <div className="mb-2">
                                <label htmlFor="wd-due-date"><strong>Due</strong></label><br />
                                <input type="date" id="wd-due-date" value={due}
                                    className="form-control"
                                    onChange={(e) => setDue(e.target.value)} />
                            </div>

                            <div className="mb-3 row">
                                <div className="col-6">
                                    <label htmlFor="wd-available-from"><strong>Available from</strong></label>
                                    <input type="date" id="wd-available-from" value={available}
                                     className="form-control"
                                     onChange={(e) => setAvailable(e.target.value)}/>
                                </div>
                                <div className="col-6">
                                <label htmlFor="wd-available-until"><strong>Until</strong></label>
                                <input type="date" id="wd-available-until" value={due} 
                                className="form-control"
                                onChange={(e) => setDue(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form >

            <hr />
            <button className="btn btn-danger me-1 float-end rounded-1"
            onClick={() => {
                if (!checkNew) {
                    dispatch(updateAssignment({...assignment, newAssignment}));
                } else {
                    dispatch(addAssignment(newAssignment));
                }
                navigate(-1);
            }}>
                Save
            </button>
     
         
            <button className="btn wd-btn-secondary me-1 float-end border rounded-1"
             onClick={() => navigate(-1)}>
                Cancel
            </button>
  
        </div >
    );
}
