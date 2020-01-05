// change theme on button hit
$(function () {
  $('#darkSwitch').change(function () {
    if (darkSwitch.checked) {
      document.body.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
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
  if (theme == "dark") {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    if (darkSwitch.checked) {
      document.getElementById('darkSwitch').click();
    }
  }
  else {
    document.body.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    if (!darkSwitch.checked) {
      document.getElementById('darkSwitch').click();
    }
  }



})
