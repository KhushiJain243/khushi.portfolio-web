// add item
function addItem() {
    let inputBox = document.getElementById("hobbyInput");
    let value = inputBox.value;

    if (value == "") {
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = value + ' <button onclick="deleteItem(this)">Delete</button>';

    document.getElementById("hobbyList").appendChild(li);

    inputBox.value = "";
}

// delete item
function deleteItem(btn) {
    btn.parentElement.remove();
}

// form alert
function showAlert(event) {
    event.preventDefault();
    alert("Form submitted successfully!");
}

// date and time
function showDateTime() {
    let now = new Date();
    document.getElementById("dateTime").innerText = now.toLocaleString();
}

setInterval(showDateTime, 1000);
