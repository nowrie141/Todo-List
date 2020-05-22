const inputTask = document.querySelector("#input-task");
const addTaskbtn = document.querySelector("#add-task");
const removeTaskbtn = document.querySelector("#remove-tasks");
const taskList = document.querySelector("#task-list");
const taskTemplate = document.querySelector("#task-template");

let idNumber = 1;

inputTask.addEventListener("keyup", (e) => {
  if (e.keyCode === 13 && isValid()){
    addTask();
  }
});

addTaskbtn.addEventListener("click", () => {
  if(isValid()){
    addTask();
  }
});

removeTaskbtn.addEventListener("click", ()=>{
  const tasks = document.querySelectorAll(".task");
  for(let task of tasks){
    const isChecked = task.querySelector("input").checked;
      if (isChecked){
        task.remove();
      }
  }
});

function addTask(){
  const taskElement = document.importNode(taskTemplate.content, true);
  const checkbox = taskElement.querySelector("input");
  checkbox.id = idNumber;
  const label = taskElement.querySelector("label");
  label.htmlFor = idNumber;
  label.append(inputTask.value);
   taskList.appendChild(taskElement);
   inputTask.value = "";
   idNumber++;
}

function isValid() {
  return inputTask.value !== "";
}