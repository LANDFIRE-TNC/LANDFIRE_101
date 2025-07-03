
document.addEventListener("DOMContentLoaded", function () {
  // 1. Add aria-label to the sidebar nav
  const sidebar = document.getElementById("quarto-sidebar");
  if (sidebar && !sidebar.hasAttribute("aria-label")) {
    sidebar.setAttribute("aria-label", "Main site navigation");
  }

  // 2. Fix sidebar toggle links
  document.querySelectorAll('a.sidebar-item-toggle[role="navigation"]').forEach(el => {
    el.setAttribute("role", "button");
    const targetId = el.getAttribute("data-bs-target");
    if (targetId) {
      el.setAttribute("aria-controls", targetId.replace("#", ""));
    }
  });

  // 3. Add aria-label to secondary nav
  const secondaryNav = document.querySelector("nav.quarto-secondary-nav");
  if (secondaryNav && !secondaryNav.hasAttribute("aria-label")) {
    secondaryNav.setAttribute("aria-label", "Secondary navigation");
  }
});
