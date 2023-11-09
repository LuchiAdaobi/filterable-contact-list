// const names = document.querySelectorAll('names')
const ul = document.getElementById("names");
const li = document.querySelectorAll("ul li.collection-item");
let filterInput = document.getElementById("filterInput");

console.log(li)

filterInput.addEventListener("keyup", filterNames);

function filterNames() {
  // get value of input
  let filterValue = filterInput.value.toUpperCase();

  for (let i = 0; i < li.length; i++) {
    let liIndex = li[i]
// Loop through collection-item lis
    let a = liIndex.getElementsByTagName('a')[0]
    //   if matched
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
        liIndex.style.display = ''
    } else {
        liIndex.style.display = 'none'
    }
  }
}
