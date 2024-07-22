import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
    const { id } = useParams();
    const { cid } = useParams();
    const assignments = db.assignments;
    const assignment = assignments.find((assignment: any) => assignment._id === id);
    const name = assignment&&assignment.title;
    const points = assignment&&assignment.points;
    const available = assignment&&assignment.date_available;
    const due = assignment&&assignment.date_due;
    return (
        <div id="wd-assignments-editor"
             className="container">
            <div id="wd-assignments-name" className="mb-3">
                <label htmlFor="wd-name" className="col-form-label">
                    Assignment Name</label>
                <div id="wd-assignment-name-input">
                    <input id="wd-name" value={name} className="form-control" />
                </div>
            </div>

            <div id="wd-description" className="form-control mb-3" >
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
            </div>


            <form>
                <div id="wd-assignments-points" className="mb-3 form-group row">
                    <div className="col-4 position-relative">
                        <label htmlFor="wd-points" className="position-absolute end-0">Points</label>
                    </div>
                    <div className="col-8">
                        <input id="wd-points" value={points} className="form-control" />
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
                                       className="form-control" />
                            </div>

                            <div className="mb-3 row">
                                <div className="col-6">
                                    <label htmlFor="wd-available-from"><strong>Available from</strong></label>
                                    <input type="date" id="wd-available-from" value={available}
                                           className="form-control"/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="wd-available-until"><strong>Until</strong></label>
                                    <input type="date" id="wd-available-until" value={due}
                                           className="form-control"/>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </form >

            <hr />
            <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                <button className="btn btn-danger me-1 float-end rounded-1">
                    Save
                </button>
            </Link>
            <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                <button className="btn wd-btn-secondary me-1 float-end border rounded-1">
                    Cancel
                </button>
            </Link>
        </div >
    );
}
