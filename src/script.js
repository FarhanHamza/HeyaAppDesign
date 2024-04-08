const burger = document.querySelector("#burger");
burger.addEventListener("click", function () {
  // debugger
  let menus = document.getElementById("mobileNavbar");

  if (menus.classList.contains("hidden")) menus.classList.remove("hidden");
  else menus.classList.add("hidden");
});



// Night Mode 🌙
const mode = document.querySelector("#nighModeClick");
mode.addEventListener("click", function () {
  const lightMode = document.querySelector("#lightModeClick");
  mode.classList.add("hidden");
  lightMode.classList.remove("hidden");

  //Apply Mode
  const htmlBody = document.querySelector("#htmlId");
  htmlBody.classList.add("dark");

  // local storage
  localStorage.setItem("themeIs", "dark");
});

// Light Mode 🌞
const lighMode = document.querySelector("#lightModeClick");
lighMode.addEventListener("click", function () {
  const darkMode = document.querySelector("#nighModeClick");
  lighMode.classList.add("hidden");
  darkMode.classList.remove("hidden");

  //Apply Mode
  const htmlBody = document.querySelector("#htmlId");
  htmlBody.classList.remove("dark");

    // local storage
    localStorage.setItem("themeIs", "light");
});


document.addEventListener("load", function(){
  debugger
  // local storage
  //localStorage.setItem("themeIs", "light");
  // var themeIs = window.localStorage.getItem("themeIs");
  // console.warn(themeIs)
  // if (!themeIs) {
  //   window.localStorage.setItem("themeIs", "light");
  // }
  const htmlBody = document.querySelector("#htmlId");
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.htmlBody.classList.add('dark')
  } else {
    document.htmlBody.classList.remove('dark')
  }

  //htmlBody.classList.add(themeIs);
})