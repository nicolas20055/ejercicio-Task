import React, { useState } from 'react';
import TaskInput from '../../components/TaskInput/TaskInput';
import FilterButtons from '../../components/FilterButtons/FilterButtons';
import TaskList from '../../components/TaskList/TaskList';

export const Main = () => {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('All');

    const handleAddTask = () => {
        if (task.trim() !== "") {
            setTasks([...tasks, { name: task, description: description, status: 'Pending' }]);
            setTask('');
            setDescription('');
        }
    };
    const handleStatusChange = (index) => {
        const newTasks = [...tasks];
        newTasks[index].status = newTasks[index].status === 'Pending' ? 'Completed' : 'Pending';
        setTasks(newTasks);

    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'All') return true;
        return task.status === filter;
    });


    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow">
                <h1 className="text-xl font-bold text-center">To-Do List</h1>
                <TaskInput
                    task={task}
                    setTask={setTask}
                    description={description}
                    setDescription={setDescription}
                    handleAddTask={handleAddTask}
                />
                <FilterButtons setFilter={setFilter} />
                <TaskList filteredTasks={filteredTasks} handleStatusChange={handleStatusChange} />
            </div>
        </div>
    );
}
