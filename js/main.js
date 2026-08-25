/* ============================================================
   RK AUTOMOBILES - Bajaj Showroom Website
   ============================================================ */
const WHATSAPP_NUMBER = "917004799172";
const WA_BASE = "https://wa.me/" + WHATSAPP_NUMBER + "?text=";

/* ---------- Open WhatsApp reliably ---------- */
function openWhatsApp(url) {
  var win = window.open(url, "_blank");
  if (!win || win.closed) {
    window.location.href = url;
  }
}

/* ---------- Navbar scroll + mobile menu ---------- */
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("navbar");
  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("navMenu");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  });

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

  renderBikes();
  renderCatalogue();
  renderOffers();
  populateSelects();
  setupTilt();
  setupTabs();
  setupContactForm();
  setupScrollTop();
  setupEMICalculator();

}); // ✅ Only ONE closing bracket here

/* ---------- Render offers ---------- */
function renderOffers() {
  const grid = document.getElementById("offersGrid");
  const gold = OFFERS.find(function (o) { return o.gold; });
  const rest = OFFERS.filter(function (o) { return !o.gold; });

  let html = "";
  if (gold) {
    const steps = gold.steps.map(function (s) {
      return `<div class="step"><span class="step-n">${s.n}</span><b>${s.t}</b><small>${s.h}</small></div>`;
    }).join("");
    const prizes = gold.prizes.map(function (p) {
      return `<span class="prize-chip">${p}</span>`;
    }).join("");
    const perks = gold.perks.map(function (p) {
      return `<span class="perk">✓ ${p}</span>`;
    }).join("");
    const waLink = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" +
      encodeURIComponent("Hi RK Automobiles, I want to know more about the Durga Puja Gold Offer! Please share the details.");
    html += `
    <div class="offer-featured">
      <div class="of-badge">${gold.tag}</div>
      <div class="of-head">
        <div class="of-title-wrap">
          <span class="of-sub">🎉 ${gold.sub}</span>
          <h3>${gold.headline}</h3>
        </div>
      </div>
      <div class="of-steps">${steps}</div>
      <div class="of-prizes">
        <h4>Guaranteed Scratch Card Prizes</h4>
        <div class="prize-chips">${prizes}</div>
      </div>
      <div class="of-perks">${perks}</div>
      <a href="${waLink}" target="_blank" class="btn btn-gold" style="width:100%;">
        💰 Claim This Offer on WhatsApp
      </a>
      <div class="offer-terms">${gold.terms}</div>
    </div>`;
  }

  html += rest.map(function (o) {
    const waLink = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" +
      encodeURIComponent("Hi RK Automobiles, I'm interested in the offer: " + o.title);
    return `
    <div class="offer-card${o.alt ? " alt" : ""}">
      <div class="offer-top">
        <span class="offer-tag">${o.tag}</span>
        <h3>${o.title}</h3>
        <div class="offer-sub">${o.sub}</div>
      </div>
      <div class="offer-body">
        <p>${o.desc}</p>
        <a href="${waLink}" target="_blank" class="btn btn-dark" style="width:100%;">
          Claim This Offer
        </a>
        <div class="offer-terms">${o.terms}</div>
      </div>
    </div>`;
  }).join("");

  grid.innerHTML = html;
}

/* ---------- Populate bike dropdowns ---------- */
function populateSelects() {
  const bk = document.getElementById("bkBike");
  const sv = document.getElementById("svBike");
  const bkColor = document.getElementById("bkColor");
  const opts = BIKES.map(function (b) {
    return '<option value="' + b.name + '">' + b.name + " - " + b.price + "</option>";
  }).join("");
  bk.innerHTML = '<option value="">Choose a model…</option>' + opts;
  sv.innerHTML = '<option value="">Select your bike…</option>' + opts;

  bk.addEventListener("change", function () {
    const b = BIKES.find(function (x) { return x.name === bk.value; });
    if (b) {
      bkColor.innerHTML = b.colors.map(function (c) {
        return '<option>' + c + "</option>";
      }).join("");
    } else {
      bkColor.innerHTML = '<option>Select a bike first</option>';
    }
  });
}

/* ---------- Render featured bike cards ---------- */
function renderBikes() {
  const grid = document.getElementById("bikeGrid");
  grid.innerHTML = BIKES.map(function (b) {
    return `
    <div class="bike-card tilt" data-id="${b.id}">
      <div class="bike-media">
        <img src="${b.img}" alt="${b.name} 3D" loading="lazy">
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
          <button class="btn btn-dark view" data-id="${b.id}">View 3D</button>
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

/* ---------- Full catalogue table ---------- */
function renderCatalogue() {
  const tbody = document.getElementById("catalogueBody");
  tbody.innerHTML = FULL_CATALOGUE.map(function (m) {
    return `<tr><td>${m.name}</td><td class="ta-r">${m.price}</td></tr>`;
  }).join("");
}

/* ---------- WhatsApp: Book a Bike (from booking form) ---------- */
function bookBikeNow() {
  const bike = document.getElementById("bkBike").value;
  const color = document.getElementById("bkColor").value;
  const name = document.getElementById("bkName").value;
  const phone = document.getElementById("bkPhone").value;
  const city = document.getElementById("bkCity").value;
  const mode = document.getElementById("bkMode").value;

  if (!bike) { alert("Please select a bike model."); return; }
  if (!name || !phone) { alert("Please enter your name and mobile number."); return; }

  const msg =
    "🚀 *New Bike Booking Request*%0A" +
    "━━━━━━━━━━━━━━%0A" +
    "Model: " + encodeURIComponent(bike) + "%0A" +
    "Colour: " + encodeURIComponent(color) + "%0A" +
    "Name: " + encodeURIComponent(name) + "%0A" +
    "Phone: " + encodeURIComponent(phone) + "%0A" +
    "City: " + encodeURIComponent(city) + "%0A" +
    "Mode: " + encodeURIComponent(mode) + "%0A" +
    "Requested by: RK Automobiles Website";
  openWhatsApp(WA_BASE + msg);
}

/* ---------- WhatsApp: Book a Bike (from modal / card) ---------- */
function bookBike(id) {
  const b = BIKES.find(function (x) { return x.id === id; });
  if (!b) return;
  const msg =
    "🚀 *New Bike Booking Request*%0A" +
    "━━━━━━━━━━━━━━%0A" +
    "Model: " + encodeURIComponent(b.name) + "%0A" +
    "Price: " + encodeURIComponent(b.price) + "%0A" +
    "Name: " + encodeURIComponent(document.getElementById("bkName").value) + "%0A" +
    "Phone: " + encodeURIComponent(document.getElementById("bkPhone").value) + "%0A" +
    "City: " + encodeURIComponent(document.getElementById("bkCity").value) + "%0A" +
    "Requested by: RK Automobiles Website";
  openWhatsApp(WA_BASE + msg);
}

/* ---------- WhatsApp: Book a Service ---------- */
function bookService(ev) {
  ev.preventDefault();
  const name = document.getElementById("svName").value;
  const phone = document.getElementById("svPhone").value;
  const bike = document.getElementById("svBike").value;
  const date = document.getElementById("svDate").value;
  const type = document.getElementById("svType").value;
  const msg =
    "🛠 *Service Booking Request*%0A" +
    "━━━━━━━━━━━━━━%0A" +
    "Name: " + encodeURIComponent(name) + "%0A" +
    "Phone: " + encodeURIComponent(phone) + "%0A" +
    "Bike: " + encodeURIComponent(bike) + "%0A" +
    "Date: " + encodeURIComponent(date) + "%0A" +
    "Service: " + encodeURIComponent(type) + "%0A" +
    "Requested by: RK Automobiles Website";
  openWhatsApp(WA_BASE + msg);
  ev.target.reset();
}

/* ---------- Modal: 3D gallery ---------- */
function openModal(id) {
  const b = BIKES.find(function (x) { return x.id === id; });
  if (!b) return;
  const overlay = document.getElementById("modalOverlay");
  const thumbs = b.gallery.map(function (g, i) {
    return `<img src="${g}" class="thumb${i === 0 ? " active" : ""}" data-src="${g}" alt="${b.name} view ${i + 1}">`;
  }).join("");

  document.getElementById("modalTitle").textContent = b.name;
  document.getElementById("modalDesc").textContent = b.desc;
  document.getElementById("modalPrice").innerHTML = b.price +
    " <small style='color:#5b6470;font-weight:500;font-size:12px;'>ex-showroom*</small>";
  document.getElementById("modalMain").src = b.img;
  document.getElementById("modalSpecs").innerHTML =
    `<div class="spec-box"><strong>${b.cc}</strong><span>Engine</span></div>
     <div class="spec-box"><strong>${b.power}</strong><span>Power</span></div>
     <div class="spec-box"><strong>${b.mileage}</strong><span>Mileage</span></div>
     <div class="spec-box"><strong>${b.price}</strong><span>Ex-showroom*</span></div>`;
  document.getElementById("modalThumbs").innerHTML = thumbs;
  document.getElementById("modalBook").dataset.id = b.id;
  overlay.classList.add("show");
  document.body.style.overflow = "hidden";

  document.querySelectorAll("#modalThumbs .thumb").forEach(function (t) {
    t.addEventListener("click", function () {
      document.getElementById("modalMain").src = t.dataset.src;
      document.querySelectorAll("#modalThumbs .thumb").forEach(function (x) {
        x.classList.remove("active");
      });
      t.classList.add("active");
    });
  });
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("show");
  document.body.style.overflow = "";
}

/* ---------- 3D tilt-on-hover effect ---------- */
function setupTilt() {
  const cards = document.querySelectorAll(".tilt");
  cards.forEach(function (card) {
    card.addEventListener("mousemove", function (e) {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform =
        "perspective(900px) rotateY(" + px * 12 + "deg) rotateX(" + (-py * 12) + "deg) translateY(-6px)";
      const img = card.querySelector("img");
      img.style.transform = "translateZ(30px) scale(1.04)";
    });
    card.addEventListener("mouseleave", function () {
      card.style.transform = "perspective(900px) rotateY(0) rotateX(0) translateY(0)";
      const img = card.querySelector("img");
      img.style.transform = "translateZ(0) scale(1)";
    });
  });
}

/* ---------- Tabs: Book Bike / Book Service ---------- */
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
}

/* ---------- Scroll to top ---------- */
function setupScrollTop() {
  const btn = document.getElementById("toTop");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) btn.classList.add("show");
    else btn.classList.remove("show");
  });
  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.getElementById("year").textContent = new Date().getFullYear();
}

/* ---------- EMI Calculator ---------- */
function setupEMICalculator() {
  const priceEl = document.getElementById("emiPrice");
  const downEl = document.getElementById("emiDown");
  const rateEl = document.getElementById("emiRate");
  const tenureBtns = document.querySelectorAll(".tenure-btn");
  if (!priceEl) return;

  let tenure = 36;

  function fmt(n) {
    return "₹" + Math.round(n).toLocaleString("en-IN");
  }

  function calc() {
    let price = parseFloat(priceEl.value);
    let down = parseFloat(downEl.value);
    downEl.max = Math.round(price * 0.85);
    if (down >= price) { down = Math.round(price * 0.2); downEl.value = down; }

    const rate = parseFloat(rateEl.value);
    const principal = price - down;
    const monthlyRate = (rate / 12) / 100;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
                (Math.pow(1 + monthlyRate, tenure) - 1);
    const total = emi * tenure;
    const interest = total - principal;

    document.getElementById("emiPriceVal").textContent = fmt(price);
    document.getElementById("emiDownVal").textContent = fmt(down);
    document.getElementById("emiRateVal").textContent = rate + "%";
    document.getElementById("emiMonthly").textContent = fmt(emi) + "/mo";
    document.getElementById("emiLoanAmt").textContent = fmt(principal);
    document.getElementById("emiInterest").textContent = fmt(interest);
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

  document.getElementById("emiApplyBtn").addEventListener("click", function () {
    const price = document.getElementById("emiPriceVal").textContent;
    const down = document.getElementById("emiDownVal").textContent;
    const emi = document.getElementById("emiMonthly").textContent;
    const msg =
      "💰 *Bike Loan Enquiry*%0A━━━━━━━━━━━━━━%0A" +
      "Vehicle Price: " + encodeURIComponent(price) + "%0A" +
      "Down Payment: " + encodeURIComponent(down) + "%0A" +
      "Tenure: " + tenure + " months%0A" +
      "Estimated EMI: " + encodeURIComponent(emi) + "%0A" +
      "Requested by: RK Automobiles Website";
    openWhatsApp(WA_BASE + msg);
  });

  calc();
}

/* ---------- Contact enquiry (WhatsApp) ---------- */
function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const n = document.getElementById("ctName").value;
    const p = document.getElementById("ctPhone").value;
    const m = document.getElementById("ctMsg").value;
    const msg =
      "📩 *Contact Enquiry*%0A━━━━━━━━━━━━━━%0A" +
      "Name: " + encodeURIComponent(n) + "%0A" +
      "Phone: " + encodeURIComponent(p) + "%0A" +
      "Message: " + encodeURIComponent(m);
    openWhatsApp(WA_BASE + msg);
    form.reset();
  });
}