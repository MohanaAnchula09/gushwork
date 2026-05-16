document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery-section");
  if (!gallery) return;

  const mainImage = gallery.querySelector(".main-image");
  const thumbs = gallery.querySelectorAll(".thumb");
  const leftArrow = gallery.querySelector(".gallery-arrow.left");
  const rightArrow = gallery.querySelector(".gallery-arrow.right");

  if (!mainImage || !thumbs.length) return;

  const images = Array.from(thumbs).map(function (thumb) {
    const img = thumb.querySelector("img");
    return img ? img.getAttribute("src") : "";
  });

  let currentIndex = 0;

  function updateGallery(index) {
    currentIndex = index;

    mainImage.setAttribute("src", images[currentIndex]);

    thumbs.forEach(function (thumb) {
      thumb.classList.remove("active");
    });

    thumbs[currentIndex].classList.add("active");

    thumbs[currentIndex].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  thumbs.forEach(function (thumb, index) {
    thumb.addEventListener("click", function () {
      updateGallery(index);
    });
  });

  if (rightArrow) {
    rightArrow.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const nextIndex = (currentIndex + 1) % images.length;
      updateGallery(nextIndex);
    });
  }

  if (leftArrow) {
    leftArrow.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const prevIndex =
        currentIndex === 0 ? images.length - 1 : currentIndex - 1;

      updateGallery(prevIndex);
    });
  }

  updateGallery(0);
  /* NAV PRODUCT DROPDOWN */
  const navDropdown = document.querySelector(".nav-dropdown");

  if (navDropdown) {
    navDropdown.addEventListener("click", () => {
      navDropdown.classList.toggle("active");
    });
  }

  /* SCROLL TO TECH SPECS */
  const specButton = document.querySelector(".secondary-btn");
  const specsSection = document.querySelector(".specs-section");

  if (specButton && specsSection) {
    specButton.addEventListener("click", () => {
      specsSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  /* DOWNLOAD DATASHEET */

const datasheetBtn = document.querySelector(".download-btn");
const datasheetModal = document.querySelector("#datasheetModal");
const datasheetClose = document.querySelector(".datasheet-modal-close");
const datasheetOverlay = document.querySelector(".datasheet-modal-overlay");
const datasheetForm = document.querySelector(".datasheet-form");

if (datasheetBtn && datasheetModal) {
  datasheetBtn.addEventListener("click", (e) => {
    e.preventDefault();
    datasheetModal.classList.add("active");
  });
}

if (datasheetClose) {
  datasheetClose.addEventListener("click", () => {
    datasheetModal.classList.remove("active");
  });
}

if (datasheetOverlay) {
  datasheetOverlay.addEventListener("click", () => {
    datasheetModal.classList.remove("active");
  });
}

if (datasheetForm) {
  datasheetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Brochure request submitted successfully.");
    datasheetForm.reset();
    datasheetModal.classList.remove("active");
  });
}

  /* REQUEST A QUOTE */
  
  const quoteButtons = document.querySelectorAll(
    ".primary-btn, .portfolio-cta-btn"
  );
  
  const quoteModal = document.querySelector("#quoteModal");
  const quoteClose = document.querySelector(".quote-modal-close");
  const quoteOverlay = document.querySelector(".quote-modal-overlay");
  const quoteForm = document.querySelector(".quote-popup-form");
  
  quoteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      quoteModal.classList.add("active");
    });
  });
  
  quoteClose.addEventListener("click", () => {
    quoteModal.classList.remove("active");
  });
  
  quoteOverlay.addEventListener("click", () => {
    quoteModal.classList.remove("active");
  });
  
  quoteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your request has been submitted.");
    quoteForm.reset();
    quoteModal.classList.remove("active");
  });

  /* FAQ ACCORDION */
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    if (!question) return;

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      faqItems.forEach((faq) => {
        faq.classList.remove("active");

        const icon = faq.querySelector(".faq-icon");
        if (icon) icon.textContent = "+";
      });

      if (!isActive) {
        item.classList.add("active");

        const icon = item.querySelector(".faq-icon");
        if (icon) icon.textContent = "−";
      }
    });
  });

  /* =========================
   APPLICATION CARDS SLIDER
  ========================= */

const appGrid = document.querySelector(".applications-grid");
const appPrev = document.querySelector(".applications-nav .app-arrow:first-child");
const appNext = document.querySelector(".applications-nav .app-arrow:last-child");

if (appGrid && appPrev && appNext) {
  appNext.addEventListener("click", () => {
    appGrid.scrollBy({
      left: 444,
      behavior: "smooth",
    });
  });

  appPrev.addEventListener("click", () => {
    appGrid.scrollBy({
      left: -444,
      behavior: "smooth",
    });
  });
}

  /* PROCESS TABS */
  const processTabs = document.querySelectorAll(".process-tab");

  const processData = {
    "Raw Material": {
      title: "High-Grade Raw Material Selection",
      text: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
      points: ["PE100 grade material", "Optimal molecular weight distribution"],
    },
    Extrusion: {
      title: "Precision Extrusion Process",
      text: "Advanced extrusion systems create consistent pipe dimensions with excellent structural strength and durability.",
      points: ["Consistent wall thickness", "Controlled extrusion temperature"],
    },
    Cooling: {
      title: "Controlled Cooling",
      text: "Cooling systems stabilize the pipe shape and ensure dependable performance across different operating conditions.",
      points: ["Uniform cooling flow", "Stable pipe geometry"],
    },
    Sizing: {
      title: "Accurate Pipe Sizing",
      text: "Sizing technology maintains exact outer diameter and alignment for reliable installation and long-term use.",
      points: ["Precise diameter control", "Improved dimensional accuracy"],
    },
    "Quality Control": {
      title: "Strict Quality Control",
      text: "Every pipe is checked through a quality process to ensure durability, pressure resistance, and standard compliance.",
      points: ["Pressure testing", "Certification checks"],
    },
    Marking: {
      title: "Product Marking",
      text: "Each pipe is clearly marked with product details, ratings, and traceability information.",
      points: ["Clear identification", "Batch traceability"],
    },
    Cutting: {
      title: "Accurate Pipe Cutting",
      text: "Pipes are cut to required lengths with clean edges for smooth installation and connection.",
      points: ["Clean cut finish", "Custom lengths available"],
    },
    Packaging: {
      title: "Safe Packaging",
      text: "Finished pipes are packed securely to protect them during storage, handling, and transport.",
      points: ["Secure bundling", "Transport protection"],
    },
  };

  const processTitle = document.querySelector(".process-content h3");
  const processText = document.querySelector(".process-content p");
  const processFeatures = document.querySelector(".process-features");

  processTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      processTabs.forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");

      const key = tab.textContent.trim();
      const data = processData[key];

      if (!data) return;

      if (processTitle) processTitle.textContent = data.title;
      if (processText) processText.textContent = data.text;

      if (processFeatures) {
        processFeatures.innerHTML = data.points
          .map((point) => `<li>${point}</li>`)
          .join("");
      }
    });
  });

  
  /* =========================
   PROCESS IMAGE SLIDER
========================= */

const processImages = [
  "assets/process-image.jpg",
  "assets/portfolio-1.jpg",
  "assets/portfolio-2.jpg",
  "assets/portfolio-3.jpg",
];

const processMainImage = document.getElementById("process-main-image");

const processPrevBtn = document.querySelector(".process-arrow-left");
const processNextBtn = document.querySelector(".process-arrow-right");

let processCurrentIndex = 0;

function updateProcessImage() {
  processMainImage.src = processImages[processCurrentIndex];
}

/* NEXT IMAGE */
if (processNextBtn) {
  processNextBtn.addEventListener("click", () => {
    processCurrentIndex++;

    if (processCurrentIndex >= processImages.length) {
      processCurrentIndex = 0;
    }

    updateProcessImage();
  });
}

/* PREVIOUS IMAGE */
if (processPrevBtn) {
  processPrevBtn.addEventListener("click", () => {
    processCurrentIndex--;

    if (processCurrentIndex < 0) {
      processCurrentIndex = processImages.length - 1;
    }

    updateProcessImage();
  });
}

const processPrevMobile = document.querySelector(".process-prev-btn");
const processNextMobile = document.querySelector(".process-next-btn");

let activeProcessIndex = 0;

function activateProcessTab(index) {
  if (!processTabs.length) return;

  activeProcessIndex = index;

  processTabs[activeProcessIndex].click();
}

if (processNextMobile) {
  processNextMobile.addEventListener("click", () => {
    const nextIndex =
      activeProcessIndex === processTabs.length - 1
        ? 0
        : activeProcessIndex + 1;

    activateProcessTab(nextIndex);
  });
}

if (processPrevMobile) {
  processPrevMobile.addEventListener("click", () => {
    const prevIndex =
      activeProcessIndex === 0
        ? processTabs.length - 1
        : activeProcessIndex - 1;

    activateProcessTab(prevIndex);
  });
}

processTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    activeProcessIndex = index;
  })

const portfolioButtons = document.querySelectorAll(".portfolio-btn");
const portfolioModal = document.querySelector("#portfolioModal");
const modalTitle = document.querySelector("#modalTitle");
const modalFeatures = document.querySelector("#modalFeatures");
const modalClose = document.querySelector(".portfolio-modal-close");

const portfolioData = [
  {
    title: "HDPE Fittings & Accessories",
    features: [
      "AC repain in Banglore.",
      "Affordable Tutors near me.",
      "Best Home salon in Halsuru.",
    ],
  },
  {
    title: "Professional Installation Services",
    features: [
      "AC repain in Banglore.",
      "Affordable Tutors near me.",
      "Best Home salon in Halsuru.",
    ],
  },
  {
    title: "PE-RT Heating Pipes",
    features: [
      "AC repain in Banglore.",
      "Affordable Tutors near me.",
      "Best Home salon in Halsuru.",
    ],
  },
];

portfolioButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const data = portfolioData[index];

    modalTitle.textContent = data.title;

    modalFeatures.innerHTML = data.features
      .map((feature) => `<li>${feature}</li>`)
      .join("");

    portfolioModal.classList.add("active");
  });
});

if (modalClose) {
  modalClose.addEventListener("click", () => {
    portfolioModal.classList.remove("active");
  });
}

if (portfolioModal) {
  portfolioModal.addEventListener("click", (e) => {
    if (e.target === portfolioModal) {
      portfolioModal.classList.remove("active");
    }
  });
}

const testimonialSlider = document.querySelector(".testimonial-slider");
const testimonialCards = document.querySelectorAll(".testimonial-card");
const testimonialPagination = document.querySelector(".testimonial-pagination");

if (testimonialSlider && testimonialCards.length && testimonialPagination) {
  testimonialCards.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = index === 0 ? "testimonial-dot active" : "testimonial-dot";
    dot.type = "button";

    dot.addEventListener("click", () => {
      testimonialCards[index].scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    });

    testimonialPagination.appendChild(dot);
  });

  document.addEventListener("DOMContentLoaded", () => {
    const allPaginations = document.querySelectorAll(".testimonial-pagination");
  
    allPaginations.forEach((pagination, index) => {
      if (index !== 0) {
        pagination.remove();
        return;
      }
  
      pagination.innerHTML = "";
  
      for (let i = 0; i < 5; i++) {
        const dot = document.createElement("button");
        dot.className = i === 0 ? "active" : "";
        pagination;
      }
    });
  });
}

  /* CATALOGUE FORM */
  const catalogueForm = document.querySelector(".catalogue-form");

  if (catalogueForm) {
    catalogueForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = catalogueForm.querySelector("input")?.value.trim();

      if (!email) {
        alert("Please enter your email address.");
        return;
      }

      alert("Catalogue request submitted successfully.");
      catalogueForm.reset();
    });
  }

  /* CTA FORM */
  const ctaForm = document.querySelector(".cta-form");

  if (ctaForm) {
    ctaForm.addEventListener("submit", (e) => {
      e.preventDefault();

      alert("Thank you! Your quote request has been submitted.");
      ctaForm.reset();
    });
  }

  /* SMOOTH SCROLL LINKS */
  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});})