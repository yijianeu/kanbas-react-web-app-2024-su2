import GradesControl from "./GradesControl";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiFilter } from "react-icons/ci";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function Grades() {
    const { cid } = useParams();
    const users = db.users;
    const enrollments = db.enrollments;
    const enrollment = enrollments.filter((enrollment: any) => enrollment.course === cid);
    const assigments = db.assignments;
    const assignment = assigments.filter((assignment: any) => assignment.course === cid);
    const grades = db.grades;
    return (
        <div id="wd-grades" className="container">
            <div className="row">
                <GradesControl />
            </div>

            <div id="wd-grades-search" className="row mb-4">
                <div id="wd-grades-search" className="col-6">
                    <label><strong>Student Names</strong></label>
                    <div className="d-flex">
                        <HiMagnifyingGlass className="gray position-absolute ms-3 mt-2 fs-4" />
                        <select className="form-select ps-5">
                            <option selected>Search Students</option>
                        </select>
                    </div>
                </div>

                <div id="wd-grades-search" className="col-6">
                    <label><strong>Assignment Names</strong></label>
                    <div className="d-flex">
                        <HiMagnifyingGlass className="gray position-absolute ms-3 mt-2 fs-4" />
                        <select className="form-select ps-5">
                            <option selected>Search Assignments</option>
                        </select>
                    </div>
                </div>
            </div>

            <div id="wd-grades-filter" className="d-flex mb-4">
                <CiFilter className="position-absolute ms-2 mt-2 fs-3" />
                <button className="btn wd-btn-secondary ps-5">Apply Filters</button>
            </div>

            <div id="wd-grades-table">
                <table className="table table-bordered table-striped text-center">
                    <thead>
                        <tr>
                            <th scope="col" className="pb-3 text-start">Student Name</th>
                            {assignment.map((assignment) => (
                                <th scope="col">{assignment._id} SETUP<br />out of 100</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {enrollment.map(enrollment => {
                            const user = users.find(user => user._id === enrollment.user);
                            return (
                                <tr>
                                    <th scope="row" className="text-start text-danger">
                                        {user?.firstName} {user?.lastName}
                                    </th>
                                    {assignment.map(assignment => {
                                        const grade = grades.find(grade => grade.student === user?._id && grade.assignment === assignment._id);
                                        return (
                                            <td>
                                                {grade?.grade}
                                            </td>
                                        )
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div >










    );
}