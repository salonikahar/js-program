let currentEditIndex = null;

document.addEventListener("DOMContentLoaded", displayRecords);

function displayRecords() {
  const recordList = document.getElementById("recordList");
  recordList.innerHTML = "";

  const records = getRecord();
  if (records.length === 0) {
    recordList.innerHTML = `<tr><td colspan = "" class="px-5 text-center"> No Records found</td></tr>`;
    return;
  }

  records.forEach((record, index) => {
    recordList.innerHTML += `
      <tr class="px-5 text-center">
              <td class="mx-2">${record.name}</td>
                  <td class="mx-2">${record.details}</td>
                  <td>
                      <button class="btn btn-danger" onclick='loadRecord(${index})'>Edit</button>
                      <button class="btn btn-success" onclick='deleteRecord(${index})'>Delete</button>
                  </td>
      </tr>
      `;
  });
}

function addRecord() {
  const nameInput = document.getElementById("name").value.trim();
  const detailInput = document.getElementById("detail").value.trim();

  if (!nameInput || !detailInput) {
    alert("Both name and details are required");
    return;
  }

  const newRecord = {
    id: generateId(),
    name: nameInput,
    details: detailInput,
    date: new Date().toLocaleString(),
  };

  console.log(newRecord);

  const records = getRecord();
  records.push(newRecord);
  localStorage.setItem("records", JSON.stringify(records));

  clearForm();
  displayRecords();
}

function loadRecord(index) {
  const records = getRecord();
  const record = records[index];
  document.getElementById("name").value = record.name;
  document.getElementById("detail").value = record.details;

  currentEditIndex = index;

  document.getElementById("addButton").style.display = "none";
  document.getElementById("updateButton").style.display = "inline";
}

function updateRecord() {
  const records = getRecord();

  records[currentEditIndex].name = document.getElementById("name").value.trim();
  records[currentEditIndex].details = document
    .getElementById("detail")
    .value.trim();

  records[currentEditIndex].date = new Date().toLocaleString();

  localStorage.setItem("records", JSON.stringify(records));
  clearForm();
  displayRecords();
  document.getElementById("addButton").style.display = "inline";
  document.getElementById("updateButton").style.display = "none";
  currentEditIndex = null;
}

function deleteRecord(index) {
  const records = getRecord();
  records.splice(index, 1);
  localStorage.setItem("records", JSON.stringify(records));
  displayRecords();
}

function searchRecord() {
  const query = document.getElementById("search").value.toLowerCase();
  const records = getRecord();

  const filertRecords = records.filter((record) =>
    record.name.toLowerCase().includes(query)
  );

  const recordList = document.getElementById("recordList");
  recordList.innerHTML = "";

  if (filertRecords.length === 0) {
    recordList.innerHTML = `<tr><td colspan = "4"> No Records found</td></tr>`;
    return;
  }

  filertRecords.forEach((record, index) => {
    recordList.innerHTML += `
      <tr >
              <td>${record.name}</td>
                  <td>${record.details}</td>
                  <td>
                      <button onclick='loadRecord(${index})'>Edit</button>
                      <button onclick='deleteRecord(${index})'>Delete</button>
                  </td>
      </tr>
      `;
  });
}

function getRecord() {
  const records = localStorage.getItem("records");
  return records ? JSON.parse(records) : [];
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("detail").value = "";
}

function generateId() {
  return Math.floor(Math.random() * Date.now());
}