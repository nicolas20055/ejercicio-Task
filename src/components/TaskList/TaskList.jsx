import React from 'react';

const TaskList = ({ filteredTasks, handleStatusChange }) => (
    <ul className="mt-4">
        {filteredTasks.map((task, index) => (
            <li key={index} className="flex items-center gap-2 border p-2 rounded mt-2">
                <input
                    type="checkbox"
                    checked={task.status === 'Completed'} onChange={() => handleStatusChange(index)} />
                <span>{task.name} - {task.description} ({task.status})</span>
            </li>
        ))}
    </ul>
);

export default TaskList;