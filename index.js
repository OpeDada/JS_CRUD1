let selectedRow = null;
function onFormSubmit(event) {
  event.preventDefault();
  let formData = readFormData();
  selectedRow === null ? insertNewRecord(formData) : updateRecord(formData);
  resetForm();
}

//READ
function readFormData() {
  let formData = {};
  formData["productCode"] = document.getElementById("productCode").value;
  formData["product"] = document.getElementById("product").value;
  formData["qty"] = document.getElementById("qty").value;
  formData["price"] = document.getElementById("price").value;
  return formData;
}

//CREATE
function insertNewRecord(data) {
  let table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  let cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.productCode;
  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.product;
  let cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.qty;
  let cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.price;
  let cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//EDIT
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
  document.getElementById("product").value = selectedRow.cells[1].innerHTML;
  document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
  document.getElementById("price").value = selectedRow.cells[3].innerHTML;
}

//UPDATE
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.productCode;
  selectedRow.cells[1].innerHTML = formData.product;
  selectedRow.cells[2].innerHTML = formData.qty;
  selectedRow.cells[3].innerHTML = formData.price;
}

//DELETE
function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
  }
  resetForm();
}

//RESET FORM
function resetForm() {
  document.getElementById("productCode").value = "";
  document.getElementById("product").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("price").value = "";
  selectedRow = null;
}
