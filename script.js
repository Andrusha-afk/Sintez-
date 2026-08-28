// --- TRANSLATIONS ---
const translations = {
    ru: {
        s1_title: "Твоя визитка ", s1_title_grad: "внутри MAX",
        s1_desc: "Открывается по ссылке за секунду. Ставить ничего не нужно — ни тебе, ни тому, кому ты её отправишь.",
        s2_title: "Собирается ", s2_title_grad: "из блоков",
        s2_desc: "Прайс, отзывы, фотогалерея, карта, часы работы, кнопка записи. Блоки переставляются перетаскиванием, порядок задаёшь ты.",
        s3_title: "Свой бот и своя<br>ссылка",
        s3_desc: "У визитки появляется собственный бот. Ссылку можно отправить в переписке, положить в описание профиля или напечатать на карточке.",
        btn_skip: "Пропустить", btn_next: "Далее", btn_start: "Начать",
        dash_title: "Твои визитки", dash_subtitle: "Открой, чтобы изменить. Ссылку можно отправить кому угодно.",
        label_my_cards: "МОИ ВИЗИТКИ", empty_h3: "Здесь появятся твои визитки", 
        empty_p: "Первая собирается за несколько минут: имя, пара блоков — и готово.",
        btn_create: "Создать свою визитку",
        info_box: "Так это выглядит на примере. Здесь появятся ваши цифры, когда сделаете первую визитку.",
        menu_stats: "Статистика", menu_stats_sub: "Просмотры, переходы и заявки",
        menu_links: "Ссылки для продвижения", menu_links_sub: "Отдельная ссылка под каждый канал",
        analytics_empty: "Пока нет просмотров — поделись визиткой, и здесь появится статистика",
        menu_title: "Меню", menu_welcome: "Посмотреть приветствие", menu_mycards: "Мои визитки",
        menu_footer: "Приветствие показывается один раз при первом входе. Отсюда его можно открыть снова.",
        no_cards_msg: "Пока у вас нет визиток", page_analytics: "Аналитика",
        cr_title: "Расскажи о себе",
        cr_subtitle: "Это встанет в шапку визитки. Можно поменять в любой момент.",
        cr_lang_label: "Язык приложения",
        cr_label_name: "Название или имя", cr_ph_name: "напр. Студия Анны",
        cr_label_desc: "Чем занимаешься — одной фразой", cr_ph_desc: "напр. Маникюр и дизайн ногтей",
        cr_label_city: "Город — по желанию", cr_ph_city: "напр. Батуми",
        btn_next_arrow: "Далее →",
        action_edit: "Редактировать", action_share: "Поделиться", action_delete: "Удалить навсегда",
        toast_copy: "Ссылка скопирована!", toast_deleted: "Визитка удалена",
        bl_title: "Что ", bl_title_grad: "показать", bl_desc: "Отметь нужные блоки — соберу визитку из них. Остальное добавишь потом.",
        blk_links: "Ссылки-кнопки", blk_socials: "Соцсети", blk_hours: "Часы работы", blk_cta: "Кнопка-призыв",
        blk_contacts: "Контакты", blk_price: "Прайс / Цены", blk_discounts: "Скидки / Акции",
        blk_reviews: "Отзывы", blk_faq: "Вопрос-Ответ", blk_facts: "Цифры / Факты",
        blk_video: "Видео", blk_share: "Поделиться", blk_gallery: "Фотогалерея", blk_map: "Карта + Такси",
        btn_back: "Назад", btn_assemble: "Собрать визитку"
    },
    en: {
        s1_title: "Your business card ", s1_title_grad: "inside MAX",
        s1_desc: "Opens via link in a second. No installation needed — neither for you nor for the recipient.",
        s2_title: "Built from ", s2_title_grad: "blocks",
        s2_desc: "Price list, reviews, photo gallery, map, working hours, booking button. Blocks are rearranged by dragging, you set the order.",
        s3_title: "Your own bot and<br>link",
        s3_desc: "The business card gets its own bot. The link can be sent in chat, put in profile bio or printed on a physical card.",
        btn_skip: "Skip", btn_next: "Next", btn_start: "Start",
        dash_title: "Your cards", dash_subtitle: "Open to edit. Send the link to anyone.",
        label_my_cards: "MY CARDS", empty_h3: "Your cards will appear here", 
        empty_p: "The first one is assembled in a few minutes: name, a couple of blocks — and it's ready.",
        btn_create: "Create your card",
        info_box: "This is how it looks in the example. Your numbers will appear here when you create your first card.",
        menu_stats: "Statistics", menu_stats_sub: "Views, clicks and requests",
        menu_links: "Promotion links", menu_links_sub: "Separate link for each channel",
        analytics_empty: "No views yet — share your card and statistics will appear here",
        menu_title: "Menu", menu_welcome: "View welcome screen", menu_mycards: "My cards",
        menu_footer: "Welcome screen is shown once on first login. You can open it again from here.",
        no_cards_msg: "You don't have any cards yet", page_analytics: "Analytics",
        cr_title: "Tell about yourself",
        cr_subtitle: "This will go into the card header. You can change it anytime.",
        cr_lang_label: "App language",
        cr_label_name: "Name or title", cr_ph_name: "e.g. Anna's Studio",
        cr_label_desc: "What you do — in one phrase", cr_ph_desc: "e.g. Manicure and nail design",
        cr_label_city: "City — optional", cr_ph_city: "e.g. Batumi",
        btn_next_arrow: "Next →",
        action_edit: "Edit", action_share: "Share", action_delete: "Delete forever",
        toast_copy: "Link copied!", toast_deleted: "Card deleted",
        bl_title: "What to ", bl_title_grad: "show", bl_desc: "Select blocks to build your card. Add more later.",
        blk_links: "Links", blk_socials: "Socials", blk_hours: "Working hours", blk_cta: "Call-to-action",
        blk_contacts: "Contacts", blk_price: "Price list", blk_discounts: "Discounts",
        blk_reviews: "Reviews", blk_faq: "Q&A", blk_facts: "Facts & Figures",
        blk_video: "Video", blk_share: "Share", blk_gallery: "Gallery", blk_map: "Map + Taxi",
        btn_back: "Back", btn_assemble: "Assemble card"
    },
    de: {
        s1_title: "Deine Visitenkarte ", s1_title_grad: "in MAX",
        s1_desc: "Öffnet sich per Link in einer Sekunde. Keine Installation nötig — weder für dich noch für den Empfänger.",
        s2_title: "Zusammengestellt aus ", s2_title_grad: "Blöcken",
        s2_desc: "Preisliste, Bewertungen, Fotogalerie, Karte, Öffnungszeiten, Buchungsbutton. Blöcke werden per Drag & Drop neu angeordnet.",
        s3_title: "Eigener Bot und<br>eigener Link",
        s3_desc: "Die Visitenkarte erhält einen eigenen Bot. Der Link kann im Chat gesendet, in die Profilbio eingefügt oder auf eine Karte gedruckt werden.",
        btn_skip: "Überspringen", btn_next: "Weiter", btn_start: "Starten",
        dash_title: "Deine Karten", dash_subtitle: "Zum Bearbeiten öffnen. Sende den Link an jeden.",
        label_my_cards: "MEINE KARTEN", empty_h3: "Hier erscheinen deine Karten", 
        empty_p: "Die erste ist in wenigen Minuten erstellt: Name, ein paar Blöcke — und fertig.",
        btn_create: "Karte erstellen",
        info_box: "So sieht es im Beispiel aus. Ihre Zahlen erscheinen hier, wenn Sie Ihre erste Karte erstellen.",
        menu_stats: "Statistik", menu_stats_sub: "Aufrufe, Klicks und Anfragen",
        menu_links: "Werbelinks", menu_links_sub: "Separater Link für jeden Kanal",
        analytics_empty: "Noch keine Aufrufe — teile deine Karte und hier erscheint die Statistik",
        menu_title: "Menü", menu_welcome: "Begrüßung ansehen", menu_mycards: "Meine Karten",
        menu_footer: "Der Begrüßungsbildschirm wird beim ersten Login einmal angezeigt. Du kannst ihn von hier aus wieder öffnen.",
        no_cards_msg: "Sie haben noch keine Karten", page_analytics: "Analytik",
        cr_title: "Erzähl von dir",
        cr_subtitle: "Dies wird in den Kopf der Karte eingefügt. Kann jederzeit geändert werden.",
        cr_lang_label: "App-Sprache",
        cr_label_name: "Name oder Titel", cr_ph_name: "z.B. Annas Studio",
        cr_label_desc: "Was machst du — in einem Satz", cr_ph_desc: "z.B. Maniküre und Nageldesign",
        cr_label_city: "Stadt — optional", cr_ph_city: "z.B. Batumi",
        btn_next_arrow: "Weiter →",
        action_edit: "Bearbeiten", action_share: "Teilen", action_delete: "Für immer löschen",
        toast_copy: "Link kopiert!", toast_deleted: "Karte gelöscht",
        bl_title: "Was ", bl_title_grad: "zeigen?", bl_desc: "Wähle Blöcke für deine Karte. Den Rest fügst du später hinzu.",
        blk_links: "Links", blk_socials: "Soziale Netzwerke", blk_hours: "Öffnungszeiten", blk_cta: "Handlungsaufruf",
        blk_contacts: "Kontakte", blk_price: "Preisliste", blk_discounts: "Rabatte",
        blk_reviews: "Bewertungen", blk_faq: "FAQ", blk_facts: "Fakten & Zahlen",
        blk_video: "Video", blk_share: "Teilen", blk_gallery: "Galerie", blk_map: "Karte + Taxi",
        btn_back: "Zurück", btn_assemble: "Karte erstellen"
    }
};

let currentLang = 'ru';
let hasUserCards = false; 
let userCardData = null;
let selectedBlocks = {}; // Stores block states

// --- LOCAL STORAGE HELPERS ---
function saveUserData() {
    const userData = {
        lang: currentLang,
        hasCards: hasUserCards,
        cardData: userCardData,
        blocks: selectedBlocks
    };
    localStorage.setItem('synthes_user_data', JSON.stringify(userData));
}

function loadUserData() {
    const savedData = localStorage.getItem('synthes_user_data');
    if (savedData) {
        try {
            const parsed = JSON.parse(savedData);
            currentLang = parsed.lang || 'ru';
            hasUserCards = parsed.hasCards || false;
            userCardData = parsed.cardData || null;
            selectedBlocks = parsed.blocks || {};
            
            document.querySelectorAll('.lang-btn-header').forEach(btn => {
                btn.classList.remove('active');
                if(btn.getAttribute('data-lang') === currentLang) btn.classList.add('active');
            });
            applyTranslations();
        } catch (e) { console.error("Error loading data", e); }
    }
}

// Language Switcher Logic
const langBtns = document.querySelectorAll('.lang-btn-header');
langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLang = btn.getAttribute('data-lang');
        applyTranslations();
        saveUserData();
    });
});

function applyTranslations() {
    const t = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (t[key]) el.placeholder = t[key];
    });
    document.getElementById('pageTitle').innerText = t.page_analytics;
}

// Navigation Logic
function nextScreen(screenNum) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(`screen-${screenNum}`).classList.add('active');
    updateHeader('onboarding');
}

function goToDashboard() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-dashboard').classList.add('active');
    updateHeader('dashboard');
    renderCardsList();
    saveUserData();
}

function openCreator(isEdit = false) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-creator').classList.add('active');
    updateHeader('creator');
    
    if (isEdit && userCardData) {
        document.getElementById('input-name').value = userCardData.name || '';
        document.getElementById('input-desc').value = userCardData.desc || '';
        document.getElementById('input-city').value = userCardData.city || '';
    } else {
        document.getElementById('input-name').value = '';
        document.getElementById('input-desc').value = '';
        document.getElementById('input-city').value = '';
    }
}

function showAnalytics() {
    closeMenu();
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-analytics').classList.add('active');
    updateHeader('analytics');
}

function goBack() {
    if (document.getElementById('screen-analytics').classList.contains('active')) {
        goToDashboard();
    } else if (document.getElementById('screen-creator').classList.contains('active')) {
        goToDashboard();
    } else if (document.getElementById('screen-blocks').classList.contains('active')) {
        goBackFromBlocks();
    }
}

function goBackFromBlocks() {
    openCreator(true); // Return to creator with filled data
}

// Header State Management
function updateHeader(state) {
    const backBtn = document.getElementById('globalBackBtn');
    const logo = document.getElementById('mainLogo');
    const title = document.getElementById('pageTitle');
    const menuBtn = document.getElementById('globalMenuBtn');
    const langSwitch = document.querySelector('.lang-switch-header');

    if (state === 'onboarding' || state === 'blocks') {
        backBtn.style.display = (state === 'blocks') ? 'flex' : 'none';
        logo.style.display = 'none';
        title.style.display = 'none';
        menuBtn.style.display = 'none';
        
        langSwitch.style.display = 'flex';
        langSwitch.style.background = (state === 'blocks') ? 'transparent' : 'rgba(255,255,255,0.1)';
    } 
    else if (state === 'creator') {
        backBtn.style.display = 'flex';
        logo.style.display = 'none';
        title.style.display = 'none';
        menuBtn.style.display = 'none';
        
        langSwitch.style.display = 'flex';
        langSwitch.style.background = 'transparent'; 
    } 
    else if (state === 'dashboard') {
        backBtn.style.display = 'none';
        logo.style.display = 'flex';
        title.style.display = 'none';
        menuBtn.style.display = 'block';
        
        langSwitch.style.display = 'flex';
        langSwitch.style.background = 'rgba(255,255,255,0.1)';
    } 
    else if (state === 'analytics') {
        backBtn.style.display = 'flex';
        logo.style.display = 'none';
        title.style.display = 'block';
        menuBtn.style.display = 'none';
        langSwitch.style.display = 'none';
    }
}

// Modal Logic
const modalOverlay = document.getElementById('modalOverlay');
const modalSheet = document.getElementById('modalSheet');

function openMenu() {
    modalOverlay.classList.add('open');
    modalSheet.classList.add('open');
}

function closeMenu() {
    modalOverlay.classList.remove('open');
    modalSheet.classList.remove('open');
}

const cardModalOverlay = document.getElementById('cardModalOverlay');
const cardModalSheet = document.getElementById('cardModalSheet');

function openCardMenu() {
    cardModalOverlay.classList.add('open');
    cardModalSheet.classList.add('open');
}

function closeCardMenu() {
    cardModalOverlay.classList.remove('open');
    cardModalSheet.classList.remove('open');
}

function showWelcome() { closeMenu(); nextScreen(1); }

function handleMyCardsClick() {
    closeMenu();
    if (hasUserCards) goToDashboard();
    else alert(translations[currentLang].no_cards_msg);
}

// Creator Logic
function selectCreatorLang(btn, langCode) {
    document.querySelectorAll('.lang-option').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function saveBasicInfoAndNext() {
    const name = document.getElementById('input-name').value.trim();
    const desc = document.getElementById('input-desc').value.trim();
    const city = document.getElementById('input-city').value.trim();

    if (!name) {
        alert(currentLang === 'ru' ? 'Введите название или имя' : 'Enter name or title');
        return;
    }

    // Save basic info temporarily
    userCardData = { ...userCardData, name, desc, city };
    hasUserCards = true;
    
    // Load previously saved blocks if any
    const checkboxes = document.querySelectorAll('.toggle-switch input');
    checkboxes.forEach(cb => {
        const key = cb.getAttribute('data-block');
        if (selectedBlocks[key] !== undefined) {
            cb.checked = selectedBlocks[key];
        } else {
            selectedBlocks[key] = cb.checked;
        }
    });

    // Go to blocks screen
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-blocks').classList.add('active');
    updateHeader('blocks');
}

function finishCreation() {
    // Save block selections
    const checkboxes = document.querySelectorAll('.toggle-switch input');
    checkboxes.forEach(cb => {
        selectedBlocks[cb.getAttribute('data-block')] = cb.checked;
    });

    saveUserData();
    goToDashboard();
}

// Card Actions
function editCurrentCard() {
    closeCardMenu();
    openCreator(true);
}

function shareCurrentCard() {
    closeCardMenu();
    const dummyLink = `https://max.app/vizitka/${userCardData.name.replace(/\s+/g, '-').toLowerCase()}`;
    navigator.clipboard.writeText(dummyLink).then(() => {
        showToast(translations[currentLang].toast_copy);
    }).catch(() => showToast(translations[currentLang].toast_copy));
}

function deleteCurrentCard() {
    closeCardMenu();
    if (confirm(currentLang === 'ru' ? 'Вы уверены, что хотите удалить визитку? Это действие нельзя отменить.' : 'Are you sure?')) {
        userCardData = null;
        hasUserCards = false;
        selectedBlocks = {};
        saveUserData();
        renderCardsList();
        showToast(translations[currentLang].toast_deleted);
    }
}

function renderCardsList() {
    const container = document.getElementById('cards-list-container');
    const t = translations[currentLang];

    if (hasUserCards && userCardData) {
        const initial = userCardData.name.charAt(0).toUpperCase();
        container.innerHTML = `
            <div class="user-card-preview">
                <div class="uc-avatar">${initial}</div>
                <div class="uc-info">
                    <h4>${userCardData.name}</h4>
                    <p>${userCardData.desc} ${userCardData.city ? '• ' + userCardData.city : ''}</p>
                </div>
                <div class="uc-actions">
                    <button class="uc-btn" onclick="openCardMenu()" aria-label="Actions">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </button>
                </div>
            </div>
            <button class="btn-create" onclick="openCreator()" style="margin-top: 10px; background: rgba(255,255,255,0.1); color: white; box-shadow: none;">+ Создать еще одну</button>
        `;
    } else {
        container.innerHTML = `
            <div class="empty-state-viz">
                <div class="mini-card"><div class="mc-header"></div><div class="mc-body"><div class="mc-block"></div><div class="mc-block"></div></div><div class="mc-footer"></div></div>
                <div class="mini-card"><div class="mc-header" style="background: var(--color-blue)"></div><div class="mc-body"><div class="mc-block"></div><div class="mc-block"></div><div class="mc-block"></div></div><div class="mc-footer"></div></div>
                <div class="mini-card"><div class="mc-header" style="background: var(--color-blue)"></div><div class="mc-body"><div class="mc-block"></div><div class="mc-block"></div></div><div class="mc-footer"></div></div>
            </div>
            <div class="empty-text-block">
                <h3>${t.empty_h3}</h3>
                <p>${t.empty_p}</p>
            </div>
            <button class="btn-create" onclick="openCreator()">${t.btn_create}</button>
        `;
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

// Initial Setup
window.onload = function() {
    loadUserData();
    nextScreen(1);
    applyTranslations();
};