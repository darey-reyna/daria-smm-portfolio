const canvas = document.querySelector("#cursor-trail");
const ctx = canvas?.getContext("2d");
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
    "glacier.paid.title": "HR paid campaign",
    "glacier.paid.period": "One week · May 2026 · Meta Ads",
    "glacier.paid.copy": "A focused acquisition sprint combining Instagram profile traffic with lead generation for the HR direction.",
    "glacier.paid.impressions": "total impressions",
    "glacier.paid.reach": "total reach",
    "glacier.paid.spend": "total media spend",
    "glacier.paid.traffic": "Profile traffic",
    "glacier.paid.visits": "Instagram profile visits",
    "glacier.paid.leadgen": "HR lead generation",
    "glacier.paid.leads": "Meta leads",
    "glacier.paid.cpr": "Cost per result",
    "glacier.paid.cpl": "Cost per lead",
    "glacier.paid.clicks": "Clicks",
    "glacier.paid.note": "Campaign report, one-week period in May 2026. Total CTR: 4.31%.",
    "glacier.linkedin.title": "LinkedIn & B2B",
    "glacier.linkedin.copy": "Business-led communication for employer reputation, company expertise, project development, partnerships and professional hospitality audiences.",
    "glacier.production.title": "Content production",
    "glacier.production.copy": "I assembled and coordinated photographers, videographers, designers, models and local specialists. Every shoot included a concept, references, scripts, briefs and final quality control. The resulting asset library supported social, advertising and PR.",
    "glacier.influencers.title": "Influencer relations",
    "glacier.influencers.copy": "I led talent selection, negotiations, integration concepts and delivery. Collaborations included Kateryna Osadcha, Taras Tsymbaliuk, Olena Svitlytska and Ukrainian lifestyle, travel and fashion creators — selected for audience fit, not follower count alone.",
    "glacier.brief.label": "Production brief example",
    "glacier.brief.title": "How I brief creative contractors",
    "glacier.brief.copy": "A real working brief for a Glacier coworking Reel: the concept, communication priorities, shot sequence, camera direction, transitions and on-screen copy are defined before production begins.",
    "glacier.brief.project": "Coworking virtual tour",
    "glacier.brief.scene1": "Entrance & reveal",
    "glacier.brief.scene1copy": "Doors open, the hotel host welcomes the viewer and leads the camera inside.",
    "glacier.brief.scene2": "Scale & functionality",
    "glacier.brief.scene2copy": "Wide-angle movement through six workspaces, with capacity and equipment communicated on screen.",
    "glacier.brief.scene3": "Space transformation",
    "glacier.brief.scene3copy": "A visual transition from private office to conference layout.",
    "glacier.brief.scene4": "Atmosphere & details",
    "glacier.brief.scene4copy": "Cafeteria, lighting and coffee close-ups create pace and a sense of comfort.",
    "glacier.brief.scene5": "Closing frame & CTA",
    "glacier.brief.scene5copy": "The mountain view, opening hours and a clear invitation complete the story.",
    "glacier.brief.footer": "The brief gives every contractor one shared production logic while leaving room for craft in the execution.",
    "glacier.brief.open": "Open the full brief ↗",
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
    "abmk.category": "04 / ARCHITECTURE & EXPERTISE",
    "abmk.lead": "A dual-platform content system for one of Ukraine’s largest architecture and construction companies — translating complex projects, specialist knowledge and process into editorial stories people can understand and remember.",
    "abmk.period": "Instagram · LinkedIn · Strategy & full-cycle production",
    "abmk.facts.platforms": "platforms with distinct roles",
    "abmk.facts.languages": "bilingual communication",
    "abmk.facts.streams": "editorial content streams",
    "abmk.facts.production": "strategy, copy and production",
    "abmk.task.title": "The task",
    "abmk.task.copy": "Build a systematic social presence that showed more than polished renders: the people, decisions, expertise and working process behind architecture. The communication had to remain credible for professionals while staying clear and engaging for a broader audience.",
    "abmk.challenge.title": "The challenge",
    "abmk.challenge.copy": "The portfolio ranged from university campuses and residential developments to urban concepts, heritage and engineering. Every story required research, interviews and the right narrative angle — without flattening technical detail or turning the feed into a formal project catalogue.",
    "abmk.platforms.title": "One brand, two platform roles",
    "abmk.instagram.title": "Architecture made tangible",
    "abmk.instagram.copy": "Renders and professional photography were combined with educational carousels, site video, team interviews, event reportage and behind-the-scenes production. Each piece explained not only what was designed, but why the decision mattered.",
    "abmk.linkedin.title": "Expertise in business context",
    "abmk.linkedin.copy": "A separate editorial logic for partners, developers, clients, candidates and the international professional community: cases, expert perspectives, partnerships, company growth and employer-brand communication in Ukrainian and English.",
    "abmk.method.label": "Expertise → content",
    "abmk.method.title": "A repeatable editorial process for complex subjects",
    "abmk.method.research": "Research the context",
    "abmk.method.researchCopy": "Project stage, problem, constraints and the decisions worth explaining.",
    "abmk.method.interview": "Extract the expertise",
    "abmk.method.interviewCopy": "Interviews with architects, engineers and project leads.",
    "abmk.method.angle": "Find the narrative angle",
    "abmk.method.angleCopy": "A precise human entry point instead of generic technical copy.",
    "abmk.method.adapt": "Adapt by platform",
    "abmk.method.adaptCopy": "Format, depth and argumentation shaped for Instagram or LinkedIn.",
    "abmk.production.title": "Production under my direction",
    "abmk.production.copy": "I defined objectives and formats, prepared concepts, references, briefs and shot lists, coordinated heroes and locations, directed the production process and selected the final material. One shoot was planned to supply Reels, carousels, Stories, LinkedIn and PR.",
    "abmk.scope.title": "My scope",
    "abmk.scope.copy": "Strategy · content architecture · platform-specific planning · contractor briefs · shoots · scripts · Ukrainian and English copy · expert interviews · coordination with PR, HR and commercial teams.",
    "abmk.paid.label": "Selected paid media results",
    "abmk.paid.title": "Three campaign tasks, measured on their own terms",
    "abmk.paid.copy": "The selection shows efficiency, link traffic and scale. Results are presented campaign by campaign; reach is not summed because audiences may overlap.",
    "abmk.paid.note": "Source: Meta Ads export. Different optimisation goals are not directly comparable.",
    "abmk.table.campaign": "Campaign",
    "abmk.table.period": "Period",
    "abmk.table.result": "Primary result",
    "abmk.table.cost": "Cost / result",
    "abmk.table.reach": "Reach",
    "abmk.table.spend": "Spend",
    "abmk.table.efficiency": "Efficiency sprint",
    "abmk.table.traffic": "Link traffic",
    "abmk.table.scale": "Scale campaign",
    "abmk.table.date1": "1–9 Jun 2025",
    "abmk.table.date2": "30 Nov–7 Dec 2024",
    "abmk.table.date3": "9 Apr–21 May 2026",
    "abmk.table.visits": "profile visits",
    "abmk.table.clicks": "link clicks",
    "abmk.gallery.label": "Selected video work",
    "abmk.gallery.copy": "Examples of videos produced under my creative and production direction.",
    "abmk.reels.ucu": "UCU project tour",
    "abmk.reels.team": "The team behind the building",
    "abmk.reels.recruitment": "Project manager recruitment",
    "abmk.reels.pokrova": "Pokrova: architecture with impact",
    "abmk.result.label": "Result",
    "abmk.result.quote": "Not simply showing architecture, but explaining the decisions, people and processes that create its value.",
    "abmk.result.copy": "The result was a systematic content operation with distinct platform roles. Complex expertise became accessible without losing substance, while social media supported the company’s PR, partnerships, recruitment and commercial reputation.",
    "toyota.category": "03 / AUTOMOTIVE & PERFORMANCE",
    "toyota.lead": "SMM and paid social built to move premium automotive communication from attention to qualified enquiries and test drives.",
    "toyota.period": "Organic social · Paid campaigns · Lead generation · Local dealer communication",
    "toyota.stats.drives": "test-drive bookings in one week",
    "toyota.stats.dayone": "enquiries on launch day",
    "toyota.stats.cpl": "cost per enquiry in selected campaigns",
    "toyota.stats.qualified": "qualified RAV4 lead",
    "toyota.task.title": "The task",
    "toyota.task.copy": "Build social communication that protected the brands’ premium positioning, made individual models relevant to local audiences and converted interest into measurable enquiries, consultations and test drives.",
    "toyota.challenge.title": "The challenge",
    "toyota.challenge.copy": "Automotive decisions have a long consideration cycle. The work had to balance international brand standards with local offers — and optimise for lead quality, not for cheap form submissions that never reached the showroom.",
    "toyota.funnel.label": "Conversion logic",
    "toyota.funnel.title": "From product interest to a real dealership visit",
    "toyota.funnel.ad": "Model-led ad",
    "toyota.funnel.enquiry": "Enquiry",
    "toyota.funnel.contact": "Manager contact",
    "toyota.funnel.drive": "Test drive",
    "toyota.funnel.sale": "Potential sale",
    "toyota.approach.title": "What I built",
    "toyota.experience.title": "Ownership before specifications",
    "toyota.experience.copy": "The content placed each model inside recognisable scenarios — city driving, family travel, comfort, safety and design — so the audience could picture the car in their own life.",
    "toyota.creative.title": "Creative linked to an offer",
    "toyota.creative.copy": "I developed ad concepts, copy, offers, visual briefs and model-specific messages, then evaluated them by enquiry cost and downstream quality rather than reach alone.",
    "toyota.leads.title": "Lead quality as the KPI",
    "toyota.leads.copy": "Audiences, formats and messages were optimised against manager feedback: whether people answered, had purchase intent and progressed to a test drive.",
    "toyota.photos.label": "Content direction",
    "toyota.photos.copy": "Local production translated global automotive codes into a visual language that felt specific to the dealership, the city and real ownership scenarios.",
    "toyota.rav4.title": "A qualified lead, not just a completed form",
    "toyota.rav4.copy": "For the RAV4 campaign, I built a lookalike audience from prospective-customer data and paired it with a relevant model offer. The campaign delivered qualified leads at approximately $2.6 each.",
    "toyota.scope.label": "My scope",
    "toyota.scope.copy": "SMM and content planning · organic and paid copy · advertising concepts and offers · creative briefs · lead-generation campaigns · audience segmentation and testing · lookalike audiences · lead cost and quality analysis · sales-team coordination · local adaptation of global brand communication.",
    "toyota.videos.label": "Selected video work",
    "toyota.videos.copy": "Two examples of local automotive communication: a service-led commercial and a model test-drive story.",
    "toyota.videos.detailing": "Official dealer detailing services",
    "toyota.videos.chr": "Toyota C-HR GR Sport test drive",
    "toyota.result.label": "Result",
    "toyota.result.quote": "Content and paid social worked as one commercial system — from the first model story to a booked test drive.",
    "toyota.result.copy": "Social media became a predictable acquisition channel rather than an awareness-only presence, bringing measurable enquiries and prospective customers into the dealership.",
    "about.eyebrow": "ABOUT ME",
    "about.title": "Hi, I’m Daria.",
    "about.p1": "I have 7+ years of experience in marketing and communications, building social media as a business system: strategy, content, production, distribution and measurable outcomes.",
    "about.p2": "My background spans both in-house and agency teams across premium, automotive, hospitality, architecture, fashion and tech. Selected projects include Lexus, Toyota, Glacier Premium Apartments, abmk and Delfast Bikes.",
    "about.p3": "I work end to end — from positioning and copy to briefs, shoots, creative teams and influencer collaborations. With C1 English, I also develop English-language communication for international teams and audiences in the US and Canada.",
    "about.facts.years": "years in marketing & communications",
    "about.facts.english": "English proficiency",
    "about.facts.masters": "master’s degrees",
    "about.education": "SELECTED EDUCATION",
    "about.lvmh": "Luxury, branding, client experience and sustainability",
    "about.laba": "Completed with a California-funded grant",
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
    "glacier.paid.title": "Таргетована HR-кампанія",
    "glacier.paid.period": "Один тиждень · травень 2026 · Meta Ads",
    "glacier.paid.copy": "Сфокусована кампанія для HR-напряму, що поєднала трафік до Instagram-профілю та лідогенерацію.",
    "glacier.paid.impressions": "загальних показів",
    "glacier.paid.reach": "загальне охоплення",
    "glacier.paid.spend": "витрати на рекламу",
    "glacier.paid.traffic": "Трафік до профілю",
    "glacier.paid.visits": "відвідувань Instagram-профілю",
    "glacier.paid.leadgen": "HR-лідогенерація",
    "glacier.paid.leads": "ліди в Meta",
    "glacier.paid.cpr": "Ціна за результат",
    "glacier.paid.cpl": "Ціна за лід",
    "glacier.paid.clicks": "Кліки",
    "glacier.paid.note": "Звіт за один тиждень у травні 2026 року. Загальний CTR: 4,31%.",
    "glacier.linkedin.title": "LinkedIn і B2B",
    "glacier.linkedin.copy": "Ділова комунікація для репутації роботодавця, експертності команди, розвитку проєкту, партнерств і професійної hospitality-аудиторії.",
    "glacier.production.title": "Контент-продакшн",
    "glacier.production.copy": "Я зібрала й координувала фотографів, відеографів, дизайнерів, моделей і локальних спеціалістів. Для кожної зйомки готувала концепцію, референси, сценарії та технічні завдання, а створена база матеріалів працювала в соцмережах, рекламі й PR.",
    "glacier.influencers.title": "Робота з інфлюенсерами",
    "glacier.influencers.copy": "Я відповідала за добір героїв, переговори, концепції інтеграцій і контроль виходу контенту. Серед співпраць — Катерина Осадча, Тарас Цимбалюк, Олена Світлицька та українські lifestyle-, travel- і fashion-креатори, обрані за відповідністю аудиторії, а не лише за кількістю підписників.",
    "glacier.brief.label": "Приклад продакшн-ТЗ",
    "glacier.brief.title": "Як я ставлю завдання креативним підрядникам",
    "glacier.brief.copy": "Реальне робоче ТЗ для Reels про коворкінг Glacier: до початку зйомки зафіксовані концепція, комунікаційні акценти, послідовність сцен, рух камери, переходи й тексти на екрані.",
    "glacier.brief.project": "Віртуальний тур коворкінгом",
    "glacier.brief.scene1": "Вхід і знайомство",
    "glacier.brief.scene1copy": "Двері відчиняються, адміністратор зустрічає глядача й запрошує камеру всередину.",
    "glacier.brief.scene2": "Масштаб і функціональність",
    "glacier.brief.scene2copy": "Рух ширококутною камерою через шість робочих просторів; місткість і обладнання пояснюються на екрані.",
    "glacier.brief.scene3": "Трансформація простору",
    "glacier.brief.scene3copy": "Візуальний перехід від приватного офісу до конференц-залу.",
    "glacier.brief.scene4": "Атмосфера й деталі",
    "glacier.brief.scene4copy": "Кафетерій, світло й крупні плани кави створюють ритм і відчуття комфорту.",
    "glacier.brief.scene5": "Фінальний кадр і CTA",
    "glacier.brief.scene5copy": "Вид із вікна, години роботи й чітке запрошення завершують історію.",
    "glacier.brief.footer": "Таке ТЗ дає всім підрядникам спільну логіку продакшну й водночас залишає простір для майстерності у виконанні.",
    "glacier.brief.open": "Відкрити повне ТЗ ↗",
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
    "abmk.category": "04 / АРХІТЕКТУРА Й ЕКСПЕРТНІСТЬ",
    "abmk.lead": "Контент-система для однієї з найбільших архітектурно-будівельних компаній України, що перетворює складні проєкти, експертність і процеси на зрозумілі редакційні історії.",
    "abmk.period": "Instagram · LinkedIn · стратегія та повний цикл продакшну",
    "abmk.facts.platforms": "платформи з різними ролями",
    "abmk.facts.languages": "двомовна комунікація",
    "abmk.facts.streams": "контентних напрямів",
    "abmk.facts.production": "стратегія, тексти й продакшн",
    "abmk.task.title": "Завдання",
    "abmk.task.copy": "Побудувати системну присутність у соцмережах і показати більше, ніж готові рендери: людей, рішення, експертність і робочий процес за архітектурою. Комунікація мала залишатися переконливою для професійної аудиторії та водночас зрозумілою ширшому колу читачів.",
    "abmk.challenge.title": "Виклик",
    "abmk.challenge.copy": "Портфоліо охоплювало університетські кампуси, житлові проєкти, урбаністичні концепції, спадщину та інженерію. Кожна тема вимагала дослідження, інтерв’ю й точного наративного кута — без спрощення змісту та без перетворення стрічки на формальний каталог.",
    "abmk.platforms.title": "Один бренд — дві ролі платформ",
    "abmk.instagram.title": "Архітектура, яку можна відчути",
    "abmk.instagram.copy": "Рендери й професійна архітектурна фотографія поєднувалися з освітніми каруселями, відео з об’єктів, інтерв’ю команди, репортажами з подій і бекстейджем. Кожен матеріал пояснював не лише що спроєктовано, а й чому це рішення має значення.",
    "abmk.linkedin.title": "Експертність у бізнес-контексті",
    "abmk.linkedin.copy": "Окрема редакційна логіка для партнерів, девелоперів, клієнтів, кандидатів і міжнародної професійної спільноти: кейси, експертні позиції, партнерства, розвиток компанії та employer-brand комунікація українською й англійською.",
    "abmk.method.label": "Експертність → контент",
    "abmk.method.title": "Повторюваний редакційний процес для складних тем",
    "abmk.method.research": "Дослідити контекст",
    "abmk.method.researchCopy": "Етап проєкту, проблема, обмеження та рішення, які варто пояснити.",
    "abmk.method.interview": "Дістати експертизу",
    "abmk.method.interviewCopy": "Інтерв’ю з архітекторами, інженерами та керівниками проєктів.",
    "abmk.method.angle": "Знайти наративний кут",
    "abmk.method.angleCopy": "Точна людська точка входу замість узагальненого технічного тексту.",
    "abmk.method.adapt": "Адаптувати під платформу",
    "abmk.method.adaptCopy": "Формат, глибина й аргументація окремо для Instagram або LinkedIn.",
    "abmk.production.title": "Продакшн під моїм керівництвом",
    "abmk.production.copy": "Я визначала завдання й формати, готувала концепції, референси, ТЗ і шотлісти, координувала героїв та локації, керувала процесом зйомки й відбирала фінальні матеріали. Одну зйомку планували так, щоб вона дала контент для Reels, каруселей, Stories, LinkedIn і PR.",
    "abmk.scope.title": "Моя зона відповідальності",
    "abmk.scope.copy": "Стратегія · контентна архітектура · окреме планування для платформ · ТЗ підрядникам · зйомки · сценарії · тексти українською й англійською · інтерв’ю з експертами · координація з PR, HR і комерційною командою.",
    "abmk.paid.label": "Вибрані результати paid media",
    "abmk.paid.title": "Три рекламні задачі — кожна зі своєю метрикою",
    "abmk.paid.copy": "Вибірка показує ефективність, переходи за посиланням і масштаб. Результати наведені окремо для кожної кампанії; охоплення не підсумовується, адже аудиторії могли перетинатися.",
    "abmk.paid.note": "Джерело: експорт Meta Ads. Кампанії з різними цілями не порівнюються напряму.",
    "abmk.table.campaign": "Кампанія",
    "abmk.table.period": "Період",
    "abmk.table.result": "Основний результат",
    "abmk.table.cost": "Ціна / результат",
    "abmk.table.reach": "Охоплення",
    "abmk.table.spend": "Витрати",
    "abmk.table.efficiency": "Спринт на ефективність",
    "abmk.table.traffic": "Переходи за посиланням",
    "abmk.table.scale": "Масштабна кампанія",
    "abmk.table.date1": "1–9 червня 2025",
    "abmk.table.date2": "30 листопада–7 грудня 2024",
    "abmk.table.date3": "9 квітня–21 травня 2026",
    "abmk.table.visits": "відвідувань профілю",
    "abmk.table.clicks": "переходів за посиланням",
    "abmk.gallery.label": "Вибрані відеороботи",
    "abmk.gallery.copy": "Приклади відео, створених під моїм креативним і продакшн-керівництвом.",
    "abmk.reels.ucu": "Екскурсія об’єктом УКУ",
    "abmk.reels.team": "Команда за проєктом",
    "abmk.reels.recruitment": "Кампанія з пошуку проєктних менеджерів",
    "abmk.reels.pokrova": "Pokrova: архітектура зі впливом",
    "abmk.result.label": "Результат",
    "abmk.result.quote": "Не просто показувати архітектуру, а пояснювати рішення, людей і процеси, які створюють її цінність.",
    "abmk.result.copy": "У результаті сформувалася системна контент-операція з чіткими ролями платформ. Складна експертиза стала зрозумілою без втрати змісту, а соцмережі підтримували PR, партнерства, рекрутинг і комерційну репутацію компанії.",
    "toyota.category": "03 / АВТОМОБІЛІ Й PERFORMANCE",
    "toyota.lead": "SMM і paid social, що переводили преміальну автомобільну комунікацію з уваги у кваліфіковані заявки та записи на тест-драйв.",
    "toyota.period": "Органічний контент · рекламні кампанії · лідогенерація · локальна комунікація дилера",
    "toyota.stats.drives": "записів на тест-драйв за тиждень",
    "toyota.stats.dayone": "заявок у день запуску",
    "toyota.stats.cpl": "ціна заявки в окремих кампаніях",
    "toyota.stats.qualified": "кваліфікований лід для RAV4",
    "toyota.task.title": "Завдання",
    "toyota.task.copy": "Побудувати комунікацію, яка зберігала преміальне позиціонування брендів, робила конкретні моделі релевантними для локальної аудиторії та переводила інтерес у вимірювані заявки, консультації й тест-драйви.",
    "toyota.challenge.title": "Виклик",
    "toyota.challenge.copy": "Рішення про купівлю автомобіля має довгий цикл. Потрібно було поєднати стандарти міжнародних брендів із локальними оферами й оптимізувати кампанії за якістю лідів, а не за дешевими формами, що не доходили до дилерського центру.",
    "toyota.funnel.label": "Логіка конверсії",
    "toyota.funnel.title": "Від інтересу до моделі — до реального візиту в дилерський центр",
    "toyota.funnel.ad": "Оголошення про модель",
    "toyota.funnel.enquiry": "Заявка",
    "toyota.funnel.contact": "Контакт менеджера",
    "toyota.funnel.drive": "Тест-драйв",
    "toyota.funnel.sale": "Потенційний продаж",
    "toyota.approach.title": "Що я побудувала",
    "toyota.experience.title": "Досвід володіння перед характеристиками",
    "toyota.experience.copy": "Контент показував моделі у впізнаваних сценаріях — місто, сімейні подорожі, комфорт, безпека й дизайн — щоб людина могла уявити автомобіль у власному житті.",
    "toyota.creative.title": "Креатив, пов’язаний з офером",
    "toyota.creative.copy": "Я розробляла рекламні концепції, тексти, офери, візуальні ТЗ й окремі повідомлення для моделей, а оцінювала їх за ціною заявки та її подальшою якістю, а не лише за охопленням.",
    "toyota.leads.title": "Якість ліда як KPI",
    "toyota.leads.copy": "Аудиторії, формати й повідомлення оптимізувалися з урахуванням зворотного зв’язку менеджерів: чи відповідає людина, чи має намір купувати та чи переходить до тест-драйву.",
    "toyota.photos.label": "Контент-напрям",
    "toyota.photos.copy": "Локальний продакшн адаптував глобальні автомобільні коди до візуальної мови конкретного дилерського центру, міста й реальних сценаріїв володіння.",
    "toyota.rav4.title": "Кваліфікований лід, а не просто заповнена форма",
    "toyota.rav4.copy": "Для кампанії RAV4 я сформувала lookalike-аудиторію на основі даних потенційних клієнтів і поєднала її з релевантною пропозицією моделі. Вартість кваліфікованого ліда становила близько $2,6.",
    "toyota.scope.label": "Моя зона відповідальності",
    "toyota.scope.copy": "SMM- і контент-планування · тексти для organic і paid social · рекламні концепції та офери · ТЗ на креативи · lead-generation кампанії · сегментація й тестування аудиторій · lookalike-аудиторії · аналіз ціни та якості заявок · координація з відділом продажів · локальна адаптація глобальної комунікації.",
    "toyota.videos.label": "Вибрані відеороботи",
    "toyota.videos.copy": "Два приклади локальної автомобільної комунікації: ролик про сервісну послугу та історія тест-драйву конкретної моделі.",
    "toyota.videos.detailing": "Детейлінг-послуги офіційного дилера",
    "toyota.videos.chr": "Тест-драйв Toyota C-HR GR Sport",
    "toyota.result.label": "Результат",
    "toyota.result.quote": "Контент і paid social працювали як одна комерційна система — від першої історії про модель до запису на тест-драйв.",
    "toyota.result.copy": "Соцмережі стали прогнозованим каналом залучення, а не лише іміджевою присутністю: кампанії приводили вимірювані заявки й потенційних покупців до дилерського центру.",
    "about.eyebrow": "ПРО МЕНЕ",
    "about.title": "Привіт, я Дар’я.",
    "about.p1": "Понад 7 років працюю в маркетингу та комунікаціях і будую соцмережі як бізнес-систему: стратегія, контент, продакшн, дистрибуція та вимірюваний результат.",
    "about.p2": "Маю досвід in-house і в агенції, працювала з premium, automotive, hospitality, architecture, fashion і tech-проєктами. Серед них — Lexus, Toyota, Glacier Premium Apartments, abmk і Delfast Bikes.",
    "about.p3": "Веду роботу end-to-end: від позиціонування й текстів до ТЗ, зйомок, креативної команди та інфлюенсерських інтеграцій. Англійська C1 дає змогу працювати з міжнародними командами й комунікацією для ринків США та Канади.",
    "about.facts.years": "років у маркетингу й комунікаціях",
    "about.facts.english": "рівень англійської",
    "about.facts.masters": "магістерські освіти",
    "about.education": "ОСВІТА",
    "about.lvmh": "Luxury, брендинг, клієнтський досвід і сталий розвиток",
    "about.laba": "Навчання завершено за грантом від Каліфорнії",
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
  if (remember) {
    try {
      localStorage.setItem("portfolio-language", selected);
    } catch {
      // Language switching still works when storage is unavailable.
    }
  }
}

async function chooseInitialLanguage() {
  let saved = null;
  try {
    saved = localStorage.getItem("portfolio-language");
  } catch {
    // Private browsing can restrict storage.
  }
  if (saved) return applyLanguage(saved);

  const browserLanguage = navigator.language?.toLowerCase().startsWith("uk") ? "uk" : "en";
  applyLanguage(browserLanguage);
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);
    const response = await fetch("https://ipwho.is/?fields=success,country_code", {
      signal: controller.signal,
    });
    clearTimeout(timeout);
    const location = await response.json();
    try {
      if (localStorage.getItem("portfolio-language")) return;
    } catch {
      // Continue with the detected language.
    }
    if (location.success) applyLanguage(location.country_code === "UA" ? "uk" : "en");
  } catch {
    // Browser language remains the privacy-friendly fallback.
  }
}

function resizeCanvas() {
  if (!canvas || !ctx) return;
  dpr = Math.min(devicePixelRatio || 1, 2);
  canvas.width = innerWidth * dpr;
  canvas.height = innerHeight * dpr;
  canvas.style.width = `${innerWidth}px`;
  canvas.style.height = `${innerHeight}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function movePointer(event) {
  pointer = { x: event.clientX, y: event.clientY };
  if (glow) {
    glow.style.left = `${pointer.x}px`;
    glow.style.top = `${pointer.y}px`;
  }
  points.push({ ...pointer, life: 1, size: 3 + Math.random() * 5 });
  if (points.length > 48) points.shift();

}

function drawTrail() {
  if (!ctx) return;
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
  windowElement.querySelector(".close")?.addEventListener("click", () => closeWindow(windowElement));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelectorAll(".window.is-open").forEach(closeWindow);
  }
});

function updateClock() {
  const now = new Date();
  const clock = document.querySelector("#clock");
  if (!clock) return;
  clock.textContent = now.toLocaleTimeString([], {
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
