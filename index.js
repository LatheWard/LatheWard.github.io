// Snap pages into view if 60% is in viewport
const pages = document.querySelectorAll(".page");
const mobilePages = document.querySelectorAll(".mobile-page");
const mediaQuery = window.matchMedia('(max-width: 770px)')
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
        entry.target.scrollIntoView({ behavior: "smooth" });
      }
    });
  },
  {
    threshold: [0.6],
  }
);

if (mediaQuery.matches) {
  mobilePages.forEach((page) => observer.observe(page));
} else {
  pages.forEach((page) => observer.observe(page));
}
