import { FaPlus } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function AssignmentControl() {
    const navigate = useNavigate();
    
    return (
        <div id="wd-assignments-control" className="mb-5">
              <button id="wd-add-assignment-btn" 
              className="btn btn-lg btn-danger me-1 float-end"
              onClick={() => navigate("newAssignment")}>
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