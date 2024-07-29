import { FaFileImport } from "react-icons/fa";
import { FaFileExport } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";


export default function GradesControl() {
    return (
        <div id="wd-grades-control" className="mb-4 mt-3">
            <button id="wd-add-grades-btn"
                className="btn wd-btn-secondary me-1 float-end">
                <IoMdSettings size="22" />
            </button>
            <button id="wd-add-grades-btn"
                className="btn wd-btn-secondary me-1 float-end 
            dropdown-toggle">
                <FaFileExport className="position-relative me-2" style={{ bottom: "1px" }} />
                Export
            </button>
            <button id="wd-add-grades-btn" className="btn wd-btn-secondary me-1 float-end">
                <FaFileImport className="position-relative me-2" style={{ bottom: "1px" }} />
                Import
            </button>

        </div>



    );
}