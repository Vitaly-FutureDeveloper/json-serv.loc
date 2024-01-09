const { projectList } = require('./modules/projectList');
const { project } = require('./modules/project');

const state =  () => ({
    projectList: projectList(),
    project: project()
});


module.exports = state;