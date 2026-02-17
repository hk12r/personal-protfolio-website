// Task 1: Change paragraph text
function changeText() {
    document.getElementById("myParagraph").innerText = "The text has been changed!";
}

// Task 2: Add new list item
let count = 1;
function addItem() {
    let li = document.createElement("li");
    li.innerText = "New Item " + count++;
    document.getElementById("myList").appendChild(li);
}

// Task 3: Remove last list item
function removeItem() {
    let list = document.getElementById("myList");
    if (list.lastChild) {
        list.removeChild(list.lastChild);
        count--;
    }
}

// Task 4: Change background color
function changeColor(color) {
    document.body.style.backgroundColor = color;
}
