const eventTitle = document.querySelector("#taskTitle");
const addBtn = document.querySelector("#addBtn");
const tasks = document.querySelector("#tasks");
const log = document.querySelector("#log");
//add event to the parent
tasks.addEventListener("click", (e) => {
  console.log("target=", e.target);
  console.log("current target=", e.currentTarget);
  if (e.target.classList.contains("removeButton")) {
    //remove button clicked
    e.target.parentNode.remove();
  }
  if (e.target.tagName == "LI") {
    log.innerHTML += 'List item <span style="color:red">\'' + e.target.innerHTML + "'</span> clieck!<br />";
  }
});

eventTitle.addEventListener("keypress", (e) => {
  if (e.charCode == 13) {
    addBtn.click(); //fireEvent("click");
  }
});
addBtn.addEventListener("click", () => {
  tasks.innerHTML += `<li>${eventTitle.value} <button class="removeButton">Remove</button></li>`;
  document.getElementById("taskTitle").value = "";
});

//preventDefault
const sampleLink = document.querySelector("#sampleLink");
sampleLink.addEventListener("click", (e) => e.preventDefault());

//priority of events (event flow: event bubbling and event capturing)
const outer = document.querySelector(".outer");
const inner = document.querySelector(".inner");
outer.addEventListener(
  "click",
  (e) => {
    log.innerHTML += "outer clicked!<br/>";
  },
  false //if true, the events flow will be reversed
);
inner.addEventListener("click", (e) => {
  log.innerHTML += "inner clicked!<br/>";
  e.stopPropagation(); //stop from triggering events for parents
});
