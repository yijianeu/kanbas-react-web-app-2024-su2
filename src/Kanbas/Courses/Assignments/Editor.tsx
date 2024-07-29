import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import assignmentsData from '../../Database/assignments.json';

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

export default function AssignmentEditor() {
    const { id, cid } = useParams<{ id: string, cid: string }>();
    const navigate = useNavigate();
    const existingAssignment = assignmentsData.find((assignment) => assignment._id === id);

    const [assignment, setAssignment] = useState<Assignment>(existingAssignment || {
        _id: new Date().getTime().toString(),
        title: '',
        description: '',
        points: '',
        date_available: '',
        date_due: '',
        course: cid
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setAssignment(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        // Save the new/updated assignment
        // For now, we'll just log it
        console.log('Saved assignment:', assignment);
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div id="wd-assignments-editor" className="container">
            <div id="wd-assignments-name" className="mb-3">
                <label htmlFor="wd-name" className="col-form-label">Assignment Name</label>
                <div id="wd-assignment-name-input">
                    <input
                        id="wd-name"
                        name="title"
                        value={assignment.title}
                        onChange={handleInputChange}
                        className="form-control"
                    />
                </div>
            </div>

            <div id="wd-description" className="form-control mb-3">
                <label htmlFor="wd-description" className="col-form-label">Description</label>
                <textarea
                    id="wd-description"
                    name="description"
                    value={assignment.description}
                    onChange={handleInputChange}
                    className="form-control"
                />
            </div>

            <form>
                <div id="wd-assignments-points" className="mb-3 form-group row">
                    <div className="col-4 position-relative">
                        <label htmlFor="wd-points" className="position-absolute end-0">Points</label>
                    </div>
                    <div className="col-8">
                        <input
                            id="wd-points"
                            name="points"
                            value={assignment.points}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                </div>

                <div id="wd-assignment-visibility" className="mb-5 form-group row">
                    <div className="col-4 position-relative">
                        <label htmlFor="wd-assign-to" className="position-absolute end-0">Assign</label>
                    </div>

                    <div className="col-8">
                        <div className="form-control">
                            <div className="mb-2">
                                <label htmlFor="wd-assign-to"><strong>Assign to</strong></label>
                                <input id="wd-assign-to" value="Everyone" className="form-control" readOnly />
                            </div>

                            <div className="mb-2">
                                <label htmlFor="wd-due-date"><strong>Due</strong></label><br />
                                <input
                                    type="date"
                                    id="wd-due-date"
                                    name="date_due"
                                    value={assignment.date_due}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="mb-3 row">
                                <div className="col-6">
                                    <label htmlFor="wd-available-from"><strong>Available from</strong></label>
                                    <input
                                        type="date"
                                        id="wd-available-from"
                                        name="date_available"
                                        value={assignment.date_available}
                                        onChange={handleInputChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="wd-available-until"><strong>Until</strong></label>
                                    <input
                                        type="date"
                                        id="wd-available-until"
                                        name="date_due"
                                        value={assignment.date_due}
                                        onChange={handleInputChange}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <hr />
            <button onClick={handleSave} className="btn btn-danger me-1 float-end rounded-1">Save</button>
            <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                <button className="btn wd-btn-secondary me-1 float-end border rounded-1">Cancel</button>
            </Link>
        </div>
    );
}

