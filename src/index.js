import "./styles.css";
import { Project } from "./toDoListLogic";
const sidebar = document.querySelector("#sidebar");
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

renderProject(new Project("Tristan's Project"));
renderAddProjectButton();
