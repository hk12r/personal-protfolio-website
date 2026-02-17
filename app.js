// Task 1: Change paragraph text
function changeText() {
    document.getElementById("myParagraph").innerText = "The text has been changed!";
}

// Task 2: Add new list items dynamically
let skills = ["Data Structures", "SQL", "C Programming"];
let index = 0;

function addItem() {
    if (index < skills.length) {
        let li = document.createElement("li");
        li.innerText = skills[index++];
        document.getElementById("myList").appendChild(li);
    } else {
        alert("All dynamic skills have been added!");
    }
}

// Task 3: Remove last list item
function removeItem() {
    let list = document.getElementById("myList");
    if (list.lastChild) {
        list.removeChild(list.lastChild);
        if (index > 0) index--;
    }
}

// Task 4: Change background color
function changeColor(color) {
    document.body.style.backgroundColor = color;
}

// Reset background color to original (#f5f7fb)
function resetColor() {
    document.body.style.backgroundColor = "#f5f7fb";
}
