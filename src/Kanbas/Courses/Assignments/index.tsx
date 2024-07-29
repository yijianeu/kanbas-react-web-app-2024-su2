import AssignmentControl from "./AssignmentControl";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButton from "./AssignmentControlButton";
import LessControlButtons from "./LessConstrolButton";
import LeftButton from "./LeftButton";
import { Link, useParams, useLocation } from "react-router-dom";
import * as db from "../../Database";
import { addAssignment, deleteAssignment, updateAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export default function Assignments() {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const { assignments} = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();
    

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
                        {assignments.filter((assignment: any) => assignment.course === cid)
                            .map((assignment: any) => (

                                <li id="wd-assignment-GreenBorder"
                                    className="wd-assignment-list list-group-item p-3 ps-1">
                                    <div className="row align-items-center">
                                        <div className="col-2">
                                            <LeftButton />
                                        </div>
                                        <div className="col-8">
                                            <Link to={`${pathname}/${assignment._id}`}
                                                className="wd-assignment-link text-dark text-decoration-none"
                                            >
                                                <strong>{assignment.title}</strong>
                                            </Link>
                                            <div className="wd-assignment-details">
                                                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> {assignment.available}
                                                | <strong>Due</strong> {assignment.due} | {assignment.points} pts {assignment.description}
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
