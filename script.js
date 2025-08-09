const taskInput = document.getElementById('taskInput')
const addBtn = document.getElementById('addBtn')
const taskList = document.getElementById('taskList')



function addTask() {
   
    const taskText = taskInput.value;

  if (taskText.trim() === '') {
      return;
  }
    const  listItem = document.createElement('li');
   
    listItem.textContent = taskText;
     
    taskList.appendChild(listItem);
      
    taskInput.value = '';
}

addBtn.addEventListener('click' , addTask);


