//============================================//
// mobile nambar hidden function
//===========================================//
const menuBtn = document.getElementById("menu-toggle"); // /menu-btn
const mobileMenu = document.getElementById("mobile-menu"); // /mobile-menu
const menucloseBtn = document.getElementById("menu-close"); // /menu-close
menucloseBtn.addEventListener("click", function (e) {
  console.log("menu close button clicked");
  mobileMenu.classList.toggle("hidden");
});
menuBtn.addEventListener("click", function (e) {
  console.log("menu button clicked");
  mobileMenu.classList.toggle("hidden");
});
//========================end===================//

//============================================//
// when user clicks on search icon hide navbar
//===========================================//
const searchIcon = document.getElementById("search-icon"); // /search-icon
const navItems = document.getElementById("nav-items"); // /nav-items
searchIcon.addEventListener("click", function (e) {
  console.log("search icon clicked");
  navItems.classList.toggle("hidden");

  // when user clicks on search icon hide navbar enble search bar
  const searchBar = document.getElementById("search-bar"); // /search-bar
  searchBar.classList.toggle("hidden");
});

// when user clicks on close icon hide navbar enble search bar
const closeIcon = document.getElementById("close-icon"); // /close-icon
closeIcon.addEventListener("click", function (e) {
  console.log("close icon clicked");
  navItems.classList.toggle("hidden");

  // when user clicks on close icon hide navbar enble search bar
  const searchBar = document.getElementById("search-bar"); // /search-bar
  searchBar.classList.toggle("hidden");
});
//========================end===================//



