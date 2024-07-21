import { courses } from "../../Database";
import { useParams, useLocation } from "react-router";
import "./index.css";

export default function CoursesNavigation() {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();
    const currentPage = pathname.split("/")[4];
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];

    const getClassName = (link: string) => {
        return currentPage.toLowerCase() === link.toLowerCase() ? "list-group-item active border border-0" : "list-group-item text-danger border border-0";
    };

    return (
        <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
            {links.map((link) => (
                <a
                    key={link}
                    id={`wd-course-${link.toLowerCase()}-link`}
                    href={`#/Kanbas/Courses/${course?._id}/${link}`}
                    className={getClassName(link)}
                >
                    {link}
                </a>
            ))}
        </div>
    );
}

