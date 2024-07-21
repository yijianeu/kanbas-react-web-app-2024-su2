import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import {LiaBookSolid, LiaCogSolid} from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { useLocation } from "react-router";
import {Link} from "react-router-dom";
import { FaHandsHelping } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";

export default function KanbasNavigation() {
    const { pathname } = useLocation();
    const links = [
        { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
        { label: "Courses",   path: "/Kanbas/Dashboard", icon: LiaBookSolid },
        { label: "Calendar",  path: "/Kanbas/Calendar",  icon: IoCalendarOutline },
        { label: "Inbox",     path: "/Kanbas/Inbox",     icon: FaInbox },
        { label: "History",     path: "/Kanbas/History",     icon: FaHistory },
        { label: "Studio",     path: "/Kanbas/Studio",     icon: SiYoutubestudio },
        { label: "Help",     path: "/Kanbas/Help",     icon: FaHandsHelping },
        { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
    ];

    return (
        <div style={{ width: 120 }} id="wd-kanbas-navigation" className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
            <a className="list-group-item bg-black text-white border-0 text-center" id="wd-neu-link" href="https://www.northeastern.edu/">
                <img src="/images/NEU.png" alt="Northeastern logo" width="75px" />
                Northeastern
            </a>

            <span style={{color: "white" }} >{pathname} </span>
            <Link key="/Kanbas/Account" to="/Kanbas/Account" className={`list-group-item text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
                <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
                <br />
                Account
            </Link>

            {links.map((link) => (
                <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
              ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
                    {link.icon({ className: "fs-1 text-danger"})}
                    <br />
                    {link.label}
                </Link>
            ))}

        </div>
    );
}

