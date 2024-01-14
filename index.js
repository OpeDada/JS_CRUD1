let selectedRow = null;
function onFormSubmit(){

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
