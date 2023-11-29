window.addEventListener("load", () => {
  // (A) GET HTML ELEMENTS
  var filter = document.getElementById("the-filter"), // search box
      list = document.querySelectorAll("#the-list li"); // all list items

  // (B) ATTACH KEY UP LISTENER TO SEARCH BOX
  filter.onkeyup = () => {
    // (B1) GET CURRENT SEARCH TERM
    let search = filter.value.toLowerCase();

    // (B2) LOOP THROUGH LIST ITEMS - ONLY SHOW THOSE THAT MATCH SEARCH
    for (let i of list) {
      let item = i.innerHTML.toLowerCase();
      if (item.indexOf(search) == -1) { i.classList.add("hide"); }
      else { i.classList.remove("hide"); }
    }
  };
});
