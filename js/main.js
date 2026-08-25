// ============================================================
// RK AUTOMOBILES - Main JavaScript
// ============================================================
const WHATSAPP_NUMBER = "917004799172";
const WA_BASE = "https://wa.me/" + WHATSAPP_NUMBER + "?text=";

function openWhatsApp(url) {
  var win = window.open(url, "_blank");
  if (!win || win.closed) { window.location.href = url; }
}

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("navbar");
  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("navMenu");

  if (nav) {
    window.addEventListener("scroll", function () {
      nav.classList.toggle("scrolled", window.scrollY > 40);
    });
  }

  if (burger && navMenu) {
    burger.addEventListener("click", function () {
      navMenu.classList.toggle("open");
      burger.classList.toggle("active");
    });

    navMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navMenu.classList.remove("open");
        burger.classList.remove("active");
      });
    });
  }

  renderBikes();
  renderCatalogue();
  renderOffers();
  populateSelects();
  setupTilt();
  setupTabs();
  setupContactForm();
  setupScrollTop();
  setupEMICalculator();
  setupHeroSlideshow();
});

/* ---------- Hero Slideshow ---------- */
function setupHeroSlideshow() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".dot");
  const tagEl = document.getElementById("slideTag");
  const nameEl = document.getElementById("slideName");
  if (!slides.length) return;

  const data = [
    { tag: "⚡ 40 PS Power", name: "Pulsar NS400Z" },
    { tag: "⚡ 24 PS Power", name: "Pulsar NS200" },
    { tag: "🏆 Best Seller", name: "Pulsar N160" },
    { tag: "⚡ Electric EV", name: "Bajaj Chetak" },
    { tag: "🔥 Street Fighter", name: "Pulsar NS160" }
  ];

  let current = 0;
  let timer;

  window.goToSlide = function (n) {
    slides[current].classList.remove("active");
    if (dots[current]) dots[current].classList.remove("active");
    current = (n + slides.length) % slides.length;
    slides[current].classList.add("active");
    if (dots[current]) dots[current].classList.add("active");
    if (tagEl) tagEl.textContent = data[current].tag;
    if (nameEl) nameEl.textContent = data[current].name;
    clearInterval(timer);
    timer = setInterval(function () { window.goToSlide(current + 1); }, 4500);
  };

  let tx = 0;
  const heroEl = document.querySelector(".hero");
  if (heroEl) {
    heroEl.addEventListener("touchstart", function (e) { tx = e.touches[0].clientX; }, { passive: true });
    heroEl.addEventListener("touchend", function (e) {
      const diff = tx - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) window.goToSlide(diff > 0 ? current + 1 : current - 1);
    }, { passive: true });
  }

  timer = setInterval(function () { window.goToSlide(current + 1); }, 4500);
}

/* ---------- Render Offers ---------- */
function renderOffers() {
  const grid = document.getElementById("offersGrid");
  if (!grid) return;
  const rest = OFFERS.filter(function (o) { return !o.gold; });
  grid.innerHTML = rest.map(function (o) {
    const waLink = WA_BASE + encodeURIComponent("Hi RK AUTOMOBILES, I'm interested in: " + o.title);
    return `
    <div class="offer-card${o.alt ? " alt" : ""}">
      <div class="offer-top">
        <span class="offer-tag">${o.tag}</span>
        <h3>${o.title}</h3>
        <div class="offer-sub">${o.sub}</div>
      </div>
      <div class="offer-body">
        <p>${o.desc}</p>
        <a href="${waLink}" target="_blank" class="btn btn-dark" style="width:100%;">Claim This Offer</a>
        <div class="offer-terms">${o.terms}</div>
      </div>
    </div>`;
  }).join("");
}

/* ---------- Populate Selects ---------- */
function populateSelects() {
  const bk = document.getElementById("bkBike");
  const sv = document.getElementById("svBike");
  const bkColor = document.getElementById("bkColor");
  if (!bk || !sv || !bkColor) return;

  const opts = BIKES.map(function (b) {
    return '<option value="' + b.name + '">' + b.name + " - " + b.price + "</option>";
  }).join("");
  bk.innerHTML = '<option value="">Choose a model…</option>' + opts;
  sv.innerHTML = '<option value="">Select your bike…</option>' + opts;
  bk.addEventListener("change", function () {
    const b = BIKES.find(function (x) { return x.name === bk.value; });
    bkColor.innerHTML = b
      ? b.colors.map(function (c) { return "<option>" + c + "</option>"; }).join("")
      : "<option>Select a bike first</option>";
  });
}

/* ---------- Render Bikes ---------- */
function renderBikes() {
  const grid = document.getElementById("bikeGrid");
  if (!grid) return;
  grid.innerHTML = BIKES.map(function (b) {
    return `
    <div class="bike-card tilt" data-id="${b.id}">
      <div class="bike-media">
        <img src="${b.img}" alt="${b.name}" loading="lazy" onerror="this.style.opacity=0.3">
        ${b.tag ? `<span class="badge">${b.tag}</span>` : ""}
        <span class="cat">${b.category}</span>
      </div>
      <div class="bike-body">
        <h3>${b.name}</h3>
        <div class="price">${b.price} <small>ex-showroom*</small></div>
        <ul class="specs">
          <li><strong>${b.cc}</strong> Engine</li>
          <li><strong>${b.power}</strong> Power</li>
          <li><strong>${b.mileage}</strong> Mileage</li>
        </ul>
        <div class="actions">
          <button class="btn btn-dark view" data-id="${b.id}">View Details</button>
          <button class="btn btn-wa book" data-id="${b.id}">Book on WhatsApp</button>
        </div>
      </div>
    </div>`;
  }).join("");
  document.querySelectorAll(".btn.view").forEach(function (btn) {
    btn.addEventListener("click", function () { openModal(this.dataset.id); });
  });
  document.querySelectorAll(".btn.book").forEach(function (btn) {
    btn.addEventListener("click", function () { bookBike(this.dataset.id); });
  });
}

/* ---------- Render Catalogue ---------- */
function renderCatalogue() {
  const body = document.getElementById("catalogueBody");
  if (!body) return;
  body.innerHTML = FULL_CATALOGUE.map(function (m) {
    return `<tr><td>${m.name}</td><td class="ta-r">${m.price}</td></tr>`;
  }).join("");
}

/* ---------- Book a Bike (form) ---------- */
function bookBikeNow() {
  const bike = document.getElementById("bkBike").value;
  const color = document.getElementById("bkColor").value;
  const name = document.getElementById("bkName").value;
  const phone = document.getElementById("bkPhone").value;
  const city = document.getElementById("bkCity").value;
  const mode = document.getElementById("bkMode").value;
  if (!bike) { alert("Please select a bike model."); return; }
  if (!name || !phone) { alert("Please enter your name and mobile number."); return; }
  const msg = "🚀 *New Bike Booking Request*%0A━━━━━━━━━━━━━━%0A" +
    "Model: " + encodeURIComponent(bike) + "%0A" +
    "Colour: " + encodeURIComponent(color) + "%0A" +
    "Name: " + encodeURIComponent(name) + "%0A" +
    "Phone: " + encodeURIComponent(phone) + "%0A" +
    "City: " + encodeURIComponent(city) + "%0A" +
    "Mode: " + encodeURIComponent(mode);
  openWhatsApp(WA_BASE + msg);
}

/* ---------- Book a Bike (card/modal) ---------- */
function bookBike(id) {
  const b = BIKES.find(function (x) { return x.id === id; });
  if (!b) return;
  const msg = "🚀 *New Bike Booking Request*%0A━━━━━━━━━━━━━━%0A" +
    "Model: " + encodeURIComponent(b.name) + "%0A" +
    "Price: " + encodeURIComponent(b.price);
  openWhatsApp(WA_BASE + msg);
}

/* ---------- Book Service ---------- */
function bookService(ev) {
  ev.preventDefault();
  const name = document.getElementById("svName").value;
  const phone = document.getElementById("svPhone").value;
  const bike = document.getElementById("svBike").value;
  const date = document.getElementById("svDate").value;
  const type = document.getElementById("svType").value;
  const msg = "🛠 *Service Booking Request*%0A━━━━━━━━━━━━━━%0A" +
    "Name: " + encodeURIComponent(name) + "%0A" +
    "Phone: " + encodeURIComponent(phone) + "%0A" +
    "Bike: " + encodeURIComponent(bike) + "%0A" +
    "Date: " + encodeURIComponent(date) + "%0A" +
    "Service: " + encodeURIComponent(type);
  openWhatsApp(WA_BASE + msg);
  ev.target.reset();
}

/* ---------- Modal ---------- */
function openModal(id) {
  const b = BIKES.find(function (x) { return x.id === id; });
  if (!b) return;
  document.getElementById("modalTitle").textContent = b.name;
  document.getElementById("modalDesc").textContent = b.desc;
  document.getElementById("modalPrice").innerHTML = b.price + " <small style='color:#5b6470;font-size:12px;'>ex-showroom*</small>";
  document.getElementById("modalMain").src = b.img;
  document.getElementById("modalSpecs").innerHTML =
    `<div class="spec-box"><strong>${b.cc}</strong><span>Engine</span></div>
     <div class="spec-box"><strong>${b.power}</strong><span>Power</span></div>
     <div class="spec-box"><strong>${b.mileage}</strong><span>Mileage</span></div>
     <div class="spec-box"><strong>${b.price}</strong><span>Ex-showroom*</span></div>`;
  document.getElementById("modalThumbs").innerHTML = b.gallery.map(function (g, i) {
    return `<img src="${g}" class="thumb${i === 0 ? " active" : ""}" data-src="${g}" alt="view ${i + 1}">`;
  }).join("");
  document.getElementById("modalBook").dataset.id = b.id;
  document.getElementById("modalOverlay").classList.add("show");
  document.body.style.overflow = "hidden";
  document.querySelectorAll("#modalThumbs .thumb").forEach(function (t) {
    t.addEventListener("click", function () {
      document.getElementById("modalMain").src = t.dataset.src;
      document.querySelectorAll("#modalThumbs .thumb").forEach(function (x) { x.classList.remove("active"); });
      t.classList.add("active");
    });
  });
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("show");
  document.body.style.overflow = "";
}

/* ---------- 3D Tilt ---------- */
function setupTilt() {
  document.querySelectorAll(".tilt").forEach(function (card) {
    card.addEventListener("mousemove", function (e) {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = "perspective(900px) rotateY(" + px * 12 + "deg) rotateX(" + (-py * 12) + "deg) translateY(-6px)";
      const img = card.querySelector("img");
      if (img) img.style.transform = "translateZ(30px) scale(1.04)";
    });
    card.addEventListener("mouseleave", function () {
      card.style.transform = "perspective(900px) rotateY(0) rotateX(0)";
      const img = card.querySelector("img");
      if (img) img.style.transform = "";
    });
  });
}

/* ---------- Tabs ---------- */
function setupTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  const panes = document.querySelectorAll(".tab-pane");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) { t.classList.remove("active"); });
      panes.forEach(function (p) { p.classList.remove("active"); });
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });
  window.bookBike = bookBike;
  window.openModal = openModal;
  window.closeModal = closeModal;
  window.bookService = bookService;
  window.bookBikeNow = bookBikeNow;
}

/* ---------- Scroll Top ---------- */
function setupScrollTop() {
  const btn = document.getElementById("toTop");
  if (btn) {
    window.addEventListener("scroll", function () {
      btn.classList.toggle("show", window.scrollY > 500);
    });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
}

/* ---------- EMI Calculator ---------- */
function setupEMICalculator() {
  const priceEl = document.getElementById("emiPrice");
  const downEl = document.getElementById("emiDown");
  const rateEl = document.getElementById("emiRate");
  const tenureBtns = document.querySelectorAll(".tenure-btn");
  if (!priceEl) return;
  let tenure = 36;

  function fmt(n) { return "₹" + Math.round(n).toLocaleString("en-IN"); }

  function calc() {
    let price = parseFloat(priceEl.value);
    let down = parseFloat(downEl.value);
    downEl.max = Math.round(price * 0.85);
    if (down >= price) { down = Math.round(price * 0.2); downEl.value = down; }
    const rate = parseFloat(rateEl.value);
    const principal = price - down;
    const mr = (rate / 12) / 100;
    const emi = (principal * mr * Math.pow(1 + mr, tenure)) / (Math.pow(1 + mr, tenure) - 1);
    const total = emi * tenure;
    document.getElementById("emiPriceVal").textContent = fmt(price);
    document.getElementById("emiDownVal").textContent = fmt(down);
    document.getElementById("emiRateVal").textContent = rate + "%";
    document.getElementById("emiMonthly").textContent = fmt(emi) + "/mo";
    document.getElementById("emiLoanAmt").textContent = fmt(principal);
    document.getElementById("emiInterest").textContent = fmt(total - principal);
    document.getElementById("emiTotal").textContent = fmt(total);
  }

  priceEl.addEventListener("input", calc);
  downEl.addEventListener("input", calc);
  rateEl.addEventListener("input", calc);
  tenureBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      tenureBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      tenure = parseInt(btn.dataset.months);
      calc();
    });
  });
  
  const applyBtn = document.getElementById("emiApplyBtn");
  if (applyBtn) {
    applyBtn.addEventListener("click", function () {
      const msg = "💰 *Bike Loan Enquiry*%0A━━━━━━━━━━━━━━%0A" +
        "Vehicle Price: " + encodeURIComponent(document.getElementById("emiPriceVal").textContent) + "%0A" +
        "Down Payment: " + encodeURIComponent(document.getElementById("emiDownVal").textContent) + "%0A" +
        "Tenure: " + tenure + " months%0A" +
        "Estimated EMI: " + encodeURIComponent(document.getElementById("emiMonthly").textContent);
      openWhatsApp(WA_BASE + msg);
    });
  }
  calc();
}

/* ---------- Contact Form ---------- */
function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const msg = "📩 *Contact Enquiry*%0A━━━━━━━━━━━━━━%0A" +
      "Name: " + encodeURIComponent(document.getElementById("ctName").value) + "%0A" +
      "Phone: " + encodeURIComponent(document.getElementById("ctPhone").value) + "%0A" +
      "Message: " + encodeURIComponent(document.getElementById("ctMsg").value);
    openWhatsApp(WA_BASE + msg);
    form.reset();
  });
}
