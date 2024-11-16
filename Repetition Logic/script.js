let nextButtons = document.querySelectorAll(".next");
let pre = document.querySelectorAll(".prev");

let btn = document.getElementsByClassName("next");

console.log(btn);
console.log(nextButtons);

nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let currentItem = button.parentElement;
    let nextItem = currentItem.nextElementSibling;

    if (nextItem) {
      currentItem.style.backgroundColor = "#714747";
      nextItem.style.backgroundColor = "#805b5b";
    }

    console.log(nextItem);
  });
});

pre.forEach((button) => {
  button.addEventListener("click", () => {
    let currentItem = button.parentElement;
    let previous = currentItem.previousElementSibling;

    if (previous) {
      currentItem.style.backgroundColor = "#805b5b";
      previous.style.backgroundColor = "#714747";
    }
  });
});