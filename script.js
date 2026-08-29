// --- КОНФИГУРАЦИЯ СОЦСЕТЕЙ (MAX вместо Telegram) ---
const socialNetworksConfig = [
    { 
        id: 'max', 
        name: 'MAX', 
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>', 
        placeholder: '+7 (999) 000-00-00' 
    },
    { 
        id: 'instagram', 
        name: 'Instagram', 
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>', 
        placeholder: 'https://instagram.com/username' 
    },
    { 
        id: 'whatsapp', 
        name: 'WhatsApp', 
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>', 
        placeholder: 'https://wa.me/number' 
    },
    { 
        id: 'youtube', 
        name: 'YouTube', 
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>', 
        placeholder: 'https://youtube.com/channel' 
    },
    { 
        id: 'facebook', 
        name: 'Facebook', 
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>', 
        placeholder: 'https://facebook.com/username' 
    },
    { 
        id: 'threads', 
        name: 'Threads', 
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6z"/></svg>', 
        placeholder: 'https://threads.net/@username' 
    },
    { 
        id: 'linkedin', 
        name: 'LinkedIn', 
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>', 
        placeholder: 'https://linkedin.com/in/username' 
    },
    { 
        id: 'website', 
        name: 'Сайт', 
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>', 
        placeholder: 'https://твой-сайт.com' 
    }
];

// --- TRANSLATIONS ---
const translations = {
    ru: {
        s1_title: "Твоя визитка ", s1_title_grad: "внутри MAX", s1_desc: "Открывается по ссылке за секунду.",
        s2_title: "Собирается ", s2_title_grad: "из блоков", s2_desc: "Прайс, отзывы, фото. Порядок задаёшь ты.",
        s3_title: "Свой бот и своя<br>ссылка", s3_desc: "Ссылку можно отправить в переписке.",
        btn_skip: "Пропустить", btn_next: "Далее", btn_start: "Начать",
        dash_title: "Твои визитки", dash_subtitle: "Открой, чтобы изменить.",
        label_my_cards: "МОИ ВИЗИТКИ", empty_h3: "Здесь появятся твои визитки", 
        empty_p: "Первая собирается за несколько минут.", btn_create: "Создать свою визитку",
        info_box: "Пример. Цифры появятся после создания.",
        menu_stats: "Статистика", menu_stats_sub: "Просмотры и заявки",
        analytics_empty: "Пока нет просмотров.",
        menu_title: "Меню", menu_welcome: "Приветствие", menu_mycards: "Мои визитки",
        menu_footer: "Приветствие показано при первом входе.",
        no_cards_msg: "Нет визиток", page_analytics: "Аналитика",
        cr_title_step1: "О бизнесе", cr_subtitle_step1: "Расскажи о себе.",
        cr_label_name: "Имя или компания", cr_ph_name: "напр. Студия Анны",
        cr_label_desc: "Подзаголовок", cr_ph_desc: "чем занимаешься",
        cr_label_city: "Город", cr_ph_city: "напр. Москва",
        btn_next_arrow: "Далее →", btn_finish: "Готово",
        action_edit: "Редактировать", action_share: "Поделиться", action_delete: "Удалить",
        toast_copy: "Ссылка скопирована!", toast_deleted: "Удалено",
        bl_title: "Что ", bl_title_grad: "показать", bl_desc: "Выбери блоки.",
        blk_links: "Ссылки", blk_socials: "Соцсети", blk_hours: "Часы работы", blk_cta: "Призыв",
        blk_contacts: "Контакты", blk_price: "Прайс", blk_discounts: "Скидки",
        blk_reviews: "Отзывы", blk_faq: "FAQ", blk_facts: "Факты",
        blk_video: "Видео", blk_share: "Поделиться", blk_gallery: "Галерея", blk_map: "Карта",
        btn_back: "Назад", btn_assemble: "Далее",
        pv_title: "Твоя визитка", pv_desc: "Нажми на шапку, чтобы изменить формат.",
        edit_modal_title: "Блок", btn_save: "Сохранить", preview_placeholder: "Содержимое",
        modal_header_title: "Шапка", header_format_label: "Формат",
        tab_avatar: "Аватар", tab_cover: "Обложка", tab_banner: "Баннер", tab_carousel: "Карусель",
        desc_avatar: "Круглый аватар.", btn_upload_device: "📷 Загрузить", btn_upload_tg: "👤 Из MAX",
        upload_hint: "Фото сохранится.", or_link: "...или ссылка",
        desc_cover: "Широкая обложка.", ph_company_name: "Имя компании", hint_example: "Пример ниже",
        lbl_cover: "ОБЛОЖКА", btn_upload_cover: "Загрузить", lbl_cover_link: "Ссылка на фото",
        desc_banner: "Обложка + аватар поверх.", banner_placeholder: "Баннер", btn_upload_banner: "Загрузить",
        desc_carousel: "Листаются свайпом."
    },
    en: {
        s1_title: "Your card ", s1_title_grad: "inside MAX", s1_desc: "Opens via link instantly.",
        s2_title: "Built from ", s2_title_grad: "blocks", s2_desc: "Price, reviews, photos. Drag to reorder.",
        s3_title: "Own bot & link", s3_desc: "Share link anywhere.",
        btn_skip: "Skip", btn_next: "Next", btn_start: "Start",
        dash_title: "Your cards", dash_subtitle: "Open to edit.",
        label_my_cards: "MY CARDS", empty_h3: "Cards appear here", empty_p: "First one takes minutes.",
        btn_create: "Create card", info_box: "Example view.",
        menu_stats: "Stats", menu_stats_sub: "Views & clicks",
        analytics_empty: "No views yet.", menu_title: "Menu", menu_welcome: "Welcome", menu_mycards: "My cards",
        menu_footer: "Welcome shown once.", no_cards_msg: "No cards", page_analytics: "Analytics",
        cr_title_step1: "About", cr_subtitle_step1: "Tell about yourself.",
        cr_label_name: "Name/Company", cr_ph_name: "e.g. Anna's Studio",
        cr_label_desc: "Subtitle", cr_ph_desc: "what you do",
        cr_label_city: "City", cr_ph_city: "e.g. Moscow",
        btn_next_arrow: "Next →", btn_finish: "Finish",
        action_edit: "Edit", action_share: "Share", action_delete: "Delete",
        toast_copy: "Copied!", toast_deleted: "Deleted",
        bl_title: "What to ", bl_title_grad: "show", bl_desc: "Select blocks.",
        blk_links: "Links", blk_socials: "Socials", blk_hours: "Hours", blk_cta: "CTA",
        blk_contacts: "Contacts", blk_price: "Price", blk_discounts: "Discounts",
        blk_reviews: "Reviews", blk_faq: "FAQ", blk_facts: "Facts",
        blk_video: "Video", blk_share: "Share", blk_gallery: "Gallery", blk_map: "Map",
        btn_back: "Back", btn_assemble: "Next",
        pv_title: "Your card", pv_desc: "Tap header to change format.",
        edit_modal_title: "Block", btn_save: "Save", preview_placeholder: "Content",
        modal_header_title: "Header", header_format_label: "Format",
        tab_avatar: "Avatar", tab_cover: "Cover", tab_banner: "Banner", tab_carousel: "Carousel",
        desc_avatar: "Round avatar.", btn_upload_device: " Upload", btn_upload_tg: " From MAX",
        upload_hint: "Photo saved.", or_link: "...or link",
        desc_cover: "Wide cover.", ph_company_name: "Company name", hint_example: "Example below",
        lbl_cover: "COVER", btn_upload_cover: "Upload", lbl_cover_link: "Photo link",
        desc_banner: "Cover + Avatar overlay.", banner_placeholder: "Banner", btn_upload_banner: "Upload",
        desc_carousel: "Swipeable photos."
    },
    de: {
        s1_title: "Deine Karte ", s1_title_grad: "in MAX", s1_desc: "Öffnet per Link sofort.",
        s2_title: "Aus ", s2_title_grad: "Blöcken", s2_desc: "Preise, Bewertungen. Sortieren per Drag.",
        s3_title: "Eigener Bot & Link", s3_desc: "Link überall teilen.",
        btn_skip: "Überspringen", btn_next: "Weiter", btn_start: "Start",
        dash_title: "Deine Karten", dash_subtitle: "Zum Bearbeiten öffnen.",
        label_my_cards: "MEINE KARTEN", empty_h3: "Karten erscheinen hier", empty_p: "Erste in Minuten fertig.",
        btn_create: "Karte erstellen", info_box: "Beispielansicht.",
        menu_stats: "Statistik", menu_stats_sub: "Aufrufe",
        analytics_empty: "Keine Aufrufe.", menu_title: "Menü", menu_welcome: "Begrüßung", menu_mycards: "Meine Karten",
        menu_footer: "Begrüßung beim Start.", no_cards_msg: "Keine Karten", page_analytics: "Analytik",
        cr_title_step1: "Über dich", cr_subtitle_step1: "Erzähl etwas.",
        cr_label_name: "Name/Firma", cr_ph_name: "z.B. Annas Studio",
        cr_label_desc: "Untertitel", cr_ph_desc: "was du machst",
        cr_label_city: "Stadt", cr_ph_city: "z.B. Moskau",
        btn_next_arrow: "Weiter →", btn_finish: "Fertig",
        action_edit: "Bearbeiten", action_share: "Teilen", action_delete: "Löschen",
        toast_copy: "Kopiert!", toast_deleted: "Gelöscht",
        bl_title: "Was ", bl_title_grad: "zeigen?", bl_desc: "Blöcke wählen.",
        blk_links: "Links", blk_socials: "Soziale", blk_hours: "Zeiten", blk_cta: "Aufruf",
        blk_contacts: "Kontakt", blk_price: "Preise", blk_discounts: "Rabatte",
        blk_reviews: "Bewertungen", blk_faq: "FAQ", blk_facts: "Fakten",
        blk_video: "Video", blk_share: "Teilen", blk_gallery: "Galerie", blk_map: "Karte",
        btn_back: "Zurück", btn_assemble: "Weiter",
        pv_title: "Deine Karte", pv_desc: "Tippe Header für Format.",
        edit_modal_title: "Block", btn_save: "Speichern", preview_placeholder: "Inhalt",
        modal_header_title: "Header", header_format_label: "Format",
        tab_avatar: "Avatar", tab_cover: "Titelbild", tab_banner: "Banner", tab_carousel: "Karussell",
        desc_avatar: "Runder Avatar.", btn_upload_device: "📷 Laden", btn_upload_tg: "👤 Aus MAX",
        upload_hint: "Foto gespeichert.", or_link: "...oder Link",
        desc_cover: "Breites Bild.", ph_company_name: "Firmenname", hint_example: "Beispiel unten",
        lbl_cover: "TITELBILD", btn_upload_cover: "Laden", lbl_cover_link: "Foto-Link",
        desc_banner: "Bild + Avatar darüber.", banner_placeholder: "Banner", btn_upload_banner: "Laden",
        desc_carousel: "Fotos zum Wischen."
    }
};

let currentLang = 'ru';
let hasUserCards = false; 
let userCardData = null;
let selectedBlocks = {}; 
let currentHeaderFormat = 'avatar'; 
let currentEditingBlockId = null;

// --- LOCAL STORAGE ---
function saveUserData() {
    const userData = { lang: currentLang, hasCards: hasUserCards, cardData: userCardData, blocks: selectedBlocks, headerFormat: currentHeaderFormat };
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

// Language Switcher
document.querySelectorAll('.lang-btn-header').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.lang-btn-header').forEach(b => b.classList.remove('active'));
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
    const pageTitleEl = document.getElementById('pageTitle');
    if(pageTitleEl) pageTitleEl.innerText = t.page_analytics;
}

// Navigation Logic
function nextScreen(screenNum) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(`screen-${screenNum}`);
    if(target) target.classList.add('active');
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
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-creator').classList.add('active');
    updateHeader('creator');
    
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
    const city = document.getElementById('input-city').value.trim();

    if (!name) { alert(currentLang === 'ru' ? 'Введите название' : 'Enter name'); return; }

    if (!userCardData) userCardData = {};
    userCardData.name = name;
    userCardData.desc = desc;
    userCardData.city = city;

    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-blocks').classList.add('active');
    updateHeader('blocks');
    
    document.querySelectorAll('.toggle-switch input').forEach(cb => {
        const key = cb.getAttribute('data-block');
        if (selectedBlocks[key]) cb.checked = selectedBlocks[key].visible;
        else selectedBlocks[key] = { visible: cb.checked, title: null };
    });
}

function finishBlocksSelection() {
    document.querySelectorAll('.toggle-switch input').forEach(cb => {
        const key = cb.getAttribute('data-block');
        if (!selectedBlocks[key]) selectedBlocks[key] = {};
        selectedBlocks[key].visible = cb.checked;
    });

    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-preview').classList.add('active');
    updateHeader('preview');
    renderPreview();
}

function goBackFromBlocks() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-creator').classList.add('active');
    updateHeader('creator');
}

function goBackFromPreview() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-blocks').classList.add('active');
    updateHeader('blocks');
}

function openCreator(isEdit = false) {
    if (isEdit && userCardData) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById('screen-creator').classList.add('active');
        updateHeader('creator');
        document.getElementById('input-name').value = userCardData.name || '';
        document.getElementById('input-desc').value = userCardData.desc || '';
        document.getElementById('input-city').value = userCardData.city || '';
    } else { startCreationFlow(); }
}

function showAnalytics() {
    closeMenu();
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-analytics').classList.add('active');
    updateHeader('analytics');
}

function goBack() {
    if (document.getElementById('screen-analytics').classList.contains('active')) goToDashboard();
    else if (document.getElementById('screen-preview').classList.contains('active')) goBackFromPreview();
    else if (document.getElementById('screen-blocks').classList.contains('active')) goBackFromBlocks();
    else if (document.getElementById('screen-creator').classList.contains('active')) goToDashboard();
}

// Header State
function updateHeader(state) {
    const backBtn = document.getElementById('globalBackBtn');
    const logo = document.getElementById('mainLogo');
    const title = document.getElementById('pageTitle');
    const menuBtn = document.getElementById('globalMenuBtn');
    const langSwitch = document.querySelector('.lang-switch-header');
    const showLangSwitch = state !== 'analytics';
    
    if (['onboarding', 'blocks', 'preview', 'creator'].includes(state)) {
        backBtn.style.display = (state !== 'onboarding') ? 'flex' : 'none';
        logo.style.display = 'none'; title.style.display = 'none'; menuBtn.style.display = 'none';
        if (showLangSwitch) {
            langSwitch.style.display = 'flex';
            langSwitch.style.background = (state === 'onboarding') ? 'rgba(255,255,255,0.1)' : 'transparent';
        } else langSwitch.style.display = 'none';
    } else if (state === 'dashboard') {
        backBtn.style.display = 'none'; logo.style.display = 'flex'; title.style.display = 'none'; menuBtn.style.display = 'block';
        if (showLangSwitch) { langSwitch.style.display = 'flex'; langSwitch.style.background = 'rgba(255,255,255,0.1)'; } 
        else langSwitch.style.display = 'none';
    } else if (state === 'analytics') {
        backBtn.style.display = 'flex'; logo.style.display = 'none'; title.style.display = 'block'; menuBtn.style.display = 'none'; langSwitch.style.display = 'none';
    }
}

// Modals
function openMenu() { document.getElementById('modalOverlay').classList.add('open'); document.getElementById('modalSheet').classList.add('open'); }
function closeMenu() { document.getElementById('modalOverlay').classList.remove('open'); document.getElementById('modalSheet').classList.remove('open'); }
function openCardMenu() { document.getElementById('cardModalOverlay').classList.add('open'); document.getElementById('cardModalSheet').classList.add('open'); }
function closeCardMenu() { document.getElementById('cardModalOverlay').classList.remove('open'); document.getElementById('cardModalSheet').classList.remove('open'); }
function showWelcome() { closeMenu(); nextScreen(1); }
function handleMyCardsClick() { closeMenu(); if (hasUserCards) goToDashboard(); else alert(translations[currentLang].no_cards_msg); }

// Preview Logic
function renderPreview() {
    const container = document.getElementById('preview-list-container');
    container.innerHTML = '';
    const t = translations[currentLang];

    // 1. Render Header Card
    const headerCard = document.createElement('div');
    headerCard.className = 'preview-header-card';
    headerCard.onclick = openHeaderModal;
    
    let coverStyle = '', avatarStyle = '', avatarDisplay = 'flex', avatarClass = 'header-preview-avatar', infoClass = 'header-preview-info', coverClass = 'header-preview-cover';

    if (currentHeaderFormat === 'cover' && userCardData?.coverUrl) {
        coverStyle = `background-image: url(${userCardData.coverUrl});`; avatarDisplay = 'none'; 
    } else if (currentHeaderFormat === 'banner') {
        if (userCardData?.coverUrl) coverStyle = `background-image: url(${userCardData.coverUrl});`;
        if (userCardData?.avatarUrl) avatarStyle = `background-image: url(${userCardData.avatarUrl});`;
        avatarDisplay = 'flex'; avatarClass += ' overlay-mode'; coverClass += ' banner-mode'; infoClass += ' banner-info';
    } else if (currentHeaderFormat === 'carousel' && userCardData?.carouselImages?.length > 0) {
        headerCard.innerHTML = `<div class="carousel-container" style="pointer-events: none;">${userCardData.carouselImages.map(img => `<div class="carousel-item" style="background-image: url(${img})"></div>`).join('')}</div><div class="header-preview-info" style="margin-top: 10px;"><h3>${userCardData?.name || t.cr_ph_name}</h3><p>${userCardData?.desc || t.cr_ph_desc}</p></div><div class="edit-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg><span>${t.modal_header_title}</span></div>`;
        container.appendChild(headerCard);
    } else if (userCardData?.avatarUrl) {
        avatarStyle = `background-image: url(${userCardData.avatarUrl});`;
    }

    if (currentHeaderFormat !== 'carousel') {
        headerCard.innerHTML = `
            <div class="${coverClass}" style="${coverStyle}"></div>
            <div class="${avatarClass}" style="display: ${avatarDisplay}; ${avatarStyle}">${!userCardData?.avatarUrl ? '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>' : ''}</div>
            <div class="${infoClass}"><h3>${userCardData?.name || t.cr_ph_name}</h3><p>${userCardData?.desc || t.cr_ph_desc}</p></div>
            <div class="edit-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg><span>${t.modal_header_title}</span></div>
        `;
    }
    container.appendChild(headerCard);

    // 2. Render Block Cards (Dynamic Order: About first, then others)
    const allKeys = Object.keys(selectedBlocks);
    const aboutKeys = allKeys.filter(k => k.startsWith('about'));
    const otherKeys = allKeys.filter(k => !k.startsWith('about'));
    
    // Helper function to create block section HTML
    const createBlockSection = (key, blockData, title, contentHtml) => {
        const section = document.createElement('div');
        section.className = `preview-block-section ${blockData.visible ? '' : 'hidden-block'}`;
        section.innerHTML = `
            <div class="block-section-header">
                <div class="block-section-title">${title.toUpperCase()}</div>
                <div class="block-actions">
                    <button class="action-btn ${blockData.visible ? 'active-eye' : ''}" onclick="toggleBlockVisibility('${key}')">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </button>
                    <button class="action-btn" onclick="openEditBlock('${key}')">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </button>
                </div>
            </div>
            <div class="preview-card-body">
                ${contentHtml}
            </div>
        `;
        return section;
    };

    // Render About Blocks First
    aboutKeys.forEach(key => {
        const blockData = selectedBlocks[key];
        if (blockData && blockData.visible) {
            const title = blockData.title || 'О БИЗНЕСЕ';
            const bodyContent = blockData.text ? `<p>${blockData.text}</p>` : '<p style="opacity:0.5">Нет текста</p>';
            container.appendChild(createBlockSection(key, blockData, title, bodyContent));
        }
    });

    // Render Other Blocks
    otherKeys.forEach(key => {
        const blockData = selectedBlocks[key];
        if (blockData && blockData.visible) {
            let title = blockData.title;
            if (!title) title = t[`blk_${key}`] || key;
            
            let contentHtml = '';
            
            // Special rendering for Links block
            if (key === 'links' || key.startsWith('links_copy')) {
                const links = blockData.items || [];
                if (links.length > 0) {
                    contentHtml = `<div style="display: flex; flex-direction: column; gap: 10px;">`;
                    links.forEach(link => {
                        const href = link.url ? link.url : '#';
                        const target = link.url ? '_blank' : '_self';
                        contentHtml += `
                            <a href="${href}" target="${target}" class="link-item" style="text-decoration: none;">
                                <div class="link-left">
                                    <div class="link-icon-box">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                    </div>
                                    <div class="link-title">${link.name}</div>
                                </div>
                                <div class="link-arrow">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </div>
                            </a>
                        `;
                    });
                    contentHtml += `</div>`;
                } else {
                    contentHtml = `<div style="padding: 10px 0; color: var(--text-secondary);">Нет добавленных ссылок</div>`;
                }
            } 
            // Special rendering for Socials block
            else if (key === 'socials' || key.startsWith('socials_copy')) {
                const socialsData = blockData.items || {};
                const activeSocials = socialNetworksConfig.filter(net => socialsData[net.id]?.enabled && socialsData[net.id]?.url);
                
                if (activeSocials.length > 0) {
                    contentHtml = `<div class="socials-grid-preview">`;
                    activeSocials.forEach(net => {
                        const url = socialsData[net.id].url;
                        contentHtml += `
                            <a href="${url}" target="_blank" class="social-icon-btn" title="${net.name}">
                                ${net.icon}
                            </a>
                        `;
                    });
                    contentHtml += `</div>`;
                } else {
                    contentHtml = `<div style="padding: 10px 0; color: var(--text-secondary);">Нет активных соцсетей</div>`;
                }
            }
            // Special rendering for Hours block
            else if (key === 'hours' || key.startsWith('hours_copy')) {
                const sched = blockData.schedule || { mode: 'simple', individual: {}, simple: {days: [], open: '10:00', close: '22:00'} };
                
                // Определение статуса (Открыто/Закрыто)
                const now = new Date();
                const currentDay = now.getDay() === 0 ? 7 : now.getDay(); // 1-7
                const currentMinutes = now.getHours() * 60 + now.getMinutes();
                
                let isOpen = false;
                let todayOpen = '', todayClose = '';
                
                const dayData = sched.individual[currentDay];
                
                if (dayData && dayData.active) {
                    const [oh, om] = dayData.open.split(':').map(Number);
                    const [ch, cm] = dayData.close.split(':').map(Number);
                    const startMin = oh * 60 + om;
                    const endMin = ch * 60 + cm;
                    
                    // Обработка перехода через полночь
                    if (endMin < startMin) {
                        isOpen = currentMinutes >= startMin || currentMinutes < endMin;
                    } else {
                        isOpen = currentMinutes >= startMin && currentMinutes < endMin;
                    }
                    
                    todayOpen = dayData.open;
                    todayClose = dayData.close;
                }

                const statusClass = isOpen ? 'status-open' : 'status-closed';
                const statusText = isOpen ? 'Открыто сейчас' : 'Закрыто сейчас';
                const currentTimeDisplay = todayOpen ? `${todayOpen}–${todayClose}` : '—';
                
                // Формирование списка дней для превью
                const dayNames = ['','Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
                let daysHtml = '';
                
                for (let i = 1; i <= 7; i++) {
                    const d = sched.individual[i];
                    const isWeekend = !d || !d.active;
                    const timeStr = isWeekend ? 'Выходной' : `${d.open}–${d.close}`;
                    const weekendClass = isWeekend ? 'is-weekend' : '';
                    
                    daysHtml += `
                        <div class="hours-day-item ${weekendClass}">
                            <span class="day-name">${dayNames[i]}</span>
                            <span class="day-time">${timeStr}</span>
                        </div>
                    `;
                }

                contentHtml = `
                    <div class="hours-preview-status ${statusClass}">
                        <div class="status-text-group">
                            <div class="status-dot"></div> ${statusText}
                        </div>
                        <span class="current-hours-time">${currentTimeDisplay}</span>
                    </div>
                    <div class="hours-days-list">
                        ${daysHtml}
                    </div>
                `;
            }
            else {
                // Default placeholder for other blocks
                contentHtml = `<div style="padding: 10px 0; color: var(--text-secondary); font-size: 14px;">${t.preview_placeholder} (${title})</div>`;
            }

            container.appendChild(createBlockSection(key, blockData, title, contentHtml));
        }
    });

    // Add Telegram FAB if not exists
    if (!document.getElementById('telegram-fab')) {
        const fab = document.createElement('button');
        fab.id = 'telegram-fab';
        fab.className = 'telegram-fab';
        fab.innerHTML = `<svg viewBox="0 0 24 24"><path d="M21.9 2.2L2.4 9.7c-1.1.4-1.1 1.5-.2 1.8l5 1.6 1.9 6c.2.6.7.6 1.1.3l2.8-2.3 4.3 3.2c.8.6 1.5.3 1.7-.7L22.8 3.3c.3-1.1-.4-1.4-.9-1.1zM9.6 12.5l8.8-5.5-6.9 6.5-.5 2.4-1.4-3.4z"/></svg>`;
        document.getElementById('screen-preview').appendChild(fab);
    }

    if (container.children.length <= 1) { 
        const emptyMsg = document.createElement('div');
        emptyMsg.style.textAlign = 'center'; emptyMsg.style.color = 'var(--text-secondary)'; emptyMsg.style.padding = '40px 0';
        emptyMsg.innerText = t.empty_h3;
        container.appendChild(emptyMsg);
    }
}

function toggleBlockVisibility(key) {
    if (!selectedBlocks[key]) selectedBlocks[key] = {};
    selectedBlocks[key].visible = !selectedBlocks[key].visible;
    
    // Find the section and toggle class without full re-render for smoothness
    const sections = document.querySelectorAll('.preview-block-section');
    let targetSection = null;
    sections.forEach(sec => {
        const btn = sec.querySelector(`button[onclick="toggleBlockVisibility('${key}')"]`);
        if (btn) targetSection = sec;
    });

    if (targetSection) {
        const btn = targetSection.querySelector('.action-btn'); 
        if (selectedBlocks[key].visible) {
            targetSection.classList.remove('hidden-block');
            if(btn) btn.classList.add('active-eye');
        } else {
            targetSection.classList.add('hidden-block');
            if(btn) btn.classList.remove('active-eye');
        }
    }
    
    saveUserData();
}

// Edit Block Modal Logic (With Socials & Hours Support)
const editModalOverlay = document.getElementById('editModalOverlay');
const editModalSheet = document.getElementById('editModalSheet');

function openEditBlock(key) {
    currentEditingBlockId = key;
    const blockData = selectedBlocks[key] || {};
    const t = translations[currentLang];
    
    const titleEl = document.getElementById('edit-modal-title');
    const fieldsContainer = document.getElementById('edit-modal-fields');
    fieldsContainer.innerHTML = ''; 

    if (key.startsWith('about')) {
        titleEl.innerText = 'О бизнесе';
        fieldsContainer.innerHTML = `
            <div class="form-group" style="margin-bottom: 16px;"><label class="form-label">Заголовок</label><input type="text" class="form-input" id="edit-input-1" value="${blockData.title || 'О бизнесе'}"></div>
            <div class="form-group"><label class="form-label">Текст</label><textarea class="form-input" id="edit-input-2" rows="4" style="resize: none;">${blockData.text || ''}</textarea></div>
        `;
    } else if (key === 'hours' || key.startsWith('hours_copy')) {
        // ЛОГИКА ДЛЯ ЧАСОВ РАБОТЫ (ДИЗАЙН С КНОПКАМИ ДНЕЙ)
        titleEl.innerText = 'Часы работы';
        
        const defaultSchedule = {
            mode: 'simple', 
            is247: false,
            simple: { days: [1,2,3,4,5], open: '10:00', close: '22:00' },
            individual: {} 
        };
        
        // Инициализация данных
        if (!blockData.schedule) blockData.schedule = JSON.parse(JSON.stringify(defaultSchedule));
        // Синхронизируем individual с simple, если его нет
        for (let i = 1; i <= 7; i++) {
            if (!blockData.schedule.individual[i]) {
                blockData.schedule.individual[i] = { 
                    active: blockData.schedule.simple.days.includes(i), 
                    open: blockData.schedule.simple.open || '10:00', 
                    close: blockData.schedule.simple.close || '22:00' 
                };
            }
        }

        const sched = blockData.schedule;
        const activeDays = sched.simple.days || [];
        const openTime = sched.simple.open || '10:00';
        const closeTime = sched.simple.close || '22:00';

        fieldsContainer.innerHTML = `
            <!-- Быстрые шаблоны -->
            <div class="hours-templates" style="margin-bottom: 20px;">
                <button class="template-btn" onclick="applyHoursTemplate('work')">Пн-Пт 9-18</button>
                <button class="template-btn" onclick="applyHoursTemplate('daily')">Ежедневно</button>
                <button class="template-btn" onclick="applyHoursTemplate('247')">24/7</button>
            </div>

            <!-- Выбор дней -->
            <label class="hours-editor-label">Рабочие дни</label>
            <div class="days-selector-grid" id="hours-days-grid">
                ${['','Пн','Вт','Ср','Чт','Пт','Сб','Вс'].map((d, i) => {
                    if (i===0) return '';
                    const isActive = activeDays.includes(i);
                    return `<button class="day-toggle-btn ${isActive ? 'active' : ''}" data-day="${i}">${d}</button>`;
                }).join('')}
            </div>

            <!-- Выбор времени -->
            <div class="time-range-container">
                <div class="time-input-wrapper">
                    <label>Открытие</label>
                    <input type="time" class="custom-time-input" id="hours-open-global" value="${openTime}">
                    <svg class="time-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                
                <div style="padding-top: 20px; color: var(--text-secondary);">–</div>

                <div class="time-input-wrapper">
                    <label>Закрытие</label>
                    <input type="time" class="custom-time-input" id="hours-close-global" value="${closeTime}">
                    <svg class="time-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
            </div>
            
            <div class="hours-hint-text">Статус «открыто / закрыто» считается автоматически по времени.</div>
        `;

        // Обработчик клика по дням недели
        setTimeout(() => {
            const grid = document.getElementById('hours-days-grid');
            if(grid) {
                grid.querySelectorAll('.day-toggle-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        btn.classList.toggle('active');
                    });
                });
            }
        }, 0);

    } else if (key === 'socials' || key.startsWith('socials_copy')) {
        titleEl.innerText = 'Соцсети';
        const savedSocials = blockData.items || {};
        socialNetworksConfig.forEach(net => {
            const isEnabled = savedSocials[net.id]?.enabled ?? true;
            const url = savedSocials[net.id]?.url || '';
            const itemDiv = document.createElement('div');
            itemDiv.className = 'social-item';
            itemDiv.innerHTML = `
                <div class="social-header">
                    <div class="social-info"><div class="social-icon-box">${net.icon}</div><div class="social-name">${net.name}</div></div>
                    <label class="toggle-switch"><input type="checkbox" class="social-toggle" data-id="${net.id}" ${isEnabled ? 'checked' : ''}><span class="slider-toggle"></span></label>
                </div>
                <input type="text" class="social-input" data-id="${net.id}" placeholder="${net.placeholder}" value="${url}" ${!isEnabled ? 'disabled' : ''}>
            `;
            fieldsContainer.appendChild(itemDiv);
        });
        fieldsContainer.querySelectorAll('.social-toggle').forEach(toggle => {
            toggle.addEventListener('change', (e) => {
                const input = fieldsContainer.querySelector(`.social-input[data-id="${e.target.dataset.id}"]`);
                if (e.target.checked) { input.removeAttribute('disabled'); input.focus(); } 
                else { input.setAttribute('disabled', 'true'); }
            });
        });
    } else if (key === 'links' || key.startsWith('links_copy')) {
        titleEl.innerText = 'Ссылки-кнопки';
        const sectionTitleDiv = document.createElement('div');
        sectionTitleDiv.className = 'form-group'; sectionTitleDiv.style.marginBottom = '24px';
        sectionTitleDiv.innerHTML = `<label class="form-label">Заголовок секции</label><input type="text" class="form-input" id="edit-section-title" value="${blockData.title || 'Ссылки'}">`;
        fieldsContainer.appendChild(sectionTitleDiv);
        const linksListDiv = document.createElement('div');
        linksListDiv.id = 'links-editor-list'; linksListDiv.className = 'links-editor-list';
        const links = blockData.items || [{name: 'Наш сайт', url: ''}];
        links.forEach((link, index) => linksListDiv.appendChild(createLinkItemElement(link.name, link.url, index)));
        fieldsContainer.appendChild(linksListDiv);
        const addBtn = document.createElement('button');
        addBtn.className = 'btn-add-link';
        addBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> Добавить ссылку`;
        addBtn.onclick = () => linksListDiv.appendChild(createLinkItemElement('', '', linksListDiv.children.length));
        fieldsContainer.appendChild(addBtn);
    } else {
        titleEl.innerText = t.edit_modal_title || 'Редактировать блок';
        fieldsContainer.innerHTML = `
            <div class="form-group" style="margin-bottom: 16px;"><label class="form-label">Название блока</label><input type="text" class="form-input" id="edit-input-1" value="${blockData.title || t[`blk_${key}`] || key}"></div>
            <div class="form-group"><label class="form-label">Описание</label><input type="text" class="form-input" id="edit-input-2" value="${blockData.desc || ''}"></div>
        `;
    }
    
    editModalOverlay.classList.add('open'); 
    editModalSheet.classList.add('open');
}

// Вспомогательная функция для шаблонов часов
function applyHoursTemplate(type) {
    const openInput = document.getElementById('hours-open-global');
    const closeInput = document.getElementById('hours-close-global');
    const grid = document.getElementById('hours-days-grid');
    
    if (!grid || !openInput || !closeInput) return;

    // Сброс всех дней
    grid.querySelectorAll('.day-toggle-btn').forEach(btn => btn.classList.remove('active'));

    if (type === 'work') {
        openInput.value = '09:00';
        closeInput.value = '18:00';
        // Пн-Пт (индексы 0-4 в NodeList)
        for(let i=0; i<5; i++) grid.children[i].classList.add('active');
    } else if (type === 'daily') {
        openInput.value = '10:00';
        closeInput.value = '22:00';
        grid.querySelectorAll('.day-toggle-btn').forEach(btn => btn.classList.add('active'));
    } else if (type === '247') {
        openInput.value = '00:00';
        closeInput.value = '23:59';
        grid.querySelectorAll('.day-toggle-btn').forEach(btn => btn.classList.add('active'));
    }
}

// Helper to create link item DOM element
function createLinkItemElement(name, url, index) {
    const item = document.createElement('div');
    item.className = 'link-edit-item';
    item.innerHTML = `
        <div class="link-input-group">
            <div class="link-icon-placeholder">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
            </div>
            <input type="text" class="link-name-input" placeholder="Название кнопки" value="${name}">
            <button class="btn-remove-link" onclick="this.parentElement.parentElement.remove()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        </div>
        <input type="text" class="link-url-input" placeholder="https://..." value="${url}">
    `;
    return item;
}

function closeEditModal() { 
    editModalOverlay.classList.remove('open'); 
    editModalSheet.classList.remove('open'); 
    currentEditingBlockId = null; 
}

function saveBlockEdit() {
    if (!currentEditingBlockId) return;
    if (!selectedBlocks[currentEditingBlockId]) selectedBlocks[currentEditingBlockId] = {};
    
    if (currentEditingBlockId.startsWith('about')) {
        selectedBlocks[currentEditingBlockId].title = document.getElementById('edit-input-1').value.trim() || 'О бизнесе';
        selectedBlocks[currentEditingBlockId].text = document.getElementById('edit-input-2').value.trim();
    } else if (currentEditingBlockId === 'hours' || currentEditingBlockId.startsWith('hours_copy')) {
        // СОХРАНЕНИЕ ЧАСОВ (ДЛЯ ДИЗАЙНА С КНОПКАМИ)
        const openVal = document.getElementById('hours-open-global')?.value || '10:00';
        const closeVal = document.getElementById('hours-close-global')?.value || '22:00';
        
        const newActiveDays = [];
        document.querySelectorAll('#hours-days-grid .day-toggle-btn.active').forEach(btn => {
            newActiveDays.push(parseInt(btn.dataset.day));
        });

        // Формируем структуру данных
        const schedule = {
            mode: 'simple', // Всегда простой режим для этого дизайна
            is247: false,
            simple: { 
                days: newActiveDays.sort(), 
                open: openVal, 
                close: closeVal 
            },
            individual: {}
        };

        // Заполняем individual для совместимости с превью
        for(let i=1; i<=7; i++) {
            schedule.individual[i] = {
                active: newActiveDays.includes(i),
                open: openVal,
                close: closeVal
            };
        }

        selectedBlocks[currentEditingBlockId].schedule = schedule;
    } else if (currentEditingBlockId === 'socials' || currentEditingBlockId.startsWith('socials_copy')) {
        const items = {};
        socialNetworksConfig.forEach(net => {
            const toggle = document.querySelector(`.social-toggle[data-id="${net.id}"]`);
            const input = document.querySelector(`.social-input[data-id="${net.id}"]`);
            if (toggle && input) items[net.id] = { enabled: toggle.checked, url: input.value.trim() };
        });
        selectedBlocks[currentEditingBlockId].items = items;
    } else if (currentEditingBlockId === 'links' || currentEditingBlockId.startsWith('links_copy')) {
        selectedBlocks[currentEditingBlockId].title = document.getElementById('edit-section-title').value.trim() || 'Ссылки';
        const listContainer = document.getElementById('links-editor-list');
        const linksItems = [];
        if (listContainer) {
            listContainer.querySelectorAll('.link-edit-item').forEach(el => {
                const name = el.querySelector('.link-name-input').value.trim();
                const url = el.querySelector('.link-url-input').value.trim();
                if (name || url) linksItems.push({ name: name || 'Ссылка', url: url });
            });
        }
        if (linksItems.length === 0) linksItems.push({ name: 'Наш сайт', url: '' });
        selectedBlocks[currentEditingBlockId].items = linksItems;
    } else {
        const val1 = document.getElementById('edit-input-1').value.trim();
        const val2 = document.getElementById('edit-input-2').value.trim();
        const t = translations[currentLang];
        const defaultTitle = t[`blk_${currentEditingBlockId}`] || currentEditingBlockId;
        if (val1 && val1 !== defaultTitle) selectedBlocks[currentEditingBlockId].title = val1;
        else delete selectedBlocks[currentEditingBlockId].title;
        selectedBlocks[currentEditingBlockId].desc = val2;
    }
    
    saveUserData();
    renderPreview();
    closeEditModal();
}

// Duplicate Block Function
function duplicateCurrentBlock() {
    if (!currentEditingBlockId) return;
    const originalData = selectedBlocks[currentEditingBlockId];
    const newKey = `${currentEditingBlockId}_copy_${Date.now()}`;
    selectedBlocks[newKey] = JSON.parse(JSON.stringify(originalData));
    selectedBlocks[newKey].title = (originalData.title || '') + ' (копия)';
    selectedBlocks[newKey].visible = true;
    saveUserData();
    renderPreview();
    closeEditModal();
    showToast('Блок дублирован');
}

// Delete Block Function
function deleteCurrentBlock() {
    if (!currentEditingBlockId) return;
    if (confirm('Удалить этот блок?')) {
        delete selectedBlocks[currentEditingBlockId];
        saveUserData();
        renderPreview();
        closeEditModal();
        showToast('Блок удален');
    }
}

// Header Modal Logic
const headerModalOverlay = document.getElementById('headerModalOverlay');
const headerModalSheet = document.getElementById('headerModalSheet');

function openHeaderModal() {
    headerModalOverlay.classList.add('open'); 
    headerModalSheet.classList.add('open');
    switchHeaderTab(currentHeaderFormat);
    
    const nameInput = document.getElementById('modal-input-name');
    const descInput = document.getElementById('modal-input-desc');
    
    if (userCardData) {
        nameInput.value = userCardData.name || '';
        descInput.value = userCardData.desc || '';
        updateAvatarFromUrl(userCardData.avatarUrl || '');
        updateCoverFromUrl(userCardData.coverUrl || '');
        renderCarouselPreview();
    } else { nameInput.value = ''; descInput.value = ''; }
}

function closeHeaderModal() {
    const nameVal = document.getElementById('modal-input-name').value.trim();
    const descVal = document.getElementById('modal-input-desc').value.trim();

    if (!userCardData) userCardData = {};
    if (nameVal) userCardData.name = nameVal;
    if (descVal) userCardData.desc = descVal;
    
    saveUserData(); 
    headerModalOverlay.classList.remove('open'); 
    headerModalSheet.classList.remove('open');
    renderPreview();
}

function switchHeaderTab(tab) {
    currentHeaderFormat = tab;
    document.querySelectorAll('.header-tab').forEach(t => t.classList.remove('active'));
    const activeTabBtn = Array.from(document.querySelectorAll('.header-tab')).find(t => t.getAttribute('onclick').includes(`'${tab}'`));
    if (activeTabBtn) activeTabBtn.classList.add('active');
    
    document.querySelectorAll('.header-tab-content').forEach(c => c.classList.add('hidden'));
    document.getElementById(`tab-content-${tab}`).classList.remove('hidden');
    
    if (tab === 'cover' || tab === 'banner') updateCoverFromUrl(document.getElementById('input-cover-url').value);
}

// --- PHOTO UPLOAD LOGIC ---

function handleFileUpload(event, updateCallback) {
    const file = event.target.files[0];
    if (file) {
        if (!['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
            alert('Пожалуйста, выберите изображение JPG/PNG');
            return;
        }
        const reader = new FileReader();
        reader.onload = function(evt) {
            updateCallback(evt.target.result);
            showToast('Фото загружено');
        };
        reader.readAsDataURL(file);
    }
    event.target.value = '';
}

const deviceInput = document.getElementById('device-upload-input');
if (deviceInput) deviceInput.addEventListener('change', (e) => handleFileUpload(e, updateAvatarFromUrl));

const coverInput = document.getElementById('cover-upload-input');
if (coverInput) coverInput.addEventListener('change', (e) => handleFileUpload(e, updateCoverFromUrl));

const carouselInput = document.getElementById('carousel-upload-input');
if (carouselInput) {
    carouselInput.addEventListener('change', function(e) {
        const files = Array.from(e.target.files);
        if (!userCardData) userCardData = {};
        if (!userCardData.carouselImages) userCardData.carouselImages = [];
        
        files.forEach(file => {
            if (['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
                const reader = new FileReader();
                reader.onload = function(evt) {
                    userCardData.carouselImages.push(evt.target.result);
                    renderCarouselPreview();
                    saveUserData();
                };
                reader.readAsDataURL(file);
            }
        });
        e.target.value = '';
    });
}

function updateAvatarFromUrl(url) {
    if (!userCardData) userCardData = {};
    userCardData.avatarUrl = url;
    const avatarInputs = document.querySelectorAll('#input-avatar-url');
    avatarInputs.forEach(input => input.value = url);
    const avatars = document.querySelectorAll('#modal-avatar-img');
    avatars.forEach(stdAvatar => {
        if (url) {
            stdAvatar.style.backgroundImage = `url(${url})`;
            stdAvatar.style.backgroundSize = 'cover';
            stdAvatar.style.backgroundPosition = 'center';
            stdAvatar.innerHTML = '';
        } else {
            stdAvatar.style.backgroundImage = 'none';
            stdAvatar.innerHTML = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
        }
    });
}

function updateCoverFromUrl(url) {
    if (!userCardData) userCardData = {};
    userCardData.coverUrl = url;
    const coverInputs = document.querySelectorAll('#input-cover-url');
    coverInputs.forEach(input => input.value = url);
    const coverBgs = document.querySelectorAll('#modal-cover-preview-bg');
    coverBgs.forEach(coverBg => {
        if (url) {
            coverBg.style.backgroundImage = `url(${url})`;
            coverBg.style.backgroundSize = 'cover';
            coverBg.style.backgroundPosition = 'center';
        } else {
            coverBg.style.backgroundImage = 'none';
        }
    });
}

function renderCarouselPreview() {
    const list = document.getElementById('modal-carousel-list');
    if (!list) return;
    const addBtn = list.querySelector('.add-slide-btn');
    list.innerHTML = '';
    if (userCardData && userCardData.carouselImages) {
        userCardData.carouselImages.forEach((img, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-item';
            slide.style.backgroundImage = `url(${img})`;
            slide.onclick = () => {
                if(confirm('Удалить это фото?')) {
                    userCardData.carouselImages.splice(index, 1);
                    renderCarouselPreview();
                    saveUserData();
                }
            };
            list.appendChild(slide);
        });
    }
    list.appendChild(addBtn);
}

function handleMaxProfilePhoto() {
    const mockAvatars = ['https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop'];
    updateAvatarFromUrl(mockAvatars[0]); 
    showToast('Аватар из MAX');
}

function finalizeCard() { saveUserData(); hasUserCards = true; goToDashboard(); }

// Card Actions
function editCurrentCard() { closeCardMenu(); openCreator(true); }
function shareCurrentCard() {
    closeCardMenu();
    const dummyLink = `https://max.app/vizitka/${userCardData.name.replace(/\s+/g, '-').toLowerCase()}`;
    navigator.clipboard.writeText(dummyLink).then(() => showToast(translations[currentLang].toast_copy));
}
function deleteCurrentCard() {
    closeCardMenu();
    if (confirm(currentLang === 'ru' ? 'Удалить визитку?' : 'Delete?')) {
        userCardData = null; hasUserCards = false; selectedBlocks = {};
        saveUserData(); renderCardsList(); showToast(translations[currentLang].toast_deleted);
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
                <div class="uc-info"><h4>${userCardData.name}</h4><p>${userCardData.desc} ${userCardData.city ? '• ' + userCardData.city : ''}</p></div>
                <div class="uc-actions"><button class="uc-btn" onclick="openCardMenu()"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></button></div>
            </div>
            <button class="btn-create" onclick="openCreator()" style="margin-top: 10px; background: rgba(255,255,255,0.1); color: white; box-shadow: none;">+ Создать еще одну</button>
        `;
    } else {
        container.innerHTML = `
            <div class="empty-state-viz"><div class="mini-card"><div class="mc-header"></div><div class="mc-body"><div class="mc-block"></div></div></div></div>
            <div class="empty-text-block"><h3>${t.empty_h3}</h3><p>${t.empty_p}</p></div>
            <button class="btn-create" onclick="openCreator()">${t.btn_create}</button>
        `;
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerText = message; toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

window.onload = function() { loadUserData(); nextScreen(1); applyTranslations(); };