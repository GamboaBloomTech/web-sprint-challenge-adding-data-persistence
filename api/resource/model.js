const db = require('../../data/dbConfig');

function getResources() {
  return db('resources');
}

function getResourceById(id) {
  return db('resources').where({ resource_id: id }).first();
}

function addResource(resource) {
  return db('resources')
    .insert(resource)
    .then(([id]) => getResourceById(id));
}

module.exports = {
  getResources,
  getResourceById,
  addResource,
};
