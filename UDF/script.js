const listContainer = document.getElementById("dynamicList");
const addItemButton = document.getElementById("addItem");


function createrListItem(content) {
  const li = document.createElement("li");
  li.textContent = content;

  const moveupButton = document.createElement("button");
  moveupButton.textContent = "Move Up!!";

  moveupButton.classList.add("moveUp");

  const moveDownButton = document.createElement("button");
  moveDownButton.textContent = "Move Down!!";

  moveDownButton.classList.add("moveDown");

  li.appendChild(moveupButton);
  li.appendChild(moveDownButton);

  moveupButton.addEventListener("click", () => moveUpItem(li));
  moveDownButton.addEventListener("click", () => moveDownItem(li));

  return li;
}

addItemButton.addEventListener("click", () => {
  const itemCount = listContainer.children.length;

  const newItem = createrListItem(`Item ${itemCount}`);

  listContainer.appendChild(newItem);
});