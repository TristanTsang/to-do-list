import "./styles.css";
import { Project, ToDo } from "./toDoListLogic";
const sidebar = document.querySelector("#sidebar");
const content = document.querySelector("#content");
let currentProject;
const projects = [];

function renderSideBar() {}

function renderAddProjectButton() {
  const div = document.createElement("div");
  div.classList.add("list-button");
  div.innerText = "+ Add Project ";
  div.style.fontWeight = "bold";
  div.style.fontSize = "16px";
  div.id = "add-project-button";
  div.addEventListener("click", () => {
    div.remove();
    renderAddItemPrompt();
  });
  sidebar.appendChild(div);
}

function renderAddItemPrompt() {
  const div = document.createElement("form");

  const nameInput = document.createElement("input");
  nameInput.type = "text";

  const row = document.createElement("div");
  row.classList.add("button-row");

  const addButton = document.createElement("button");
  const cancelButton = document.createElement("button");
  addButton.classList.add("add-button");
  cancelButton.classList.add("cancel-button");
  addButton.innerText = "Add";
  addButton.addEventListener("click", () => {
    let name = div.querySelector("input").value;
    if (name.trim() == "") return;
    div.remove();
    renderProject(new Project(name));
    renderAddProjectButton();
  });
  cancelButton.innerText = "Cancel";
  cancelButton.addEventListener("click", () => {
    div.remove();
    renderAddProjectButton();
  });
  row.appendChild(addButton);
  row.appendChild(cancelButton);
  sidebar.appendChild(div);
  div.appendChild(nameInput);
  div.appendChild(row);
}

function renderProject(project) {
  const div = document.createElement("div");
  div.classList.add("list-button");

  const text = document.createElement("div");
  text.innerText = "- " + project.name;

  div.addEventListener("click", () => {
    div.style.backgroundColor = "#c2c2c2";
    renderProjectContent(project);
    currentProject = project;
  });
  div.appendChild(text);
  text.style.flex = 1;

  const closeButton = document.createElement("div");
  closeButton.classList.add("close-button");
  closeButton.innerText = "x";

  closeButton.addEventListener("click", () => {
    div.remove();
  });

  div.appendChild(closeButton);
  sidebar.appendChild(div);
}

function renderProjectContent(project) {
  content.innerHTML = "";
  const title = document.createElement("h1");
  title.innerText = project.name;

  content.appendChild(title);

  for (let i = 0; i < project.toDoList.length; i++) {
    renderToDoListItem(project.toDoList[i]);
  }
  renderAddToDoItemButton();
}

function renderToDoListItem(toDo) {
  const div = document.createElement("div");
  div.classList.add("list-button");
  const circle = document.createElement("div");

  circle.style.borderRadius = "50%";
  circle.style.padding = "10px";
  circle.style.border = "1px solid black";
  circle.style.marginRight = "10px";
  circle.addEventListener("click", () => {
    div.remove();
  });
  div.appendChild(circle);
  const text = document.createElement("div");
  text.innerText = toDo.title;
  div.appendChild(text);
  text.style.flex = 1;
  text.style.fontSize = "16px";
  const closeButton = document.createElement("div");
  closeButton.classList.add("close-button");
  closeButton.innerText = "x";

  closeButton.addEventListener("click", () => {
    div.remove();
  });

  div.appendChild(closeButton);
  content.appendChild(div);
}

function renderAddToDoPrompt() {
  const div = document.createElement("form");

  const nameInput = document.createElement("input");
  nameInput.type = "text";

  const row = document.createElement("div");
  row.classList.add("button-row");

  const addButton = document.createElement("button");
  const cancelButton = document.createElement("button");
  addButton.classList.add("add-button");
  cancelButton.classList.add("cancel-button");
  addButton.innerText = "Add";
  addButton.addEventListener("click", () => {
    let name = div.querySelector("input").value;
    if (name.trim() == "") return;
    div.remove();
    const toDo = new ToDo(name, "date", "priority", "1");
    currentProject.toDoList.push(toDo);
    renderToDoListItem(toDo);
    renderAddToDoItemButton();
  });
  cancelButton.innerText = "Cancel";
  cancelButton.addEventListener("click", () => {
    div.remove();
    renderAddToDoItemButton();
  });
  row.appendChild(addButton);
  row.appendChild(cancelButton);
  content.appendChild(div);
  div.appendChild(nameInput);
  div.appendChild(row);
}

function renderAddToDoItemButton() {
  const div = document.createElement("div");
  div.classList.add("list-button");
  div.innerText = "+ Add To Do List Item ";
  div.style.fontWeight = "bold";
  div.style.fontSize = "16px";

  div.addEventListener("click", () => {
    div.remove();
    renderAddToDoPrompt();
  });
  content.appendChild(div);
}

renderProject(new Project("Tristan's Project"));
renderAddProjectButton();
