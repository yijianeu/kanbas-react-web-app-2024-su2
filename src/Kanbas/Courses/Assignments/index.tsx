import React from 'react';
import { FaPlus, FaCheckCircle, FaCircle } from 'react-icons/fa';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { IoEllipsisVertical } from 'react-icons/io5';
import { BsGripVertical, BsPlusLg } from 'react-icons/bs';
import { MdAssignment } from 'react-icons/md';
import { Link, useParams, useLocation } from 'react-router-dom';
import assignments from '../../../Kanbas/Database/assignments.json';
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
    const { pathname } = useLocation();

    const courseAssignments = assignments.filter(assignment => assignment.course === cid);

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
                        {courseAssignments.map(assignment => (
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
