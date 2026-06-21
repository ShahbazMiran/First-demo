window.onload = function () {
    alert("Welcome to the Admission Form Page!");
};

const submitBtn = document.querySelector("input[type='submit']");

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const name = document.querySelector("input[type='text']").value;
    const fatherName = document.querySelectorAll("input[type='text']")[1].value;
    const email = document.querySelector("input[type='email']").value;
    const gender = document.querySelector("input[type='radio']:checked");
    const program = document.querySelector("select").value;

    if (!name || !fatherName || !email || !gender) {
        alert("Please fill all required fields!");
        return;
    }

    alert(
        "Form Submitted Successfully!\n" +
        "Name: " + name + "\n" +
        "Father Name: " + fatherName + "\n" +
        "Email: " + email + "\n" +
        "Gender: " + gender.nextSibling.textContent.trim() + "\n" +
        "Program: " + program
    );
});

const inputs = document.querySelectorAll("input[type='text'], input[type='email'], select");

inputs.forEach(function (input) {
    input.addEventListener("focus", function () {
        input.style.backgroundColor = "#e6f7ff";
    });

    input.addEventListener("blur", function () {
        input.style.backgroundColor = "white";
    });
});

const links = document.querySelectorAll("a");

links.forEach(function(link) {
    link.addEventListener("mouseover", function() {
        link.style.color = "red";
    });

    link.addEventListener("mouseout", function() {
        link.style.color = "black";
    });
});