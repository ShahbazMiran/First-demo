window.onload = function () {
    alert("Welcome to the Courses Page!");
};

const programs = document.querySelectorAll("ol li");

console.log("Total Programs Offered: " + programs.length);

programs.forEach(function(program) {
    program.addEventListener("click", function() {
        alert("Selected Program: " + program.textContent);
    });
});

const rows = document.querySelectorAll("table tr");

rows.forEach(function(row) {
    row.addEventListener("click", function() {
        row.style.backgroundColor = "lightyellow";
    });
});

let totalCredits = 0;

const creditCells = document.querySelectorAll("table tr td:last-child");

creditCells.forEach(function(cell) {
    totalCredits += Number(cell.textContent);
});

console.log("Total Credit Hours: " + totalCredits);

const links = document.querySelectorAll("a");

links.forEach(function(link) {
    link.addEventListener("mouseover", function() {
        link.style.color = "red";
    });

    link.addEventListener("mouseout", function() {
        link.style.color = "black";
    });
});




