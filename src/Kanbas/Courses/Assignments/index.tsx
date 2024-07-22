import React from 'react';
import { FaPlus, FaCheckCircle, FaCircle } from 'react-icons/fa';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { IoEllipsisVertical } from 'react-icons/io5';
import { BsGripVertical, BsPlusLg } from 'react-icons/bs';
import { MdAssignment } from 'react-icons/md';
import { Link, useParams, useLocation } from 'react-router-dom';
import * as db from "../../Database";
import './styles.css';

function AssignmentControl() {
    return (
        <div id="wd-assignments-control" className="mb-5">
            <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </button>
            <button id="wd-add-assignment-group-btn" className="btn btn-lg wd-btn-secondary me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </button>

            <div id="wd-assignment-search-box" className="d-flex">
                <HiMagnifyingGlass className="gray position-absolute ms-3 mt-2 fs-3" />
                <div>
                    <input
                        type="text"
                        className="form-control button-height ps-5 fs-5"
                        id="wd-search-assignment"
                        placeholder="Search..."
                    />
                </div>
            </div>
        </div>
    );
}

function AssignmentControlButton() {
    return (
        <div className="float-end">
            <span className="badge wd-bg-secondary border border-black fs-6 text-dark rounded-pill">
                40% of Total</span>
            <BsPlusLg />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}

function LessControlButtons() {
    return (
        <div className="float-end">
            <GreenCheckmarkNew />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}

function LeftButton() {
    return (
        <div className="position-absolute">
            <BsGripVertical className="me-2 fs-3" />
            <MdAssignment className="me-2 fs-3 text-success" />
        </div>
    );
}

function GreenCheckmarkNew() {
    return (
        <span className="me-1 position-relative">
            <FaCheckCircle style={{ top: "2px" }} className="text-success me-1 position-absolute fs-5" />
            <FaCircle className="text-white me-1 fs-6" />
        </span>
    );
}

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;
    const { pathname } = useLocation();

    return (
        <div id="wd-assignments">
            <AssignmentControl />
            <ul className="list-group rounded-0">
                <li className="wd-assignments list-group-item p-0 mb-5 fs-5 wd-border-gray">
                    <div className="wd-title p-3 ps-2 wd-bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <AssignmentControlButton />
                    </div>

                    <ul className="wd-assignments list-group rounded-0">
                        {assignments.filter((assignment) => assignment.course === cid)
                            .map((assignment) => (
                                <li id="wd-assignment-GreenBorder" className="wd-assignment-list list-group-item p-3 ps-1" key={assignment._id}>
                                    <div className="row align-items-center">
                                        <div className="col-2">
                                            <LeftButton />
                                        </div>
                                        <div className="col-8">
                                            <Link to={`${pathname}/${assignment._id}`} className="wd-assignment-link text-dark text-decoration-none">
                                                <strong>{assignment._id}</strong>
                                            </Link>
                                            <div className="wd-assignment-details">
                                                <span className="text-danger">{assignment.title}</span> {assignment.available ? 'Available' : 'Not Available'}
                                                | <strong>Due</strong> {assignment.date_due} | pts {assignment.points}
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <LessControlButtons />
                                        </div>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}

const assignments = [
    { "_id": "A101", "title": "Propulsion Assignment", "course": "RS101", "available": true, "due": "2024-08-10T23:59", "points": 100, "date_available": "2024-07-01T00:00", "date_due": "2024-08-10T23:59" },
    { "_id": "A102", "title": "Combustion Analysis", "course": "RS101", "available": true, "due": "2024-08-20T23:59", "points": 90, "date_available": "2024-07-10T00:00", "date_due": "2024-08-20T23:59" },
    { "_id": "A103", "title": "Nozzle Design Project", "course": "RS101", "available": true, "due": "2024-08-30T23:59", "points": 120, "date_available": "2024-07-15T00:00", "date_due": "2024-08-30T23:59" },
    { "_id": "A201", "title": "Aerodynamics Quiz", "course": "RS102", "available": true, "due": "2024-07-25T23:59", "points": 50, "date_available": "2024-07-01T00:00", "date_due": "2024-07-25T23:59" },
    { "_id": "A202", "title": "Flow Analysis", "course": "RS102", "available": true, "due": "2024-08-05T23:59", "points": 80, "date_available": "2024-07-10T00:00", "date_due": "2024-08-05T23:59" },
    { "_id": "A203", "title": "Heating Analysis", "course": "RS102", "available": true, "due": "2024-08-15T23:59", "points": 70, "date_available": "2024-07-15T00:00", "date_due": "2024-08-15T23:59" },
    { "_id": "A301", "title": "Structural Design Task", "course": "RS103", "available": true, "due": "2024-08-25T23:59", "points": 110, "date_available": "2024-07-20T00:00", "date_due": "2024-08-25T23:59" },
    { "_id": "A302", "title": "Orbital Calculations", "course": "RS103", "available": true, "due": "2024-09-05T23:59", "points": 130, "date_available": "2024-07-25T00:00", "date_due": "2024-09-05T23:59" },
    { "_id": "A303", "title": "Systems Engineering Exam", "course": "RS103", "available": true, "due": "2024-09-15T23:59", "points": 150, "date_available": "2024-08-01T00:00", "date_due": "2024-09-15T23:59" }
];
