document.getElementById("fetch").addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      displayData(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function displayData(users) {
  const container = document.getElementById("data-container");
  container.innerHTML = "";
  users.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.classList.add("element");

    userDiv.innerHTML = `
      <h3>${user.id}</h3>
      <h4>${user.address.street}</h4>
      <h4>${user.company.name}</h4>
    `;

    container.appendChild(userDiv);
  });

  logFirstElement();
}

function logFirstElement() {
  console.log(document.querySelector(".element"));
}
