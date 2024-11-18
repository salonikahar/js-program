document.addEventListener("DOMContentLoaded", () => {
    const itemInput = document.getElementById("itemInput");
    const addButton = document.getElementById("addButton");
    const clearButton = document.getElementById("clearButton");
    const itemList = document.getElementById("itemList");

    addButton.addEventListener("click", () => {
        const itemText = itemInput.value.trim();
        if (itemText) {
            const li = document.createElement("li");
            li.textContent = itemText;

            li.addEventListener("click", () => {
                itemList.removeChild(li);
            });

            itemList.appendChild(li);
            itemInput.value = ""; 
        } else {
            alert("Please enter an item.");
        }
    });

    clearButton.addEventListener("click", () => {
        itemList.innerHTML = "";
    });
});