import React from 'react';
export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <div className="row mb-3">
                <label htmlFor="wd-name" className="col-sm-2 col-form-label">Assignment Name</label>
                <div className="col-sm-10">
                    <input id="wd-name" className="form-control" value="A1 - ENV + HTML" />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="wd-description" className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                    <textarea id="wd-description" className="form-control" rows={6}>
The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
                    </textarea>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="wd-points" className="col-sm-2 col-form-label">Points</label>
                <div className="col-sm-10">
                    <input id="wd-points" type="number" className="form-control" value={100} />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="wd-assignment-group" className="col-sm-2 col-form-label">Assignment Group</label>
                <div className="col-sm-10">
                    <select id="wd-assignment-group" className="form-control">
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        {/* Add other options as needed */}
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="wd-display-grade" className="col-sm-2 col-form-label">Display Grade as</label>
                <div className="col-sm-10">
                    <select id="wd-display-grade" className="form-control">
                        <option value="Percentage">Percentage</option>
                        {/* Add other options as needed */}
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">Submission Type</label>
                <div className="col-sm-10">
                    <select id="wd-submission-type" className="form-control">
                        <option value="Online">Online</option>
                        {/* Add other options as needed */}
                    </select>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="text-entry" />
                        <label className="form-check-label" htmlFor="text-entry">Text Entry</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="website-url" checked />
                        <label className="form-check-label" htmlFor="website-url">Website URL</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="media-recordings" />
                        <label className="form-check-label" htmlFor="media-recordings">Media Recordings</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="student-annotation" />
                        <label className="form-check-label" htmlFor="student-annotation">Student Annotation</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="file-uploads" />
                        <label className="form-check-label" htmlFor="file-uploads">File Uploads</label>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label">Assign to</label>
                <div className="col-sm-10">
                    <input id="wd-assign-to" className="form-control" value="Everyone" />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="wd-due" className="col-sm-2 col-form-label">Due</label>
                <div className="col-sm-10">
                    <input id="wd-due" type="datetime-local" className="form-control" value="2024-05-13T23:59" />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="wd-available-from" className="col-sm-2 col-form-label">Available from</label>
                <div className="col-sm-4">
                    <input id="wd-available-from" type="datetime-local" className="form-control" value="2024-05-06T00:00" />
                </div>
                <label htmlFor="wd-available-until" className="col-sm-2 col-form-label">Until</label>
                <div className="col-sm-4">
                    <input id="wd-available-until" type="datetime-local" className="form-control" value="2024-05-20T00:00" />
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <button className="btn btn-secondary me-2">Cancel</button>
                <button className="btn btn-success">Save</button>
            </div>
        </div>
    );
}
