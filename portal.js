(function () {
  "use strict";

  var toastEl = document.getElementById("toast");
  var toastTimer = null;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("show");
    }, 2600);
  }

  // "Coming soon" actions: block navigation and notify.
  document.querySelectorAll('[data-soon="true"]').forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      var card = el.closest(".card");
      var name = card ? card.querySelector("h3").textContent.trim() : "This";
      toast(name + " — " + el.textContent.trim() + " form is coming soon.");
    });
  });

  // Live search filter.
  var search = document.getElementById("search");
  var cards = Array.prototype.slice.call(document.querySelectorAll(".card"));
  var emptyState = document.getElementById("emptyState");

  function applyFilter() {
    var q = (search.value || "").trim().toLowerCase();
    var visible = 0;
    cards.forEach(function (card) {
      var hay = (card.getAttribute("data-keywords") || "") + " " +
        card.textContent.toLowerCase();
      var match = q === "" || hay.indexOf(q) !== -1;
      card.style.display = match ? "" : "none";
      if (match) visible++;
    });
    if (emptyState) emptyState.hidden = visible !== 0;
  }

  if (search) search.addEventListener("input", applyFilter);
})();
