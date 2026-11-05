// mobile menu
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// scroll par header chhota, top bar chhup jaata hai
const header = document.getElementById("site-header");
const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 60);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

// lazy images: load hote hi fade in
document.querySelectorAll("img.lz").forEach((image) => {
  const show = () => image.classList.add("is-loaded");
  if (image.complete && image.naturalWidth) show();
  else image.addEventListener("load", show, { once: true });
});

// cards aur sections scroll par halka sa upar aate hain
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-in"));
}

// hero video: pause button, aur reduced motion wale users ke liye shuru se band
const heroVideo = document.getElementById("hero-video");
const heroPause = document.getElementById("hero-pause");
if (heroVideo && heroPause) {
  const label = heroPause.querySelector("span");
  const setPaused = (paused) => {
    if (paused) heroVideo.pause(); else heroVideo.play().catch(() => {});
    label.textContent = paused ? "Play video" : "Pause video";
  };
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPaused(true);
  heroPause.addEventListener("click", () => setPaused(!heroVideo.paused));
}

// FAQ: ek waqt mein ek hi khula
document.querySelectorAll(".faq").forEach((list) => {
  list.addEventListener("toggle", (event) => {
    if (!event.target.open) return;
    list.querySelectorAll("details[open]").forEach((item) => { if (item !== event.target) item.open = false; });
  }, true);
});

// contact form: server nahi hai, is liye details WhatsApp ya email mein bhar ke khulti hain
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  const fields = contactForm.elements;
  const params = new URLSearchParams(window.location.search);
  if (params.get("service")) fields.service.value = params.get("service");
  if (params.get("town")) fields.town.value = params.get("town");
  fields.reg.addEventListener("input", () => { fields.reg.value = fields.reg.value.toUpperCase().replace(/[^A-Z0-9 ]/g, ""); });

  const buildMessage = () => {
    const error = document.getElementById("form-error");
    const missing = ["name", "reg", "phone"].filter((name) => !fields[name].value.trim());
    error.textContent = missing.length ? "Please add your name, registration and mobile number." : "";
    if (missing.length) {
      fields[missing[0]].focus();
      return null;
    }
    return [
      `Name: ${fields.name.value.trim()}`,
      `Reg: ${fields.reg.value.trim()}`,
      `Mobile: ${fields.phone.value.trim()}`,
      fields.town.value.trim() && `Town: ${fields.town.value.trim()}`,
      `Service: ${fields.service.options[fields.service.selectedIndex].text}`,
      fields.message.value.trim() && `Message: ${fields.message.value.trim()}`,
    ].filter(Boolean).join("\n");
  };

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = buildMessage();
    if (message) window.open(`https://wa.me/${contactForm.dataset.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });
  document.getElementById("send-email").addEventListener("click", () => {
    const message = buildMessage();
    if (message) window.location.href = `mailto:${contactForm.dataset.email}?subject=${encodeURIComponent("Quote request")}&body=${encodeURIComponent(message)}`;
  });
}
