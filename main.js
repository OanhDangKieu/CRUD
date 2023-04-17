var selectedtr = null;
var btn = document.querySelector('.button');
btn.addEventListener("click", emply);
function emply() {
    var transferdat = readData()
    if(selectedtr == null) {
      insertdata(transferdat);
    } 
    else {
      update()
    }
    reset()
    
}

function readData() {
    var empy = {}
    empy["name"] = document.querySelector('.name').value;
    empy["price"] = document.querySelector(".price").value;
    empy["detail"] = document.querySelector(".detail").value;
    empy["color"] = document.querySelector(".color").value;
    return empy

}

function insertdata(x) {
  var table = document.querySelector('.list');
  var tr = table.insertRow(table.length);
  var td1 = tr.insertCell(0);
  var td2 = tr.insertCell(1);
  var td3 = tr.insertCell(2);
  var td4 = tr.insertCell(3);
  var td5 = tr.insertCell(4);
  var td6 = tr.insertCell(5);
  
  td1.innerHTML = parseInt(Math.random() * 100);
  td2.innerHTML = x.name;
  td3.innerHTML = x.price;
  td4.innerHTML = x.detail;
  td5.innerHTML = x.color;
  td6.innerHTML = "<a class='edt' onclick='edit(this)'><button>Edit</button></a> / <a onClick='dlt(this)'><button>Delete</button></a>";

}

function reset() {
  document.querySelector('.name').value = "";
  document.querySelector('.price').value = "";
  document.querySelector('.detail').value = "";
  document.querySelector('.color').value = "";
}

function edit(y) {
  selectedtr = y.parentElement.parentElement;
  // console.log(selectedtr);
  document.querySelector('.name').value = selectedtr.cells[1].innerHTML;
  document.querySelector('.price').value = selectedtr.cells[2].innerHTML;
  document.querySelector('.detail').value = selectedtr.cells[3].innerHTML;
  document.querySelector('.color').value = selectedtr.cells[4].innerHTML;

}

function update() {
  selectedtr.cells[1].innerHTML = document.querySelector('.name').value;
  selectedtr.cells[2].innerHTML = document.querySelector('.price').value;
  selectedtr.cells[3].innerHTML = document.querySelector('.detail').value;
  selectedtr.cells[4].innerHTML = document.querySelector('.color').value;
}

function dlt(dl) {
  var dleateRow = dl.parentElement.parentElement;
  dleateRow.remove();
  console.log(dleateRow);
  if (confirm('Are you sure to delete this data ?')) {
    var selectdelete = document.querySelector("a.dlt");
    selectdelete = selectdelete.parentElement.parentElement.remove(0);
}
}
