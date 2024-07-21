import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import { modules } from "../../Database";


export default function Modules() {
    const { cid } = useParams();
    const courseModules = modules.filter((module) => module.course === cid);

    return (
        <div id="wd-modules">
            <ModulesControls />
            <br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                {courseModules.map((module) => (
                    <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                            <div>
                                <BsGripVertical className="me-2 fs-3" />
                                {module.name}
                            </div>
                        </div>
                        {module.lessons && (
                            <ul className="wd-lessons list-group rounded-0">
                                {module.lessons.map((lesson) => (
                                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                                        <div>
                                            <BsGripVertical className="me-2 fs-3" />
                                            {lesson.name}
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <LessonControlButtons />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
