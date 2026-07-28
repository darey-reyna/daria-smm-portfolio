const canvas = document.querySelector("#cursor-trail");
const ctx = canvas.getContext("2d");
const glow = document.querySelector(".cursor-glow");
const points = [];
let pointer = { x: innerWidth / 2, y: innerHeight / 2 };
let dpr = Math.min(devicePixelRatio || 1, 2);

const copy = {
  en: {
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.portfolio": "SMM Portfolio",
    "desktop.about": "About me",
    "intro.eyebrow": "Social media manager · content strategist",
    "intro.title": "I turn brands into<br />stories worth following.",
    "intro.copy": "Strategy, content systems and visual storytelling for hospitality, events and lifestyle brands.",
    "intro.hint": "Open a folder to view a case.",
    "head.hint": "Move your cursor",
    "folders.glacier": "Hospitality · SMM",
    "folders.riza": "Event · SMM",
    "folders.toyota": "Automotive · SMM",
    "labels.focus": "Focus",
    "labels.approach": "Approach",
    "labels.pillars": "Content pillars",
    "labels.deliverables": "Deliverables",
    "glacier.category": "01 / HOSPITALITY",
    "glacier.lead": "An 18-month SMM engagement for a premium hospitality project building its brand alongside the phased development of the property.",
    "glacier.period": "18 months · 3 communication channels · Bukovel, Ukraine",
    "glacier.stats.years": "years of collaboration",
    "glacier.stats.channels": "distinct channels",
    "glacier.stats.shoots": "photo & video shoots",
    "glacier.stats.integrations": "media integrations",
    "glacier.stats.content": "content pieces",
    "glacier.task.title": "The task",
    "glacier.task.copy": "Build a recognisable social presence and establish Glacier not simply as real estate or accommodation, but as a premium lifestyle brand — with separate communication logic for guests, future employees and business partners.",
    "glacier.challenge.title": "The challenge",
    "glacier.challenge.copy": "Much of the complex was still under construction. The brand needed to feel complete and premium before every space was ready, while three audiences required different messages, content systems, tones of voice and KPIs.",
    "glacier.channels.title": "Three communication systems",
    "glacier.guest.title": "Guest Instagram",
    "glacier.guest.copy": "A content and visual system centred on the guest experience: Carpathian mornings, après-ski rituals, family scenarios, gastronomy, SPA and the atmosphere around the complex.",
    "glacier.hr.title": "HR Instagram",
    "glacier.hr.copy": "A separate employer-brand channel built around people, culture, work and life in Bukovel, career growth and trust — rather than an endless vacancies feed.",
    "glacier.linkedin.title": "LinkedIn & B2B",
    "glacier.linkedin.copy": "Business-led communication for employer reputation, company expertise, project development, partnerships and professional hospitality audiences.",
    "glacier.production.title": "Content production",
    "glacier.production.copy": "I assembled and coordinated photographers, videographers, designers, models and local specialists. Every shoot included a concept, references, scripts, briefs and final quality control. The resulting asset library supported social, advertising and PR.",
    "glacier.influencers.title": "Influencer relations",
    "glacier.influencers.copy": "I led talent selection, negotiations, integration concepts and delivery. Collaborations included Kateryna Osadcha, Taras Tsymbaliuk, Olena Svitlytska and Ukrainian lifestyle, travel and fashion creators — selected for audience fit, not follower count alone.",
    "glacier.gallery": "Selected Reels",
    "glacier.reels.service": "Service choreography",
    "glacier.reels.opening": "Grand Opening campaign",
    "glacier.reels.atmosphere": "Lifestyle & care",
    "riza.category": "02 / SPORT & EVENT",
    "riza.lead": "A fixed-term communications project for a children’s rhythmic gymnastics tournament, structured across pre-event, live and post-event phases.",
    "riza.period": "Project period: 8 November - 31 December 2025",
    "riza.scope": "The scope covered social strategy and account design across the full project cycle, partner coordination and integrations, real-time tournament coverage and post-event communication.",
    "riza.pre.title": "Pre-event",
    "riza.pre.copy": "Positioning, account launch and visual system, tournament narrative, partner announcements and the publishing plan.",
    "riza.live.title": "Live",
    "riza.live.copy": "Real-time editorial coordination, athlete and backstage stories, results, partner visibility and event-day coverage.",
    "riza.post.title": "Post-event",
    "riza.post.copy": "Results, highlights, acknowledgements, partner reporting and consolidation of the tournament’s digital footprint.",
    "riza.results": "Selected results",
    "riza.stats.total": "total views",
    "riza.stats.instagram": "Instagram views",
    "riza.stats.content": "content items published",
    "riza.stats.followers": "new followers",
    "riza.stats.organic": "organic distribution",
    "riza.note": "Reporting period: 8 November - 31 December 2025. Total views include approximately 4.2M estimated media views; indirect OTS estimates are directional.",
    "toyota.category": "03 / AUTOMOTIVE",
    "toyota.lead": "Making product communication feel human, useful and native to social media.",
    "toyota.focus": "Social-first brand storytelling, product education and short-form content concepts.",
    "toyota.approach": "Translate features into real-life benefits through confident, clear and approachable stories.",
    "toyota.pillars": "Everyday mobility · technology made simple · model highlights · ownership · community.",
    "toyota.deliverables": "Content calendars, Reels ideas, campaign adaptations, captions and engagement formats.",
    "about.eyebrow": "ABOUT ME",
    "about.title": "Hi, I’m Daria.",
    "about.p1": "I create social media systems that give brands a recognisable voice, a clear visual world and content people actually want to engage with.",
    "about.p2": "My work sits between strategy and creative execution: from content pillars and calendars to campaigns, Reels ideas, copy and community.",
    "skills.strategy": "Strategy",
    "skills.content": "Content",
    "skills.copy": "Copywriting",
    "skills.direction": "Creative direction",
    "skills.community": "Community",
    "contact.eyebrow": "LET’S WORK TOGETHER",
    "contact.title": "Have a brand that needs a stronger social presence?",
    "contact.copy": "Tell me what you are building — I’d love to hear about it.",
    "contact.note": "Replace this email with yours before publishing.",
  },
  uk: {
    "nav.about": "Про мене",
    "nav.contact": "Контакти",
    "nav.portfolio": "SMM-портфоліо",
    "desktop.about": "Про мене",
    "intro.eyebrow": "SMM-менеджерка · контент-стратегиня",
    "intro.title": "Перетворюю бренди на<br />історії, за якими стежать.",
    "intro.copy": "Стратегія, контент-системи та візуальний сторітелінг для гостинності, подій і lifestyle-брендів.",
    "intro.hint": "Відкрийте папку, щоб переглянути кейс.",
    "head.hint": "Рухайте курсором",
    "folders.glacier": "Гостинність · SMM",
    "folders.riza": "Події · SMM",
    "folders.toyota": "Авто · SMM",
    "labels.focus": "Фокус",
    "labels.approach": "Підхід",
    "labels.pillars": "Контентні напрями",
    "labels.deliverables": "Результат роботи",
    "glacier.category": "01 / ГОСТИННІСТЬ",
    "glacier.lead": "Півторарічна робота з SMM преміального hospitality-проєкту, що формував бренд паралельно з будівництвом і поетапним запуском комплексу.",
    "glacier.period": "1,5 року · 3 канали комунікації · Буковель, Україна",
    "glacier.stats.years": "року співпраці",
    "glacier.stats.channels": "окремі канали",
    "glacier.stats.shoots": "фото- та відеозйомок",
    "glacier.stats.integrations": "медійних інтеграцій",
    "glacier.stats.content": "одиниць контенту",
    "glacier.task.title": "Завдання",
    "glacier.task.copy": "Побудувати впізнавану присутність Glacier у соцмережах і представити проєкт не просто як нерухомість або місце для проживання, а як преміальний lifestyle-бренд — з окремою логікою комунікації для гостей, майбутніх співробітників і бізнес-партнерів.",
    "glacier.challenge.title": "Виклик",
    "glacier.challenge.copy": "Значна частина комплексу ще будувалася. Бренд мав виглядати цілісно й преміально до завершення всіх просторів, а три різні аудиторії потребували власних повідомлень, контентних систем, tone of voice і KPI.",
    "glacier.channels.title": "Три системи комунікації",
    "glacier.guest.title": "Instagram для гостей",
    "glacier.guest.copy": "Контентна й візуальна система навколо досвіду гостя: ранки в Карпатах, відпочинок після катання, сімейні сценарії, гастрономія, SPA та атмосфера навколо комплексу.",
    "glacier.hr.title": "HR Instagram",
    "glacier.hr.copy": "Окремий employer-brand канал про людей, культуру, роботу й життя в Буковелі, професійний розвиток і довіру — замість нескінченної стрічки вакансій.",
    "glacier.linkedin.title": "LinkedIn і B2B",
    "glacier.linkedin.copy": "Ділова комунікація для репутації роботодавця, експертності команди, розвитку проєкту, партнерств і професійної hospitality-аудиторії.",
    "glacier.production.title": "Контент-продакшн",
    "glacier.production.copy": "Я зібрала й координувала фотографів, відеографів, дизайнерів, моделей і локальних спеціалістів. Для кожної зйомки готувала концепцію, референси, сценарії та технічні завдання, а створена база матеріалів працювала в соцмережах, рекламі й PR.",
    "glacier.influencers.title": "Робота з інфлюенсерами",
    "glacier.influencers.copy": "Я відповідала за добір героїв, переговори, концепції інтеграцій і контроль виходу контенту. Серед співпраць — Катерина Осадча, Тарас Цимбалюк, Олена Світлицька та українські lifestyle-, travel- і fashion-креатори, обрані за відповідністю аудиторії, а не лише за кількістю підписників.",
    "glacier.gallery": "Вибрані Reels",
    "glacier.reels.service": "Сервісний сценарій",
    "glacier.reels.opening": "Кампанія Grand Opening",
    "glacier.reels.atmosphere": "Атмосфера й турбота",
    "riza.category": "02 / СПОРТ І ПОДІЇ",
    "riza.lead": "Комунікаційний проєкт із визначеним терміном роботи для дитячого турніру з художньої гімнастики, побудований у трьох фазах: до події, під час турніру та після нього.",
    "riza.period": "Період проєкту: 8 листопада - 31 грудня 2025",
    "riza.scope": "У межах проєкту: стратегія комунікації в соціальних мережах і оформлення акаунту на весь цикл, координація партнерів та інтеграцій, оперативне висвітлення турніру й підсумкова комунікація.",
    "riza.pre.title": "До події",
    "riza.pre.copy": "Позиціонування, запуск і візуальна система акаунту, наратив турніру, анонси партнерів та план публікацій.",
    "riza.live.title": "Під час",
    "riza.live.copy": "Редакційна координація в реальному часі, історії спортсменок і бекстейджу, результати, видимість партнерів та висвітлення турнірного дня.",
    "riza.post.title": "Після події",
    "riza.post.copy": "Результати, ключові моменти, подяки, звітність для партнерів і закріплення цифрового сліду турніру.",
    "riza.results": "Ключові результати",
    "riza.stats.total": "загальних переглядів",
    "riza.stats.instagram": "переглядів в Instagram",
    "riza.stats.content": "опубліковані матеріали",
    "riza.stats.followers": "нових підписників",
    "riza.stats.organic": "органічне поширення",
    "riza.note": "Звітний період: 8 листопада - 31 грудня 2025. Загальний показник включає близько 4,2 млн розрахункових media views; непрямий OTS має орієнтовний характер.",
    "toyota.category": "03 / АВТОМОБІЛІ",
    "toyota.lead": "Продуктова комунікація, що звучить людяно, корисно й природно для соціальних мереж.",
    "toyota.focus": "Social-first сторітелінг бренду, пояснення продукту та концепції коротких відео.",
    "toyota.approach": "Переклад характеристик у реальні переваги через упевнені, зрозумілі та близькі історії.",
    "toyota.pillars": "Щоденна мобільність · технології просто · огляди моделей · володіння · спільнота.",
    "toyota.deliverables": "Контент-календарі, ідеї Reels, адаптації кампаній, тексти та формати залучення.",
    "about.eyebrow": "ПРО МЕНЕ",
    "about.title": "Привіт, я Дар’я.",
    "about.p1": "Я створюю SMM-системи, які дають брендам упізнаваний голос, цілісний візуальний світ і контент, із яким хочеться взаємодіяти.",
    "about.p2": "Моя робота поєднує стратегію та креативну реалізацію: від контентних напрямів і календарів до кампаній, ідей Reels, текстів і ком’юніті.",
    "skills.strategy": "Стратегія",
    "skills.content": "Контент",
    "skills.copy": "Копірайтинг",
    "skills.direction": "Креативний напрям",
    "skills.community": "Ком’юніті",
    "contact.eyebrow": "ПОПРАЦЮЙМО РАЗОМ",
    "contact.title": "Вашому бренду потрібна сильніша присутність у соцмережах?",
    "contact.copy": "Розкажіть, що ви створюєте — мені буде цікаво почути.",
    "contact.note": "Перед публікацією замініть цю адресу на свою.",
  },
};

function applyLanguage(lang, remember = false) {
  const selected = copy[lang] ? lang : "en";
  document.documentElement.lang = selected;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[selected][element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = copy[selected][element.dataset.i18nHtml];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === selected);
  });
  if (remember) localStorage.setItem("portfolio-language", selected);
}

async function chooseInitialLanguage() {
  const saved = localStorage.getItem("portfolio-language");
  if (saved) return applyLanguage(saved);

  const browserLanguage = navigator.language?.toLowerCase().startsWith("uk") ? "uk" : "en";
  applyLanguage(browserLanguage);
  try {
    const response = await fetch("https://ipwho.is/?fields=success,country_code", {
      signal: AbortSignal.timeout(2500),
    });
    const location = await response.json();
    if (localStorage.getItem("portfolio-language")) return;
    if (location.success) applyLanguage(location.country_code === "UA" ? "uk" : "en");
  } catch {
    // Browser language remains the privacy-friendly fallback.
  }
}

function resizeCanvas() {
  dpr = Math.min(devicePixelRatio || 1, 2);
  canvas.width = innerWidth * dpr;
  canvas.height = innerHeight * dpr;
  canvas.style.width = `${innerWidth}px`;
  canvas.style.height = `${innerHeight}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function movePointer(event) {
  pointer = { x: event.clientX, y: event.clientY };
  glow.style.left = `${pointer.x}px`;
  glow.style.top = `${pointer.y}px`;
  points.push({ ...pointer, life: 1, size: 3 + Math.random() * 5 });
  if (points.length > 48) points.shift();

}

function drawTrail() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  points.forEach((point, index) => {
    point.life -= 0.025;
    point.y -= 0.12;
    const hue = 88 + index * 2.4;
    ctx.beginPath();
    ctx.arc(point.x, point.y, Math.max(0, point.size * point.life), 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${hue}, 95%, 70%, ${Math.max(0, point.life * 0.48)})`;
    ctx.fill();
  });
  while (points.length && points[0].life <= 0) points.shift();
  requestAnimationFrame(drawTrail);
}

function openWindow(id) {
  document.querySelectorAll(".window.is-open").forEach((windowElement) => {
    windowElement.classList.remove("is-open");
  });
  const target = document.getElementById(id);
  if (!target) return;
  target.classList.add("is-open");
  target.querySelector(".close")?.focus({ preventScroll: true });
}

function closeWindow(windowElement) {
  windowElement.classList.remove("is-open");
}

document.querySelectorAll("[data-open]").forEach((trigger) => {
  trigger.addEventListener("click", () => openWindow(trigger.dataset.open));
  if (trigger.classList.contains("folder")) {
    trigger.addEventListener("dblclick", () => openWindow(trigger.dataset.open));
  }
});

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang, true));
});

document.querySelectorAll(".window").forEach((windowElement) => {
  windowElement.querySelector(".close").addEventListener("click", () => closeWindow(windowElement));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelectorAll(".window.is-open").forEach(closeWindow);
  }
});

function updateClock() {
  const now = new Date();
  document.querySelector("#clock").textContent = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

resizeCanvas();
updateClock();
chooseInitialLanguage();
drawTrail();
addEventListener("resize", resizeCanvas);
addEventListener("pointermove", movePointer, { passive: true });
setInterval(updateClock, 30_000);
