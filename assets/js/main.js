// Small helper: highlight active nav link
(function () {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach(a => {
    if (a.getAttribute("href") === path) a.style.color = "var(--text)";
  });
})();
