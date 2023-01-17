console.log(document.querySelectorAll(".box"));
//returns as NodeList (includes foreach, include text between elements and etc). you can access all attributes

console.log(document.getElementsByClassName("box"));
//returns as HTMLConnection  (not includes foreach, only include elements). you cant access all attributes

console.log(document.querySelector(".box"));
console.log(document.getElementById("box2"));

//firstChild points to text inside the element
console.log(document.getElementById("mainElement").firstChild);
console.log(document.getElementById("mainElement").firstElementChild.nodeName);
console.log(document.getElementById("mainElement").nextElementSibling.nodeName);

//working with class
console.log(document.getElementById("box2").classList);
document.getElementById("box2").classList.toggle("green");
document.getElementById("box3").classList.add("green");
document.getElementById("box2").classList.remove("bold");
console.log(document.getElementById("box2").classList.contains("bold")); //false

//return all attributs
console.log(document.getElementById("box2").attributes);
document.getElementById("box5").style.border = "5px solid black";
document.getElementById("box5").style.removeProperty("border");
document.getElementById("box5").style.cssText = "color:yellow; width:300px;";

//dataset: special attributes
console.log(document.getElementById("box4").dataset);
console.log(document.getElementById("box4").dataset.family);
console.log(document.getElementById("box4").dataset.id);

//inline style access only
console.log(document.getElementById("box3").style); //backgroundColor:yellow that is only in inline
const aa = getComputedStyle(document.getElementById("box3"));
console.log(aa.backgroundColor); //all styles from css and inline

//some other properties
console.log(document.getElementById("orderedList1").innerHTML);
console.log(document.getElementById("orderedList1").outerHTML);
console.log(document.getElementById("orderedList1").innerText);
console.log(document.getElementById("orderedList1").textContent);
