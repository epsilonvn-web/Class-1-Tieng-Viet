// CẤU HÌNH 12 CHỦ ĐỀ CHÍNH
const TOPICS_CONFIG = [
    { id: 1, title: "1. Bảng chữ cái ngộ nghĩnh", desc: "Nguyên âm, phụ âm, âm ghép", icon: "🅰️", color: "pink" },
    { id: 2, title: "2. Năm thanh điệu kì diệu", desc: "Sắc, huyền, hỏi, ngã, nặng", icon: "🎵", color: "purple" },
    { id: 3, title: "3. Ghép âm - vần", desc: "Vần xuôi & phức tạp", icon: "🧩", color: "blue" },
    { id: 4, title: "4. Điền chữ cái còn thiếu", desc: "Luật c/k, g/gh, ng/ngh, s/x", icon: "✍️", color: "amber" },
    { id: 5, title: "5. Bác sĩ bắt bệnh chính tả", desc: "Sửa lỗi từ & viết hoa", icon: "S/X", color: "rose", isCustomTextIcon: true },
    { id: 6, title: "6. Từ vựng mở rộng", desc: "Giác quan, hình ảnh thực tế", icon: "🌿", color: "emerald" },
    { id: 7, title: "7. Gia đình từ loại", desc: "Sự vật, hoạt động, đặc điểm", icon: "🧸", color: "teal" },
    { id: 8, title: "8. Nhà thông thái sắp câu", desc: "Ghép câu ngắn & câu dài", icon: "🧠", color: "indigo" },
    { id: 9, title: "9. Điền từ vào câu & tục ngữ", desc: "Tục ngữ dân gian", icon: "📜", color: "cyan" },
    { id: 10, title: "10. Đố vui bé ngoan (IQ)", desc: "Câu đố con vật, đồ dùng", icon: "🎯", color: "yellow" },
    { id: 11, title: "11. Đọc hiểu - trả lời", desc: "Truyện ngụ ngôn & thơ nhạc", icon: "📖", color: "pink" }
];

// BẢNG MÀU PASTEL CHO TỪNG CHỦ ĐỀ CON
const SUBTOPIC_PALETTES = [
    { card: "bg-pink-50/80 hover:bg-pink-100 border-pink-300 text-pink-800", num: "text-pink-600", badge: "bg-white text-pink-600 border-pink-200" },
    { card: "bg-emerald-50/80 hover:bg-emerald-100 border-emerald-300 text-emerald-800", num: "text-emerald-600", badge: "bg-white text-emerald-600 border-emerald-200" },
    { card: "bg-purple-50/80 hover:bg-purple-100 border-purple-300 text-purple-800", num: "text-purple-600", badge: "bg-white text-purple-600 border-purple-200" },
    { card: "bg-amber-50/80 hover:bg-amber-100 border-amber-300 text-amber-800", num: "text-amber-600", badge: "bg-white text-amber-600 border-amber-200" },
    { card: "bg-sky-50/80 hover:bg-sky-100 border-sky-300 text-sky-800", num: "text-sky-600", badge: "bg-white text-sky-600 border-sky-200" },
    { card: "bg-rose-50/80 hover:bg-rose-100 border-rose-300 text-rose-800", num: "text-rose-600", badge: "bg-white text-rose-600 border-rose-200" }
];

// CẤU HÌNH ROADMAP MAPPING ĐA CHỦ ĐỀ (MULTI-TOPIC)
const roadmapConfig = {
    1: { name: "Tuần 1: Làm chủ 5 Thanh điệu", topicIds: [1, 2], desc: "Luyện phát âm, phân biệt nguyên âm, phụ âm và 5 thanh điệu", icon: "🎵" },
    2: { name: "Tuần 2: Khởi động Ghép âm - Vần", topicIds: [3], desc: "Học cách ghép phụ âm đầu với nguyên âm đơn và vần xuôi", icon: "🧩" },
    3: { name: "Tuần 3: Vần đôi - Vần ghép phức tạp", topicIds: [3, 6], desc: "Chinh phục các vần đôi khó và từ vựng mở rộng", icon: "🌿" },
    4: { name: "Tuần 4: Điền chữ cái còn thiếu", topicIds: [4], desc: "Luyện luật chính tả c/k, g/gh, ng/ngh và s/x, tr/ch, l/n", icon: "✍️" },
    5: { name: "Tuần 5: Bác sĩ sửa lỗi chính tả", topicIds: [5], desc: "Bắt bệnh và sửa từ viết sai chính tả, sửa quy tắc viết hoa", icon: "🩺" },
    6: { name: "Tuần 6: Nhìn hình đoán từ đa giác quan", topicIds: [6], desc: "Mở rộng vốn từ chỉ cảm giác, mùi vị trực quan qua hình ảnh", icon: "👁️" },
    7: { name: "Tuần 7: Gia đình Ba nhóm Từ loại", topicIds: [7], desc: "Phân biệt từ chỉ Sự vật, Hoạt động và Đặc điểm", icon: "🧸" },
    8: { name: "Tuần 8: Nhà thông thái sắp xếp câu", topicIds: [8], desc: "Sắp xếp từ xáo trộn thành câu kể, câu tả hoàn chỉnh đúng ngữ pháp", icon: "🧠" },
    9: { name: "Tuần 9: Điền từ vào câu & Tục ngữ", topicIds: [9], desc: "Hoàn thiện câu ca dao tục ngữ rèn luyện đạo đức làm người", icon: "📜" },
    10: { name: "Tuần 10: Trí tuệ IQ cùng Đố vui bé ngoan", topicIds: [10], desc: "Giải mã 100 câu đố thơ dân gian lục bát rèn luyện tư duy", icon: "🎯" },
    11: { name: "Tuần 11: Đọc hiểu cảm thụ văn học", topicIds: [11], desc: "Luyện đọc diễn cảm truyện ngụ ngôn, thơ ngắn và trả lời câu hỏi", icon: "📖" },
    12: { name: "Tuần 12: Đấu trường Đề thi tổng hợp", isExam: true, topicIds: [], desc: "Chinh phục đề thi HK1, HK2 và HSG để đạt điểm 10 tuyệt đối", icon: "🏆" }
};

// TỌA ĐỘ 12 TRẠM NÚT BẢN ĐỒ SVG (ZIC-ZAC 3 HÀNG) CHO KHUNG VIEWBOX 1200x650
const ROADMAP_COORDS = {
    1: { x: 150, y: 130 },  2: { x: 415, y: 130 },  3: { x: 680, y: 130 },  4: { x: 950, y: 130 },
    5: { x: 950, y: 330 },  6: { x: 680, y: 330 },  7: { x: 415, y: 330 },  8: { x: 150, y: 330 },
    9: { x: 150, y: 530 }, 10: { x: 415, y: 530 }, 11: { x: 680, y: 530 }, 12: { x: 1050, y: 530 }
};

const examFileMap = {
    hocky1: { file: 'de_thi_tieng_viet_1.json', label: 'Học kỳ 1', color: 'pink' },
    hocky2: { file: 'de_thi_tieng_viet_1.json', label: 'Học kỳ 2', color: 'purple' },
    hsg:    { file: 'de_thi_tieng_viet_1.json', label: 'Học sinh giỏi', color: 'amber' }
};

let allTopicsDataCache = null;
const examsCache = {};
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxgPIbG8HsEph5Etfu9sNQExNtb3K3mjAtyVXIfj_5IRwCfAqFIEBVrDaLlT2kql9qvUQ/exec";

let currentUser = null;
let starGreenCount = 0;
let starRedCount = 0;
let activeTopicId = null;
let activeExamContext = null;
let activeRoadmapContext = null;
let activeQuestionsList = [];
let pendingTopicQuiz = null;
let currentQIndex = 0;
let score = 0;
let userAnswers = {};
let wrongAttemptsByQ = {};
let quizWrongAnswers = [];
let quizAnsweredLog = [];
let quizStartTime = null;

// LẤY TÊN GỌI ĐỂ CÁ NHÂN HÓA LỜI KHEN VÀ ĐỘNG VIÊN
function getStudentFirstName() {
    if (!currentUser || currentUser.isGuest || !currentUser.hoTen) return "Bé";
    const parts = currentUser.hoTen.trim().split(/\s+/);
    return parts[parts.length - 1] || "Bé";
}

// BỘ CHUYỂN ĐỔI CHUẨN HÓA DỮ LIỆU RÚT GỌN (MINIFIED KEYS ADAPTER)
function normalizeQuestion(q) {
    if (!q) return null;
    return {
        question_id: q.id ?? q.question_id ?? 0,
        sub_topic: q.sub ?? q.sub_topic ?? 'Câu hỏi chung',
        week: q.week ?? q.w ?? null,
        question_text: q.q ?? q.question_text ?? '',
        options: Array.isArray(q.o) ? q.o : (Array.isArray(q.options) ? q.options : []),
        answer: q.a ?? q.answer ?? '',
        hint: q.h ?? q.hint ?? '',
        image_url: q.img ?? q.image_url ?? '',
        audio_text: q.aud ?? q.audio_text ?? '',
        reading_title: q.r_title ?? q.reading_title ?? '',
        reading_passage: q.r_passage ?? q.reading_passage ?? q.passage_text ?? '',
        skill_tag: q.skill_tag ?? null,
        diem: q.diem ?? null
    };
}

function normalizeTopic(t) {
    if (!t) return null;
    const rawQuestions = t.qs || t.questions || [];
    return {
        topic_id: Number(t.id ?? t.topic_id),
        topic_name: t.name ?? t.topic_name ?? '',
        description: t.desc ?? t.description ?? '',
        lecture_title: t.l_title ?? t.lecture_title ?? '',
        lecture_content: t.l_content ?? t.lecture_content ?? '',
        lecture_audio_text: t.l_audio ?? t.lecture_audio_text ?? '',
        questions: rawQuestions.map(normalizeQuestion).filter(Boolean)
    };
}

// THUẬT TOÁN XÁO TRỘN FISHER-YATES
function shuffleArray(arr) {
    if (!arr) return [];
    const a = arr.map(item => ({ ...item }));
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function getCycleQuestions(questions, poolKey, batchSize = 10) {
    if (!questions || !questions.length) return [];
    const shuffled = shuffleArray(questions);
    const targetCount = Math.min(batchSize, shuffled.length);
    return shuffled.slice(0, targetCount);
}

// THUẬT TOÁN BỐC 20 CÂU CHUẨN TỶ LỆ VÀNG 3:4:3[cite: 3]
function getQuestionsForWeek343(weekNumber) {
    const config = roadmapConfig[weekNumber];
    if (!config || !allTopicsDataCache) return [];
    
    let pool = [];
    config.topicIds.forEach(topicId => {
        const topicData = allTopicsDataCache.find(t => t.topic_id === topicId);
        if (topicData && topicData.questions) {
            pool = pool.concat(topicData.questions);
        }
    });
    
    if (pool.length < 20) return shuffleArray([...pool]);
    
    const size = pool.length;
    const basket1 = pool.slice(0, Math.floor(size * 0.35)); // Rổ 1 (Cơ bản): 35% đầu[cite: 3]
    const basket2 = pool.slice(Math.floor(size * 0.35), Math.floor(size * 0.75)); // Rổ 2 (Thực hành): 40% giữa[cite: 3]
    const basket3 = pool.slice(Math.floor(size * 0.75)); // Rổ 3 (Vận dụng/IQ): 25% cuối[cite: 3]
    
    const easy = shuffleArray([...basket1]).slice(0, 6);       // 30% = 6 câu[cite: 3]
    const medium = shuffleArray([...basket2]).slice(0, 8);     // 40% = 8 câu[cite: 3]
    const hard = shuffleArray([...basket3]).slice(0, 6);       // 30% = 6 câu[cite: 3]
    
    // Trộn xáo lần cuối để vị trí câu hỏi xuất hiện ngẫu nhiên[cite: 3]
    return shuffleArray([...easy, ...medium, ...hard]);
}

function capitalizeFirstLetter(val) {
    if (!val) return '';
    const s = String(val).trim();
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function beautifySubtopicName(name) {
    if (!name) return '';
    let s = name.trim();
    if (/đa giác quan/i.test(s)) return 'Trải nghiệm đa giác quan';
    if (/trái nghĩa.*đồng nghĩa/i.test(s) || /đồng nghĩa.*trái nghĩa/i.test(s)) return 'Trái nghĩa - đồng nghĩa';
    if (s.length > 25 && s.includes('(')) {
        s = s.replace(/\s*\([^)]*\)/g, '').trim();
    }
    return s;
}

// NẠP DỮ LIỆU TỪ KHO HỌC
async function fetchAllTopicsData() {
    if (allTopicsDataCache) return allTopicsDataCache;
    const res = await fetch('assets/data/kho_hoc_tieng_viet_1.json');
    if (!res.ok) throw new Error("Không thể tải file dữ liệu kho_hoc_tieng_viet_1.json");
    const data = await res.json();
    const rawTopics = Array.isArray(data) ? data : (data.topics || []);
    allTopicsDataCache = rawTopics.map(normalizeTopic).filter(Boolean);
    return allTopicsDataCache;
}

async function loadExamDataFile(file) {
    if (examsCache[file]) return examsCache[file];
    const res = await fetch(`assets/data/${file}`);
    if (!res.ok) throw new Error("Không thể tải file đề thi");
    const data = await res.json();
    if (data && Array.isArray(data.exams)) {
        data.exams = data.exams.map(ex => ({
            ...ex,
            questions: (ex.qs || ex.questions || []).map(normalizeQuestion).filter(Boolean)
        }));
    }
    examsCache[file] = data;
    return data;
}

// RENDER GIAO DIỆN TRANG CHỦ
async function renderDashboardGrid() {
    const container = document.getElementById('view-dashboard-grid');
    if (!container) return;
    
    let topicsData = [];
    try { topicsData = await fetchAllTopicsData(); } catch (e) {}

    let html = '';
    TOPICS_CONFIG.forEach(t => {
        const topicObj = topicsData.find(item => Number(item.topic_id) === Number(t.id));
        const totalCount = topicObj && topicObj.questions ? topicObj.questions.length : 0;
        const countLabel = totalCount > 0 ? `${totalCount} câu` : t.desc;

        const iconHtml = t.isCustomTextIcon 
            ? `<div class="w-8 h-8 bg-rose-100 rounded-xl flex items-center justify-center text-[11px] font-black text-rose-600 shadow-inner group-hover:scale-110 transition-transform shrink-0 tracking-tight">S/X</div>`
            : `<div class="w-8 h-8 bg-${t.color}-100 rounded-xl flex items-center justify-center text-sm font-extrabold text-${t.color}-600 shadow-inner group-hover:scale-110 transition-transform shrink-0">${t.icon}</div>`;

        html += `
            <div onclick="openTopic(${t.id}, '${t.title}', '${t.icon}')" class="pastel-card p-3 flex flex-col justify-between cursor-pointer hover:border-${t.color}-400 transition-all group min-h-[95px]">
                <div class="flex items-center space-x-2.5">
                    ${iconHtml}
                    <h3 class="font-extrabold text-${t.color}-700 text-sm md:text-base leading-tight">${t.title}</h3>
                </div>
                <div class="flex justify-between items-center mt-2 pt-1.5 border-t border-pink-100 text-[11px] font-bold text-gray-500">
                    <span>${t.desc}</span>
                    <span class="bg-${t.color}-50 text-${t.color}-600 px-2 py-0.5 rounded-full">${countLabel}</span>
                </div>
            </div>
        `;
    });

    let totalExamsCount = 3;
    try {
        const examData = await loadExamDataFile('de_thi_tieng_viet_1.json');
        if (examData && examData.exams) totalExamsCount = examData.exams.length;
    } catch (e) {}

    html += `
        <div onclick="openExamHub()" class="pastel-card p-3 flex flex-col justify-between cursor-pointer hover:border-amber-400 transition-all group bg-gradient-to-br from-white to-amber-50/50 min-h-[95px]">
            <div class="flex items-center space-x-2.5">
                <div class="w-8 h-8 bg-amber-100 rounded-xl flex items-center justify-center text-sm font-extrabold text-amber-600 shadow-inner group-hover:scale-110 transition-transform shrink-0">🏆</div>
                <h3 class="font-extrabold text-amber-700 text-sm md:text-base leading-tight">12. Đấu trường đề thi</h3>
            </div>
            <div class="flex justify-between items-center mt-2 pt-1.5 border-t border-amber-100 text-[11px] font-bold text-amber-600">
                <span>HK1, HK2, HSG</span>
                <span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">${totalExamsCount} đề thi</span>
            </div>
        </div>
    `;
    container.innerHTML = html;
}

// RENDER ĐẤU TRƯỜNG ĐỀ THI (3 Ô LỚN)
async function renderExamHubGrid() {
    const container = document.getElementById('exam-categories-grid');
    if (!container) return;

    let examData = null;
    try { examData = await loadExamDataFile('de_thi_tieng_viet_1.json'); } catch (e) {}

    const getCountForCat = (catName) => {
        if (!examData || !examData.exams) return 3;
        return examData.exams.filter(e => (e.exam_category || '').toLowerCase().includes(catName)).length || 3;
    };

    const countHK1 = getCountForCat('học kỳ 1') || getCountForCat('hk1');
    const countHK2 = getCountForCat('học kỳ 2') || getCountForCat('hk2');
    const countHSG = getCountForCat('giỏi') || getCountForCat('hsg');

    let html = `
        <div onclick="startRandomExam('hocky1')" class="bg-pink-50/70 p-5 rounded-2xl border-2 border-pink-200 flex flex-col justify-between items-center text-center cursor-pointer hover:border-pink-400 transition-all group min-h-[220px] pastel-card">
            <div>
                <div class="text-4xl mb-2 group-hover:scale-110 transition-transform">🌸</div>
                <h3 class="font-extrabold text-pink-600 text-lg mb-1">Học kỳ 1</h3>
                <p class="text-xs text-gray-500 font-bold">Kiểm tra kiến thức HK1</p>
            </div>
            <span class="w-full py-2.5 bg-pink-400 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">${countHK1} đề thi</span>
        </div>

        <div onclick="startRandomExam('hocky2')" class="bg-purple-50/70 p-5 rounded-2xl border-2 border-purple-200 flex flex-col justify-between items-center text-center cursor-pointer hover:border-purple-400 transition-all group min-h-[220px] pastel-card">
            <div>
                <div class="text-4xl mb-2 group-hover:scale-110 transition-transform">⭐</div>
                <h3 class="font-extrabold text-purple-600 text-lg mb-1">Học kỳ 2</h3>
                <p class="text-xs text-gray-500 font-bold">Kiểm tra kiến thức HK2</p>
            </div>
            <span class="w-full py-2.5 bg-purple-400 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">${countHK2} đề thi</span>
        </div>

        <div onclick="startRandomExam('hsg')" class="bg-amber-50/70 p-5 rounded-2xl border-2 border-amber-200 flex flex-col justify-between items-center text-center cursor-pointer hover:border-amber-400 transition-all group min-h-[220px] pastel-card">
            <div>
                <div class="text-4xl mb-2 group-hover:scale-110 transition-transform">🏆</div>
                <h3 class="font-extrabold text-amber-600 text-lg mb-1">Học sinh giỏi</h3>
                <p class="text-xs text-gray-500 font-bold">Thử thách nâng cao IQ</p>
            </div>
            <span class="w-full py-2.5 bg-amber-400 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">${countHSG} đề thi</span>
        </div>
    `;
    container.innerHTML = html;
}

function updateNavTabs(level2Title, level2Icon, level3Title) {
    const tab2 = document.getElementById('header-level2-tab');
    const tab3 = document.getElementById('header-level3-tab');
    const homeBtn = document.getElementById('btn-header-home');

    if (level2Title) {
        document.getElementById('header-level2-title').textContent = level2Title;
        document.getElementById('header-level2-icon').textContent = level2Icon || '🌸';
        tab2.classList.remove('hidden');
        tab2.classList.add('flex');
        homeBtn.classList.add('opacity-80', 'hover:opacity-100');
    } else {
        tab2.classList.add('hidden');
        tab2.classList.remove('flex');
        homeBtn.classList.remove('opacity-80');
    }

    if (level3Title) {
        document.getElementById('header-level3-title').textContent = level3Title;
        tab3.classList.remove('hidden');
        tab3.classList.add('flex');
    } else {
        tab3.classList.add('hidden');
        tab3.classList.remove('flex');
    }
}

function returnToTopicLecture() {
    stopSpeaking();
    if (activeExamContext) {
        openExamHub();
    } else if (activeRoadmapContext) {
        openRoadmap();
    } else if (pendingTopicQuiz) {
        updateNavTabs(pendingTopicQuiz.topicName, TOPICS_CONFIG.find(t => t.id === pendingTopicQuiz.topicNum)?.icon, null);
        switchAppView('view-lecture');
    }
}

function switchAppView(viewId) {
    stopSpeaking();
    ['view-dashboard-grid', 'view-lecture', 'view-quiz', 'view-roadmap', 'view-exam-hub', 'view-result'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (id === viewId) el.classList.remove('hidden');
        else el.classList.add('hidden');
    });
}

function goHome() {
    stopSpeaking();
    updateNavTabs(null, null, null);
    switchAppView('view-dashboard-grid');
}

function switchAuthTab(tab) {
    const isLogin = tab === 'login';
    document.getElementById('form-login').classList.toggle('hidden', !isLogin);
    document.getElementById('form-register').classList.toggle('hidden', isLogin);
    document.getElementById('tab-btn-login').className = `py-2 rounded-xl font-extrabold text-xs md:text-sm pastel-btn ${isLogin ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-400'}`;
    document.getElementById('tab-btn-register').className = `py-2 rounded-xl font-extrabold text-xs md:text-sm pastel-btn ${!isLogin ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-400'}`;
    hideAuthError();
}

function updateMaHSPreview() {
    const lop = document.getElementById('reg-lop').value.trim().toUpperCase();
    const stt = document.getElementById('reg-stt').value.trim();
    document.getElementById('mahs-preview').textContent = (lop && stt) ? `${lop}-${stt.padStart(2, '0')}` : '--';
}

function showAuthError(msg) {
    const el = document.getElementById('auth-error-msg');
    el.textContent = msg;
    el.classList.remove('hidden');
}
function hideAuthError() { document.getElementById('auth-error-msg').classList.add('hidden'); }

async function callAppsScript(action, payload) {
    const res = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action, payload })
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}

async function doLogin() {
    hideAuthError();
    const maHS = document.getElementById('login-mahs').value.trim();
    const maPin = document.getElementById('login-mapin').value.trim();
    if (!maHS || !maPin) return showAuthError('Bé nhập đủ Mã ID và Mã PIN nhé!');

    const btn = document.getElementById('btn-do-login');
    btn.disabled = true; btn.textContent = 'Đang đăng nhập...';
    try {
        const result = await callAppsScript('login', { maHS, maPin });
        if (!result.ok) return showAuthError(result.error);
        currentUser = { ...result.student, isGuest: false };
        localStorage.setItem('tv1_mahs', maHS);
        localStorage.setItem('tv1_mapin', maPin);
        enterDashboard();
    } catch (err) {
        showAuthError('Lỗi kết nối: ' + err.message);
    } finally {
        btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-right-to-bracket mr-1"></i> Đăng nhập';
    }
}

async function doRegister() {
    hideAuthError();
    const hoTen = document.getElementById('reg-hoten').value.trim();
    const ngaySinhRaw = document.getElementById('reg-ngaysinh').value;
    const lop = document.getElementById('reg-lop').value.trim();
    const soThuTu = document.getElementById('reg-stt').value.trim();
    const maPin = document.getElementById('reg-mapin').value.trim();

    if (!hoTen || !ngaySinhRaw || !lop || !soThuTu || !maPin) return showAuthError('Bé điền đủ tất cả các ô có dấu * nhé!');
    if (!/^\d{4}$/.test(maPin)) return showAuthError('Mã PIN phải gồm đúng 4 chữ số!');

    const [y, m, d] = ngaySinhRaw.split('-');
    const ngaySinh = `${d}-${m}-${y.slice(2)}`;
    const btn = document.getElementById('btn-do-register');
    btn.disabled = true; btn.textContent = 'Đang đăng ký...';
    try {
        const result = await callAppsScript('register', { hoTen, ngaySinh, lop, soThuTu, maPin });
        if (!result.ok) return showAuthError(result.error);
        alert(`Đã gửi đăng ký thành công, vui lòng chờ Admin duyệt! Mã ID của bé là: ${result.student.maHS}`);
        document.getElementById('login-mahs').value = result.student.maHS;
        switchAuthTab('login');
    } catch (err) {
        showAuthError('Lỗi kết nối: ' + err.message);
    } finally {
        btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-user-plus mr-1"></i> Đăng ký ngay';
    }
}

async function tryAutoLogin() {
    const maHS = localStorage.getItem('tv1_mahs');
    const maPin = localStorage.getItem('tv1_mapin');
    if (!maHS || !maPin) return;
    try {
        const res = await callAppsScript('login', { maHS, maPin });
        if (res.ok) { currentUser = { ...res.student, isGuest: false }; enterDashboard(); }
    } catch (e) {}
}

function logout() {
    currentUser = null;
    localStorage.removeItem('tv1_mahs');
    localStorage.removeItem('tv1_mapin');
    document.getElementById('screen-dashboard').classList.add('hidden');
    document.getElementById('screen-login').classList.remove('hidden');
}

function handleGuestMode() {
    currentUser = { name: "Khách (Guest)", isGuest: true, tuanHienTai: 1 };
    enterDashboard();
}

function enterDashboard() {
    document.getElementById('screen-login').classList.add('hidden');
    document.getElementById('screen-dashboard').classList.remove('hidden');
    updateUserInfoBox();
    resetStars();
    renderDashboardGrid();
    renderExamHubGrid();
    goHome();
}

function updateUserInfoBox() {
    const box = document.getElementById('user-info-box');
    if (!box) return;
    if (currentUser && !currentUser.isGuest) {
        box.innerHTML = `
            <div class="flex items-center space-x-2">
                <div class="text-right">
                    <div class="text-pink-600 font-extrabold text-xs md:text-sm leading-tight">${escapeHtml(currentUser.hoTen)}</div>
                    <div class="text-gray-500 font-semibold text-[10px]">ID: ${escapeHtml(currentUser.maHS)} | Lớp ${escapeHtml(currentUser.lop)}</div>
                </div>
                <button onclick="logout()" title="Đăng xuất" class="w-8 h-8 flex items-center justify-center bg-rose-100 hover:bg-rose-200 text-rose-500 rounded-xl border border-rose-200 pastel-btn text-xs"><i class="fa-solid fa-right-from-bracket"></i></button>
            </div>`;
    } else {
        box.innerHTML = `<span class="text-amber-600 font-extrabold text-xs">Khách (Guest)</span><br><span class="text-gray-400 font-semibold text-[10px]">Chưa đăng nhập</span>`;
    }
}

function resetStars() {
    starGreenCount = 0; starRedCount = 0;
    const greenEl = document.getElementById('star-green-count');
    const redEl = document.getElementById('star-red-count');
    if (greenEl) greenEl.textContent = 0;
    if (redEl) redEl.textContent = 0;
}

// BẢN ĐỒ LỘ TRÌNH TUẦN (SVG ZIC-ZAC 1200x650 CHO TAB S9 FE)[cite: 3]
function clickProgressOrExam(type) {
    if (!currentUser || currentUser.isGuest) return alert('Bé vui lòng đăng nhập để sử dụng tính năng này nhé!');
    if (type === 'progress') openRoadmap();
    else if (type === 'exam') openExamHub();
}

function openRoadmap() {
    stopSpeaking();
    updateNavTabs("Bản đồ tiến trình tuần", "🗺️", null);
    renderRoadmapSVG();
    switchAppView('view-roadmap');
}

function renderRoadmapSVG() {
    const container = document.getElementById('roadmap-svg-container');
    if (!container) return;
    const tuanHienTai = Number(currentUser?.tuanHienTai) || 1;

    let nodesHtml = '';
    for (let w = 1; w <= 12; w++) {
        const item = roadmapConfig[w];
        const coord = ROADMAP_COORDS[w];
        const isDone = w < tuanHienTai;
        const isCurrent = w === tuanHienTai;
        const isLocked = w > tuanHienTai;

        let nodeColor = isDone ? "#10b981" : (isCurrent ? "#ec4899" : "#cbd5e1");
        let strokeColor = isDone ? "#34d399" : (isCurrent ? "#f43f5e" : "#94a3b8");
        let badgeHtml = '';

        if (isDone) {
            badgeHtml = `<text x="${coord.x}" y="${coord.y + 40}" text-anchor="middle" font-size="16" fill="#f59e0b">⭐⭐⭐</text>`;
        } else if (isCurrent) {
            badgeHtml = `<text x="${coord.x}" y="${coord.y + 40}" text-anchor="middle" font-size="12" font-weight="900" fill="#ec4899">ĐANG HỌC</text>`;
        } else {
            badgeHtml = `<text x="${coord.x}" y="${coord.y + 38}" text-anchor="middle" font-size="14" fill="#94a3b8">🔒 Khóa</text>`;
        }

        const cursorCls = isLocked ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:scale-105 transition-transform";
        const animCls = isCurrent ? "node-current" : "";

        nodesHtml += `
            <g class="${cursorCls} ${animCls}" onclick="selectRoadmapWeek(${w})" id="svg-node-week-${w}">
                <!-- VÒNG TRÒN NỀN TRẠM -->
                <circle cx="${coord.x}" cy="${coord.y}" r="40" fill="#ffffff" stroke="${strokeColor}" stroke-width="4" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.08))"/>
                <circle cx="${coord.x}" cy="${coord.y}" r="34" fill="${nodeColor}" opacity="${isLocked ? '0.25' : '0.15'}"/>
                
                <!-- ICON HOẠT HỌA -->
                <text x="${coord.x}" y="${coord.y - 4}" text-anchor="middle" font-size="24">${item.icon || '🌸'}</text>
                
                <!-- NHÃN TUẦN -->
                <text x="${coord.x}" y="${coord.y + 18}" text-anchor="middle" font-size="13" font-weight="800" fill="${isLocked ? '#64748b' : '#1e293b'}">Tuần ${w}</text>
                
                <!-- TRẠNG THÁI SAO / KHÓA -->
                ${badgeHtml}
            </g>
        `;
    }

    const svgHtml = `
        <svg viewBox="0 0 1200 650" class="w-full max-h-[66vh] select-none" xmlns="http://www.w3.org/2000/svg">
            <!-- ĐƯỜNG MÒN NÉT ĐỨT CHỮ S UỐN LƯỢN[cite: 3] -->
            <path d="M 150,130 Q 550,130 950,130 C 1120,130 1120,330 950,330 Q 550,330 150,330 C -20,330 -20,530 150,530 Q 550,530 1050,530" 
                  fill="none" stroke="#fbcfe8" stroke-width="12" stroke-dasharray="14,14" stroke-linecap="round"/>
            <path d="M 150,130 Q 550,130 950,130 C 1120,130 1120,330 950,330 Q 550,330 150,330 C -20,330 -20,530 150,530 Q 550,530 1050,530" 
                  fill="none" stroke="#f472b6" stroke-width="4" stroke-dasharray="14,14" stroke-linecap="round"/>

            <!-- 12 TRẠM NÚT TUẦN HỌC -->
            ${nodesHtml}
        </svg>
    `;
    container.innerHTML = svgHtml;
}

async function selectRoadmapWeek(weekNum) {
    stopSpeaking();
    const config = roadmapConfig[weekNum];
    if (!config) return;
    
    const tuanHienTai = Number(currentUser?.tuanHienTai) || 1;
    if (weekNum > tuanHienTai) {
        return alert(`Tuần ${weekNum} đang bị khóa. Bé hãy hoàn thành Tuần ${tuanHienTai} đạt từ 80% trở lên để mở khóa nhé!`);
    }

    if (config.isExam) return openExamHub();

    activeRoadmapContext = { week: weekNum, topicId: config.topicIds[0] || 1, chuDe: config.name };
    pendingTopicQuiz = null; activeExamContext = null;
    updateNavTabs("Tiến trình tuần", "📅", `Tuần ${weekNum}`);

    showLoadingOverlay(`Đang bốc 20 câu hỏi Tuần ${weekNum} (tỷ lệ 3:4:3)...`);
    try {
        await fetchAllTopicsData();
        hideLoadingOverlay();

        // Bốc 20 câu theo tỷ lệ 3:4:3[cite: 3]
        const weekQuestions = getQuestionsForWeek343(weekNum);
        if (!weekQuestions.length) return alert('Tuần này đang chuẩn bị thêm câu hỏi, bé quay lại sau nhé!');

        startTopicQuiz(config.topicIds[0] || 1, config.name, weekQuestions, null);
    } catch (err) {
        hideLoadingOverlay();
        alert(`Lỗi tải dữ liệu tuần: ${err.message}`);
    }
}

async function openTopic(topicNum, topicName, icon) {
    stopSpeaking();
    activeTopicId = topicNum; activeExamContext = null; activeRoadmapContext = null;
    updateNavTabs(topicName, icon || '🌸', null);

    showLoadingOverlay(`Đang tải chủ đề "${topicName}"...`);
    try {
        const topics = await fetchAllTopicsData();
        const topicObj = topics.find(t => Number(t.topic_id) === Number(topicNum));
        hideLoadingOverlay();
        if (!topicObj || !topicObj.questions || !topicObj.questions.length) throw new Error("Chủ đề không có câu hỏi nào");
        
        showLectureAndSubtopics(topicNum, topicName, topicObj);
    } catch (err) {
        hideLoadingOverlay();
        alert(`Không thể tải chủ đề: ${err.message}`);
    }
}

function showLectureAndSubtopics(topicNum, topicName, topicObj) {
    pendingTopicQuiz = { topicNum, topicName, questions: topicObj.questions };
    
    document.getElementById('lecture-title').textContent = topicObj.lecture_title || `Bài giảng: ${topicName}`;
    document.getElementById('lecture-content').textContent = topicObj.lecture_content || 'Chào mừng bé yêu! Hãy chọn một mục nhỏ bên dưới để bắt đầu luyện tập nhé.';
    document.getElementById('view-lecture').dataset.audioText = topicObj.lecture_audio_text || topicObj.lecture_content || '';

    const groups = [], groupMap = {};
    topicObj.questions.forEach(q => {
        const k = q.sub_topic || 'Câu hỏi chung';
        if (!groupMap[k]) { groupMap[k] = []; groups.push(k); }
        groupMap[k].push(q);
    });
    pendingTopicQuiz.groups = groups; 
    pendingTopicQuiz.groupMap = groupMap;

    let subHtml = '';
    groups.forEach((subName, idx) => {
        const style = SUBTOPIC_PALETTES[idx % SUBTOPIC_PALETTES.length];
        const displayTitle = beautifySubtopicName(subName);
        const count = groupMap[subName].length;

        subHtml += `
            <button onclick="selectSubtopic(${idx})" class="p-3 ${style.card} border-2 rounded-xl font-bold text-left transition-all flex items-center justify-between shadow-sm pastel-btn">
                <span class="text-xs md:text-sm leading-snug"><strong class="${style.num} mr-1.5">${idx + 1}.</strong> ${escapeHtml(displayTitle)}</span>
                <span class="text-[10px] md:text-xs font-extrabold ${style.badge} px-2 py-0.5 rounded-full border shrink-0 ml-1.5 shadow-inner">${count} câu</span>
            </button>`;
    });
    document.getElementById('lecture-subtopics-list').innerHTML = subHtml;

    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🌸', null);
    switchAppView('view-lecture');
}

function speakLecture() {
    speakVietnamese(document.getElementById('view-lecture').dataset.audioText || '', 0.92, 1.05);
}

function selectSubtopic(idx) {
    stopSpeaking();
    if (!pendingTopicQuiz) return;
    const { topicNum, topicName, questions, groups, groupMap } = pendingTopicQuiz;
    const subLabel = idx !== null ? groups[idx] : null;
    const pool = idx !== null ? groupMap[subLabel] : questions;
    const finalTitle = subLabel ? `${topicName} - ${beautifySubtopicName(subLabel)}` : topicName;
    const poolKey = `topic_${topicNum}_sub_${subLabel ? subLabel.replace(/\s+/g, '_') : 'all'}`;

    const cycledQuestions = getCycleQuestions(pool, poolKey, 10);

    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🌸', subLabel ? beautifySubtopicName(subLabel) : 'Tất cả các mục');
    startTopicQuiz(topicNum, finalTitle, cycledQuestions, subLabel);
}

function startTopicQuiz(topicNum, topicName, questions, subLabel) {
    stopSpeaking();
    activeQuestionsList = questions; 
    currentQIndex = 0; 
    score = 0;
    userAnswers = {};
    wrongAttemptsByQ = {};
    quizWrongAnswers = []; 
    quizAnsweredLog = []; 
    quizStartTime = Date.now();

    document.getElementById('total-q-idx').textContent = activeQuestionsList.length;
    document.getElementById('btn-back-subtopics').classList.toggle('hidden', !pendingTopicQuiz || !!activeExamContext);

    switchAppView('view-quiz');
    loadQuestion();
}

// BỐC ĐỀ VÀ XÁO TRỘN ĐỀ THI NGẪU NHIÊN (MỤC 12)
function openExamHub() {
    if (!currentUser || currentUser.isGuest) return alert('Bé vui lòng đăng nhập để vào Đấu trường đề thi nhé!');
    stopSpeaking();
    updateNavTabs("Đấu trường đề thi", "🏆", null);
    renderExamHubGrid();
    switchAppView('view-exam-hub');
}

async function startRandomExam(categoryKey) {
    stopSpeaking();
    const mapInfo = examFileMap[categoryKey];
    if (!mapInfo) return;

    showLoadingOverlay('Đang chọn ngẫu nhiên đề thi...');
    try {
        const data = await loadExamDataFile(mapInfo.file);
        hideLoadingOverlay();
        if (!data.exams || !data.exams.length) throw new Error("Không có đề thi nào");

        const filteredExams = data.exams.filter(e => {
            const cat = (e.exam_category || '').toLowerCase();
            if (categoryKey === 'hocky1') return cat.includes('học kỳ 1') || cat.includes('hk1');
            if (categoryKey === 'hocky2') return cat.includes('học kỳ 2') || cat.includes('hk2');
            if (categoryKey === 'hsg') return cat.includes('giỏi') || cat.includes('hsg');
            return true;
        });

        const targetList = filteredExams.length ? filteredExams : data.exams;
        const randomIdx = Math.floor(Math.random() * targetList.length);
        const selectedExam = targetList[randomIdx];

        activeExamContext = { categoryKey, examIndex: randomIdx };
        activeTopicId = null; 
        pendingTopicQuiz = null; 
        activeRoadmapContext = null;

        // Xáo trộn ngẫu nhiên thứ tự câu hỏi trong đề
        activeQuestionsList = shuffleArray(selectedExam.questions); 
        currentQIndex = 0; 
        score = 0;
        userAnswers = {};
        wrongAttemptsByQ = {};
        quizWrongAnswers = []; 
        quizAnsweredLog = []; 
        quizStartTime = Date.now();

        updateNavTabs("Đấu trường đề thi", "🏆", `${mapInfo.label}`);
        document.getElementById('total-q-idx').textContent = activeQuestionsList.length;
        document.getElementById('btn-back-subtopics').classList.add('hidden');
        switchAppView('view-quiz');
        loadQuestion();
    } catch (err) {
        hideLoadingOverlay();
        alert(`Lỗi tải đề thi: ${err.message}`);
    }
}

// QUẢN LÝ CÂU HỎI TRẮC NGHIỆM (LƯỚI 2x2 CÂN ĐỐI)
function loadQuestion() {
    stopSpeaking();
    const q = activeQuestionsList[currentQIndex];
    if (!q) return;
    document.getElementById('current-q-idx').textContent = currentQIndex + 1;

    let mediaHtml = '';
    if (q.image_url) {
        mediaHtml = `<img src="${q.image_url}" alt="minh họa" class="w-16 h-16 md:w-20 md:h-20 object-contain mb-1.5 floating" onerror="this.remove()">`;
    }

    const pText = q.reading_passage;
    const pTitle = q.reading_title;
    const passageHtml = pText ? `
        <div class="w-full max-w-2xl bg-pink-50/70 border-2 border-pink-200 rounded-2xl p-3 md:p-4 mb-2 text-left">
            ${pTitle ? `<p class="font-extrabold text-pink-600 text-xs md:text-sm mb-1">${escapeHtml(pTitle)}</p>` : ''}
            <p class="text-gray-700 text-xs md:text-sm whitespace-pre-line leading-relaxed">${escapeHtml(pText)}</p>
        </div>` : '';

    let html = `
        ${mediaHtml}
        ${passageHtml}
        <div class="flex flex-wrap items-center justify-center gap-2 mb-3 md:mb-4 max-w-2xl text-center px-2">
            <h3 class="text-base md:text-xl font-extrabold text-gray-800 leading-snug inline">
                ${escapeHtml(q.question_text)}
            </h3>
            <button onclick="speakCurrentQuestion()" title="Nghe câu hỏi" class="inline-flex items-center space-x-1 px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-600 font-extrabold rounded-xl border border-blue-200 text-xs shadow-sm pastel-btn align-middle">
                <i class="fa-solid fa-volume-high text-xs"></i>
                <span>Nghe câu hỏi</span>
            </button>
        </div>
        
        <!-- BỐ CỤC 4 ĐÁP ÁN LƯỚI 2x2 (CỘT TRÁI: A, B; CỘT PHẢI: C, D) -->
        <div class="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:grid-flow-col gap-2.5">
    `;

    q.options.forEach((opt, idx) => {
        const formattedOpt = capitalizeFirstLetter(opt);
        html += `
            <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn w-full p-3 md:p-3.5 bg-pink-50/50 hover:bg-pink-100 border-2 border-pink-200 rounded-2xl font-bold text-gray-700 text-left transition-all flex items-center justify-between text-base md:text-lg shadow-sm">
                <span><strong class="text-pink-500 mr-2">${String.fromCharCode(65 + idx)}.</strong> ${escapeHtml(formattedOpt)}</span>
                <span class="option-icon text-pink-400"></span>
            </button>`;
    });
    html += `</div>`;

    document.getElementById('question-box').innerHTML = html;

    restoreQuestionState(q);
    updateNavButtons();

    setTimeout(() => {
        speakCurrentQuestion();
    }, 200);
}

function restoreQuestionState(q) {
    const isFreeMode = !activeRoadmapContext && !activeExamContext;
    const completedAnswer = userAnswers[currentQIndex];
    const wrongAttempts = wrongAttemptsByQ[currentQIndex] || [];

    if (isFreeMode && wrongAttempts.length > 0) {
        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            if (wrongAttempts.includes(bOpt)) {
                b.classList.remove('bg-pink-50/50', 'border-pink-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
                b.disabled = true;
            }
        });
    }

    if (completedAnswer !== undefined) {
        const isCorrect = completedAnswer === q.answer;
        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = true;
            const bOpt = b.getAttribute('data-opt');

            if (isFreeMode) {
                if (bOpt === q.answer) {
                    b.classList.remove('bg-pink-50/50', 'border-pink-200');
                    b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
                }
            } else {
                if (bOpt === completedAnswer) {
                    b.classList.remove('bg-pink-50/50', 'border-pink-200');
                    b.classList.add(isCorrect ? 'bg-green-100' : 'bg-red-200', isCorrect ? 'border-green-400' : 'border-red-500', isCorrect ? 'text-green-800' : 'text-red-900');
                }
                if (!isCorrect && bOpt === q.answer) {
                    b.classList.remove('bg-pink-50/50', 'border-pink-200');
                    b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
                }
            }
        });
    }
}

function updateNavButtons() {
    const btnPrev = document.getElementById('btn-prev-q');
    const nextText = document.getElementById('btn-next-text');
    const nextIcon = document.getElementById('btn-next-icon');

    if (currentQIndex === 0) {
        btnPrev.disabled = true;
        btnPrev.classList.add('opacity-40', 'cursor-not-allowed');
    } else {
        btnPrev.disabled = false;
        btnPrev.classList.remove('opacity-40', 'cursor-not-allowed');
    }

    if (currentQIndex === activeQuestionsList.length - 1) {
        nextText.textContent = "Hoàn thành";
        nextIcon.className = "fa-solid fa-trophy ml-1.5";
    } else {
        nextText.textContent = "Câu sau";
        nextIcon.className = "fa-solid fa-arrow-right ml-1.5";
    }
}

// XỬ LÝ CHẤM ĐIỂM & LỒNG LỜI KHEN TTS CÁ NHÂN HÓA
function checkAnswer(selectedOpt) {
    const q = activeQuestionsList[currentQIndex];
    const isCorrect = selectedOpt === q.answer;
    const isFreeMode = !activeRoadmapContext && !activeExamContext;
    const studentName = getStudentFirstName();

    if (isFreeMode) {
        // CHẾ ĐỘ HỌC TỰ DO (ĐƯỢC THỬ LẠI CHO ĐẾN KHI ĐÚNG)
        if (userAnswers[currentQIndex] !== undefined) return;

        if (isCorrect) {
            userAnswers[currentQIndex] = selectedOpt;
            score++;
            starGreenCount++;
            document.getElementById('star-green-count').textContent = starGreenCount;

            document.querySelectorAll('.option-btn').forEach(b => {
                b.disabled = true;
                if (b.getAttribute('data-opt') === q.answer) {
                    b.classList.remove('bg-pink-50/50', 'border-pink-200');
                    b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
                }
            });

            playAudio('correct');
            confetti({ particleCount: 30, spread: 55, origin: { y: 0.7 } });
            setTimeout(() => speakVietnamese(`${q.answer}. ${studentName} giỏi quá, cố lên con yêu!`, 0.95, 1.05), 180);

            quizAnsweredLog.push({
                question_id: q.question_id,
                question_text: q.question_text,
                skill_tag: q.skill_tag || null,
                diem: q.diem ?? null,
                isCorrect: true,
                dap_an_chon: selectedOpt,
                dap_an_dung: q.answer
            });
        } else {
            if (!wrongAttemptsByQ[currentQIndex]) wrongAttemptsByQ[currentQIndex] = [];
            if (!wrongAttemptsByQ[currentQIndex].includes(selectedOpt)) {
                wrongAttemptsByQ[currentQIndex].push(selectedOpt);
                starRedCount++;
                document.getElementById('star-red-count').textContent = starRedCount;
                quizWrongAnswers.push({
                    question_id: q.question_id,
                    question_text: q.question_text,
                    dap_an_chon: selectedOpt,
                    dap_an_dung: q.answer
                });
            }

            document.querySelectorAll('.option-btn').forEach(b => {
                if (b.getAttribute('data-opt') === selectedOpt) {
                    b.classList.remove('bg-pink-50/50', 'border-pink-200');
                    b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
                    b.disabled = true;
                }
            });

            playAudio('wrong');
            setTimeout(() => speakVietnamese(`Tiếc quá, ${studentName} suy nghĩ thêm một chút nhé!`, 0.95, 1.05), 300);
        }
    } else {
        // CHẾ ĐỘ ĐÁNH GIÁ (TIẾN TRÌNH TUẦN & ĐẤU TRƯỜNG: 1 CHẠM KHÓA TOÀN BỘ)
        if (userAnswers[currentQIndex] !== undefined) return;
        userAnswers[currentQIndex] = selectedOpt;

        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = true;
            const bOpt = b.getAttribute('data-opt');

            if (bOpt === selectedOpt) {
                b.classList.remove('bg-pink-50/50', 'border-pink-200');
                b.classList.add(isCorrect ? 'bg-green-100' : 'bg-red-200', isCorrect ? 'border-green-400' : 'border-red-500', isCorrect ? 'text-green-800' : 'text-red-900');
            }
            if (!isCorrect && bOpt === q.answer) {
                b.classList.remove('bg-pink-50/50', 'border-pink-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
            }
        });

        if (isCorrect) {
            score++;
            starGreenCount++;
            document.getElementById('star-green-count').textContent = starGreenCount;
            playAudio('correct');
            confetti({ particleCount: 30, spread: 55, origin: { y: 0.7 } });
            setTimeout(() => speakVietnamese(`${q.answer}. ${studentName} giỏi quá, cố lên con yêu!`, 0.95, 1.05), 180);
        } else {
            starRedCount++;
            document.getElementById('star-red-count').textContent = starRedCount;
            playAudio('wrong');
            quizWrongAnswers.push({
                question_id: q.question_id,
                question_text: q.question_text,
                dap_an_chon: selectedOpt,
                dap_an_dung: q.answer
            });
            setTimeout(() => speakVietnamese(`Tiếc quá, ${studentName} suy nghĩ thêm một chút nhé!`, 0.95, 1.05), 300);
        }

        quizAnsweredLog.push({
            question_id: q.question_id,
            question_text: q.question_text,
            skill_tag: q.skill_tag || null,
            diem: q.diem ?? null,
            isCorrect,
            dap_an_chon: selectedOpt,
            dap_an_dung: q.answer
        });
    }
}

function prevQuestion() {
    stopSpeaking();
    if (currentQIndex > 0) {
        currentQIndex--;
        loadQuestion();
    }
}

function nextQuestion() {
    stopSpeaking();
    const isFreeMode = !activeRoadmapContext && !activeExamContext;

    if (userAnswers[currentQIndex] === undefined) {
        if (isFreeMode) alert('Bé hãy tìm đáp án đúng để hoàn thành câu này nhé!');
        else alert('Bé hãy chọn một đáp án trước khi qua câu tiếp theo nhé!');
        return;
    }

    if (currentQIndex < activeQuestionsList.length - 1) {
        currentQIndex++;
        loadQuestion();
    } else {
        showResultScreen();
    }
}

// HIỂN THỊ KẾT QUẢ VÀ TÍNH SAO (NGƯỠNG MỞ KHÓA 80%)[cite: 3]
function showResultScreen() {
    stopSpeaking();
    switchAppView('view-result');
    const totalQ = activeQuestionsList.length;
    const percent = Math.round((score / totalQ) * 100);
    const studentName = getStudentFirstName();

    let starCount = 0;
    let starStr = 'Cần cố gắng';
    if (percent === 100) { starCount = 3; starStr = '⭐⭐⭐ (Xuất sắc)'; }[cite: 3]
    else if (percent >= 85) { starCount = 2; starStr = '⭐⭐ (Giỏi)'; }[cite: 3]
    else if (percent >= 80) { starCount = 1; starStr = '⭐ (Đạt)'; }[cite: 3]

    document.getElementById('res-correct-txt').textContent = `${score}/${totalQ} (${percent}%)`;
    document.getElementById('res-star-txt').textContent = starStr;

    if (percent >= 80) {
        document.getElementById('res-title-txt').textContent = `Chúc mừng ${studentName} yêu quý! 🎉`;
        document.getElementById('res-desc-txt').textContent = `Con đã xuất sắc đạt ${percent}% điểm, đủ điều kiện mở khóa tuần học mới!`;
        confetti({ particleCount: 130, spread: 85, origin: { y: 0.6 } });
        playAudio('win');
    } else {
        document.getElementById('res-title-txt').textContent = `Cố gắng lên nhé ${studentName}! 💪`;
        document.getElementById('res-desc-txt').textContent = `Bé đạt ${percent}% điểm. Bé cần đạt từ 80% trở lên để mở khóa tuần kế tiếp nhé!`;
    }

    if (currentUser && !currentUser.isGuest) {
        if (activeExamContext) saveExamResultToSheet();
        else if (activeRoadmapContext) saveWeeklyProgressToSheet(percent, starCount);
    }
}

function retryQuiz() {
    stopSpeaking();
    currentQIndex = 0; 
    score = 0; 
    userAnswers = {};
    wrongAttemptsByQ = {};
    quizWrongAnswers = []; 
    quizAnsweredLog = []; 
    quizStartTime = Date.now();
    document.getElementById('total-q-idx').textContent = activeQuestionsList.length;
    switchAppView('view-quiz');
    loadQuestion();
}

async function saveExamResultToSheet() {
    const { categoryKey, examIndex } = activeExamContext;
    const thoiGianLamBai = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '';
    const payload = {
        maHS: currentUser.maHS, examCategory: categoryKey, deSo: examIndex + 1, thoiGianLamBai,
        answeredQuestions: activeQuestionsList[0]?.skill_tag ? quizAnsweredLog : undefined,
        tongCauHoi: activeQuestionsList.length, soCauDung: score, wrongQuestions: quizWrongAnswers
    };
    try { await callAppsScript('saveExamResult', payload); } catch (e) {}
}

async function saveWeeklyProgressToSheet(percent, starCount) {
    const { week, topicId, chuDe } = activeRoadmapContext;
    const thoiGianLamBai = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '';
    const scoreThang10 = ((score / activeQuestionsList.length) * 10).toFixed(1);

    const payload = {
        student_id: currentUser.maHS,
        maHS: currentUser.maHS,
        week_completed: week,
        tuan: week,
        chuDe,
        topicId,
        score: scoreThang10,
        stars_earned: starCount,
        tongCauHoi: activeQuestionsList.length,
        total_questions: activeQuestionsList.length,
        soCauDung: score,
        percent,
        thoiGianLamBai,
        wrongQuestions: quizWrongAnswers,
        timestamp: new Date().toISOString()
    };

    try {
        await callAppsScript('saveWeeklyProgress', payload);
        // Ngưỡng >= 80% để mở khóa tuần tiếp theo
        if (percent >= 80) {
            const nextWeek = week + 1;
            if (nextWeek > (Number(currentUser.tuanHienTai) || 1) && nextWeek <= 12) {
                currentUser.tuanHienTai = nextWeek;
                setTimeout(() => alert(`🎉 Chúc mừng bé đạt ${percent}% điểm! Tuần ${nextWeek} đã được mở khóa trên bản đồ!`), 500);
            }
        }
    } catch (e) {}
}

// TIỆN ÍCH & TỔNG HỢP GIỌNG ĐỌC WEB SPEECH TTS
function formatDuration(ms) {
    const s = Math.round(ms / 1000);
    return `${Math.floor(s / 60)} phút ${s % 60} giây`;
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function showLoadingOverlay(msg) {
    let el = document.getElementById('loading-overlay');
    if (!el) {
        el = document.createElement('div');
        el.id = 'loading-overlay';
        el.className = 'fixed inset-0 bg-black/30 flex items-center justify-center z-50';
        el.innerHTML = `<div class="bg-white px-6 py-4 rounded-2xl shadow-xl font-extrabold text-pink-600 flex items-center space-x-3"><i class="fa-solid fa-spinner fa-spin"></i><span id="loading-overlay-text"></span></div>`;
        document.body.appendChild(el);
    }
    document.getElementById('loading-overlay-text').textContent = msg;
    el.classList.remove('hidden');
}
function hideLoadingOverlay() { document.getElementById('loading-overlay')?.classList.add('hidden'); }

let cachedViVoice = null;
function findBestViVoice() {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    const vi = voices.filter(v => v.lang && v.lang.toLowerCase().replace('_', '-').startsWith('vi'));
    // Ưu tiên giọng trực tuyến chất lượng cao của Google (Chị Ban Mai) hoặc Microsoft HoaiMy
    return vi.find(v => !v.localService && /google/i.test(v.name))
        || vi.find(v => /google/i.test(v.name))
        || vi.find(v => /hoaimy/i.test(v.name))
        || vi.find(v => !v.localService)
        || vi[0] || null;
}

function loadVietnameseVoice() {
    cachedViVoice = findBestViVoice();
    return cachedViVoice;
}

if ('speechSynthesis' in window) {
    loadVietnameseVoice();
    window.speechSynthesis.onvoiceschanged = loadVietnameseVoice;
}

function stopSpeaking() { 
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}

function speakVietnamese(text, rate, pitch) {
    if (!text || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    window.speechSynthesis.resume();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'vi-VN';
    u.rate = rate || 0.92;
    u.pitch = pitch || 1.05;
    const v = cachedViVoice || findBestViVoice();
    if (v) u.voice = v;
    window.speechSynthesis.speak(u);
}

function speakCurrentQuestion() {
    const q = activeQuestionsList[currentQIndex];
    if (!q) return;
    const textToRead = q.audio_text || q.reading_passage || q.question_text;
    speakVietnamese(textToRead, 0.92, 1.05);
}

// TỔNG HỢP ÂM THANH BẰNG WEB AUDIO API (KHÔNG CẦN TẢI MP3 NGOÀI)
function playAudio(type) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        if (type === 'correct') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain); gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(587.33, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.2);
            gain.gain.setValueAtTime(0.2, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
            osc.start(); osc.stop(ctx.currentTime + 0.3);
        } else if (type === 'wrong') {
            [0, 0.14].forEach(delay => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.connect(gain); gain.connect(ctx.destination);
                osc.type = 'sine';
                osc.frequency.setValueAtTime(220, ctx.currentTime + delay);
                gain.gain.setValueAtTime(0.25, ctx.currentTime + delay);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + delay + 0.09);
                osc.start(ctx.currentTime + delay); osc.stop(ctx.currentTime + delay + 0.09);
            });
        } else if (type === 'win') {
            [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
                setTimeout(() => {
                    const o = ctx.createOscillator(), g = ctx.createGain();
                    o.connect(g); g.connect(ctx.destination);
                    o.frequency.value = freq; g.gain.setValueAtTime(0.2, ctx.currentTime);
                    g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
                    o.start(); o.stop(ctx.currentTime + 0.3);
                }, i * 150);
            });
        }
    } catch (e) {}
}

tryAutoLogin();