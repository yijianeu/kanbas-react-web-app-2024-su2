import { BsGripVertical } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";

export default function LeftButton() {
    return (
        <div className="position-absolute">
        <BsGripVertical className="me-2 fs-3" />
        <MdAssignment className="me-2 fs-3 text-success" />
        </div>
    );
}
