//  Future JS interactions Can be added here
// Navbar background on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("bg-black/90");
  } else {
    nav.classList.remove("bg-black/90");
  }
});

// Simple fade-in animation on scroll
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  observer.observe(card);
});
// ===============================
// DASHBOARD CHARTS (ONLY IF PRESENT)
// ===============================
document.addEventListener("DOMContentLoaded", () => {

  // Monthly Growth Chart
  const growthChartEl = document.getElementById("growthChart");
  if (growthChartEl) {
    new Chart(growthChartEl, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          label: "Projects",
          data: [12, 18, 26, 38, 54, 72],
          borderWidth: 2,
          tension: 0.4
        }]
      }
    });
  }
// Service Distribution Chart
  const serviceChartEl = document.getElementById("serviceChart");
  if (serviceChartEl) {
    new Chart(serviceChartEl, {
      type: "doughnut",
      data: {
        labels: ["Graphic Design", "Branding", "Web Dev", "Marketing"],
        datasets: [{
          data: [40, 25, 20, 15]
        }]
      }
    });
  }
<script>
const waIcon = document.getElementById("waIcon");
const waClose = document.getElementById("waClose");
const waContainer = document.getElementById("waContainer");

waIcon.onclick = () => {
  waContainer.classList.add("active");
};

waClose.onclick = () => {
  waContainer.classList.remove("active");
};
</script>

  console.log("Dashboard charts loaded successfully 📊");
});
<script>
  function openPortfolioImage() {
    const modal = document.getElementById("portfolioImageModal");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
  }

  function closePortfolioImage() {
    const modal = document.getElementById("portfolioImageModal");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "auto";
  }
</script>
  // Legal toggle
const legalToggle = document.getElementById('legalToggle');
const legalLinks = document.getElementById('legalLinks');

legalToggle.addEventListener('click', () => {
  legalLinks.classList.toggle('hidden'); // Only toggle hidden
});

// Close menu when clicking outside
window.addEventListener('click', (e) => {
  if (!document.getElementById('legalMenu').contains(e.target) && !legalLinks.classList.contains('hidden')) {
    legalLinks.classList.add('hidden'); // Hide menu
  }
});



// ===============================
// GLOBAL DEBUG
// ===============================
console.log("ATIRATH STUDIO website loaded successfully 🚀");