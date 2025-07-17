// Snap pages into view if 60% is in viewport
const pages = document.querySelectorAll(".page");
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
pages.forEach((page) => observer.observe(page));
