let students = JSON.parse(localStorage.getItem("tasks")) || [];
let editIndex = -1;

function addData() {
  let name = document.getElementById("name").value.trim();
  let desc = document.getElementById("des").value.trim();

  if (name === "" || desc === "") {
    alert("Please enter all Data");
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
  <li class="list-group-item d-flex justify-content-between align-items-center">

    <div class="text-truncate" style="max-width: 200px;">
      <b>${index + 1}.</b> ${item.name} - ${item.desc}
    </div>

    <div class="d-flex">
      <button class="btn btn-success btn-sm me-1" onclick="editData(${index})">Edit</button>
      <button class="btn btn-danger btn-sm" onclick="deleteData(${index})">Delete</button>
    </div>

  </li>
`;
  });
}

function editData(index) {
  document.getElementById("name").value = students[index].name;
  document.getElementById("des").value = students[index].desc;
  editIndex = index;
}

function deleteData(index) {
  students.splice(index, 1);
  saveData();
  displayData();
}

function saveData() {
  localStorage.setItem("tasks", JSON.stringify(students));
}


function clearFields() {
  document.getElementById("name").value = "";
  document.getElementById("des").value = "";
}

window.onload = displayData;

