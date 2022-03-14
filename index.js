//selector
const outerEl = document.querySelector("#outer");
const input1El = document.querySelector("#value1");
const input2El = document.querySelector("#value2");
const input3El = document.querySelector("#value3");
const input4El = document.querySelector("#value4");
const textEl = document.getElementById("text");
const buttonEl = document.getElementById("btn");

//triggers or eventListener
buttonEl.addEventListener("click", () => alert("text copied"));

//top left
input1El.addEventListener("input", () => {
  let topLeft;
  topLeft = `${parseInt(input1El.value)}px`;
  outerEl.style.borderTopLeftRadius = topLeft;
});
//top right
input2El.addEventListener("input", () => {
  let topRight;
  topRight = `${parseInt(input2El.value)}px`;
  outerEl.style.borderTopRightRadius = topRight;
});
//bottom right
input3El.addEventListener("input", () => {
  let bottomRight;
  bottomRight = `${parseInt(input3El.value)}px`;
  outerEl.style.borderBottomRightRadius = bottomRight;
});
//bottom left
input4El.addEventListener("input", () => {
  let bottomLeft;
  bottomLeft = `${parseInt(input4El.value)}px`;
  outerEl.style.borderBottomLeftRadius = bottomLeft;
});
