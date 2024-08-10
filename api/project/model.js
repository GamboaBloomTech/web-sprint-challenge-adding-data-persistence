const db = require('../../data/dbConfig');

function getProjects() {
  return db('projects').then(projects =>
    projects.map(project => ({
      ...project,
      project_completed: Boolean(project.project_completed),
    }))
  );
}

function getProjectById(id) {
  return db('projects')
    .where({ project_id: id })
    .first()
    .then(project => ({
      ...project,
      project_completed: Boolean(project.project_completed),
    }));
}

function addProject(project) {
  return db('projects')
    .insert(project)
    .then(([id]) => getProjectById(id));
}

module.exports = {
  getProjects,
  getProjectById,
  addProject,
};
