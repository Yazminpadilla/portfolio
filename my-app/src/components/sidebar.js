import React from 'react';
import '../App.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/your-profile/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
