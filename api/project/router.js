const express = require('express');
const Project = require('./model.js');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.getProjects();
    res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newProject = await Project.addProject(req.body);
    res.status(201).json(newProject);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
