import React from "react";

const TaskItem = ({ task }) => {
    return (
        <li className="list-group-item">{task}</li>
    );
};

export default TaskItem;
