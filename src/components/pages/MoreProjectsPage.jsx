import React from 'react';
import { projects, moreProjects, mobileProjects } from '../../data/projects';
import ProjectList from '../projects/ProjectList';

const MoreProjectsPage = () => {
  return (
    <div>
      <ProjectList projects={moreProjects} />
      <ProjectList projects={mobileProjects} />
      <ProjectList projects={projects} />
    </div>
  );
};

export default MoreProjectsPage;
