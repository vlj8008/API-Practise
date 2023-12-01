// FETCHING RESOURCES FROM SERVER
// Change resource from json to js object
// Access the data
// Display the data in html
const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((serverResponse) => {
    if (!serverResponse.ok) {
      console.log("Problem has occured");
      return;
    }
    return serverResponse.json();
  })
  .then((data) => {
    data.forEach((user) => {
      const markUp = `<li>${user.name}</li>`;
      document.querySelector("ul").insertAdjacentHTML("beforeend", markUp);
    });
  });

//POSTING USER

//ADDING USER - PUT

//DELETING USER
