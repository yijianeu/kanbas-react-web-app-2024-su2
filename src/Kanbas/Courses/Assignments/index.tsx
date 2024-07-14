import React from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';
import { MdGroup, MdAssignment } from 'react-icons/md';
import { BiCalendar } from 'react-icons/bi';
import { BsList, BsFillGridFill } from 'react-icons/bs';
import { VscNotebook } from 'react-icons/vsc';
import './styles.css';

export default function AssignmentsScreen() {
    return (
        <div id="wd-assignments-screen" className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="input-group w-50">
                    <span className="input-group-text">
                        <FaSearch />
                    </span>
                    <input type="text" className="form-control" placeholder="Search for Assignments" />
                </div>
                <div>
                    <button className="btn btn-outline-secondary me-2">
                        <MdGroup className="me-2" />
                        Group
                    </button>
                    <button className="btn btn-outline-danger">
                        <MdAssignment className="me-2" />
                        Assignment
                    </button>
                </div>
            </div>
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <span className="d-flex align-items-center">
                        <BsList className="me-2" />
                        <span>ASSIGNMENTS</span>
                    </span>
                    <span className="d-flex align-items-center">
                        <span>40% of Total</span>
                        <button className="btn btn-outline-secondary ms-2">
                            <FaPlus />
                        </button>
                        <FiMoreVertical className="ms-2" />
                    </span>
                </div>
                <div className="list-group list-group-flush">
                    {assignments.map((assignment) => (
                        <div
                            className="list-group-item d-flex justify-content-between align-items-center"
                            key={assignment.id}
                            style={{ borderLeft: '5px solid green' }}
                        >
                            <div className="d-flex align-items-center">
                                <BsFillGridFill className="me-2" />
                                <VscNotebook className="me-2" style={{ color: 'green', fontSize: '24px' }} />
                                <a className="wd-assignment-link fw-bold" href={`#/Kanbas/Courses/1234/Assignments/${assignment.id}`}>
                                    {assignment.title}
                                </a>
                            </div>
                            <div className="d-flex flex-column align-items-start">
                                <span className="text-muted">{assignment.modules}</span>
                                <span className="text-muted">
                                    Not available until {assignment.availability}
                                </span>
                                <span className="text-muted">
                                    <BiCalendar className="me-1" />
                                    Due {assignment.dueDate}
                                </span>
                                <span className="text-muted">{assignment.points} pts</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <AiOutlineCheckCircle className="text-success" />
                                <FiMoreVertical className="ms-3" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const assignments = [
    {
        id: 1,
        title: 'A1',
        modules: 'Multiple Modules',
        availability: 'May 6 at 12:00am',
        dueDate: 'May 13 at 11:59pm',
        points: 100,
    },
    {
        id: 2,
        title: 'A2',
        modules: 'Multiple Modules',
        availability: 'May 13 at 12:00am',
        dueDate: 'May 20 at 11:59pm',
        points: 100,
    },
    {
        id: 3,
        title: 'A3',
        modules: 'Multiple Modules',
        availability: 'May 20 at 12:00am',
        dueDate: 'May 27 at 11:59pm',
        points: 100,
    },
];
