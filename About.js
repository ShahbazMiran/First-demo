window.onload = function () {
    alert("Welcome to the About Department Page!");
};
const heading = document.querySelector("h1");

heading.addEventListener("click", function () {
    heading.style.color = "green";
});

const goals = document.querySelectorAll("ul li");

goals.forEach(function(goal) {
    goal.addEventListener("click", function() {
        alert("Goal: " + goal.textContent);
    });
});

const image = document.querySelector("img");

image.addEventListener("click", function() {
    alert("Computer Science Department");
});

console.log("Total Goals: " + goals.length);

const links = document.querySelectorAll("a");

links.forEach(function(link) {
    link.addEventListener("mouseover", function() {
        link.style.color = "red";
    });

    link.addEventListener("mouseout", function() {
        link.style.color = "black";
    });
});
