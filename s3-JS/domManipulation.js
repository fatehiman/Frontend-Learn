const div = document.createElement("div");
const text = document.createTextNode("This is textNode.");
div.textContent = "This is textNode."; //same as above
div.append(text); //means appendChild
document.body.append(div);

//method 1:
let div2 = document.createElement("div");
div2.textContent = "before";
div.before(div2);

div2 = document.createElement("div");
div2.textContent = "prepend";
div.prepend(div2);

div2 = document.createElement("div");
div2.textContent = "append";
div.append(div2);

div2 = document.createElement("div");
div2.textContent = "after";
div.after(div2);

//method 2:
const span = document.createElement("span");
const spanText = document.createTextNode("This is textNode.");
span.textContent = "This is textNode."; //same as above
span.append(spanText); //means appendChild
document.body.append(span);

span.insertAdjacentHTML("beforebegin", "<span>beforebegin</span>");
span.insertAdjacentHTML("afterbegin", "<span>afterbegin</span>");
span.insertAdjacentHTML("beforeend", "<span>beforeend</span>");
span.insertAdjacentHTML("afterend", "<span>afterend</span>");

//cloneNode
const newDiv = div.cloneNode(true); //if false, only div (without any child) will be clone
document.body.append(newDiv);

newDiv.replaceWith("1230");     //can be text or element
