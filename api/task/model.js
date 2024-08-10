const db = require('../../data/dbConfig');

function getTasks() {
  return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select(
      't.task_id',
      't.task_description',
      't.task_notes',
      't.task_completed',
      'p.project_name',
      'p.project_description'
    )
    .then(tasks =>
      tasks.map(task => ({
        ...task,
        task_completed: Boolean(task.task_completed),
      }))
    );
}

function getTaskById(id) {
  return db('tasks')
    .where({ task_id: id })
    .first()
    .then(task => ({
      ...task,
      task_completed: Boolean(task.task_completed),
    }));
}

function addTask(task) {
  return db('tasks')
    .insert(task)
    .then(([id]) => getTaskById(id));
}

module.exports = {
  getTasks,
  getTaskById,
  addTask,
};
