import React from 'react';

const TaskInput = ({ task, setTask, description, setDescription, handleAddTask }) => (
    <>
        <input
            type="text"
            placeholder="Tarea"
            className="w-full p-2 border rounded mt-4"
            value={task}
            onChange={(e) => setTask(e.target.value)}
        />
        <textarea
            type="text"
            placeholder="Description"
            className="w-full p-2 border rounded mt-4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded mt-2" onClick={handleAddTask}>
            Add Task
        </button>
    </>
);

export default TaskInput;