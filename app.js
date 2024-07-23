let app = document.querySelector(".mainApp");
let todoImg = document.querySelector(".todoImg");
let appWelcome = document.createElement("div");
appWelcome.classList.add("appWelcome");
let appHeading = document.createElement("h1");
appHeading.classList.add("appHeading");
let appPara = document.createElement("p");
appPara.classList.add("appPara");
appWelcome.appendChild(appHeading);
appWelcome.appendChild(appPara);
let headingData = "Todo App";
let paraData =
  "welcome! this is todo app created by muhammad tayyab raza awan.where you can add your daily tasks,edit them,view them & also you can delete them,to add a task click on add button given in left button,to edit any existing task click on edit button,to view all the existing task click on view button,to delete any task click on delete button.to support me please subscribe to my youtube channel,follow me on facebook & instagram.";
appHeading.innerText = "";
appPara.innerText = "";
setTimeout(() => {
  todoImg.remove();
  app.appendChild(appWelcome);
}, 1000);
async function textAnim(node, data, delay) {
  for (let letter = 0; letter < data.length; letter++) {
    await typeWriter(node, data[letter], delay);
  }
}
function typeWriter(node, letter, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (letter === " ") {
        node.innerHTML += " &nbsp;";
      } else {
        node.innerText += letter;
      }
      resolve();
    }, delay);
  });
}
setTimeout(() => {
  textAnim(appHeading, headingData, 250);
}, 1000);
setTimeout(() => {
  textAnim(appPara, paraData, 25);
}, 4000);
