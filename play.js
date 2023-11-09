const input = document.getElementById("filterInput");
const lis = document.querySelectorAll("ul li.collection-item");
const noContact = document.getElementById("no-contact");


input.addEventListener("keyup", () => {
  let inputValue = input.value.toUpperCase();
  let contactsFound = false;

  Array.from(lis).map((li) => {
    let a = li.getElementsByTagName("a")[0];
    let text = a.innerHTML.toUpperCase();

    if (text.startsWith(inputValue)) {
      li.style.display = "";
      contactsFound = true;
    } else {
      li.style.display = "none";
    }

    if (contactsFound) {
      noContact.style.display = "none";
    } else {
      noContact.style.display = "block";
    }
  });
});


    // if (text.includes(inputValue)) {
    //   li.style.display = "";
    //   contactsFound = true;
    // } else {
    //   li.style.display = "none";
    // }

    // if (contactsFound) {
    //   noContact.style.display = "none";
    // } else {
    //   noContact.style.display = "block";
    // }

// function filterNames() {
//   let inputValue = input.value.toUpperCase();

//   for (let i = 0; i < lis.length; i++) {
//     let index = lis[i];
//     let a = index.getElementsByTagName("a")[0];
//     let text = a.innerHTML.toUpperCase();

//     if (text.indexOf(inputValue) > -1) {
//       index.style.display = "";
//     } else {
//       index.style.display = "none";
//     }
//   }
// }
