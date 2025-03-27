import React from "react";
import TaskItem from "../components/TaskItem";

const TaskList = () => {
    const tasks = [
        "Complete React project",
        "Learn Redux",
        "Build an E-commerce website"
    ];

    return (
        <div className="container">
            <h2>Task List</h2>
            <ul className="list-group">
                {tasks.map((task, index) => (
                    <TaskItem key={index} task={task} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
