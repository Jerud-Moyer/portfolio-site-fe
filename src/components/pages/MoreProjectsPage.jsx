import React from 'react';
import { projects, moreProjects } from '../../data/projects';
import ProjectList from '../projects/ProjectList';

const MoreProjectsPage = () => {
  return (
    <div>
      <ProjectList projects={projects} />
      <ProjectList projects={moreProjects} />
    </div>
  );
};

export default MoreProjectsPage;
