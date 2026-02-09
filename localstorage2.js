const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserToLocalStorage(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function getUserFromLocalStorage() {
  const data = localStorage.getItem("user");
  const user = JSON.parse(data);
  console.log(user);
}

saveUserToLocalStorage(user);
getUserFromLocalStorage();
