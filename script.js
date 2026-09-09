// Minimal, purposeful behaviour only: mobile navigation toggle.
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var list = document.querySelector(".identity__nav ul");

  if (toggle && list) {
    toggle.addEventListener("click", function () {
      var isOpen = list.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    list.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        list.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
