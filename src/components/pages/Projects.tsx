import React from 'react';
import './ProjectCard.css';
import { Typography } from '@mui/material';

export default function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="project-wrapper">
        <div className="project-row">
          <div className="project-card">
            <h2>Project 1</h2>
            <p>Description or details about Project 1</p>
          </div>
          <div className="project-card">
            <h2>Project 2</h2>
            <p>Description or details about Project 2</p>
          </div>
        </div>
        <div className="project-row">
          <div className="project-card">
            <h2>Project 3</h2>
            <p>Description or details about Project 3</p>
          </div>
          <div className="project-card">
            <h2>Project 4</h2>
            <p>Description or details about Project 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}
