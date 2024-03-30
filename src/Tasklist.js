import React from 'react';
import './Tasklist.css'

function Tasklist({ taskList, onDelete }) {
  return (
    <div>
      <ul>
        {taskList.map((task, index) => (
          <li className='liStyle' key={index}>
            <strong style={{color:'whitesmoke'}}>{task.toUpperCase()}</strong>
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasklist;
