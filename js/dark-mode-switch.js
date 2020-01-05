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
    localStorage.setItem("theme", "xd");
    console.log(localStorage.getItem(theme));
  })
})


