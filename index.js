//selector
const outerEl = document.querySelector("#outer");
const modalEl = document.querySelector("#modal");
const input1El = document.querySelector("#value1");
const input2El = document.querySelector("#value2");
const input3El = document.querySelector("#value3");
const input4El = document.querySelector("#value4");
// const textEl = document.getElementById("text");
const buttonEl = document.getElementById("btn");
const displayEl = document.getElementById("display");
const prop1El = document.querySelector("#prop1");
const prop2El = document.querySelector("#prop2");
const prop3El = document.querySelector("#prop3");
const prop4El = document.querySelector("#prop4");

//triggers or eventListener
buttonEl.addEventListener("click", () => {
  navigator.clipboard.writeText(displayEl.innerText);
});
buttonEl.addEventListener("click", () => {
  modalEl.style.display = "flex";
});
modalEl.addEventListener("mouseover", () => {
  modalEl.style.display = "none";
});

//top left
input1El.addEventListener("input", () => {
  let topLeft;
  topLeft = `${parseInt(input1El.value)}px`;
  outerEl.style.borderTopLeftRadius = topLeft;
  prop1El.innerHTML = topLeft;
});
//top right
input2El.addEventListener("input", () => {
  let topRight;
  topRight = `${parseInt(input2El.value)}px`;
  outerEl.style.borderTopRightRadius = topRight;
  prop2El.innerHTML = topRight;
});
//bottom right
input3El.addEventListener("input", () => {
  let bottomRight;
  bottomRight = `${parseInt(input3El.value)}px`;
  outerEl.style.borderBottomRightRadius = bottomRight;
  prop3El.innerHTML = bottomRight;
});
//bottom left
input4El.addEventListener("input", () => {
  let bottomLeft;
  bottomLeft = `${parseInt(input4El.value)}px`;
  outerEl.style.borderBottomLeftRadius = bottomLeft;
  prop4El.innerHTML = bottomLeft;
});
