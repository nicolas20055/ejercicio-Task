import React from 'react';

const FilterButtons = ({ setFilter }) => (
    <div className="flex justify-center gap-2 mt-4 space-x-24">
        <button className="border p-2 rounded" onClick={() => setFilter('All')}>All</button>
        <button className="border p-2 rounded" onClick={() => setFilter('Pending')}>Pending</button>
        <button className="border p-2 rounded" onClick={() => setFilter('Completed')}>Completed</button>
    </div>
);

export default FilterButtons;