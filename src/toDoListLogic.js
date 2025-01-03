function ToDo(title, description, dueDate, priority, index) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.index;
}

function Project(name) {
  this.name = name;
  this.toDoList = [];
}

function createToDo(project, title, description, dueDate, priority) {
  project.toDoList.push(
    new ToDo(title, description, dueDate, priority, project.toDoList.length)
  );
}

function deleteToDo(project, toDo) {
  project.toDoList.splice(toDo.index, 1);
}

export { Project };
