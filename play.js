const input = document.getElementById("filterInput");
const lis = document.querySelectorAll("ul li.collection-item");
const noContact = document.getElementById("no-contact");

// input.addEventListener("keyup", filterNames);

input.addEventListener("keyup", () => {
  //   let inputValue = input.value.toUpperCase();
  //   let contactsFound = false;

  //   for (let i = 0; i < lis.length; i++) {
  //     let index = lis[i];
  //     let a = index.getElementsByTagName("a")[0];
  //     let text = a.innerHTML.toUpperCase();

  //     if (text.indexOf(inputValue) > -1) {
  //       index.style.display = "";
  //       contactsFound = true
  //     } else {
  //       index.style.display = "none";
  //     }
  // }

  let inputValue = input.value.toUpperCase();
  let contactsFound = false;

  Array.from(lis).map((li) => {
    let a = li.getElementsByTagName("a")[0];
    let text = a.innerHTML.toUpperCase();

    if (text.includes(inputValue)) {
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

function filterNames() {
  let inputValue = input.value.toUpperCase();

  for (let i = 0; i < lis.length; i++) {
    let index = lis[i];
    let a = index.getElementsByTagName("a")[0];
    let text = a.innerHTML.toUpperCase();

    if (text.indexOf(inputValue) > -1) {
      index.style.display = "";
    } else {
      index.style.display = "none";
    }
  }
}

function filterNames1() {
  // get value of input
  let filterValue = filterInput.value.toUpperCase();

  for (let i = 0; i < li.length; i++) {
    let liIndex = li[i];
    // Loop through collection-item lis
    let a = liIndex.getElementsByTagName("a")[0];
    //   if matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      liIndex.style.display = "";
    } else {
      liIndex.style.display = "none";
    }
  }
}
