window.onload = function(){
    alert("Welecome to the Computer science Departement Website");
};
 const heading = document.querySelector("h1");

 heading.addEventListener("click",function(){
    heading.style.color = "blue" ;
 });

 const image = document.querySelector("img");

  image.addEventListener("click",function(){
    alert("Computer Science Department Image");
  });

   console.log("Current Data & Time: " + new Date());

    const links = document.querySelectorAll("a");

    links.forEach(function(link) {
        link.addEventListener("mouseover",function(){
            link.style.color = "red";
        
    });

    link.addEventListener("mouseout",function(){
        link.style.color = "black";
    });
});