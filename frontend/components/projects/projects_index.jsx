import React from 'react';
import ProjectsIndexItem from './projects_index_item';

class ProjectsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllProjects();
  }

  render() {
    const projects = this.props.projects.map(project => {
      return (
        <ProjectsIndexItem
          key={project.id}
          project={project}
          deleteProject={this.props.deleteProject} />
      );
    });

    return (
      <body className="projects-index">
        <ul className="project">
          {projects}
        </ul>
      </body>
    );
  }
}

export default ProjectsIndex;