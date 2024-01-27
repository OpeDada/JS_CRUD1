let selectedRow = null;
function onFormSubmit(e){
  e.preventdefault()
}

//READ
function readFormData(){
  let formData = {}
  formData["productCode"] = document.getElementById("productCode").value
  formData["product"] = document.getElementById("product").value
  formData["qty"] = document.getElementById("qty").value
  formData["price"] = document.getElementById("price").value
}

//CREATE
function insertNewRecord(data){
  let table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
  let newRow = table.insertRow(table.length);
  let cell1 = newRow.insertCell(0)
      cell1.innerHTML = data.productCode
  let cell2 = newRow.insertCell(1)
      cell2.innerHTML = data.product
  let cell3 = newRow.insertCell(2)
      cell3.innerHTML = data.qty
  let cell4 = newRow.insertCell(3)
      cell4.innerHTML = data.price
  let cell5 = newRow.insertCell(4)
      cell5.innerHTML = `<button>Edit</button> <button>Delete</button>`
}
