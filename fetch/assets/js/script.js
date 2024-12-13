document.getElementById("fetch").addEventListener("click", buttonHandler);

function buttonHandler() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  xhr.onprogress = function () {};

  xhr.onload = function () {
    if (this.status === 200) {
      let response = JSON.parse(this.responseText); // JSON
      displayData(response);
      return response;
    } else {
      console.log(this.status);
    }
  };

  xhr.send();
}


function displayData(users) {
  const container = document.getElementById("container");
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
