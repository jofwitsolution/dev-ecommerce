const container = document.querySelector(".container");

document.getElementById("login-form").onsubmit = function (event) {
  event.preventDefault();

  console.log(event.target["email"].value);
  console.log(event.target["password"].value);

  //   http://localhost:4000/api/v1/auth/login

  const data = {
    email: event.target["email"].value,
    password: event.target["password"].value,
  };

  fetch("http://localhost:4000/api/v1/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
    credentials: "same-origin",
    headers: {
      "Content-Type": "Application/JSON",
    },
  })
    .then((res) => {
      res.json().then((data) => console.log(data));
    })
    .catch((error) => console.log(error));
};

document.getElementById("get-users").onclick = function () {
  fetch("/api/v1/users")
    .then((res) =>
      res.json().then((data) => {
        console.log(data.users);

        let userslist = data.users.map((user) => `<li>${user.name}</li>`);

        console.log(userslist);

        userslist = userslist.join(" ");
        console.log(userslist);

        const ul = document.createElement("ul");
        ul.innerHTML = userslist;
        container.appendChild(ul);
      })
    )
    .catch((error) => console.log(error));
};
