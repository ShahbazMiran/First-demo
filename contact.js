window.onload = function () {
    alert("Welcome to the Contact Page!");
};

console.log("Department Contact Page Loaded");

const image = document.querySelector("img");

image.addEventListener("click", function () {
    alert("This is the Computer Science Department location image.");
});

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(function (para) {
    para.addEventListener("click", function () {
        para.style.backgroundColor = "#f0f0f0";
        para.style.padding = "5px";
        alert("Selected: " + para.textContent);
    });
});

const links = document.querySelectorAll("a");

links.forEach(function (link) {
    link.addEventListener("mouseover", function () {
        link.style.color = "red";
    });

    link.addEventListener("mouseout", function () {
        link.style.color = "black";
    });
});