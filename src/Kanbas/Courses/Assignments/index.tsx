import React, { useState } from 'react';
import { FaPlus, FaCheckCircle, FaCircle } from 'react-icons/fa';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { IoEllipsisVertical } from 'react-icons/io5';
import { BsGripVertical, BsPlusLg, BsTrash } from 'react-icons/bs';
import { MdAssignment } from 'react-icons/md';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import assignmentsData from '../../../Kanbas/Database/assignments.json';
import './styles.css';

interface Assignment {
    _id: string;
    title: string;
    description: string;
    points: string;
    date_available: string;
    date_due: string;
    course: string;
    available?: boolean;
}

interface AssignmentControlProps {
    onAddAssignment: () => void;
}

interface LessControlButtonsProps {
    onDelete: () => void;
}

function AssignmentControl({ onAddAssignment }: AssignmentControlProps) {
    return (
        <div id="wd-assignments-control" className="mb-5">
            <button
                id="wd-add-assignment-btn"
                className="btn btn-lg btn-danger me-1 float-end"
                onClick={onAddAssignment}
            >
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

function LessControlButtons({ onDelete }: LessControlButtonsProps) {
    return (
        <div className="float-end">
            <GreenCheckmarkNew />
            <BsTrash className="fs-4" onClick={onDelete} />
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
    const { cid } = useParams<{ cid: string }>();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const [assignments, setAssignments] = useState<Assignment[]>(assignmentsData.filter(assignment => assignment.course === cid));

    const handleAddAssignment = () => {
        navigate(`${pathname}/new`);
    };

    const handleDeleteAssignment = (id: string) => {
        if (window.confirm("Are you sure you want to delete this assignment?")) {
            setAssignments(assignments.filter(assignment => assignment._id !== id));
        }
    };

    return (
        <div id="wd-assignments">
            <AssignmentControl onAddAssignment={handleAddAssignment} />
            <ul className="list-group rounded-0">
                <li className="wd-assignments list-group-item p-0 mb-5 fs-5 wd-border-gray">
                    <div className="wd-title p-3 ps-2 wd-bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <AssignmentControlButton />
                    </div>

                    <ul className="wd-assignments list-group rounded-0">
                        {assignments.map(assignment => (
                            <li id="wd-assignment-GreenBorder" className="wd-assignment-list list-group-item p-3 ps-1" key={assignment._id}>
                                <div className="row align-items-center">
                                    <div className="col-2">
                                        <LeftButton />
                                    </div>
                                    <div className="col-8">
                                        <Link to={`${pathname}/${assignment._id}`} className="wd-assignment-link text-dark text-decoration-none">
                                            <strong>{assignment.title}</strong>
                                        </Link>
                                        <div className="wd-assignment-details">
                                            <span className="text-danger">{assignment.title}</span> {assignment.available ? 'Available' : 'Not Available'}
                                            | <strong>Due</strong> {assignment.date_due} | pts {assignment.points}
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <LessControlButtons onDelete={() => handleDeleteAssignment(assignment._id)} />
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

