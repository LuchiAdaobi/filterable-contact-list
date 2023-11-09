const input = document.getElementById("filterInput");
const lis = document.querySelectorAll("ul li.collection-item");
const noContact = document.getElementById('no-contact')

// input.addEventListener("keyup", filterNames);

input.addEventListener('keyup', ()=> {
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
})

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
};

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
