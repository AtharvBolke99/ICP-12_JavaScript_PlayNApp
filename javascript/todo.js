const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

addBtn.onclick = () => {
  let text = input.value.trim();
  if (!text) return;

  let li = document.createElement("li");
  li.className = "task-item";
  li.innerHTML = `<span>${text}</span> <span class="delete-btn">✖</span>`;

  li.querySelector(".delete-btn").onclick = () => li.remove();

  list.appendChild(li);
  input.value = "";
};