import React from 'react';
import { FaSignal,FaPlus,FaGithubAlt, FaRegCircle, FaCircleHalfStroke, FaRankingStar } from "react-icons/fa6";
import { PiFinnTheHumanFill } from "react-icons/pi";
import { IoLogoLinkedin } from "react-icons/io5";
import { TbFilterCog, TbFilterDiscount } from "react-icons/tb";
import { ReactComponent as AddIcon } from "../assets/images/add.svg";
import { ReactComponent as Urg } from "../assets/images/SVG - Urgent Priority colour.svg";
 import { ReactComponent as ThreeDots } from "../assets/images/threeDots.svg";
 import { ReactComponent as InProgress } from "../assets/images/in-progress.svg";
import { ReactComponent as Backlog } from "../assets/images/Backlog.svg";
import { ReactComponent as Todo } from "../assets/images/To-do.svg";
 import { ReactComponent as Np} from "../assets/images/No-priority.svg";
 import { ReactComponent as Hi} from "../assets/images/Img - High Priority.svg";
 import { ReactComponent as Med} from "../assets/images/Img - Medium Priority.svg";
 import { ReactComponent as Low} from "../assets/images/Img - Low Priority.svg";
 import { ReactComponent as Canceled} from "../assets/images/Cancelled.svg";
 import { ReactComponent as Display} from "../assets/images/Display.svg";
 import { ReactComponent as Done} from "../assets/images/Done.svg";
 import { ReactComponent as Down} from "../assets/images/down.svg";


// import { HiDotsHorizontal } from "react-icons/hi";
// console.log( typeof(VscSettings))
// console.log( typeof(add))
const IconList = {
    "Urgent": Urg,
    "High": Hi,
    "Medium": Med,
    "Low": Low,
    "No priority": Np,
    "Todo": Todo,
    "In progress": InProgress,
    "Backlog": Backlog,
    "Canceled": Canceled,
    "Done": Done,
    "HeaderDisplay":Display,
    "plus":AddIcon,
    "threeDots":ThreeDots,
    "HeaderArraowDown":Down,
    "Human":PiFinnTheHumanFill,
    "github":FaGithubAlt,
    "linkedin":IoLogoLinkedin,
    "groupBy":TbFilterCog,
    "orderBy":TbFilterDiscount,
};

export const BoardIcon = ({ element,title,styleClass }) => {

    let color = "gray";
    if (element === "In progress") {
        color = "rgb(255, 179, 0)"
    } else if (element === "Todo") {
        color = "gray"
    } else if (element === "Backlog") {
        color = "blue"
    } else if (element === "Urgent") {
        color = "red"
    } else if (element === "High") {
        color = "orange"
    } else if (element === "Medium") {
        color = "rgb(255, 170, 0)"
    } else if (element === "Low") {
        color = "burlywood"
    } else if (element === "No priority") {
        color = "gray"
    }

    const Icon = IconList[element];

    const style = {
        "color": color,
        "display": "inline-block"
    }

    if (!Icon) {
        return <div className='icon_container' style={style}>
            <FaRankingStar />
        </div>;
    }

    return (
        <div style={style} className={`icon_container  ${styleClass}`}  title={title}>
            <Icon />
        </div>
    );
}

