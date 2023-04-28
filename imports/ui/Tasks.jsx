import React from 'react';

export const Task = ({ task, onCheckboxClick, onDeleteClick }) => {
    return (
        <li>
            <input type="checkbox"
                name=""
                id=""
                checked={!!task.isChecked}
                onClick={() => onCheckboxClick(task)}
                readOnly
            />
            <span>
                {task.text}
            </span>
            <span>
                {(task.createdAt).toLocaleString()}
            </span>
            <button onClick={() => onDeleteClick(task)}>&times;</button>
        </li>
    )
}