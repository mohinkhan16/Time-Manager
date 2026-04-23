
let students = [];
    let editIndex = -1;

    function addData() {
      let name = document.getElementById("name").value;
      let next=document.getElementById("discription").value

    //   let object={
    //     name1:name,
    //     next1:discription
    //   }

      if (name,next === "") {
        alert("Enter name");
        return;
      }

      if (editIndex === -1) {
        students.push(name,next);
      } else {
        students[editIndex] = name,next;
        editIndex = -1;
      }

      document.getElementById("name").value = "";
      displayData();
    }

    function displayData() {
      let list = document.getElementById("list");
      list.innerHTML = "";

      students.forEach((item, index) => {
        list.innerHTML += `
          <li style-none>
            ${item}
            <button onclick="editData(${index})">Edit</button>
            <button onclick="deleteData(${index})">Delete</button>
          </li>
        `;
      });
    }

    function editData(index) {
      document.getElementById("name").value = students[index];
      editIndex = index;
    }

    function deleteData(index) { 
      students.splice(index, 1);
      displayData();
    }



