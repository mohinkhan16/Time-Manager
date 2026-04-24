let students = JSON.parse(localStorage.getItem("tasks")) || [];
let editIndex = -1;

function addData() {
  let name = document.getElementById("name").value.trim();
  let desc = document.getElementById("description").value.trim();

  if (name === "" || desc === "") {
    alert("Please enter all fields");
    return;
  }

  if (editIndex === -1) {
    students.push({ name, desc });
  } else {
    students[editIndex] = { name, desc };
    editIndex = -1;
  }

  saveData();
  clearFields();
  displayData();
}

function displayData() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  students.forEach((item, index) => {
    list.innerHTML += `
      <li>
        <span>${item.name} - ${item.desc}</span>
        <div>
          <button onclick="editData(${index})">Edit</button>
          <button onclick="deleteData(${index})">Delete</button>
        </div>
      </li>
    `;
  });
}

function editData(index) {
  document.getElementById("name").value = students[index].name;
  document.getElementById("description").value = students[index].desc;
  editIndex = index;
}

function deleteData(index) {
  students.splice(index, 1);
  displayData();
}

function saveData() {
  localStorage.setItem("tasks", JSON.stringify(students));
}

function clearFields() {
  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
}

window.onload = displayData;