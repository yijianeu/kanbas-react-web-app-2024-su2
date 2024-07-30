import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlusLg } from "react-icons/bs";

export default function ModuleControlButtons() {
    return (
        <div className="float-end">
            <span className="badge wd-bg-secondary border border-black fs-6 text-dark rounded-pill">
                40% of Total</span>
            <BsPlusLg />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}