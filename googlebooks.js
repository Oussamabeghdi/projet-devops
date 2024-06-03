// // let element = document.querySelectorAll("div");
// let element = document.getElementById("container");

// const axios = require("axios");
// document.addEventListener("DOMContentLoaded", function () {
//   const axios = window.axios;
//   axios
//     .get("https://www.googleapis.com/books/v1/volumes?q=*&maxResults=5")
//     // .get(
//     //   "https://www.googleapis.com/books/v1/volumes/sgteDwAAQBAJ?q=*&maxResults=2"
//     // )
//     .then(function (response) {
//       // console.log(response.data);
//       const contentItem = response.data.items;
//       // console.log(response.data.items);

//       for (let i = 0; i < contentItem.length; i++) {
//         const bookTitle = document.createElement("h2");
//         bookTitle.innerText = contentItem[i].volumeInfo.title;
//         console.log(bookTitle.innerText);

//         const bookPublisher = document.createElement("h3");
//         bookPublisher.innerText = contentItem[i].volumeInfo.publisher;

//         const bookDescription = document.createElement("p");
//         bookDescription.innerText = contentItem[i].volumeInfo.description;

//         const bookImage = document.createElement("img");
//         bookImage.src = contentItem[i].volumeInfo.imageLinks.smallThumbnail;
//         bookImage.alt = title;

//         element.appendChild(bookTitle);
//         element.appendChild(bookPublisher);
//         element.appendChild(bookDescription);
//         element.appendChild(bookImage);

//         console.log(title);
//         console.log(contentItem[i].volumeInfo.imageLinks.smallThumbnail);
//       }
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// });

// Assurez-vous que Axios est chargé correctement
// Si vous utilisez un environnement de navigateur, Axios doit être inclus via un <script> dans votre HTML, ou vous pouvez utiliser fetch pour faire la requête.

document.addEventListener("DOMContentLoaded", function () {
  const axios = window.axios; // Si Axios est inclus via un <script> dans votre HTML

  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=*&maxResults=5")
    .then(function (response) {
      const contentItem = response.data.items;
      const resultsContainer = document.getElementById("results");

      contentItem.forEach((item) => {
        const bookElement = document.createElement("div");
        bookElement.className = "book";

        const bookTitle = document.createElement("h2");
        bookTitle.innerText = item.volumeInfo.title;

        const bookPublisher = document.createElement("h3");
        bookPublisher.innerText =
          item.volumeInfo.publisher || "Éditeur inconnu";

        const bookDescription = document.createElement("p");
        bookDescription.innerText =
          item.volumeInfo.description || "Pas de description disponible";

        const bookImage = document.createElement("img");
        bookImage.src = item.volumeInfo.imageLinks
          ? item.volumeInfo.imageLinks.smallThumbnail
          : "https://via.placeholder.com/128x193?text=No+Image";
        bookImage.alt = item.volumeInfo.title;

        bookElement.appendChild(bookTitle);
        bookElement.appendChild(bookPublisher);
        bookElement.appendChild(bookDescription);
        bookElement.appendChild(bookImage);

        resultsContainer.appendChild(bookElement);
      });
    })
    .catch(function (error) {
      console.error("Erreur:", error);
    });
});
