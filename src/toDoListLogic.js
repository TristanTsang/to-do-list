function ToDo(title, index) {
  this.title = title;
  this.index = index;
}

function Project(name, index) {
  this.name = name;
  this.index = index;
  this.toDoList = [];
}

function createProject(name) {
  let projects = JSON.parse(localStorage.getItem("projects"));
  let project = new Project(name, projects.length);
  projects.push(project);
  localStorage.setItem("projects", JSON.stringify(projects));
  return project;
}

function createToDo(project, title) {
  let toDo = new ToDo(title, project.toDoList.length);
  project.toDoList.push(toDo);
  let projects = JSON.parse(localStorage.getItem("projects"));
  projects[project.index].toDoList.push(toDo);
  localStorage.setItem("projects", JSON.stringify(projects));
  return toDo;
}

function deleteToDo(project, toDo) {
  let projects = JSON.parse(localStorage.getItem("projects"));
  projects[project.index].toDoList.splice(toDo.index, 1);
  project.toDoList.splice(toDo.index, 1);
  for (let i = 0; i < projects[project.index].toDoList.length; i++) {
    projects[project.index].toDoList[i].index = i;
    project.toDoList[i].index = i;
  }
  localStorage.setItem("projects", JSON.stringify(projects));
  return projects[project.index];
}

function deleteProject(project) {
  let projects = JSON.parse(localStorage.getItem("projects"));
  projects.splice(project.index, 1);
  for (let i = 0; i < projects.length; i++) {
    projects[i].index = i;
  }
  localStorage.setItem("projects", JSON.stringify(projects));
}

export { createProject, createToDo, deleteProject, deleteToDo };
