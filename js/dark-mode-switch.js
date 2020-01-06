// change theme on button hit
$(function () {
  $('#darkSwitch').change(function () {

    // darkSwitch checked = light theme
    if (darkSwitch.checked) {
      document.body.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");

      document.getElementById("tft-calc-btn").classList.remove("btn-light");
      document.getElementById("tft-calc-btn").classList.add("btn-dark");
    } else {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");

      document.getElementById("tft-calc-btn").classList.remove("btn-dark");
      document.getElementById("tft-calc-btn").classList.add("btn-light");
    }
    //console.log(localStorage.getItem("theme"));
  })
})


// on page load
document.addEventListener('DOMContentLoaded', (event) => {
  var theme = localStorage.getItem("theme")
  //console.log(theme);
  //console.log(darkSwitch.checked);

  // checked = light theme is current theme
  if (theme != "dark") {
    document.body.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");

    document.getElementById("tft-calc-btn").classList.remove("btn-light");
    document.getElementById("tft-calc-btn").classList.add("btn-dark");

    if (!darkSwitch.checked) {
      document.getElementById('darkSwitch').click();
    }
  }

  else {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");

    document.getElementById("tft-calc-btn").classList.remove("btn-dark");
    document.getElementById("tft-calc-btn").classList.add("btn-light");

    if (darkSwitch.checked) {
      document.getElementById('darkSwitch').click();
    }

  }



})
