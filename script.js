// --- TRANSLATIONS & STATE ---
const translations = {
    ru: {
        s1_title: "Твоя визитка ", s1_title_grad: "внутри MAX",
        s1_desc: "Открывается по ссылке за секунду.",
        s2_title: "Собирается ", s2_title_grad: "из блоков",
        s2_desc: "Прайс, отзывы, фото. Порядок задаёшь ты.",
        s3_title: "Свой бот и своя<br>ссылка",
        s3_desc: "Ссылку можно отправить в переписке или печатать на карте.",
        btn_skip: "Пропустить", btn_next: "Далее", btn_start: "Начать",
        dash_title: "Твои визитки", dash_subtitle: "Открой, чтобы изменить.",
        label_my_cards: "МОИ ВИЗИТКИ", empty_h3: "Здесь появятся твои визитки", 
        empty_p: "Первая собирается за несколько минут.",
        btn_create: "Создать свою визитку",
        info_box: "Пример. Цифры появятся после создания визитки.",
        menu_stats: "Статистика", menu_stats_sub: "Просмотры и заявки",
        menu_links: "Ссылки", menu_links_sub: "Для каждого канала",
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
        blk_links: "Ссылки", blk_socials: "Соцсети", blk_hours: "Часы", blk_cta: "Призыв",
        blk_contacts: "Контакты", blk_price: "Прайс", blk_discounts: "Скидки",
        blk_reviews: "Отзывы", blk_faq: "FAQ", blk_facts: "Факты",
        blk_video: "Видео", blk_share: "Поделиться", blk_gallery: "Галерея", blk_map: "Карта",
        btn_back: "Назад", btn_assemble: "Далее",
        pv_title: "Твоя визитка", pv_desc: "Нажми на шапку, чтобы изменить формат.",
        edit_modal_title: "Блок", btn_save: "Сохранить", preview_placeholder: "Содержимое",
        modal_header_title: "Шапка", header_format_label: "Формат",
        tab_avatar: "Аватар", tab_cover: "Обложка", tab_banner: "Баннер", tab_carousel: "Карусель",
        desc_avatar: "Круглый аватар.",
        btn_upload_device: "📷 Загрузить", btn_upload_tg: "👤 Из MAX",
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
        menu_stats: "Stats", menu_stats_sub: "Views & clicks", menu_links: "Links", menu_links_sub: "Per channel",
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
        desc_avatar: "Round avatar.", btn_upload_device: "📷 Upload", btn_upload_tg: "👤 From MAX",
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
        menu_stats: "Statistik", menu_stats_sub: "Aufrufe", menu_links: "Links", menu_links_sub: "Pro Kanal",
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

// Navigation
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

    // Header Card
    const headerCard = document.createElement('div');
    headerCard.className = 'preview-header-card';
    headerCard.onclick = openHeaderModal;
    
    let coverStyle = '';
    let avatarStyle = '';
    let avatarDisplay = 'flex';
    let avatarClass = 'header-preview-avatar';
    let infoClass = 'header-preview-info';
    let coverClass = 'header-preview-cover';

    // Логика отображения в зависимости от формата
    if (currentHeaderFormat === 'cover' && userCardData?.coverUrl) {
        coverStyle = `background-image: url(${userCardData.coverUrl});`;
        avatarDisplay = 'none'; 
    } else if (currentHeaderFormat === 'banner') {
        // Режим БАННЕР: Обложка + Аватар поверх
        if (userCardData?.coverUrl) coverStyle = `background-image: url(${userCardData.coverUrl});`;
        if (userCardData?.avatarUrl) avatarStyle = `background-image: url(${userCardData.avatarUrl});`;
        
        avatarDisplay = 'flex';
        avatarClass += ' overlay-mode'; // Добавляем класс для наложения
        coverClass += ' banner-mode';   // Увеличиваем высоту обложки
        infoClass += ' banner-info';    // Сдвигаем текст вниз
    } else if (currentHeaderFormat === 'carousel' && userCardData?.carouselImages?.length > 0) {
        // Режим КАРУСЕЛЬ
        headerCard.innerHTML = `<div class="carousel-container" style="pointer-events: none;">
            ${userCardData.carouselImages.map(img => `<div class="carousel-item" style="background-image: url(${img})"></div>`).join('')}
        </div>
        <div class="header-preview-info" style="margin-top: 10px;">
            <h3>${userCardData?.name || t.cr_ph_name}</h3>
            <p>${userCardData?.desc || t.cr_ph_desc}</p>
        </div>
        <div class="edit-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg><span>${t.modal_header_title}</span></div>`;
        container.appendChild(headerCard);
    } else if (userCardData?.avatarUrl) {
        avatarStyle = `background-image: url(${userCardData.avatarUrl});`;
    }

    // Если не карусель, рендерим стандартную структуру
    if (currentHeaderFormat !== 'carousel') {
        headerCard.innerHTML = `
            <div class="${coverClass}" style="${coverStyle}"></div>
            <div class="${avatarClass}" style="display: ${avatarDisplay}; ${avatarStyle}">
                ${!userCardData?.avatarUrl ? '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>' : ''}
            </div>
            <div class="${infoClass}">
                <h3>${userCardData?.name || t.cr_ph_name}</h3>
                <p>${userCardData?.desc || t.cr_ph_desc}</p>
            </div>
            <div class="edit-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                <span>${t.modal_header_title}</span>
            </div>
        `;
    }
    container.appendChild(headerCard);

    // Block Cards
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
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        </button>
                        <button class="action-btn" onclick="openEditBlock('${key}')">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        </button>
                    </div>
                </div>
                <div class="preview-card-body">${t.preview_placeholder}</div>
            `;
            container.appendChild(card);
        }
    });

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
    const card = document.getElementById(`preview-card-${key}`);
    if(card) {
        const btn = card.querySelector('.action-btn'); 
        if (selectedBlocks[key].visible) { card.classList.remove('hidden-block'); if(btn) btn.classList.add('active-eye'); } 
        else { card.classList.add('hidden-block'); if(btn) btn.classList.remove('active-eye'); }
    }
    saveUserData();
}

// Edit Block Modal
const editModalOverlay = document.getElementById('editModalOverlay');
const editModalSheet = document.getElementById('editModalSheet');
const editInput = document.getElementById('edit-block-input');

function openEditBlock(key) {
    currentEditingBlockId = key;
    const blockData = selectedBlocks[key] || {};
    const t = translations[currentLang];
    editInput.value = blockData.title || t[`blk_${key}`] || key;
    editModalOverlay.classList.add('open'); editModalSheet.classList.add('open');
}

function closeEditModal() { editModalOverlay.classList.remove('open'); editModalSheet.classList.remove('open'); currentEditingBlockId = null; }

function saveBlockEdit() {
    if (currentEditingBlockId) {
        const newTitle = editInput.value.trim();
        if (!selectedBlocks[currentEditingBlockId]) selectedBlocks[currentEditingBlockId] = {};
        const t = translations[currentLang];
        if (newTitle === (t[`blk_${currentEditingBlockId}`] || currentEditingBlockId)) delete selectedBlocks[currentEditingBlockId].title;
        else selectedBlocks[currentEditingBlockId].title = newTitle;
        saveUserData(); renderPreview(); closeEditModal();
    }
}

// Header Modal Logic
const headerModalOverlay = document.getElementById('headerModalOverlay');
const headerModalSheet = document.getElementById('headerModalSheet');

function openHeaderModal() {
    headerModalOverlay.classList.add('open'); headerModalSheet.classList.add('open');
    switchHeaderTab(currentHeaderFormat);
    
    const nameInput = document.getElementById('modal-input-name');
    const descInput = document.getElementById('modal-input-desc');
    
    if (userCardData) {
        nameInput.value = userCardData.name || '';
        descInput.value = userCardData.desc || '';
        document.getElementById('input-avatar-url').value = userCardData.avatarUrl || '';
        document.getElementById('input-cover-url').value = userCardData.coverUrl || '';
        updateAvatarFromUrl(userCardData.avatarUrl || '');
        updateCoverFromUrl(userCardData.coverUrl || '');
        renderCarouselPreview(); // Обновляем превью карусели
    } else { nameInput.value = ''; descInput.value = ''; }
}

function closeHeaderModal() {
    const nameVal = document.getElementById('modal-input-name').value.trim();
    const descVal = document.getElementById('modal-input-desc').value.trim();
    if (!userCardData) userCardData = {};
    if (nameVal) userCardData.name = nameVal;
    if (descVal) userCardData.desc = descVal;
    saveUserData(); 
    headerModalOverlay.classList.remove('open'); headerModalSheet.classList.remove('open');
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

// Avatar Upload
const deviceInput = document.getElementById('device-upload-input');
if (deviceInput) deviceInput.addEventListener('change', function(e) { handleFileUpload(e, updateAvatarFromUrl); });

// Cover Upload
const coverInput = document.getElementById('cover-upload-input');
if (coverInput) coverInput.addEventListener('change', function(e) { handleFileUpload(e, updateCoverFromUrl); });

// Carousel Upload
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

function handleFileUpload(event, updateCallback) {
    const file = event.target.files[0];
    if (file) {
        if (!['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) { alert('JPG/PNG only'); return; }
        const reader = new FileReader();
        reader.onload = function(evt) { updateCallback(evt.target.result); showToast('Фото загружено'); };
        reader.readAsDataURL(file);
    }
    event.target.value = '';
}

function updateCoverFromUrl(url) {
    const modalCoverBg = document.getElementById('modal-cover-preview-bg');
    if (url) {
        modalCoverBg.style.backgroundImage = `url(${url})`; modalCoverBg.style.backgroundSize = 'cover';
        if (!userCardData) userCardData = {}; userCardData.coverUrl = url;
        const coverUrlInput = document.getElementById('input-cover-url'); if (coverUrlInput) coverUrlInput.value = url;
    } else { modalCoverBg.style.backgroundImage = 'none'; if (userCardData) delete userCardData.coverUrl; }
}

function updateAvatarFromUrl(url) {
    const modalAvatar = document.getElementById('modal-avatar-img');
    if (url) {
        modalAvatar.style.backgroundImage = `url(${url})`; modalAvatar.innerHTML = ''; 
        if (!userCardData) userCardData = {}; userCardData.avatarUrl = url;
        const avatarUrlInput = document.getElementById('input-avatar-url'); if (avatarUrlInput) avatarUrlInput.value = url;
    } else {
        modalAvatar.style.backgroundImage = 'none';
        modalAvatar.innerHTML = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
        if (userCardData) delete userCardData.avatarUrl;
    }
}

// Carousel Preview in Modal
function renderCarouselPreview() {
    const list = document.getElementById('modal-carousel-list');
    if (!list) return;
    
    // Очищаем список, оставляя только кнопку добавления
    const addBtn = list.querySelector('.add-slide-btn');
    list.innerHTML = '';
    
    if (userCardData && userCardData.carouselImages) {
        userCardData.carouselImages.forEach((img, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-item';
            slide.style.backgroundImage = `url(${img})`;
            // Можно добавить удаление по клику
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
    list.appendChild(addBtn); // Возвращаем кнопку "+" в конец
}

// Mock Functions for MAX
function handleMaxCoverPhoto() {
    const mockCovers = ['https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=300&fit=crop'];
    updateCoverFromUrl(mockCovers[0]); showToast('Обложка из MAX');
}

function handleMaxProfilePhoto() {
    const mockAvatars = ['https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop'];
    updateAvatarFromUrl(mockAvatars[0]); showToast('Аватар из MAX');
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