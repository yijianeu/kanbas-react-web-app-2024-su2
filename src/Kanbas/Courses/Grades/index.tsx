import React, { useState } from 'react';
import { FaFilter, FaFileImport, FaFileExport, FaCog } from 'react-icons/fa';
import { CiFilter } from "react-icons/ci";
import { useParams } from 'react-router-dom';
import users from '../../Database/users.json';
import enrollments from '../../Database/enrollments.json';
import assignments from '../../Database/assignments.json';
import grades from '../../Database/grades.json';

export default function Grades() {
    const { cid } = useParams();
    const [searchStudent, setSearchStudent] = useState('');
    const [searchAssignment, setSearchAssignment] = useState('');

    const enrolledStudents = enrollments
        .filter(enrollment => enrollment.course === cid)
        .map(enrollment => {
            const user = users.find(user => user._id === enrollment.user);
            return {
                ...user,
                enrollmentId: enrollment._id,
            };
        });

    const courseAssignments = assignments.filter(assignment => assignment.course === cid);

    const studentGrades = grades.filter(grade => enrolledStudents.some(student => student._id === grade.student));

    const filteredStudents = enrolledStudents.filter(student =>
        `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchStudent.toLowerCase())
    );

    const filteredAssignments = courseAssignments.filter(assignment =>
        assignment.title.toLowerCase().includes(searchAssignment.toLowerCase())
    );

    return (
        <div id="wd-grades" className="container mt-4">
            <div className="row mb-3 align-items-center">
                <div className="col-md-3">
                    <label className="form-label">Student Names</label>
                    <div className="input-group">
                        <span className="input-group-text"><FaFilter /></span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Students"
                            value={searchStudent}
                            onChange={(e) => setSearchStudent(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-3">
                    <label className="form-label">Assignment Names</label>
                    <div className="input-group">
                        <span className="input-group-text"><FaFilter /></span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Assignments"
                            value={searchAssignment}
                            onChange={(e) => setSearchAssignment(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-2 d-flex align-items-end">
                    <button className="btn btn-outline-secondary w-100 mb-3 mb-md-0">
                        <CiFilter className="me-2" />
                        Apply Filters
                    </button>
                </div>
                <div className="col-md-4 d-flex justify-content-between justify-content-md-end align-items-center mt-4 mt-md-0">
                    <button className="btn btn-outline-secondary me-2 mb-3 mb-md-0">
                        <FaFileImport className="me-2" />
                        Import
                    </button>
                    <div className="btn-group me-2 mb-3 mb-md-0">
                        <button className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
                            <FaFileExport className="me-2" />
                            Export
                        </button>
                    </div>
                    <button className="btn btn-outline-secondary">
                        <FaCog />
                    </button>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Student Name</th>
                        {filteredAssignments.map(assignment => (
                            <th key={assignment._id}>{assignment.title}<br />Out of 100</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {filteredStudents.map(student => (
                        <tr key={student._id}>
                            <td>{`${student.firstName} ${student.lastName}`}</td>
                            {filteredAssignments.map(assignment => {
                                const grade = studentGrades.find(g => g.student === student._id && g.assignment === assignment._id);
                                return (
                                    <td key={assignment._id}>{grade ? `${grade.grade}%` : 'N/A'}</td>
                                );
                            })}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
