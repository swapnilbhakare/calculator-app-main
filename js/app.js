const themSwitcher = document.querySelectorAll(".them");
const defaultThem = localStorage.getItem("them") || "them-1";
setThem(defaultThem);

themSwitcher.forEach((button) => {
  button.addEventListener("click", (e) => {
    setThem(e.target.value);
  });
});
function setThem(them) {
  them = them || "them-1";
  document.documentElement.className = them;
  localStorage.setItem("them", them);
  themSwitcher.value = them;
}

let inputScreen = document.getElementById("screen");
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttonValue = e.target.value;
    console.log(buttonValue);
    if (buttonValue === "=") {
      inputScreen.value = eval(inputScreen.value);
    } else if (buttonValue === "del") {
      inputScreen.value = inputScreen.value.substr(
        0,
        inputScreen.value.length - 1
      );
      buttonValue = "";
    } else if (buttonValue === "reset") {
      inputScreen.value = "";
    } else {
      inputScreen.value += buttonValue;
    }
  });
});
