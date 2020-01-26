function openNav() {
  var displayState = document.getElementById("navBar-mobile");

  if (displayState.style.display == "block") {
    displayState.style.display = "none";
  } else {
    displayState.style.display = "block";
  }
}