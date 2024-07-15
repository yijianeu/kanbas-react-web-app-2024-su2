import React from 'react';
import { FaFilter, FaFileImport, FaFileExport, FaCog } from 'react-icons/fa';

export default function Grades() {
    return (
        <div className="container mt-4">
            <div className="row mb-3 align-items-center">
                <div className="col-md-3">
                    <label className="form-label">Student Names</label>
                    <div className="input-group">
                        <span className="input-group-text"><FaFilter /></span>
                        <input type="text" className="form-control" placeholder="Search Students" />
                    </div>
                </div>
                <div className="col-md-3">
                    <label className="form-label">Assignment Names</label>
                    <div className="input-group">
                        <span className="input-group-text"><FaFilter /></span>
                        <input type="text" className="form-control" placeholder="Search Assignments" />
                    </div>
                </div>
                <div className="col-md-2 d-flex align-items-end">
                    <button className="btn btn-outline-secondary w-100">
                        <FaFilter className="me-2" />
                        Apply Filters
                    </button>
                </div>
                <div className="col-md-4 d-flex justify-content-end align-items-center mt-4 mt-md-0">
                    <button className="btn btn-outline-secondary me-2">
                        <FaFileImport className="me-2" />
                        Import
                    </button>
                    <div className="btn-group me-2">
                        <button className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
                            <FaFileExport className="me-2" />
                            Export
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Export as CSV</a></li>
                            <li><a className="dropdown-item" href="#">Export as Excel</a></li>
                        </ul>
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
                        <th>A1 SETUP<br />Out of 100</th>
                        <th>A2 HTML<br />Out of 100</th>
                        <th>A3 CSS<br />Out of 100</th>
                        <th>A4 BOOTSTRAP<br />Out of 100</th>
                    </tr>
                    </thead>
                    <tbody>
                    {grades.map((grade, index) => (
                        <tr key={index}>
                            <td>{grade.name}</td>
                            {grade.scores.map((score, idx) => (
                                <td key={idx}>
                                    {score.isEditable ? (
                                        <input type="text" className="form-control" defaultValue={score.value} />
                                    ) : (
                                        score.value
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const grades = [
    {
        name: 'Jane Adams',
        scores: [
            { value: '100%', isEditable: true },
            { value: '96.67%', isEditable: false },
            { value: '92.18%', isEditable: false },
            { value: '66.22%', isEditable: false },
        ],
    },
    {
        name: 'Christina Allen',
        scores: [
            { value: '100%', isEditable: false },
            { value: '100%', isEditable: false },
            { value: '100%', isEditable: true },
            { value: '100%', isEditable: false },
        ],
    },
    {
        name: 'Samreen Ansari',
        scores: [
            { value: '100%', isEditable: false },
            { value: '100%', isEditable: true },
            { value: '100%', isEditable: false },
            { value: '100%', isEditable: false },
        ],
    },
    {
        name: 'Han Bao',
        scores: [
            { value: '100%', isEditable: false },
            { value: '100%', isEditable: false },
            { value: '88.03%', isEditable: true },
            { value: '98.99%', isEditable: false },
        ],
    },
    {
        name: 'Mahi Sai Srinivas Bobbili',
        scores: [
            { value: '100%', isEditable: false },
            { value: '96.67%', isEditable: false },
            { value: '98.37%', isEditable: false },
            { value: '100%', isEditable: true },
        ],
    },
    {
        name: 'Siran Cao',
        scores: [
            { value: '100%', isEditable: false },
            { value: '100%', isEditable: true },
            { value: '100%', isEditable: false },
            { value: '100%', isEditable: false },
        ],
    },
];
