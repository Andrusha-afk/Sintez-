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
        cr_title_step1: "О бизнесе",
        cr_subtitle_step1: "Расскажи немного о себе. Это будет видно всем.",
        cr_label_name: "Имя или название компании", cr_ph_name: "напр. Студия Анны",
        cr_label_desc: "Подзаголовок", cr_ph_desc: "чем ты занимаешься",
        cr_label_city: "Город", cr_ph_city: "напр. Москва", // NEW
        btn_next_arrow: "Далее →", btn_finish: "Готово",
        action_edit: "Редактировать", action_share: "Поделиться", action_delete: "Удалить навсегда",
        toast_copy: "Ссылка скопирована!", toast_deleted: "Визитка удалена",
        bl_title: "Что ", bl_title_grad: "показать", bl_desc: "Отметь нужные блоки — соберу визитку из них. Остальное добавишь потом.",
        blk_links: "Ссылки-кнопки", blk_socials: "Соцсети", blk_hours: "Часы работы", blk_cta: "Кнопка-призыв",
        blk_contacts: "Контакты", blk_price: "Прайс / Цены", blk_discounts: "Скидки / Акции",
        blk_reviews: "Отзывы", blk_faq: "Вопрос-Ответ", blk_facts: "Цифры / Факты",
        blk_video: "Видео", blk_share: "Поделиться", blk_gallery: "Фотогалерея", blk_map: "Карта + Такси",
        btn_back: "Назад", btn_assemble: "Далее",
        pv_title: "Твоя визитка", pv_desc: "Настрой шапку и блоки. Нажми на аватар, чтобы изменить формат.",
        edit_modal_title: "Редактировать блок", btn_save: "Сохранить",
        preview_placeholder: "Содержимое блока",
        modal_header_title: "Шапка", header_format_label: "Формат шапки",
        tab_avatar: "Аватар", tab_cover: "Обложка", tab_banner: "Баннер", tab_carousel: "Карусель",
        desc_avatar: "Круглый аватар — иконка, эмодзи или фото. Без обложки.",
        btn_upload_device: "📷 Загрузить фото с устройства", btn_upload_tg: " Взять фото из MAX",
        upload_hint: "Фото сохранится в визитке. Поменяешь аватар в MAX — нажми ещё раз.",
        or_link: "...или ссылка на фото",
        desc_cover: "Широкая обложка на всю ширину, имя под ней. Без аватара.",
        ph_company_name: "Имя или название компании", hint_example: "Пример — загрузите своё фото ниже",
        lbl_cover: "ОБЛОЖКА", btn_upload_cover: "️ Загрузить обложку", lbl_cover_link: "Обложка — ссылка на фото",
        desc_banner: "Длинный баннер с текстом внутри.", banner_placeholder: "Баннер", btn_upload_banner: "🖼️ Загрузить баннер",
        desc_carousel: "Несколько фото в ряд.", btn_upload_carousel: "️ Загрузить фото"
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
        cr_title_step1: "About Business",
        cr_subtitle_step1: "Tell us a bit about yourself. This will be visible to everyone.",
        cr_label_name: "Name or company title", cr_ph_name: "e.g. Anna's Studio",
        cr_label_desc: "Subtitle", cr_ph_desc: "what you do",
        cr_label_city: "City", cr_ph_city: "e.g. Moscow", // NEW
        btn_next_arrow: "Next →", btn_finish: "Finish",
        action_edit: "Edit", action_share: "Share", action_delete: "Delete forever",
        toast_copy: "Link copied!", toast_deleted: "Card deleted",
        bl_title: "What to ", bl_title_grad: "show", bl_desc: "Select blocks to build your card. Add more later.",
        blk_links: "Links", blk_socials: "Socials", blk_hours: "Working hours", blk_cta: "Call-to-action",
        blk_contacts: "Contacts", blk_price: "Price list", blk_discounts: "Discounts",
        blk_reviews: "Reviews", blk_faq: "Q&A", blk_facts: "Facts & Figures",
        blk_video: "Video", blk_share: "Share", blk_gallery: "Gallery", blk_map: "Map + Taxi",
        btn_back: "Back", btn_assemble: "Next",
        pv_title: "Your card", pv_desc: "Adjust header and blocks. Tap avatar to change format.",
        edit_modal_title: "Edit block", btn_save: "Save",
        preview_placeholder: "Block content",
        modal_header_title: "Header", header_format_label: "Header format",
        tab_avatar: "Avatar", tab_cover: "Cover", tab_banner: "Banner", tab_carousel: "Carousel",
        desc_avatar: "Round avatar — icon, emoji or photo. No cover.",
        btn_upload_device: "📷 Upload from device", btn_upload_tg: "👤 Get from MAX",
        upload_hint: "Photo will be saved. Change avatar in MAX — tap again.",
        or_link: "...or photo link",
        desc_cover: "Wide cover full width, name below it. No avatar.",
        ph_company_name: "Company name or title", hint_example: "Example — upload your photo below",
        lbl_cover: "COVER", btn_upload_cover: "🖼️ Upload cover", lbl_cover_link: "Cover — photo link",
        desc_banner: "Long banner with text inside.", banner_placeholder: "Banner", btn_upload_banner: "🖼️ Upload banner",
        desc_carousel: "Several photos in a row.", btn_upload_carousel: "️ Upload photos"
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
        cr_title_step1: "Über das Unternehmen",
        cr_subtitle_step1: "Erzählen Sie etwas über sich. Das wird allen angezeigt.",
        cr_label_name: "Name oder Firmenname", cr_ph_name: "z.B. Annas Studio",
        cr_label_desc: "Untertitel", cr_ph_desc: "was du machst",
        cr_label_city: "Stadt", cr_ph_city: "z.B. Moskau", // NEW
        btn_next_arrow: "Weiter →", btn_finish: "Fertig",
        action_edit: "Bearbeiten", action_share: "Teilen", action_delete: "Für immer löschen",
        toast_copy: "Link kopiert!", toast_deleted: "Karte gelöscht",
        bl_title: "Was ", bl_title_grad: "zeigen?", bl_desc: "Wähle Blöcke für deine Karte. Den Rest fügst du später hinzu.",
        blk_links: "Links", blk_socials: "Soziale Netzwerke", blk_hours: "Öffnungszeiten", blk_cta: "Handlungsaufruf",
        blk_contacts: "Kontakte", blk_price: "Preisliste", blk_discounts: "Rabatte",
        blk_reviews: "Bewertungen", blk_faq: "FAQ", blk_facts: "Fakten & Zahlen",
        blk_video: "Video", blk_share: "Teilen", blk_gallery: "Galerie", blk_map: "Karte + Taxi",
        btn_back: "Zurück", btn_assemble: "Weiter",
        pv_title: "Deine Karte", pv_desc: "Kopfzeile und Blöcke anpassen. Tippe auf Avatar, um Format zu ändern.",
        edit_modal_title: "Block bearbeiten", btn_save: "Speichern",
        preview_placeholder: "Blockinhalt",
        modal_header_title: "Kopfzeile", header_format_label: "Format der Kopfzeile",
        tab_avatar: "Avatar", tab_cover: "Titelbild", tab_banner: "Banner", tab_carousel: "Karussell",
        desc_avatar: "Runder Avatar — Symbol, Emoji oder Foto. Ohne Titelbild.",
        btn_upload_device: "📷 Foto vom Gerät laden", btn_upload_tg: " Aus MAX holen",
        upload_hint: "Foto wird gespeichert. Ändere Avatar in MAX — tippe erneut.",
        or_link: "...oder Fotolink",
        desc_cover: "Breites Titelbild über die ganze Breite, Name darunter. Kein Avatar.",
        ph_company_name: "Firmenname oder Titel", hint_example: "Beispiel — lade dein Foto unten hoch",
        lbl_cover: "TITELBILD", btn_upload_cover: "🖼️ Titelbild laden", lbl_cover_link: "Titelbild — Fotolink",
        desc_banner: "Langes Banner mit Text darin.", banner_placeholder: "Banner", btn_upload_banner: "🖼️ Banner laden",
        desc_carousel: "Mehrere Fotos in einer Reihe.", btn_upload_carousel: "️ Fotos laden"
    }
};

let currentLang = 'ru';
let hasUserCards = false; 
let userCardData = null;
let selectedBlocks = {}; 
let currentHeaderFormat = 'avatar'; // 'avatar', 'cover', 'banner', 'carousel'
let currentEditingBlockId = null;

// --- LOCAL STORAGE HELPERS ---
function saveUserData() {
    const userData = {
        lang: currentLang,
        hasCards: hasUserCards,
        cardData: userCardData,
        blocks: selectedBlocks,
        headerFormat: currentHeaderFormat
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
            currentHeaderFormat = parsed.headerFormat || 'avatar';
            
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

function startCreationFlow() {
    // Step 1: Go to creator (About Business)
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-creator').classList.add('active');
    updateHeader('creator');
    
    // Reset inputs if starting fresh
    if (!userCardData) {
        document.getElementById('input-name').value = '';
        document.getElementById('input-desc').value = '';
        document.getElementById('input-city').value = '';
    } else {
        document.getElementById('input-name').value = userCardData.name || '';
        document.getElementById('input-desc').value = userCardData.desc || '';
        document.getElementById('input-city').value = userCardData.city || '';
    }
}

function goToBlocksSelection() {
    const name = document.getElementById('input-name').value.trim();
    const desc = document.getElementById('input-desc').value.trim();
    const city = document.getElementById('input-city').value.trim(); // NEW

    if (!name) {
        alert(currentLang === 'ru' ? 'Введите название или имя' : 'Enter name or title');
        return;
    }

    // Save basic info
    if (!userCardData) userCardData = {};
    userCardData.name = name;
    userCardData.desc = desc;
    userCardData.city = city; // NEW

    // Step 2: Go to blocks selection
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-blocks').classList.add('active');
    updateHeader('blocks');
    
    // Sync checkboxes with saved state
    const checkboxes = document.querySelectorAll('.toggle-switch input');
    checkboxes.forEach(cb => {
        const key = cb.getAttribute('data-block');
        if (selectedBlocks[key]) {
            cb.checked = selectedBlocks[key].visible;
        } else {
            // Initialize if not exists
            selectedBlocks[key] = { visible: cb.checked, title: null };
        }
    });
}

function finishBlocksSelection() {
    // Save block selections from toggles
    const checkboxes = document.querySelectorAll('.toggle-switch input');
    checkboxes.forEach(cb => {
        const key = cb.getAttribute('data-block');
        if (!selectedBlocks[key]) selectedBlocks[key] = {};
        selectedBlocks[key].visible = cb.checked;
    });

    // Step 3: Go to preview screen
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-preview').classList.add('active');
    updateHeader('preview');
    renderPreview();
}

function goBackFromBlocks() {
    // Return to creator
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-creator').classList.add('active');
    updateHeader('creator');
}

function goBackFromPreview() {
    // Return to blocks selection
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-blocks').classList.add('active');
    updateHeader('blocks');
}

function openCreator(isEdit = false) {
    // If editing existing card, go straight to creator
    if (isEdit && userCardData) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById('screen-creator').classList.add('active');
        updateHeader('creator');
        
        document.getElementById('input-name').value = userCardData.name || '';
        document.getElementById('input-desc').value = userCardData.desc || '';
        document.getElementById('input-city').value = userCardData.city || '';
    } else {
        startCreationFlow();
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
    } else if (document.getElementById('screen-preview').classList.contains('active')) {
        goBackFromPreview();
    } else if (document.getElementById('screen-blocks').classList.contains('active')) {
        goBackFromBlocks();
    } else if (document.getElementById('screen-creator').classList.contains('active')) {
        goToDashboard();
    }
}

// Header State Management
function updateHeader(state) {
    const backBtn = document.getElementById('globalBackBtn');
    const logo = document.getElementById('mainLogo');
    const title = document.getElementById('pageTitle');
    const menuBtn = document.getElementById('globalMenuBtn');
    const langSwitch = document.querySelector('.lang-switch-header');

    const showLangSwitch = state !== 'analytics';
    
    if (state === 'onboarding' || state === 'blocks' || state === 'preview' || state === 'creator') {
        backBtn.style.display = (state !== 'onboarding') ? 'flex' : 'none';
        logo.style.display = 'none';
        title.style.display = 'none';
        menuBtn.style.display = 'none';
        
        if (showLangSwitch) {
            langSwitch.style.display = 'flex';
            langSwitch.style.background = (state === 'onboarding') ? 'rgba(255,255,255,0.1)' : 'transparent';
        } else {
            langSwitch.style.display = 'none';
        }
    } 
    else if (state === 'dashboard') {
        backBtn.style.display = 'none';
        logo.style.display = 'flex';
        title.style.display = 'none';
        menuBtn.style.display = 'block';
        
        if (showLangSwitch) {
            langSwitch.style.display = 'flex';
            langSwitch.style.background = 'rgba(255,255,255,0.1)';
        } else {
            langSwitch.style.display = 'none';
        }
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

// Preview Logic
function renderPreview() {
    const container = document.getElementById('preview-list-container');
    container.innerHTML = '';
    const t = translations[currentLang];

    // 1. Render Header Card
    const headerCard = document.createElement('div');
    headerCard.className = 'preview-header-card';
    headerCard.onclick = openHeaderModal;
    
    let coverStyle = '';
    let avatarStyle = '';
    let avatarDisplay = 'flex';
    
    if (currentHeaderFormat === 'cover' && userCardData && userCardData.coverUrl) {
        coverStyle = `background-image: url(${userCardData.coverUrl});`;
        avatarDisplay = 'none'; // No avatar in cover mode
    } else if (userCardData && userCardData.avatarUrl) {
        avatarStyle = `background-image: url(${userCardData.avatarUrl});`;
    }

    headerCard.innerHTML = `
        <div class="header-preview-cover" style="${coverStyle}"></div>
        <div class="header-preview-avatar" style="display: ${avatarDisplay}; ${avatarStyle}">
            ${!userCardData?.avatarUrl ? '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>' : ''}
        </div>
        <div class="header-preview-info">
            <h3>${userCardData?.name || t.cr_ph_name}</h3>
            <p>${userCardData?.desc || t.cr_ph_desc}</p>
        </div>
        <div class="edit-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            <span>${t.modal_header_title}</span>
        </div>
    `;
    container.appendChild(headerCard);

    // 2. Render Block Cards
    const blockKeys = ['links', 'socials', 'hours', 'cta', 'contacts', 'price', 'discounts', 'reviews', 'faq', 'facts', 'video', 'share', 'gallery', 'map'];
    
    blockKeys.forEach(key => {
        const blockData = selectedBlocks[key];
        if (blockData && blockData.visible) {
            const defaultTitleKey = `blk_${key}`;
            const title = blockData.title || t[defaultTitleKey] || key;
            const isVisible = blockData.visible !== false;

            const card = document.createElement('div');
            card.className = `preview-card ${isVisible ? '' : 'hidden-block'}`;
            card.id = `preview-card-${key}`;
            
            card.innerHTML = `
                <div class="preview-card-header">
                    <div class="preview-card-title">${title}</div>
                    <div class="preview-card-actions">
                        <button class="action-btn ${isVisible ? 'active-eye' : ''}" onclick="toggleBlockVisibility('${key}')">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                        </button>
                        <button class="action-btn" onclick="openEditBlock('${key}')">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="preview-card-body">
                    ${t.preview_placeholder}
                </div>
            `;
            container.appendChild(card);
        }
    });

    if (container.children.length <= 1) { // Only header card
        const emptyMsg = document.createElement('div');
        emptyMsg.style.textAlign = 'center';
        emptyMsg.style.color = 'var(--text-secondary)';
        emptyMsg.style.padding = '40px 0';
        emptyMsg.innerText = t.empty_h3;
        container.appendChild(emptyMsg);
    }
}

function toggleBlockVisibility(key) {
    if (!selectedBlocks[key]) selectedBlocks[key] = {};
    selectedBlocks[key].visible = !selectedBlocks[key].visible;
    
    const card = document.getElementById(`preview-card-${key}`);
    const btn = card.querySelector('.action-btn'); // First button is eye
    
    if (selectedBlocks[key].visible) {
        card.classList.remove('hidden-block');
        btn.classList.add('active-eye');
    } else {
        card.classList.add('hidden-block');
        btn.classList.remove('active-eye');
    }
    
    saveUserData();
}

// Edit Block Modal Logic
const editModalOverlay = document.getElementById('editModalOverlay');
const editModalSheet = document.getElementById('editModalSheet');
const editInput = document.getElementById('edit-block-input');

function openEditBlock(key) {
    currentEditingBlockId = key;
    const blockData = selectedBlocks[key] || {};
    const t = translations[currentLang];
    const defaultTitle = t[`blk_${key}`] || key;
    
    editInput.value = blockData.title || defaultTitle;
    
    editModalOverlay.classList.add('open');
    editModalSheet.classList.add('open');
}

function closeEditModal() {
    editModalOverlay.classList.remove('open');
    editModalSheet.classList.remove('open');
    currentEditingBlockId = null;
}

function saveBlockEdit() {
    if (currentEditingBlockId) {
        const newTitle = editInput.value.trim();
        if (!selectedBlocks[currentEditingBlockId]) selectedBlocks[currentEditingBlockId] = {};
        
        const t = translations[currentLang];
        const defaultTitle = t[`blk_${currentEditingBlockId}`];
        
        if (newTitle === defaultTitle) {
            delete selectedBlocks[currentEditingBlockId].title;
        } else {
            selectedBlocks[currentEditingBlockId].title = newTitle;
        }
        
        saveUserData();
        renderPreview();
        closeEditModal();
    }
}

// Header Modal Logic
const headerModalOverlay = document.getElementById('headerModalOverlay');
const headerModalSheet = document.getElementById('headerModalSheet');
// --- ОБНОВЛЕННАЯ ФУНКЦИЯ ОТКРЫТИЯ МОДАЛКИ ---
function openHeaderModal() {
    headerModalOverlay.classList.add('open');
    headerModalSheet.classList.add('open');
    switchHeaderTab(currentHeaderFormat);
    
    // Заполняем поля текущими значениями
    const nameInput = document.getElementById('modal-input-name');
    const descInput = document.getElementById('modal-input-desc');
    
    if (userCardData) {
        nameInput.value = userCardData.name || '';
        descInput.value = userCardData.desc || '';
        
        // Обновляем превью картинок
        document.getElementById('input-avatar-url').value = userCardData.avatarUrl || '';
        document.getElementById('input-cover-url').value = userCardData.coverUrl || '';
        updateAvatarFromUrl(userCardData.avatarUrl || '');
        updateCoverFromUrl(userCardData.coverUrl || '');
    } else {
        nameInput.value = '';
        descInput.value = '';
    }
}

function closeHeaderModal() {
    // Сохраняем текст перед закрытием
    const nameVal = document.getElementById('modal-input-name').value.trim();
    const descVal = document.getElementById('modal-input-desc').value.trim();

    if (!userCardData) userCardData = {};
    
    // Обновляем данные только если они не пустые (или оставляем как есть, если хотите разрешать очистку)
    if (nameVal) userCardData.name = nameVal;
    if (descVal) userCardData.desc = descVal;
    
    saveUserData(); // Сохраняем в localStorage
    
    headerModalOverlay.classList.remove('open');
    headerModalSheet.classList.remove('open');
    
    // Перерисовываем превью с новыми данными
    renderPreview();
}

function switchHeaderTab(tab) {
    currentHeaderFormat = tab;
    
    document.querySelectorAll('.header-tab').forEach(t => t.classList.remove('active'));
    const activeTabBtn = Array.from(document.querySelectorAll('.header-tab')).find(t => t.getAttribute('onclick').includes(`'${tab}'`));
    if (activeTabBtn) activeTabBtn.classList.add('active');
    
    document.querySelectorAll('.header-tab-content').forEach(c => c.classList.add('hidden'));
    document.getElementById(`tab-content-${tab}`).classList.remove('hidden');
    
    if (tab === 'cover') {
        updateCoverFromUrl(document.getElementById('input-cover-url').value);
    }
}

function updateAvatarFromUrl(url) {
    const modalAvatar = document.getElementById('modal-avatar-img');
    
    if (url) {
        modalAvatar.style.backgroundImage = `url(${url})`;
        if (!userCardData) userCardData = {};
        userCardData.avatarUrl = url;
    } else {
        modalAvatar.style.backgroundImage = 'none';
        if (userCardData) delete userCardData.avatarUrl;
    }
}

function updateCoverFromUrl(url) {
    const modalCoverBg = document.getElementById('modal-cover-preview-bg');
    
    if (url) {
        modalCoverBg.style.backgroundImage = `url(${url})`;
        if (!userCardData) userCardData = {};
        userCardData.coverUrl = url;
    } else {
        modalCoverBg.style.backgroundImage = 'none';
        if (userCardData) delete userCardData.coverUrl;
    }
}

function finalizeCard() {
    saveUserData();
    hasUserCards = true;
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

// --- ЛОГИКА ЗАГРУЗКИ ФОТО ---

// 1. Загрузка с устройства
const deviceInput = document.getElementById('device-upload-input');
if (deviceInput) {
    deviceInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            // Проверка типа файла
            if (!['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
                alert('Пожалуйста, выберите изображение в формате JPG или PNG');
                return;
            }
            
            // Чтение файла и отображение
            const reader = new FileReader();
            reader.onload = function(event) {
                const base64String = event.target.result;
                updateAvatarFromUrl(base64String); // Используем существующую функцию
                showToast('Фото загружено с устройства');
            };
            reader.readAsDataURL(file);
        }
        // Сброс значения инпута, чтобы можно было выбрать тот же файл повторно
        this.value = '';
    });
}

// 2. Загрузка из профиля MAX (Имитация)
function handleMaxProfilePhoto() {
    // В реальном приложении здесь был бы вызов Telegram WebApp API:
    // const user = window.Telegram.WebApp.initDataUnsafe.user;
    // if (user && user.photo_url) { ... }
    
    // Для демонстрации используем заглушку или случайное фото
    const mockProfilePhotos = [
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop'
    ];
    
    const randomPhoto = mockProfilePhotos[Math.floor(Math.random() * mockProfilePhotos.length)];
    
    updateAvatarFromUrl(randomPhoto);
    showToast('Фото взято из профиля MAX');
}

// Убедитесь, что функция updateAvatarFromUrl сохраняет данные в userCardData
// (она уже есть в вашем коде, но проверьте, что она обновляет и превью в модалке)
function updateAvatarFromUrl(url) {
    const modalAvatar = document.getElementById('modal-avatar-img');
    if (url) {
        modalAvatar.style.backgroundImage = `url(${url})`;
        modalAvatar.innerHTML = ''; // Убираем иконку-заглушку
        
        if (!userCardData) userCardData = {};
        userCardData.avatarUrl = url;
        
        // Также обновляем поле ссылки, если оно есть
        const avatarUrlInput = document.getElementById('input-avatar-url');
        if (avatarUrlInput) avatarUrlInput.value = url;
    } else {
        modalAvatar.style.backgroundImage = 'none';
        modalAvatar.innerHTML = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
        if (userCardData) delete userCardData.avatarUrl;
    }
}