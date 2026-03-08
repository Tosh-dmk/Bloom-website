(() => {
  const reduceMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const body = document.body;

  const MONTHS = {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12,
  };

  // ---------------- SHARED DATA ----------------
  const MEMBERS = [
    {
      id: "tosh",
      name: "Tosh",
      quote: "Evolve! Beyond the person you once were a minute before.",
      img: "assets/images/members/Tosh.jpeg",
      facts: [
        { icon: "🎂", label: "Birthday", value: "20th June" },
        { icon: "👍", label: "Likes", value: "Anime, Tech, Music and Musical theatre" },
        {
          icon: "👎",
          label: "Dislikes",
          value: "Carrots, people who don't know to cook cooking for me",
        },
        {
          icon: "✨",
          label: "Fun fact",
          value: "I'm an amateur/novice at almost every board game",
        },
      ],
    },
    {
      id: "yvette",
      name: "Yvette",
      quote: "Good vibes only.",
      img: "assets/images/members/Yvette.jpeg",
      facts: [
        { icon: "🎂", label: "Birthday", value: "12th March" },
        { icon: "👍", label: "Likes", value: "Photography, music, sunsets" },
        { icon: "👎", label: "Dislikes", value: "Slow internet, rude people" },
        { icon: "✨", label: "Fun fact", value: "Can stay up all night watching movies" },
      ],
    },
    {
      id: "shon",
      name: "Shon",
      quote: "Stay curious.",
      img: "assets/images/members/Shon.jpeg",
      facts: [
        { icon: "🎂", label: "Birthday", value: "5th July" },
        { icon: "👍", label: "Likes", value: "Gaming, football, late night talks" },
        { icon: "👎", label: "Dislikes", value: "Early mornings" },
        { icon: "✨", label: "Fun fact", value: "Can quote random memes perfectly" },
      ],
    },
    {
      id: "bogs",
      name: "Bogs",
      quote: "Just go with the flow.",
      img: "assets/images/members/Bogs.jpeg",
      facts: [
        { icon: "🎂", label: "Birthday", value: "21st August" },
        {
          icon: "👍",
          label: "Likes",
          value: "Art(making,creating,watching), Music , writing,Hiking ",
        },
        { icon: "👎", label: "Dislikes", value: "Chapati, extreme weather, dirty nails" },
        { icon: "✨", label: "Fun fact", value: "Always knows a good song recommendation" },
      ],
    },
    {
      id: "brandon",
      name: "Brandon",
      quote: "",
      img: "assets/images/members/Brandon.jpeg",
      facts: [
        { icon: "🎂", label: "Birthday", value: "11th December" },
        { icon: "👍", label: "Likes", value: "Coding, Literature, Football" },
        { icon: "👎", label: "Dislikes", value: "Chelsea fans" },
        { icon: "✨", label: "Fun fact", value: "I can write amazing poems" },
      ],
    },
    {
      id: "liz",
      name: "Liz",
      quote: "Make today count.",
      img: "assets/images/members/Liz.jpeg",
      facts: [
        { icon: "🎂", label: "Birthday", value: "30th January" },
        { icon: "👍", label: "Likes", value: "Fashion, coffee, shopping" },
        { icon: "👎", label: "Dislikes", value: "Cold weather" },
        { icon: "✨", label: "Fun fact", value: "Has a playlist for every mood" },
      ],
    },
    {
      id: "limo",
      name: "Limo",
      quote: "One step at a time.",
      img: "assets/images/members/Limo.jpeg",
      facts: [
        { icon: "🎂", label: "Birthday", value: "9th May" },
        { icon: "👍", label: "Likes", value: "Sports, music, hanging out with friends" },
        { icon: "👎", label: "Dislikes", value: "Being late" },
        {
          icon: "✨",
          label: "Fun fact",
          value: "Can remember random facts about almost anything",
        },
      ],
    },
    {
      id: "kanyi",
      name: "Kanyi",
      quote: "Dream big.",
      img: "assets/images/members/Kanyi.jpeg",
      facts: [
        { icon: "🎂", label: "Birthday", value: "14th February" },
        { icon: "👍", label: "Likes", value: "Music, art, creative projects" },
        { icon: "👎", label: "Dislikes", value: "Messy spaces" },
        { icon: "✨", label: "Fun fact", value: "Can spend hours perfecting small details" },
      ],
    },
    {
      id: "boney",
      name: "Boney",
      quote: "Slow down and enjoy the simple things. You can't rush a sunset",
      img: "assets/images/members/Boni.jpeg",
      facts: [
        { icon: "🎂", label: "Birthday", value: "10th October" },
        { icon: "👍", label: "Likes", value: "Music, movies" },
        { icon: "👎", label: "Dislikes", value: "Snails" },
        {
          icon: "✨",
          label: "Fun fact",
          value: "I don't drink, am an introvert and am the funniest person I know 😂",
        },
      ],
    },
    {
      id: "ivy",
      name: "Ivy",
      quote: "Inspired by nature perfected by science",
      img: "assets/images/members/Ivy.jpeg",
      facts: [
        { icon: "🎂", label: "Birthday", value: "9th September" },
        { icon: "👍", label: "Likes", value: "Music, Sleeping, Yapping" },
        { icon: "👎", label: "Dislikes", value: "All forms of banana, Smoke" },
        {
          icon: "✨",
          label: "Fun fact",
          value: "My coping mechanism when I'm stressed is thorough cleaning",
        },
      ],
    },
    {
      id: "shane",
      name: "Shane",
      quote: "In a man's struggle with the world, bet on the world.",
      img: "assets/images/members/Shane.jpeg",
      facts: [
        { icon: "🎂", label: "Birthday", value: "20th June" },
        {
          icon: "👍",
          label: "Likes",
          value:
            "Writing. Films. Watching thrillers and medieval fiction, muscle cars, Classical literature, food, designing(brand and image manipulation",
        },
        {
          icon: "👎",
          label: "Dislikes",
          value: "7 am lectures. Conformity. Mediocrity. Studying in general. Spaghetti.",
        },
        {
          icon: "✨",
          label: "Fun fact",
          value: "I'm actually a Knight",
        },
      ],
    },
    {
      id: "kamwesh",
      name: "Kamwesh",
      quote: "Stay sharp.",
      img: "assets/images/members/Kamwesh.jpeg",
      facts: [
        { icon: "🎂", label: "Birthday", value: "2nd February" },
        { icon: "👍", label: "Likes", value: "Tech, gaming, exploring new apps" },
        { icon: "👎", label: "Dislikes", value: "Slow computers" },
        { icon: "✨", label: "Fun fact", value: "Always the first to try new gadgets" },
      ],
    },
    {
      id: "fadhili",
      name: "Fadhili",
      quote: "Stay sharp.",
      img: "assets/images/members/Fadhili.jpeg",
      facts: [
        { icon: "🎂", label: "Birthday", value: "2nd February" },
        { icon: "👍", label: "Likes", value: "Socializing, reading, Travelling" },
        {
          icon: "👎",
          label: "Dislikes",
          value: "Tomato sauce, pessimism, overipe avocados ",
        },
        {
          icon: "✨",
          label: "Fun fact",
          value: "most music genre fluid person you'll ever meet",
        },
      ],
    },
    {
      id: "jolie",
      name: "Jolie",
      quote: "I was scared to turn to the next page but then I remembered I am the author",
      img: "assets/images/members/Jolie.jpeg",
      facts: [
        { icon: "🎂", label: "Birthday", value: "9th March" },
        { icon: "👍", label: "Likes", value: "Eating, Serving the community, acting" },
        { icon: "👎", label: "Dislikes", value: "Waking up early morning, Fake friends" },
        { icon: "✨", label: "Fun fact", value: "I don't know how to lie" },
      ],
    },
  ];

  const HANGOUTS = [
    {
      id: "Hangout 1",
      title: "Snack and game hangout at SAJOREC",
      dateLabel: "25/02/2026",
      caption: "Fun day at SAJOREC with games and snacks",
      media: [
        {
          type: "image",
          src: "assets/images/moments/Hangout 1.jpeg",
          caption: "Snack time!",
        },
        {
          type: "video",
          src: "assets/videos/moments/hangout-1-video.mp4",
          poster: "assets/videos/moments/hangout-poster.png.png",
          caption: "Na msitutamani",
        },
        {
          type: "image",
          src: "assets/images/moments/Hangout 1.1.jpeg",
          caption: "Night group photo!",
        },
      ],
      tags: ["tosh", "yvette", "bogs", "kamwesh", "kanyi", "shon", "brandon"],
    },
  ];

  function byId(list) {
    const map = new Map();
    list.forEach((item) => map.set(item.id, item));
    return map;
  }

  const MEMBERS_BY_ID = byId(MEMBERS);

  // ---------------- HELPERS ----------------
  function syncBodyLocks() {
    const navOpen = !!document.querySelector(".nav-drawer.open");
    const modalOpen = !!document.querySelector(
      ".lightbox.open, .celebration-modal.open, .modal.open, .hmodal.open, .media-lightbox.open",
    );

    body.classList.toggle("nav-open", navOpen);
    body.classList.toggle("modal-open", modalOpen);
  }

  function observeInView(elements, options = { threshold: 0.25, rootMargin: "0px 0px -50px 0px" }) {
    if (!elements || !elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      });
    }, options);

    elements.forEach((el) => observer.observe(el));
  }

  function initialsFromName(name) {
    const parts = String(name || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    if (parts.length === 0) return "🌸";
    const first = parts[0]?.[0] || "";
    const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
    return (first + last).toUpperCase() || "🌸";
  }

  function svgPlaceholderDataURL(initials, label) {
    const safeInit = (initials || "🌸").replace(/[<>&]/g, "");
    const safeLabel = (label || "BLOOM").replace(/[<>&]/g, "");

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1500">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#e7d6c5"/>
            <stop offset="1" stop-color="#cfb8a8"/>
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)"/>
        <circle cx="600" cy="620" r="260" fill="rgba(255,245,235,0.75)" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
              font-family="Playfair Display, serif" font-size="180" font-weight="900"
              fill="rgba(90,55,35,0.75)">${safeInit}</text>
        <text x="50%" y="78%" dominant-baseline="middle" text-anchor="middle"
              font-family="Poppins, sans-serif" font-size="54" font-weight="600"
              fill="rgba(90,55,35,0.7)">${safeLabel}</text>
      </svg>
    `;

    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  function safeImgSrc(src, fallbackInitials, fallbackLabel) {
    return src ? src : svgPlaceholderDataURL(fallbackInitials, fallbackLabel);
  }

  function parseBirthdayValue(value) {
    if (!value) return null;

    const match = String(value).trim().match(/^(\d{1,2})(?:st|nd|rd|th)?\s+([A-Za-z]+)$/i);
    if (!match) return null;

    const day = Number(match[1]);
    const monthName = match[2].toLowerCase();
    const month = MONTHS[monthName];

    if (!day || !month) return null;
    return { day, month };
  }

  function getBirthdayFact(member) {
    return (member.facts || []).find((fact) => String(fact.label).toLowerCase() === "birthday");
  }

  function getTimePartsInZone(timeZone) {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone,
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }).formatToParts(new Date());

    const byType = Object.fromEntries(
      parts.filter((p) => p.type !== "literal").map((p) => [p.type, p.value]),
    );

    return {
      year: Number(byType.year),
      month: Number(byType.month),
      day: Number(byType.day),
    };
  }

  function anniversaryYears(foundedYear, currentYear) {
    if (!foundedYear) return null;
    return Math.max(currentYear - foundedYear, 0);
  }

  function firstCoverForHangout(hangout) {
    const items = Array.isArray(hangout.media) ? hangout.media : [];
    if (!items.length) return { kind: "image", src: "", poster: "" };

    const first = items[0];
    if (first.type === "video") {
      return { kind: "image", src: first.poster || "", poster: first.poster || "" };
    }

    return { kind: "image", src: first.src || "", poster: "" };
  }

  function firstMediaThumbForHangout(hangout) {
    const items = Array.isArray(hangout.media) ? hangout.media : [];
    if (!items.length) return { type: "image", src: "", poster: "", caption: "" };
    return items[0];
  }

  function launchConfettiFlowers() {
    body.classList.add("bg-pulse");
    setTimeout(() => body.classList.remove("bg-pulse"), 1000);

    if (reduceMotion) return;

    const flowerEmojis = ["🌸", "🌼", "🌻", "✨", "🌺", "🪷", "💮", "🌸"];
    const FLOWERS = 45;
    const DOTS = 30;

    for (let i = 0; i < FLOWERS; i++) {
      const flower = document.createElement("div");
      flower.className = "confetti-flower";
      flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
      flower.style.left = Math.random() * 100 + "%";
      flower.style.top = -10 + Math.random() * 20 + "vh";
      flower.style.fontSize = 1.2 + Math.random() * 2.5 + "rem";
      flower.style.animationDuration = 3 + Math.random() * 4 + "s";
      flower.style.animationDelay = Math.random() * 0.5 + "s";
      flower.style.opacity = (0.8 + Math.random() * 0.2).toFixed(2);
      flower.style.transform = `rotate(${Math.random() * 360}deg)`;
      document.body.appendChild(flower);
      setTimeout(() => flower.remove(), 7000);
    }

    for (let i = 0; i < DOTS; i++) {
      const dot = document.createElement("div");
      dot.style.position = "fixed";
      dot.style.width = "8px";
      dot.style.height = "8px";
      dot.style.background = "#ffc594";
      dot.style.borderRadius = "50%";
      dot.style.boxShadow = "0 0 15px #ffb27a";
      dot.style.left = Math.random() * 100 + "%";
      dot.style.top = "-5%";
      dot.style.pointerEvents = "none";
      dot.style.zIndex = "10020";
      dot.style.animation = `floatDown ${2 + Math.random() * 3}s linear forwards`;
      document.body.appendChild(dot);
      setTimeout(() => dot.remove(), 5000);
    }
  }

  // ---------------- NAVBAR ----------------
  const navToggle = document.getElementById("navToggle");
  const navDrawer = document.getElementById("navDrawer");

  function setDrawer(open) {
    if (!navToggle || !navDrawer) return;
    navDrawer.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    syncBodyLocks();
  }

  if (navToggle && navDrawer) {
    navToggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDrawer(!navDrawer.classList.contains("open"));
    });

    navDrawer.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (link) setDrawer(false);
    });

    document.addEventListener("click", (e) => {
      if (!navDrawer.classList.contains("open")) return;
      const clickedToggle = navToggle.contains(e.target);
      const clickedDrawer = navDrawer.contains(e.target);
      if (!clickedToggle && !clickedDrawer) setDrawer(false);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) setDrawer(false);
    });
  }

  // ---------------- PETALS ----------------
  const petalContainer = document.getElementById("petalContainer");
  const petalEmojis = ["🌸", "🌼", "🌻", "🌺", "🪷", "💮", "✨"];

  if (!reduceMotion && petalContainer) {
    const PETAL_COUNT = 22;
    for (let i = 0; i < PETAL_COUNT; i++) {
      const petal = document.createElement("div");
      petal.className = "petal";
      petal.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
      petal.style.left = Math.random() * 100 + "%";
      petal.style.top = Math.random() * 100 + "%";
      petal.style.animationDelay = Math.random() * 15 + "s";
      petal.style.animationDuration = 12 + Math.random() * 18 + "s";
      petal.style.fontSize = 1.2 + Math.random() * 3 + "rem";
      petal.style.opacity = (0.2 + Math.random() * 0.3).toFixed(2);
      petalContainer.appendChild(petal);
    }
  }

  // ---------------- REVEAL ----------------
  observeInView(document.querySelectorAll(".fade-on-scroll, .chant-line"));

  // ---------------- PARALLAX ----------------
  const heroContent = document.querySelector(".hero-content");
  const petalsLayer = document.querySelector(".petal-container");
  let ticking = false;

  function onScroll() {
    if (reduceMotion || ticking) return;

    ticking = true;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY || 0;
      if (heroContent) heroContent.style.transform = `translateY(${scrollY * 0.15}px)`;
      if (petalsLayer) petalsLayer.style.transform = `translateY(${scrollY * 0.03}px)`;
      ticking = false;
    });
  }

  if (heroContent || petalsLayer) {
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // ---------------- INDEX: GALLERY IMAGE LOAD ----------------
  const galleryImgs = document.querySelectorAll(".photo-item img");
  galleryImgs.forEach((img) => {
    const parent = img.closest(".photo-item");
    if (!parent) return;

    if (img.complete && img.naturalWidth > 0) parent.classList.add("has-img");
    img.addEventListener("load", () => parent.classList.add("has-img"));
    img.addEventListener("error", () => img.remove());
  });

  // ---------------- INDEX: VIDEOS ----------------
  const videoCards = Array.from(document.querySelectorAll(".video-card"));

  function pauseOtherVideos(exceptVideo) {
    videoCards.forEach((card) => {
      const video = card.querySelector("video");
      if (!video) return;

      if (video !== exceptVideo && !video.paused) video.pause();
      if (video !== exceptVideo) {
        card.classList.remove("is-playing");
        video.removeAttribute("controls");
      }
    });
  }

  videoCards.forEach((card) => {
    const video = card.querySelector("video");
    const overlay = card.querySelector(".play-overlay");
    if (!video || !overlay) return;

    video.pause();
    video.removeAttribute("autoplay");
    video.removeAttribute("controls");

    async function startOrTogglePlayback() {
      if (!video.paused) {
        video.pause();
        return;
      }

      pauseOtherVideos(video);

      try {
        video.setAttribute("controls", "");
        await video.play();
      } catch {
        card.classList.remove("is-playing");
        video.removeAttribute("controls");
      }
    }

    overlay.addEventListener("click", (e) => {
      e.preventDefault();
      startOrTogglePlayback();
    });

    video.addEventListener("play", () => card.classList.add("is-playing"));
    video.addEventListener("pause", () => {
      card.classList.remove("is-playing");
      video.removeAttribute("controls");
    });
    video.addEventListener("ended", () => {
      card.classList.remove("is-playing");
      video.removeAttribute("controls");
    });
  });

  // ---------------- INDEX: LIGHTBOX ----------------
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");
  let lastLightboxFocus = null;

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;

    lastLightboxFocus = document.activeElement;
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    syncBodyLocks();

    if (lightboxClose) lightboxClose.focus();
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImg) return;

    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
    syncBodyLocks();

    if (lastLightboxFocus && typeof lastLightboxFocus.focus === "function") {
      lastLightboxFocus.focus();
    }
  }

  document.querySelectorAll(".photo-item").forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      if (!img) return;
      if (!img.complete || img.naturalWidth === 0) return;
      openLightbox(img.src, img.alt);
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // ---------------- MEMBERS PAGE: PROFILE MODAL ----------------
  const profileModal = document.getElementById("profileModal");
  const profileClose = document.getElementById("profileClose");
  const profileImg = document.getElementById("profileImg");
  const profileName = document.getElementById("profileName");
  const profileQuote = document.getElementById("profileQuote");
  const factsGrid = document.getElementById("factsGrid");
  const momentsStrip = document.getElementById("momentsStrip");
  const momentsSub = document.getElementById("momentsSub");
  let lastProfileFocus = null;

  function makeMomentCard(momentData) {
    const card = document.createElement("div");
    card.className = "moment-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Open memory: ${momentData.title}`);

    const mediaWrap = document.createElement("div");
    mediaWrap.className = "moment-media";

    const badge = document.createElement("div");
    badge.className = "moment-badge";
    badge.textContent = momentData.badge || "MEMORY";
    mediaWrap.appendChild(badge);

    const tag = document.createElement("div");
    tag.className = "media-tag";

    const media = momentData.media;
    if (media && media.type === "video") {
      const img = document.createElement("img");
      img.src = safeImgSrc(media.poster || "", "🎬", "VIDEO");
      img.alt = `${momentData.title} video poster`;
      mediaWrap.appendChild(img);
      tag.textContent = "VIDEO";
      mediaWrap.appendChild(tag);
    } else {
      const img = document.createElement("img");
      img.src = safeImgSrc(media?.src || "", "🌸", "BLOOM MOMENT");
      img.alt = `${momentData.title} photo`;
      mediaWrap.appendChild(img);
    }

    const meta = document.createElement("div");
    meta.className = "moment-meta";

    const title = document.createElement("div");
    title.className = "moment-title";
    title.textContent = momentData.title || "Moment";

    const date = document.createElement("div");
    date.className = "moment-date";
    date.textContent = momentData.dateLabel || "—";

    const caption = document.createElement("div");
    caption.className = "moment-caption";
    caption.textContent = momentData.caption || "";

    meta.appendChild(title);
    meta.appendChild(date);
    meta.appendChild(caption);

    card.appendChild(mediaWrap);
    card.appendChild(meta);

    const openFn = momentData.onOpen
      ? momentData.onOpen
      : () =>
          openMediaLightbox(
            media,
            `${momentData.title} — ${momentData.dateLabel || "—"}`,
            momentData.caption || "",
          );

    card.addEventListener("click", openFn);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openFn();
      }
    });

    return card;
  }

  function openProfile(memberId) {
    const member = MEMBERS_BY_ID.get(memberId);
    if (!member || !profileModal) return;

    lastProfileFocus = document.activeElement;

    profileName.textContent = member.name;

    if (member.quote) {
      profileQuote.hidden = false;
      profileQuote.textContent = member.quote;
    } else {
      profileQuote.hidden = true;
      profileQuote.textContent = "";
    }

    const initials = initialsFromName(member.name);
    profileImg.src = safeImgSrc(member.img, initials, "BLOOM");
    profileImg.alt = `${member.name} photo`;

    factsGrid.innerHTML = "";
    (member.facts || []).forEach((fact) => {
      const item = document.createElement("div");
      item.className = "fact";

      const icon = document.createElement("div");
      icon.className = "fact-icon";
      icon.textContent = fact.icon || "✨";

      const bodyWrap = document.createElement("div");

      const label = document.createElement("div");
      label.className = "fact-label";
      label.textContent = fact.label || "Fact";

      const value = document.createElement("div");
      value.className = "fact-value";
      value.textContent = fact.value || "—";

      bodyWrap.appendChild(label);
      bodyWrap.appendChild(value);

      item.appendChild(icon);
      item.appendChild(bodyWrap);
      factsGrid.appendChild(item);
    });

    const memories = HANGOUTS.filter((hangout) => (hangout.tags || []).includes(memberId));

    momentsSub.textContent =
      memories.length > 0
        ? `${memories.length} memory${memories.length === 1 ? "" : "ies"} from tagged hangouts.`
        : "No tagged hangouts yet. Add a hangout and tag them 🌸";

    momentsStrip.innerHTML = "";

    if (memories.length === 0) {
      momentsStrip.appendChild(
        makeMomentCard({
          title: "No memories yet",
          dateLabel: "—",
          caption: "Add your next hangout and tag them to start their timeline.",
          media: null,
          badge: "BLOOM",
        }),
      );
    } else {
      memories.forEach((hangout) => {
        const first = firstMediaThumbForHangout(hangout);
        momentsStrip.appendChild(
          makeMomentCard({
            title: hangout.title,
            dateLabel: hangout.dateLabel || "—",
            caption: hangout.caption || "",
            media: first,
            badge: "MEMORY",
            onOpen: () => openHangout(hangout.id),
          }),
        );
      });
    }

    profileModal.classList.add("open");
    profileModal.setAttribute("aria-hidden", "false");
    syncBodyLocks();

    if (profileClose) profileClose.focus();
  }

  function closeProfile() {
    if (!profileModal) return;

    profileModal.classList.remove("open");
    profileModal.setAttribute("aria-hidden", "true");
    profileImg.src = "";
    syncBodyLocks();

    if (lastProfileFocus && typeof lastProfileFocus.focus === "function") {
      lastProfileFocus.focus();
    }
  }

  if (profileClose) {
    profileClose.addEventListener("click", closeProfile);
  }

  if (profileModal) {
    profileModal.addEventListener("click", (e) => {
      if (e.target === profileModal) closeProfile();
    });
  }

  // ---------------- MEMBERS PAGE: HANGOUT MODAL ----------------
  const hangoutModal = document.getElementById("hangoutModal");
  const hangoutClose = document.getElementById("hangoutClose");
  const hangoutTitle = document.getElementById("hangoutTitle");
  const hangoutDate = document.getElementById("hangoutDate");
  const hangoutCaption = document.getElementById("hangoutCaption");
  const hangoutPhotos = document.getElementById("hangoutPhotos");
  const hangoutPeople = document.getElementById("hangoutPeople");

  function makeMemberChip(member, onClick) {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.setAttribute("aria-label", `Open profile: ${member.name}`);

    const dot = document.createElement("span");
    dot.className = "chip-dot";
    dot.setAttribute("aria-hidden", "true");

    const text = document.createElement("span");
    text.textContent = member.name;

    chip.appendChild(dot);
    chip.appendChild(text);

    chip.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      onClick();
    });

    return chip;
  }

  function openHangout(hangoutId) {
    const hangout = HANGOUTS.find((item) => item.id === hangoutId);
    if (!hangout || !hangoutModal) return;

    hangoutTitle.textContent = hangout.title;
    hangoutDate.textContent = hangout.dateLabel || "—";
    hangoutCaption.textContent = hangout.caption || "";

    hangoutPhotos.innerHTML = "";
    const mediaItems = Array.isArray(hangout.media) ? hangout.media : [];
    const usedMedia = mediaItems.length
      ? mediaItems
      : [{ type: "image", src: "", caption: "Add media to this hangout." }];

    usedMedia.forEach((item, idx) => {
      const wrap = document.createElement("div");
      wrap.className = "hitem";
      wrap.setAttribute("role", "button");
      wrap.tabIndex = 0;
      wrap.setAttribute("aria-label", `Open media ${idx + 1}`);

      const badge = document.createElement("div");
      badge.className = "hshot-badge";
      badge.textContent = item.type === "video" ? `VIDEO ${idx + 1}` : `PHOTO ${idx + 1}`;
      wrap.appendChild(badge);

      if (item.type === "video") {
        const img = document.createElement("img");
        img.src = safeImgSrc(item.poster || "", "🎬", "VIDEO");
        img.alt = `${hangout.title} video ${idx + 1} poster`;
        wrap.appendChild(img);
      } else {
        const img = document.createElement("img");
        img.src = safeImgSrc(item.src || "", "🌸", "BLOOM");
        img.alt = `${hangout.title} photo ${idx + 1}`;
        wrap.appendChild(img);
      }

      const openFn = () =>
        openMediaLightbox(
          item,
          `${hangout.title} — ${hangout.dateLabel || "—"}`,
          item.caption || hangout.caption || "",
        );

      wrap.addEventListener("click", openFn);
      wrap.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openFn();
        }
      });

      hangoutPhotos.appendChild(wrap);
    });

    hangoutPeople.innerHTML = "";
    (hangout.tags || []).forEach((memberId) => {
      const member = MEMBERS_BY_ID.get(memberId);
      if (!member) return;
      hangoutPeople.appendChild(makeMemberChip(member, () => openProfile(memberId)));
    });

    hangoutModal.classList.add("open");
    hangoutModal.setAttribute("aria-hidden", "false");
    syncBodyLocks();

    if (hangoutClose) hangoutClose.focus();
  }

  function closeHangout() {
    if (!hangoutModal) return;

    hangoutModal.classList.remove("open");
    hangoutModal.setAttribute("aria-hidden", "true");
    syncBodyLocks();
  }

  if (hangoutClose) {
    hangoutClose.addEventListener("click", closeHangout);
  }

  if (hangoutModal) {
    hangoutModal.addEventListener("click", (e) => {
      if (e.target === hangoutModal) closeHangout();
    });
  }

  // ---------------- MEMBERS PAGE: MEDIA LIGHTBOX ----------------
  const mediaLightbox = document.getElementById("mediaLightbox");
  const mediaClose = document.getElementById("mediaClose");
  const mediaView = document.getElementById("mediaView");
  const mediaCap = document.getElementById("mediaCap");
  let lastMediaFocus = null;

  function openMediaLightbox(item, title, caption) {
    if (!mediaLightbox || !mediaView || !mediaCap) return;

    lastMediaFocus = document.activeElement;
    mediaView.innerHTML = "";

    if (item && item.type === "video" && item.src) {
      const video = document.createElement("video");
      video.src = item.src;
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      if (item.poster) video.poster = item.poster;
      mediaView.appendChild(video);
    } else {
      const img = document.createElement("img");
      img.src = safeImgSrc(item?.src || "", "🌸", "BLOOM");
      img.alt = title || "Photo";
      mediaView.appendChild(img);
    }

    mediaCap.textContent = caption ? `${title} — ${caption}` : title || "";
    mediaLightbox.classList.add("open");
    mediaLightbox.setAttribute("aria-hidden", "false");
    syncBodyLocks();

    if (mediaClose) mediaClose.focus();
  }

  function closeMediaLightbox() {
    if (!mediaLightbox || !mediaView || !mediaCap) return;

    mediaView.innerHTML = "";
    mediaCap.textContent = "";
    mediaLightbox.classList.remove("open");
    mediaLightbox.setAttribute("aria-hidden", "true");
    syncBodyLocks();

    if (lastMediaFocus && typeof lastMediaFocus.focus === "function") {
      lastMediaFocus.focus();
    }
  }

  if (mediaClose) {
    mediaClose.addEventListener("click", closeMediaLightbox);
  }

  if (mediaLightbox) {
    mediaLightbox.addEventListener("click", (e) => {
      if (e.target === mediaLightbox) closeMediaLightbox();
    });
  }

  // ---------------- MEMBERS PAGE: RENDER MEMBERS ----------------
  const yearbookGrid = document.getElementById("yearbookGrid");

  function renderMembers() {
    if (!yearbookGrid) return;

    yearbookGrid.innerHTML = "";

    MEMBERS.forEach((member, idx) => {
      const card = document.createElement("article");
      card.className = "member-card";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Open profile for ${member.name}`);

      const portrait = document.createElement("div");
      portrait.className = "portrait";

      const img = document.createElement("img");
      img.alt = `${member.name} portrait`;
      img.loading = "lazy";
      img.decoding = "async";
      if (member.img) img.src = member.img;

      const initials = document.createElement("div");
      initials.className = "initials";
      initials.textContent = initialsFromName(member.name);

      img.addEventListener("load", () => portrait.classList.add("has-img"));
      img.addEventListener("error", () => img.remove());

      portrait.appendChild(img);
      portrait.appendChild(initials);

      const meta = document.createElement("div");
      meta.className = "member-meta";

      const nameEl = document.createElement("h3");
      nameEl.className = "member-name";
      nameEl.textContent = member.name;

      const quoteEl = document.createElement("p");
      quoteEl.className = "member-quote";
      if (member.quote) {
        quoteEl.textContent = member.quote;
      } else {
        quoteEl.hidden = true;
      }

      meta.appendChild(nameEl);
      meta.appendChild(quoteEl);

      card.appendChild(portrait);
      card.appendChild(meta);

      card.addEventListener("click", () => openProfile(member.id));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openProfile(member.id);
        }
      });

      if (!reduceMotion) {
        card.style.transitionDelay = `${Math.min(idx * 45, 400)}ms`;
      }

      yearbookGrid.appendChild(card);
    });

    observeInView(document.querySelectorAll(".member-card"), {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    });
  }

  // ---------------- MEMBERS PAGE: RENDER HANGOUTS ----------------
  const hangoutsGrid = document.getElementById("hangoutsGrid");

  function renderHangouts() {
    if (!hangoutsGrid) return;

    hangoutsGrid.innerHTML = "";

    HANGOUTS.forEach((hangout) => {
      const card = document.createElement("div");
      card.className = "hangout-card";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Open hangout: ${hangout.title}`);

      const mediaWrap = document.createElement("div");
      mediaWrap.className = "hangout-media";

      const badge = document.createElement("div");
      badge.className = "hangout-badge";
      badge.textContent = "HANGOUT";
      mediaWrap.appendChild(badge);

      const cover = firstCoverForHangout(hangout);
      const coverImg = document.createElement("img");
      coverImg.src = safeImgSrc(cover.src, "🌸", "BLOOM HANGOUT");
      coverImg.alt = `${hangout.title} cover`;
      mediaWrap.appendChild(coverImg);

      const first = firstMediaThumbForHangout(hangout);
      if (first && first.type === "video") {
        const tag = document.createElement("div");
        tag.className = "media-tag";
        tag.textContent = "VIDEO";
        mediaWrap.appendChild(tag);
      }

      const meta = document.createElement("div");
      meta.className = "hangout-meta";

      const title = document.createElement("div");
      title.className = "hangout-title";
      title.textContent = hangout.title;

      const date = document.createElement("div");
      date.className = "hangout-date";
      date.textContent = hangout.dateLabel || "—";

      const caption = document.createElement("div");
      caption.className = "hangout-caption";
      caption.textContent = hangout.caption || "";

      const chips = document.createElement("div");
      chips.className = "chips";

      (hangout.tags || []).forEach((memberId) => {
        const member = MEMBERS_BY_ID.get(memberId);
        if (!member) return;
        chips.appendChild(makeMemberChip(member, () => openProfile(memberId)));
      });

      meta.appendChild(title);
      meta.appendChild(date);
      meta.appendChild(caption);
      meta.appendChild(chips);

      card.appendChild(mediaWrap);
      card.appendChild(meta);

      card.addEventListener("click", () => openHangout(hangout.id));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openHangout(hangout.id);
        }
      });

      hangoutsGrid.appendChild(card);
    });
  }

  // ---------------- SHARED: OPEN MEMBER FROM URL ----------------
  function openProfileFromQuery() {
    if (!profileModal) return;

    const params = new URLSearchParams(window.location.search);
    const memberId = params.get("member");
    if (!memberId || !MEMBERS_BY_ID.has(memberId)) return;

    openProfile(memberId);

    const cleanUrl = window.location.pathname + (window.location.hash || "");
    window.history.replaceState({}, document.title, cleanUrl);
  }

  // ---------------- INDEX: CELEBRATE BUTTON + SPECIAL DAY POPUP ----------------
  const celebrateBtn = document.getElementById("celebrateBtn");
  const celebrateSection = document.querySelector(".celebrate-section");
  const heroSection = document.querySelector(".hero-section");

  const celebrationModal = document.getElementById("celebrationModal");
  const celebrationClose = document.getElementById("celebrationClose");
  const celebrationBadge = document.getElementById("celebrationBadge");
  const celebrationImage = document.getElementById("celebrationImage");
  const celebrationTitle = document.getElementById("celebrationTitle");
  const celebrationSubtitle = document.getElementById("celebrationSubtitle");
  const celebrationBody = document.getElementById("celebrationBody");
  const celebrationQuote = document.getElementById("celebrationQuote");
  const celebrationMeta = document.getElementById("celebrationMeta");
  const celebrationPrimary = document.getElementById("celebrationPrimary");
  const celebrationPrev = document.getElementById("celebrationPrev");
  const celebrationNext = document.getElementById("celebrationNext");

  let celebrationItems = [];
  let currentCelebrationIndex = 0;
  let lastCelebrationFocus = null;

  const SPECIAL_DAYS = {
    timeZone: "Africa/Nairobi",
    birthdays: MEMBERS.map((member) => {
      const birthdayFact = getBirthdayFact(member);
      const parsed = parseBirthdayValue(birthdayFact?.value);
      if (!parsed) return null;

      return {
        type: "birthday",
        id: `${member.id}-birthday`,
        memberId: member.id,
        month: parsed.month,
        day: parsed.day,
        name: member.name,
        image: member.img,
        badge: "BLOOM CELEBRATES",
        title: `Happy Birthday, ${member.name} 🌸`,
        message: `Today we celebrate ${member.name}, their presence, their growth, and the energy they bring into BLOOM. Wishing them joy, peace, and beautiful memories in the year ahead.`,
        quote: member.quote || "",
        primaryLabel: "View Profile",
        primaryHref: `members.html?member=${encodeURIComponent(member.id)}`,
      };
    }).filter(Boolean),

    anniversary: {
      type: "anniversary",
      id: "bloom-anniversary",
      month: 1,
      day: 1,
      foundedYear: 2025,
      image: "assets/images/moments/group photo.png",
      badge: "BLOOM ANNIVERSARY",
      title: "Happy BLOOM Day 🌸",
      message:
        "Today we celebrate another year of unity, growth, laughter, and shared memories. Every hangout, every chant, and every moment is part of what makes BLOOM beautiful.",
      chips: ["Unity", "Growth", "Shared Memories"],
      primaryLabel: "See Moments",
      primaryHref: "#moments",
    },
  };

  function getTodayCelebrations() {
    const now = getTimePartsInZone(SPECIAL_DAYS.timeZone);
    const results = [];

    SPECIAL_DAYS.birthdays.forEach((birthday) => {
      if (birthday.month === now.month && birthday.day === now.day) {
        results.push({ ...birthday });
      }
    });

    const ann = SPECIAL_DAYS.anniversary;
    if (ann && ann.month === now.month && ann.day === now.day) {
      const years = anniversaryYears(ann.foundedYear, now.year);
      const chips = [...(ann.chips || [])];

      if (years) chips.unshift(`${years} Year${years === 1 ? "" : "s"} of BLOOM`);

      results.push({
        ...ann,
        chips,
      });
    }

    return results;
  }

  function renderCelebration(index) {
    if (!celebrationItems.length || !celebrationModal) return;

    currentCelebrationIndex = index;
    const item = celebrationItems[currentCelebrationIndex];
    if (!item) return;

    celebrationBadge.textContent = item.badge || "BLOOM CELEBRATES";
    celebrationImage.src = item.image || "assets/images/moments/group photo.png";
    celebrationImage.alt = item.title || "Celebration";
    celebrationTitle.textContent = item.title || "A Special Day 🌸";

    if (celebrationSubtitle) {
      celebrationSubtitle.textContent = "";
      celebrationSubtitle.hidden = true;
    }

    celebrationBody.textContent = item.message || "";

    if (item.quote) {
      celebrationQuote.hidden = false;
      celebrationQuote.textContent = item.quote;
    } else {
      celebrationQuote.hidden = true;
      celebrationQuote.textContent = "";
    }

    celebrationMeta.innerHTML = "";
    (item.chips || []).forEach((chipText) => {
      const chip = document.createElement("div");
      chip.className = "celebration-chip";
      chip.textContent = chipText;
      celebrationMeta.appendChild(chip);
    });

    if (celebrationPrimary) {
      celebrationPrimary.textContent = item.primaryLabel || "Celebrate";
      celebrationPrimary.href = item.primaryHref || "#";
    }

    const showNav = celebrationItems.length > 1;

    if (celebrationPrev) {
      celebrationPrev.style.display = showNav ? "inline-flex" : "none";
      celebrationPrev.disabled = !showNav || currentCelebrationIndex === 0;
    }

    if (celebrationNext) {
      celebrationNext.style.display = showNav ? "inline-flex" : "none";
      celebrationNext.disabled =
        !showNav || currentCelebrationIndex === celebrationItems.length - 1;
    }
  }

  function openCelebrationPopup(itemsOrSingle, startIndex = 0) {
    if (!celebrationModal) return;

    const items = Array.isArray(itemsOrSingle) ? itemsOrSingle : [itemsOrSingle];
    if (!items.length) return;

    lastCelebrationFocus = document.activeElement;
    celebrationItems = items;
    currentCelebrationIndex = startIndex;

    celebrationModal.classList.add("open");
    celebrationModal.setAttribute("aria-hidden", "false");
    syncBodyLocks();

    renderCelebration(currentCelebrationIndex);

    if (celebrationClose) celebrationClose.focus();
    launchConfettiFlowers();
  }

  function closeCelebrationPopup() {
    if (!celebrationModal) return;

    celebrationModal.classList.remove("open");
    celebrationModal.setAttribute("aria-hidden", "true");

    celebrationItems = [];
    currentCelebrationIndex = 0;

    syncBodyLocks();

    if (lastCelebrationFocus && typeof lastCelebrationFocus.focus === "function") {
      lastCelebrationFocus.focus();
    }
  }

  function setupCelebrateButton() {
    if (!celebrateBtn) return;

    const todayCelebrations = getTodayCelebrations();
    const birthdayItems = todayCelebrations.filter((item) => item.type === "birthday");
    const anniversaryItems = todayCelebrations.filter((item) => item.type === "anniversary");

    if ((birthdayItems.length > 0 || anniversaryItems.length > 0) && celebrateSection && heroSection) {
      heroSection.insertAdjacentElement("afterend", celebrateSection);
    }

    if (birthdayItems.length === 1) {
      celebrateBtn.textContent = `Celebrate ${birthdayItems[0].name}'s Birthday 🌸`;
      celebrateBtn.setAttribute("aria-label", `Celebrate ${birthdayItems[0].name}'s birthday`);
    } else if (birthdayItems.length > 1) {
      celebrateBtn.textContent = "Happy Birthday to Our BLOOM Stars 🌸";
      celebrateBtn.setAttribute("aria-label", "Celebrate today's birthdays");
    } else {
      celebrateBtn.textContent = "Celebrate Bloom 🌸";
      celebrateBtn.setAttribute("aria-label", "Celebrate Bloom");
    }

    celebrateBtn.addEventListener("click", () => {
      if (birthdayItems.length > 0) {
        openCelebrationPopup([...birthdayItems, ...anniversaryItems], 0);
        return;
      }

      if (anniversaryItems.length > 0) {
        openCelebrationPopup(anniversaryItems[0], 0);
        return;
      }

      launchConfettiFlowers();
    });
  }

  if (celebrationClose) {
    celebrationClose.addEventListener("click", closeCelebrationPopup);
  }

  if (celebrationPrev) {
    celebrationPrev.addEventListener("click", () => {
      if (currentCelebrationIndex > 0) {
        renderCelebration(currentCelebrationIndex - 1);
      }
    });
  }

  if (celebrationNext) {
    celebrationNext.addEventListener("click", () => {
      if (currentCelebrationIndex < celebrationItems.length - 1) {
        renderCelebration(currentCelebrationIndex + 1);
      }
    });
  }

  if (celebrationPrimary) {
    celebrationPrimary.addEventListener("click", () => {
      closeCelebrationPopup();
    });
  }

  if (celebrationModal) {
    celebrationModal.addEventListener("click", (e) => {
      if (e.target === celebrationModal) closeCelebrationPopup();
    });
  }

  // ---------------- GLOBAL ESCAPE HANDLING ----------------
  window.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;

    if (mediaLightbox && mediaLightbox.classList.contains("open")) {
      closeMediaLightbox();
      return;
    }

    if (celebrationModal && celebrationModal.classList.contains("open")) {
      closeCelebrationPopup();
      return;
    }

    if (hangoutModal && hangoutModal.classList.contains("open")) {
      closeHangout();
      return;
    }

    if (profileModal && profileModal.classList.contains("open")) {
      closeProfile();
      return;
    }

    if (lightbox && lightbox.classList.contains("open")) {
      closeLightbox();
      return;
    }

    if (navDrawer && navDrawer.classList.contains("open")) {
      setDrawer(false);
    }
  });

  // ---------------- INIT PAGE-SPECIFIC FEATURES ----------------
  renderMembers();
  renderHangouts();
  openProfileFromQuery();
  setupCelebrateButton();
  syncBodyLocks();
})();