import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import Nosign from "./Nosign";

export default function ModulesControls() {
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Module
            </button>
            <div className="dropdown d-inline me-1 float-end">
                <button id="wd-publish-all-btn" className="btn btn-lg wd-btn-secondary dropdown-toggle"
                        type="button" data-bs-toggle="dropdown">
                    <GreenCheckmark />
                    Publish All
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="/publish-all">
                            <GreenCheckmark />
                            Publish all modules and items
                        </a>
                    </li>
                    <li>
                        <a id="wd-publish-modules-only-button" className="dropdown-item" href="/publish-modules">
                            <GreenCheckmark />
                            Publish modules only
                        </a>
                    </li>

                    <li>
                        <a id="wd-unpublish-all-modules-and-items" className="dropdown-item" href="/unpublish-all">
                            <Nosign />
                            Unpublish all modules and items
                        </a>
                    </li>
                    <li>
                        <a id="wd-unpublish-modules-only" className="dropdown-item" href="/unpublish-modules">
                            <Nosign />
                            Unpublish modules only
                        </a>
                    </li>

                </ul>
            </div>
            {/* Implement the View Progress and Collapse All buttons
          with IDs wd-view-progress and wd-collapse-all */}
            <button id="wd-view-progress" className="btn btn-lg wd-btn-secondary me-1 float-end"
                    type="button">
                View Progress
            </button>

            <button id="wd-collapse-all" className="btn btn-lg wd-btn-secondary me-1 float-end"
                    type="button">
                Collapse All
            </button>
        </div>
    );
}
