/* ========================= Aleri Books — app.js (clean from scratch) ========================= */

/* ---------- DATA (safe HTML strings, no JSX) ---------- */
const SERIES = {
  journals: {
    title: "Memory Journals",
    lead: "Meaningful prompts that spark real conversations. Create a keepsake your family will treasure.",
    strip: {
      amazon: "https://www.amazon.com/dp/B0FPF71CQ8",
      tiktok: "https://www.tiktok.com/@your_profile"
    },
    books: {
      dad: {
        title: "Hey Dad, Let’s Talk",
        subtitle: "a guided memory journal",
        img: { sm: "assets/covers/dad-small.jpg", lg: "assets/covers/dad-large.jpg" },
        amazon: { pb: "https://www.amazon.com/dp/B0FPF71CQ8" },
        pages: ["assets/inside/dad-1.jpg", "assets/inside/dad-2.jpg"],
        desc: `
          <ul>
            <li>Easy prompts that spark memories without pressure</li>
            <li>Space for stories, reflections, and even a little advice</li>
            <li>Special pages for family milestones and traditions</li>
            <li>Room for photos or keepsakes</li>
            <li>A clear, simple layout that’s comfortable to write in</li>
          </ul>`
      },
      mom: {
        title: "Hey Mom, Let’s Talk",
        subtitle: "a guided memory journal",
        img: { sm: "assets/covers/mom-small.jpg", lg: "assets/covers/mom-large.jpg" },
        amazon: { pb: "https://www.amazon.com/dp/B0FPF71CQ8" },
        pages: ["assets/inside/mom-1.jpg"],
        desc: `
          <ul>
            <li>Gentle questions that invite thoughtful stories</li>
            <li>Space for memories, traditions, and wisdom</li>
            <li>Room for photos or keepsakes</li>
            <li>Clean, comfortable layout for writing</li>
          </ul>`
      },
      grandpa: {
        title: "Hey Grandpa, Let’s Talk",
        subtitle: "a guided memory journal",
        img: { sm: "assets/covers/grandpa-small.jpg", lg: "assets/covers/grandpa-large.jpg" },
        amazon: { pb: "https://www.amazon.com/dp/B0FPF71CQ8" },
        pages: ["assets/inside/grandpa-1.jpg"],
        desc: `
          <ul>
            <li>Prompts to capture life lessons and milestones</li>
            <li>Stories, reflections, and family wisdom</li>
            <li>Room for photos and keepsakes</li>
          </ul>`
      },
      grandma: {
        title: "Hey Grandma, Let’s Talk",
        subtitle: "a guided memory journal",
        img: { sm: "assets/covers/grandma-small.jpg", lg: "assets/covers/grandma-large.jpg" },
        amazon: { pb: "https://www.amazon.com/dp/B0FPF71CQ8" },
        pages: ["assets/inside/grandma-1.jpg"],
        desc: `
          <ul>
            <li>Warm prompts that spark cherished memories</li>
            <li>Space for traditions, recipes, and advice</li>
            <li>Room for photos and keepsakes</li>
          </ul>`
      }
    }
  },

  sudoku: {
    title: "Sudoku",
    lead: "Large-print puzzle books for all levels.",
    strip: {
      amazon: "https://www.amazon.com/dp/B0DK4T9MJC",
      tiktok: "https://www.tiktok.com/@your_profile"
    },
    books: {
      s1: {
        title: "Sudoku Vol. 1",
        subtitle: "Very Easy to Hard • 1000+",
        img:{ sm:"assets/covers/sudoku-1.jpg", lg:"assets/covers/sudoku-1-lg.jpg" },
        amazon:{ pb:"https://www.amazon.com/dp/B0DK4T9MJC" },
        pages:["assets/inside/sudoku-1.jpg"],
        desc:"1000+ puzzles, clear layouts, great for brain training."
      },
      s2: {
        title: "Sudoku Vol. 2",
        subtitle: "Large Print Hard • 400+",
        img:{ sm:"assets/covers/sudoku-2.jpg", lg:"assets/covers/sudoku-2-lg.jpg" },
        amazon:{ pb:"https://www.amazon.com/dp/B0DK5TJWFR?ref=emc_s_m_5_i_atc" },
        pages:["assets/inside/sudoku-2.jpg"],
        desc:"Hard puzzles with large print and clean grids."
      },
      s3: {
        title: "Sudoku Vol. 3",
        subtitle: "Medium to Hard • 1600+",
        img:{ sm:"assets/covers/sudoku-3.jpg", lg:"assets/covers/sudoku-3-lg.jpg" },
        amazon:{ pb:"https://www.amazon.com/dp/B0DK43BNRD?ref=emc_s_m_5_i_atc" },
        pages:[],
        desc:"A huge set of medium-to-hard puzzles for hours of fun."
      },
      s4: {
        title: "Sudoku Vol. 4",
        subtitle: "Hard for Adults • Tips inside",
        img:{ sm:"assets/covers/sudoku-4.jpg", lg:"assets/covers/sudoku-4-lg.jpg" },
        amazon:{ pb:"https://www.amazon.com/dp/B0DNVZQY56?ref=emc_s_m_5_i_atc" },
        pages:[],
        desc:"Challenging puzzles with a quick guide for solving."
      }
    }
  },

  wordsearch: { title:"Wordsearch", lead:"Coming soon", strip:{}, books:{} },
  lifeskills: { title:"Life Skills for Teens", lead:"Coming soon", strip:{}, books:{} }
};

/* ---------- STATE / SHORTCUTS ---------- */
let currentSeries = "journals";
let currentBookId = null;

const $  = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

const el = {
  heroTitle: $("#hero-title"),
  heroLead: $("#hero-lead"),
  heroImg: $("#hero-img"),
  heroCta: $("#hero-cta"),
  linkAmazon: $("#link-amazon"),
  linkTikTok: $("#link-tiktok"),
  grid: $("#grid"),
  year: $("#year"),
  modal: $("#modal"),
  mTitle: $("#m-title"),
  mCover: $("#m-cover"),
  mDesc: $("#m-desc"),
  mThumbs: $("#m-thumbs"),
  mBuyPb: $("#m-buy-pb"),
  mBuyHc: $("#m-buy-hc"),
  mClose: $("#m-close"),
};

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  if (el.year) el.year.textContent = new Date().getFullYear();

  // route-aware initial render
  const route = routeFromPath(location.pathname);
  if (route) {
    selectTab(route.series);
    renderSeries(route.series, route.book);
    if (new URLSearchParams(location.search).get("open") === "1") {
      openModal(route.series, route.book);
    }
  } else {
    renderSeries(currentSeries);
  }

  $("#themeBtn")?.addEventListener("click", toggleTheme);

  $$(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.dataset.series;
      if (!key) return;
      selectTab(key);
      renderSeries(key);
    });
  });

  // delegated click for Preview & Buy
  el.grid?.addEventListener("click", (e) => {
    const btn = e.target.closest('[data-action="preview"]');
    if (!btn) return;
    const series = btn.dataset.series || currentSeries;
    const bookId = btn.dataset.book;
    if (series && bookId) openModal(series, bookId);
  });

  // modal close
  el.mClose?.addEventListener("click", closeModal);
  el.modal?.addEventListener("click", (e) => { if (e.target === el.modal) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
});

/* ---------- THEME ---------- */
function toggleTheme(){
  const root = document.documentElement;
  const dark = root.getAttribute("data-theme") === "dark";
  root.setAttribute("data-theme", dark ? "light" : "dark");
}

/* ---------- TABS ---------- */
function selectTab(key){
  $$(".tab").forEach((t) =>
    t.setAttribute("aria-selected", t.dataset.series === key ? "true" : "false")
  );
}

/* ---------- ROUTING (/dad|/mom|/grandpa|/grandma) ---------- */
function routeFromPath(pathname){
  const first = (pathname || "/").split("/").filter(Boolean)[0] || "";
  const map = { dad:"dad", mom:"mom", grandpa:"grandpa", grandma:"grandma" };
  if (map[first]) return { series:"journals", book: map[first] };
  return null;
}

/* ---------- RENDER ---------- */
function renderSeries(seriesKey, preferredBookId){
  currentSeries = seriesKey;
  const series = SERIES[seriesKey];
  if (!series) return;

  if (el.heroTitle) el.heroTitle.textContent = series.title || "";
  if (el.heroLead) el.heroLead.textContent = series.lead || "";

  const firstBookId = preferredBookId || Object.keys(series.books || {})[0];
  const firstBook = series.books[firstBookId];

  if (firstBook && el.heroImg){
    el.heroImg.src = firstBook.img?.lg || "";
    el.heroImg.alt = firstBook?.title || "Hero cover";
    el.heroImg.sizes = "(max-width: 768px) 85vw, 420px";
  }

  updateCtas(seriesKey, firstBookId);

  if (el.grid) el.grid.innerHTML = renderGridHtml(seriesKey, series.books);
}

function updateCtas(seriesKey, bookId){
  const series = SERIES[seriesKey] || {};
  const book = series.books?.[bookId] || null;
  const url = book?.amazon?.pb || series.strip?.amazon || "https://www.amazon.com/";

  if (el.heroCta)   el.heroCta.href   = url;
  if (el.linkAmazon) el.linkAmazon.href = series.strip?.amazon || url;
  if (el.linkTikTok) el.linkTikTok.href = series.strip?.tiktok || "#";

  const sticky = document.querySelector(".cta--sticky");
  if (sticky) sticky.setAttribute("href", url);

  currentBookId = bookId || currentBookId;
}

function renderGridHtml(seriesKey, books = {}){
  return Object.entries(books)
    .map(([id, book]) => renderBookCard(seriesKey, id, book))
    .join("");
}

function renderBookCard(seriesKey, id, book){
  return `
    <article class="book" data-series="${seriesKey}" data-book="${id}">
      <img src="${book.img?.sm || ""}" alt="${escapeHtml(book.title)}"
           loading="lazy" decoding="async" width="110" />
      <div>
        <h3>${escapeHtml(book.title)}</h3>
        <p>${escapeHtml(book.subtitle || "")}</p>
        <button class="btn cta ghost" data-action="preview" data-series="${seriesKey}" data-book="${id}" type="button">
          Preview &amp; Buy
        </button>
      </div>
    </article>
  `;
}

/* ---------- MODAL ---------- */
function openModal(seriesKey, bookId){
  const series = SERIES[seriesKey];
  const book = series?.books?.[bookId];
  if (!book || !el.modal) return;

  if (el.mTitle) el.mTitle.textContent = book.title || "";

  if (el.mCover){
    el.mCover.src = book.img?.lg || "";
    el.mCover.alt = book.title || "Book image";
    el.mCover.sizes = "(max-width: 768px) 90vw, 420px";
  }

  if (el.mDesc) el.mDesc.innerHTML = book.desc || "";

  if (el.mThumbs){
    el.mThumbs.innerHTML = (book.pages || []).map((src) =>
      `<img src="${src}" alt="Preview page" loading="lazy" decoding="async" width="92" height="120">`
    ).join("");
  }

  if (el.mBuyPb){
    if (book.amazon?.pb){
      el.mBuyPb.href = book.amazon.pb;
      el.mBuyPb.style.display = "inline-flex";
    } else el.mBuyPb.style.display = "none";
  }
  if (el.mBuyHc){
    if (book.amazon?.hc){
      el.mBuyHc.href = book.amazon.hc;
      el.mBuyHc.style.display = "inline-flex";
    } else el.mBuyHc.style.display = "none";
  }

  updateCtas(seriesKey, bookId);

  if (typeof el.modal.showModal === "function") el.modal.showModal();
  else el.modal.setAttribute("open", "");
}
window.openModal = openModal;

function closeModal(){
  if (!el.modal) return;
  if (typeof el.modal.close === "function") el.modal.close();
  else el.modal.removeAttribute("open");
}

/* ---------- UTILS ---------- */
function escapeHtml(s=""){
  return s.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");
}



