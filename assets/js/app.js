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

const SUBTOPIC_PALETTES = [
    { card: "bg-pink-50/80 hover:bg-pink-100 border-pink-300 text-pink-800", num: "text-pink-600", badge: "bg-white text-pink-600 border-pink-200" },
    { card: "bg-emerald-50/80 hover:bg-emerald-100 border-emerald-300 text-emerald-800", num: "text-emerald-600", badge: "bg-white text-emerald-600 border-emerald-200" },
    { card: "bg-purple-50/80 hover:bg-purple-100 border-purple-300 text-purple-800", num: "text-purple-600", badge: "bg-white text-purple-600 border-purple-200" },
    { card: "bg-amber-50/80 hover:bg-amber-100 border-amber-300 text-amber-800", num: "text-amber-600", badge: "bg-white text-amber-600 border-amber-200" },
    { card: "bg-sky-50/80 hover:bg-sky-100 border-sky-300 text-sky-800", num: "text-sky-600", badge: "bg-white text-sky-600 border-sky-200" },
    { card: "bg-rose-50/80 hover:bg-rose-100 border-rose-300 text-rose-800", num: "text-rose-600", badge: "bg-white text-rose-600 border-rose-200" }
];

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

const ROADMAP_COORDS = {
    1: { x: 150, y: 130 },  2: { x: 415, y: 130 },  3: { x: 680, y: 130 },  4: { x: 950, y: 130 },
    5: { x: 950, y: 330 },  6: { x: 680, y: 330 },  7: { x: 415, y: 330 },  8: { x: 150, y: 330 },
    9: { x: 150, y: 530 }, 10: { x: 415, y: 530 }, 11: { x: 680, y: 530 }, 12: { x: 1050, y: 530 }
};

const examFileMap = {
    hocky1: { file: 'de_thi_tieng_viet_1.json', sheet: 'LichSuBaiThi_HK1', label: 'Học kỳ 1', color: 'pink' },
    hocky2: { file: 'de_thi_tieng_viet_1.json', sheet: 'LichSuBaiThi_HK2', label: 'Học kỳ 2', color: 'purple' },
    hsg:    { file: 'de_thi_tieng_viet_1.json', sheet: 'LichSuBaiThi_HSG', label: 'Học sinh giỏi', color: 'amber' }
};

const SKILL_TAXONOMY = {
    C1: { code: 'C1', name: 'Nhận diện cơ bản', advice: 'Cần ôn lại bảng chữ cái, phân biệt nguyên âm và phụ âm ghép.' },
    C2: { code: 'C2', name: 'Thanh điệu chuẩn xác', advice: 'Rèn luyện thêm quy tắc đặt 5 dấu thanh và phân biệt hỏi/ngã.' },
    C3: { code: 'C3', name: 'Ghép âm - Vần', advice: 'Luyện đọc các vần đôi và vần ghép phức tạp hàng ngày.' },
    C4: { code: 'C4', name: 'Quy tắc chính tả', advice: 'Nắm vững luật chính tả c/k, g/gh, ng/ngh và phân biệt s/x, tr/ch.' },
    C5: { code: 'C5', name: 'Từ loại & Vốn từ', advice: 'Mở rộng vốn từ chỉ sự vật, hoạt động, đặc điểm qua giao tiếp thực tế.' },
    C6: { code: 'C6', name: 'Đọc hiểu & Tư duy IQ', advice: 'Tăng cường đọc diễn cảm mẩu chuyện ngắn và rèn kỹ năng suy luận câu đố.' }
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
let quizTimerInterval = null;
let quizRemainingSeconds = 40 * 60;

let histLineChartInstance = null;
let histRadarChartInstance = null;

function getStudentFirstName() {
    if (!currentUser || currentUser.isGuest || !currentUser.hoTen) return "Bé";
    const parts = currentUser.hoTen.trim().split(/\s+/);
    return parts[parts.length - 1] || "Bé";
}

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
        skill_tag: q.skill_tag ?? q.tag ?? 'C1',
        diem: Number(q.diem ?? q.score ?? 0.5),
        explanation: q.explanation ?? q.h ?? 'Không có giải thích chi tiết.'
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
    return shuffled.slice(0, Math.min(batchSize, shuffled.length));
}

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
    const basket1 = pool.slice(0, Math.floor(size * 0.35));
    const basket2 = pool.slice(Math.floor(size * 0.35), Math.floor(size * 0.75));
    const basket3 = pool.slice(Math.floor(size * 0.75));
    
    const easy = shuffleArray([...basket1]).slice(0, 6);
    const medium = shuffleArray([...basket2]).slice(0, 8);
    const hard = shuffleArray([...basket3]).slice(0, 6);
    
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
        <div class="bg-pink-50/70 p-5 rounded-3xl border-2 border-pink-200 flex flex-col justify-between items-center text-center group min-h-[260px] pastel-card">
            <div>
                <div class="text-4xl mb-2 group-hover:scale-110 transition-transform">🌸</div>
                <h3 class="font-extrabold text-pink-600 text-lg mb-1">Học kỳ 1</h3>
                <p class="text-xs text-gray-500 font-bold mb-2">Kiểm tra kiến thức HK1</p>
                <span class="inline-block bg-pink-100 text-pink-700 px-3 py-0.5 rounded-full text-xs font-black mb-3">${countHK1} đề thi chuẩn</span>
            </div>
            <div class="w-full space-y-2">
                <button onclick="startRandomExam('hocky1')" class="w-full py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">
                    🚀 Vào thi thử
                </button>
                <button onclick="openHistoryModal('LichSuBaiThi_HK1')" class="w-full py-2 bg-white text-pink-700 border border-pink-300 font-extrabold rounded-xl text-xs pastel-btn hover:bg-pink-50">
                    📊 Xem lịch sử thi
                </button>
            </div>
        </div>

        <div class="bg-purple-50/70 p-5 rounded-3xl border-2 border-purple-200 flex flex-col justify-between items-center text-center group min-h-[260px] pastel-card">
            <div>
                <div class="text-4xl mb-2 group-hover:scale-110 transition-transform">⭐</div>
                <h3 class="font-extrabold text-purple-600 text-lg mb-1">Học kỳ 2</h3>
                <p class="text-xs text-gray-500 font-bold mb-2">Kiểm tra kiến thức HK2</p>
                <span class="inline-block bg-purple-100 text-purple-700 px-3 py-0.5 rounded-full text-xs font-black mb-3">${countHK2} đề thi chuẩn</span>
            </div>
            <div class="w-full space-y-2">
                <button onclick="startRandomExam('hocky2')" class="w-full py-2.5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">
                    🚀 Vào thi thử
                </button>
                <button onclick="openHistoryModal('LichSuBaiThi_HK2')" class="w-full py-2 bg-white text-purple-700 border border-purple-300 font-extrabold rounded-xl text-xs pastel-btn hover:bg-purple-50">
                    📊 Xem lịch sử thi
                </button>
            </div>
        </div>

        <div class="bg-amber-50/70 p-5 rounded-3xl border-2 border-amber-200 flex flex-col justify-between items-center text-center group min-h-[260px] pastel-card">
            <div>
                <div class="text-4xl mb-2 group-hover:scale-110 transition-transform">🏆</div>
                <h3 class="font-extrabold text-amber-600 text-lg mb-1">Học sinh giỏi</h3>
                <p class="text-xs text-gray-500 font-bold mb-2">Thử thách nâng cao IQ</p>
                <span class="inline-block bg-amber-100 text-amber-700 px-3 py-0.5 rounded-full text-xs font-black mb-3">${countHSG} đề thi tuyển chọn</span>
            </div>
            <div class="w-full space-y-2">
                <button onclick="startRandomExam('hsg')" class="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">
                    🚀 Vào thi thử
                </button>
                <button onclick="openHistoryModal('LichSuBaiThi_HSG')" class="w-full py-2 bg-white text-amber-700 border border-amber-300 font-extrabold rounded-xl text-xs pastel-btn hover:bg-amber-50">
                    📊 Xem lịch sử thi
                </button>
            </div>
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
    clearInterval(quizTimerInterval);
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
    clearInterval(quizTimerInterval);
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
    if (!el) return;
    el.textContent = msg;
    el.classList.remove('hidden');
}
function hideAuthError() { 
    const el = document.getElementById('auth-error-msg');
    if (el) el.classList.add('hidden'); 
}

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
    const maHSInput = document.getElementById('login-mahs');
    const maPinInput = document.getElementById('login-mapin');
    const maHS = (maHSInput?.value || '').trim().toUpperCase();
    const maPin = (maPinInput?.value || '').trim();

    if (!maHS || !maPin) {
        const msg = 'Bé nhập đủ Mã ID và Mã PIN nhé!';
        showAuthError(msg);
        alert(msg);
        return;
    }

    const btn = document.getElementById('btn-do-login');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Đang đăng nhập...';

    try {
        const result = await callAppsScript('login', { maHS, maPin });
        if (!result.ok) {
            const errMsg = result.error || 'Mã ID thẻ học sinh hoặc Mã PIN không đúng!';
            showAuthError(errMsg);
            alert(errMsg);
            return;
        }
        currentUser = { ...result.student, isGuest: false };
        localStorage.setItem('tv1_mahs', maHS);
        localStorage.setItem('tv1_mapin', maPin);
        enterDashboard();
    } catch (err) {
        const connErr = 'Lỗi kết nối máy chủ: ' + err.message;
        showAuthError(connErr);
        alert(connErr);
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-right-to-bracket mr-1"></i> Đăng nhập';
    }
}

async function doRegister() {
    hideAuthError();
    const hoTen = document.getElementById('reg-hoten').value.trim();
    const ngaySinhRaw = document.getElementById('reg-ngaysinh').value;
    const lop = document.getElementById('reg-lop').value.trim().toUpperCase();
    const soThuTu = document.getElementById('reg-stt').value.trim();
    const maPin = document.getElementById('reg-mapin').value.trim();

    if (!hoTen || !ngaySinhRaw || !lop || !soThuTu || !maPin) {
        const msg = 'Bé điền đủ tất cả các ô có dấu * nhé!';
        showAuthError(msg);
        alert(msg);
        return;
    }
    if (!/^\d{4}$/.test(maPin)) {
        const msg = 'Mã PIN phải gồm đúng 4 chữ số!';
        showAuthError(msg);
        alert(msg);
        return;
    }

    const [y, m, d] = ngaySinhRaw.split('-');
    const ngaySinh = `${d}-${m}-${y.slice(2)}`;
    const btn = document.getElementById('btn-do-register');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Đang đăng ký...';

    try {
        const result = await callAppsScript('register', { hoTen, ngaySinh, lop, soThuTu, maPin });
        if (!result.ok) {
            showAuthError(result.error);
            alert(result.error);
            return;
        }
        alert(`Đã gửi đăng ký thành công, vui lòng chờ Admin duyệt! Mã ID của bé là: ${result.student.maHS}`);
        document.getElementById('login-mahs').value = result.student.maHS;
        switchAuthTab('login');
    } catch (err) {
        const connErr = 'Lỗi kết nối: ' + err.message;
        showAuthError(connErr);
        alert(connErr);
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-user-plus mr-1"></i> Đăng ký ngay';
    }
}

async function tryAutoLogin() {
    const maHS = localStorage.getItem('tv1_mahs');
    const maPin = localStorage.getItem('tv1_mapin');
    if (!maHS || !maPin) return;
    try {
        const res = await callAppsScript('login', { maHS: maHS.toUpperCase(), maPin });
        if (res.ok) { 
            currentUser = { ...res.student, isGuest: false }; 
            enterDashboard(); 
        }
    } catch (e) {}
}

function logout() {
    currentUser = null;
    localStorage.removeItem('tv1_mahs');
    localStorage.removeItem('tv1_mapin');
    document.getElementById('screen-dashboard').classList.add('hidden');
    document.getElementById('screen-login').classList.remove('hidden');
    const mahsInput = document.getElementById('login-mahs');
    const mapinInput = document.getElementById('login-mapin');
    if (mahsInput) mahsInput.value = '';
    if (mapinInput) mapinInput.value = '';
    hideAuthError();
}

function handleGuestMode() {
    currentUser = { name: "Khách (Guest)", isGuest: true, tuanHienTai: 1, hoTen: "Bé Khách", lop: "1A", maHS: "KHACH" };
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
                <circle cx="${coord.x}" cy="${coord.y}" r="40" fill="#ffffff" stroke="${strokeColor}" stroke-width="4" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.08))"/>
                <circle cx="${coord.x}" cy="${coord.y}" r="34" fill="${nodeColor}" opacity="${isLocked ? '0.25' : '0.15'}"/>
                <text x="${coord.x}" y="${coord.y - 4}" text-anchor="middle" font-size="24">${item.icon || '🌸'}</text>
                <text x="${coord.x}" y="${coord.y + 18}" text-anchor="middle" font-size="13" font-weight="800" fill="${isLocked ? '#64748b' : '#1e293b'}">Tuần ${w}</text>
                ${badgeHtml}
            </g>
        `;
    }

    const svgHtml = `
        <svg viewBox="0 0 1200 650" class="w-full max-h-[66vh] select-none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 150,130 Q 550,130 950,130 C 1120,130 1120,330 950,330 Q 550,330 150,330 C -20,330 -20,530 150,530 Q 550,530 1050,530" 
                  fill="none" stroke="#fbcfe8" stroke-width="12" stroke-dasharray="14,14" stroke-linecap="round"/>
            <path d="M 150,130 Q 550,130 950,130 C 1120,130 1120,330 950,330 Q 550,330 150,330 C -20,330 -20,530 150,530 Q 550,530 1050,530" 
                  fill="none" stroke="#f472b6" stroke-width="4" stroke-dasharray="14,14" stroke-linecap="round"/>
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
                <span class="text-sm md:text-base leading-snug"><strong class="${style.num} mr-1.5">${idx + 1}.</strong> ${escapeHtml(displayTitle)}</span>
                <span class="text-xs font-extrabold ${style.badge} px-2.5 py-0.5 rounded-full border shrink-0 ml-1.5 shadow-inner">${count} câu</span>
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
    clearInterval(quizTimerInterval);
    activeQuestionsList = questions; 
    currentQIndex = 0; 
    score = 0;
    userAnswers = {};
    wrongAttemptsByQ = {};
    quizWrongAnswers = []; 
    quizAnsweredLog = []; 
    quizStartTime = Date.now();

    document.getElementById('quiz-session-title').textContent = `Đang học: ${topicName}`;
    initQuizPallet();
    startQuizTimer(35 * 60);

    switchAppView('view-quiz');
    loadQuestion();
}

function openExamHub() {
    if (!currentUser || currentUser.isGuest) return alert('Bé vui lòng đăng nhập để vào Đấu trường đề thi nhé!');
    stopSpeaking();
    clearInterval(quizTimerInterval);
    updateNavTabs("Đấu trường đề thi", "🏆", null);
    renderExamHubGrid();
    switchAppView('view-exam-hub');
}

async function startRandomExam(categoryKey) {
    stopSpeaking();
    const mapInfo = examFileMap[categoryKey];
    if (!mapInfo) return;

    showLoadingOverlay('Đang bốc ngẫu nhiên đề thi...');
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

        activeExamContext = { categoryKey, examIndex: randomIdx, examTitle: selectedExam.title || `${mapInfo.label} — Đề số ${randomIdx + 1}` };
        activeTopicId = null; 
        pendingTopicQuiz = null; 
        activeRoadmapContext = null;

        activeQuestionsList = shuffleArray(selectedExam.questions); 
        currentQIndex = 0; 
        score = 0;
        userAnswers = {};
        wrongAttemptsByQ = {};
        quizWrongAnswers = []; 
        quizAnsweredLog = []; 
        quizStartTime = Date.now();

        updateNavTabs("Đấu trường đề thi", "🏆", `${mapInfo.label}`);
        document.getElementById('quiz-session-title').textContent = `Đang làm: ${selectedExam.title || mapInfo.label + ' — Đề số ' + (randomIdx + 1)}`;
        
        initQuizPallet();
        startQuizTimer(40 * 60);

        switchAppView('view-quiz');
        loadQuestion();
    } catch (err) {
        hideLoadingOverlay();
        alert(`Lỗi tải đề thi: ${err.message}`);
    }
}

function handleNextExamFromReport() {
    if (activeExamContext) {
        startRandomExam(activeExamContext.categoryKey);
    } else {
        openExamHub();
    }
}

function startQuizTimer(totalSeconds) {
    clearInterval(quizTimerInterval);
    quizRemainingSeconds = totalSeconds;
    updateTimerDisplay();

    quizTimerInterval = setInterval(() => {
        quizRemainingSeconds--;
        updateTimerDisplay();
        if (quizRemainingSeconds <= 0) {
            clearInterval(quizTimerInterval);
            alert("⏰ Đã hết thời gian làm bài! Hệ thống tự động thu bài và chấm điểm cho bé.");
            showResultScreen();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(quizRemainingSeconds / 60);
    const secs = quizRemainingSeconds % 60;
    const str = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    const el = document.getElementById('quiz-timer-display');
    if (el) el.textContent = str;
}

function initQuizPallet() {
    const pallet = document.getElementById('quiz-pallet-container');
    if (!pallet) return;
    let html = '';
    activeQuestionsList.forEach((_, idx) => {
        html += `
            <button id="pallet-dot-${idx}" onclick="jumpToQuestion(${idx})" class="w-8 h-8 rounded-full text-xs font-black border transition-all flex items-center justify-center bg-white border-pink-200 text-gray-600 hover:border-pink-400">
                ${idx + 1}
            </button>
        `;
    });
    pallet.innerHTML = html;
}

function updateQuizPalletUI() {
    activeQuestionsList.forEach((q, idx) => {
        const dot = document.getElementById(`pallet-dot-${idx}`);
        if (!dot) return;
        const isCurrent = idx === currentQIndex;
        const isAnswered = userAnswers[idx] !== undefined;

        if (isCurrent) {
            dot.className = "w-8 h-8 rounded-full text-xs font-black border-2 transition-all flex items-center justify-center bg-pink-500 text-white border-pink-600 shadow-sm scale-110";
        } else if (isAnswered) {
            dot.className = "w-8 h-8 rounded-full text-xs font-black border transition-all flex items-center justify-center bg-emerald-100 text-emerald-800 border-emerald-300";
        } else {
            dot.className = "w-8 h-8 rounded-full text-xs font-black border transition-all flex items-center justify-center bg-white border-pink-200 text-gray-600 hover:border-pink-400";
        }
    });

    const percent = Math.round(((currentQIndex + 1) / activeQuestionsList.length) * 100);
    const bar = document.getElementById('quiz-progress-bar-fill');
    if (bar) bar.style.width = `${percent}%`;
    const frac = document.getElementById('quiz-fraction-display');
    if (frac) frac.textContent = `${currentQIndex + 1} / ${activeQuestionsList.length} câu`;
}

function jumpToQuestion(idx) {
    if (idx < 0 || idx >= activeQuestionsList.length) return;
    stopSpeaking();
    currentQIndex = idx;
    loadQuestion();
}

function loadQuestion() {
    stopSpeaking();
    const q = activeQuestionsList[currentQIndex];
    if (!q) return;

    document.getElementById('q-badge-index').textContent = `CÂU ${currentQIndex + 1} / ${activeQuestionsList.length}`;
    const skillName = SKILL_TAXONOMY[q.skill_tag]?.name || q.sub_topic || 'Kiến thức tổng hợp';
    document.getElementById('q-skill-text').textContent = skillName;
    document.getElementById('q-badge-score').textContent = `(${q.diem ?? 0.5} điểm)`;

    let mediaHtml = '';
    if (q.image_url) {
        mediaHtml = `<img src="${q.image_url}" alt="minh họa" class="w-20 h-20 md:w-24 md:h-24 object-contain mb-2 floating" onerror="this.remove()">`;
    }

    const pText = q.reading_passage;
    const pTitle = q.reading_title;
    const passageHtml = pText ? `
        <div class="w-full max-w-3xl bg-pink-50/70 border-2 border-pink-200 rounded-2xl p-4 md:p-5 mb-3 text-left shadow-xs">
            ${pTitle ? `<p class="font-black text-pink-700 text-base md:text-lg mb-2">${escapeHtml(pTitle)}</p>` : ''}
            <p class="text-gray-800 text-base md:text-lg font-bold whitespace-pre-line leading-relaxed">${escapeHtml(pText)}</p>
        </div>` : '';

    let html = `
        ${mediaHtml}
        ${passageHtml}
        <div class="flex flex-wrap items-center justify-center gap-2 mb-4 max-w-3xl text-center px-2">
            <h3 class="text-lg md:text-xl font-black text-slate-900 leading-snug">
                ${escapeHtml(q.question_text)}
            </h3>
        </div>
        
        <div class="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-3.5">
    `;

    q.options.forEach((opt, idx) => {
        const formattedOpt = capitalizeFirstLetter(opt);
        html += `
            <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn w-full p-3.5 md:p-4 bg-pink-50/40 hover:bg-pink-100/70 border-2 border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-base md:text-lg shadow-xs pastel-btn">
                <span><strong class="text-pink-600 mr-2 text-lg">${String.fromCharCode(65 + idx)}.</strong> ${escapeHtml(formattedOpt)}</span>
                <span class="option-icon text-pink-500 text-lg"></span>
            </button>`;
    });
    html += `</div>`;

    document.getElementById('question-box').innerHTML = html;

    restoreQuestionState(q);
    updateNavButtons();
    updateQuizPalletUI();

    setTimeout(() => {
        speakCurrentQuestion();
    }, 200);
}

function restoreQuestionState(q) {
    const isExamOrRoadmap = !!activeExamContext || !!activeRoadmapContext;
    const completedAnswer = userAnswers[currentQIndex];
    const wrongAttempts = wrongAttemptsByQ[currentQIndex] || [];

    if (!isExamOrRoadmap && wrongAttempts.length > 0) {
        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            if (wrongAttempts.includes(bOpt)) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
                b.disabled = true;
            }
        });
    }

    if (completedAnswer !== undefined) {
        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            if (bOpt === completedAnswer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                if (isExamOrRoadmap) {
                    b.classList.add('bg-pink-50', 'border-pink-500', 'text-pink-950');
                    const iconSpan = b.querySelector('.option-icon');
                    if (iconSpan) iconSpan.innerHTML = '<i class="fa-solid fa-circle-check text-pink-600"></i>';
                } else {
                    const isCorrect = completedAnswer === q.answer;
                    b.classList.add(isCorrect ? 'bg-green-100' : 'bg-red-200', isCorrect ? 'border-green-400' : 'border-red-500', isCorrect ? 'text-green-800' : 'text-red-900');
                    b.disabled = true;
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
        nextText.textContent = "Câu tiếp theo";
        nextIcon.className = "fa-solid fa-chevron-right ml-1.5";
    }
}

function checkAnswer(selectedOpt) {
    const q = activeQuestionsList[currentQIndex];
    const isExamOrRoadmap = !!activeExamContext || !!activeRoadmapContext;
    const studentName = getStudentFirstName();

    if (isExamOrRoadmap) {
        userAnswers[currentQIndex] = selectedOpt;

        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            const iconSpan = b.querySelector('.option-icon');
            if (bOpt === selectedOpt) {
                b.className = "option-btn w-full p-3.5 md:p-4 bg-pink-50 hover:bg-pink-100/70 border-2 border-pink-500 rounded-2xl font-extrabold text-pink-950 text-left transition-all flex items-center justify-between text-base md:text-lg shadow-xs pastel-btn";
                if (iconSpan) iconSpan.innerHTML = '<i class="fa-solid fa-circle-check text-pink-600"></i>';
            } else {
                b.className = "option-btn w-full p-3.5 md:p-4 bg-pink-50/40 hover:bg-pink-100/70 border-2 border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-base md:text-lg shadow-xs pastel-btn";
                if (iconSpan) iconSpan.innerHTML = '';
            }
        });

        updateQuizPalletUI();
        return;
    }

    const isCorrect = selectedOpt === q.answer;
    const isFreeMode = !isExamOrRoadmap;

    if (isFreeMode) {
        if (userAnswers[currentQIndex] !== undefined) return;

        if (isCorrect) {
            userAnswers[currentQIndex] = selectedOpt;
            score += (q.diem ?? 1);
            starGreenCount++;
            document.getElementById('star-green-count').textContent = starGreenCount;

            document.querySelectorAll('.option-btn').forEach(b => {
                b.disabled = true;
                if (b.getAttribute('data-opt') === q.answer) {
                    b.classList.remove('bg-pink-50/40', 'border-pink-200');
                    b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
                }
            });

            playAudio('correct');
            confetti({ particleCount: 30, spread: 55, origin: { y: 0.7 } });
            setTimeout(() => speakVietnamese(`${q.answer}. ${studentName} giỏi quá, cố lên con yêu!`, 0.95, 1.05), 180);
        } else {
            if (!wrongAttemptsByQ[currentQIndex]) wrongAttemptsByQ[currentQIndex] = [];
            if (!wrongAttemptsByQ[currentQIndex].includes(selectedOpt)) {
                wrongAttemptsByQ[currentQIndex].push(selectedOpt);
                starRedCount++;
                document.getElementById('star-red-count').textContent = starRedCount;
            }

            document.querySelectorAll('.option-btn').forEach(b => {
                if (b.getAttribute('data-opt') === selectedOpt) {
                    b.classList.remove('bg-pink-50/40', 'border-pink-200');
                    b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
                    b.disabled = true;
                }
            });

            playAudio('wrong');
            setTimeout(() => speakVietnamese(`Tiếc quá, ${studentName} suy nghĩ thêm một chút nhé!`, 0.95, 1.05), 300);
        }
    }
    updateQuizPalletUI();
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
    const isExamOrRoadmap = !!activeExamContext || !!activeRoadmapContext;

    if (!isExamOrRoadmap && userAnswers[currentQIndex] === undefined) {
        alert('Bé hãy tìm đáp án đúng để hoàn thành câu này nhé!');
        return;
    }

    if (currentQIndex < activeQuestionsList.length - 1) {
        currentQIndex++;
        loadQuestion();
    } else {
        showResultScreen();
    }
}

function triggerSubmitQuizPrompt() {
    const answeredCount = Object.keys(userAnswers).length;
    const total = activeQuestionsList.length;
    if (confirm(`Bé đã làm ${answeredCount}/${total} câu. Bé có chắc chắn muốn nộp bài thi ngay không?`)) {
        showResultScreen();
    }
}

function showResultScreen() {
    stopSpeaking();
    clearInterval(quizTimerInterval);

    let correctCount = 0;
    score = 0;
    quizAnsweredLog = [];
    quizWrongAnswers = [];

    activeQuestionsList.forEach((q, idx) => {
        const studentAns = userAnswers[idx];
        const isCorrect = studentAns === q.answer;
        if (isCorrect) {
            correctCount++;
            score += (q.diem ?? 0.5);
        } else {
            quizWrongAnswers.push({
                question_id: q.question_id,
                question_number: idx + 1,
                question_text: q.question_text,
                sub_topic: q.sub_topic || 'Chủ đề tổng hợp',
                skill_tag: q.skill_tag || 'C1',
                dap_an_chon: studentAns || 'Chưa trả lời',
                dap_an_dung: q.answer,
                explanation: q.explanation || 'Không có giải thích chi tiết.'
            });
        }
        quizAnsweredLog.push({
            question_id: q.question_id,
            question_text: q.question_text,
            skill_tag: q.skill_tag || 'C1',
            diem: q.diem ?? 0.5,
            isCorrect,
            dap_an_chon: studentAns || '',
            dap_an_dung: q.answer
        });
    });

    switchAppView('view-result');
    const totalQ = activeQuestionsList.length;
    const percent = Math.round((correctCount / totalQ) * 100);
    const studentName = getStudentFirstName();

    const examBadgeText = activeExamContext ? activeExamContext.examTitle : (activeRoadmapContext ? activeRoadmapContext.chuDe : 'Bài luyện tập chủ đề');
    document.getElementById('report-exam-badge').textContent = examBadgeText;
    document.getElementById('report-student-display').textContent = `Học sinh: ${currentUser?.hoTen || 'Khách'}`;
    const durationStr = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '35 phút';
    document.getElementById('report-meta-display').textContent = `Lớp: ${currentUser?.lop || '1A'} | Mã số: ${currentUser?.maHS || 'KHACH'} | Thời gian: ${durationStr}`;
    document.getElementById('report-total-score-val').textContent = score.toFixed(1);
    document.getElementById('report-correct-ratio-val').textContent = `${correctCount}/${totalQ}`;

    renderReportTopicsBreakdown();

    if (percent >= 80) {
        confetti({ particleCount: 130, spread: 85, origin: { y: 0.6 } });
        playAudio('win');
    }

    if (currentUser && !currentUser.isGuest) {
        if (activeExamContext) saveExamResultToSheet();
        else if (activeRoadmapContext) saveWeeklyProgressToSheet(percent, starCountFromPercent(percent));
    }
}

function starCountFromPercent(percent) {
    if (percent === 100) return 3;
    if (percent >= 85) return 2;
    if (percent >= 80) return 1;
    return 0;
}

function renderReportTopicsBreakdown() {
    const container = document.getElementById('report-topics-list');
    if (!container) return;

    const skillKeys = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'];
    const skillStats = {};
    skillKeys.forEach(k => {
        skillStats[k] = { total: 0, correct: 0, maxScore: 0, earnedScore: 0 };
    });

    activeQuestionsList.forEach((q, idx) => {
        const tag = q.skill_tag || 'C1';
        if (!skillStats[tag]) skillStats[tag] = { total: 0, correct: 0, maxScore: 0, earnedScore: 0 };
        skillStats[tag].total++;
        skillStats[tag].maxScore += (q.diem ?? 0.5);
        if (userAnswers[idx] === q.answer) {
            skillStats[tag].correct++;
            skillStats[tag].earnedScore += (q.diem ?? 0.5);
        }
    });

    let html = '';
    skillKeys.forEach(k => {
        const data = skillStats[k];
        const pct = data.maxScore > 0 ? Math.round((data.earnedScore / data.maxScore) * 100) : 0;
        const isPassed = pct >= 50;
        const badgeClass = isPassed ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-rose-50 text-rose-700 border border-rose-200';
        const badgeText = isPassed ? 'Đạt yêu cầu' : 'Cần luyện tập thêm';
        const barColor = isPassed ? 'bg-gradient-to-r from-amber-400 to-orange-400' : 'bg-gradient-to-r from-pink-400 to-rose-400';

        html += `
            <div class="bg-pink-50/40 border border-pink-100 rounded-2xl p-3 flex flex-col justify-between space-y-2">
                <div class="flex items-center justify-between">
                    <span class="font-black text-slate-800 text-xs sm:text-sm">${SKILL_TAXONOMY[k].name}</span>
                    <span class="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold ${badgeClass}">${badgeText}</span>
                </div>
                <div class="flex items-center justify-between text-xs font-bold text-slate-600">
                    <span>Điểm đạt: <strong class="text-pink-600">${data.earnedScore.toFixed(1)} / ${data.maxScore.toFixed(1)}đ</strong></span>
                    <span class="font-math font-black">${pct}%</span>
                </div>
                <div class="w-full bg-pink-100 rounded-full h-2 overflow-hidden">
                    <div class="${barColor} h-full rounded-full transition-all duration-500" style="width: ${pct}%"></div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;

    const adviceBox = document.getElementById('report-pedagogy-advice');
    if (adviceBox) {
        let adviceHtml = '';
        skillKeys.forEach(k => {
            adviceHtml += `<div class="flex items-start gap-1.5"><i class="fa-solid fa-chevron-right text-amber-600 mt-1 text-[10px]"></i><span><strong>${SKILL_TAXONOMY[k].name}:</strong> ${SKILL_TAXONOMY[k].advice}</span></div>`;
        });
        adviceBox.innerHTML = adviceHtml;
    }
}

function openReviewWrongModal() {
    const modal = document.getElementById('modal-review-wrong');
    const content = document.getElementById('review-wrong-content');
    if (!modal || !content) return;

    if (!quizWrongAnswers.length) {
        content.innerHTML = `<div class="text-center py-8 text-emerald-600 font-extrabold text-base"><i class="fa-solid fa-circle-check text-3xl mb-2 block"></i>Tuyệt vời! Bé không làm sai câu nào trong bài thi này!</div>`;
    } else {
        let html = '';
        quizWrongAnswers.forEach((item, idx) => {
            html += `
                <div class="bg-rose-50/40 border border-rose-200 rounded-2xl p-3.5 space-y-2">
                    <div class="flex items-center justify-between">
                        <span class="px-2.5 py-0.5 bg-rose-100 text-rose-800 font-black text-xs rounded-lg">CÂU ${item.question_number || (idx + 1)}</span>
                        <span class="text-xs font-bold text-slate-500">${escapeHtml(item.sub_topic || 'Chủ đề tổng hợp')}</span>
                    </div>
                    <p class="font-extrabold text-slate-800 text-sm">${escapeHtml(item.question_text)}</p>
                    <div class="text-xs space-y-1 font-semibold">
                        <p class="text-rose-600"><i class="fa-solid fa-xmark mr-1"></i> Đáp án con chọn: <strong>${escapeHtml(item.dap_an_chon)}</strong></p>
                        <p class="text-emerald-700"><i class="fa-solid fa-check mr-1"></i> Đáp án đúng chuẩn: <strong>${escapeHtml(item.dap_an_dung)}</strong></p>
                    </div>
                    <div class="p-2.5 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-900 font-semibold flex items-start gap-2">
                        <i class="fa-solid fa-lightbulb text-amber-600 mt-0.5"></i>
                        <span><strong>Lời giải sư phạm:</strong> ${escapeHtml(item.explanation)}</span>
                    </div>
                </div>
            `;
        });
        content.innerHTML = html;
    }
    modal.classList.remove('hidden');
}

function closeReviewWrongModal() {
    document.getElementById('modal-review-wrong').classList.add('hidden');
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
    startQuizTimer(activeExamContext ? 40 * 60 : 35 * 60);
    initQuizPallet();
    switchAppView('view-quiz');
    loadQuestion();
}

async function saveExamResultToSheet() {
    const { categoryKey, examIndex } = activeExamContext;
    const thoiGianLamBai = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '';
    
    const skillScores = { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 };
    quizAnsweredLog.forEach(item => {
        const tag = item.skill_tag || 'C1';
        if (item.isCorrect && skillScores[tag] !== undefined) {
            skillScores[tag] += (item.diem || 0.5);
        }
    });

    const payload = {
        maHS: currentUser.maHS,
        examCategory: categoryKey,
        sheetName: examFileMap[categoryKey]?.sheet || 'LichSuBaiThi_HK1',
        deSo: examIndex + 1,
        thoiGianLamBai,
        tongDiem: score.toFixed(1),
        diemC1: skillScores.C1.toFixed(1),
        diemC2: skillScores.C2.toFixed(1),
        diemC3: skillScores.C3.toFixed(1),
        diemC4: skillScores.C4.toFixed(1),
        diemC5: skillScores.C5.toFixed(1),
        diemC6: skillScores.C6.toFixed(1),
        tongCauHoi: activeQuestionsList.length,
        soCauDung: quizAnsweredLog.filter(x => x.isCorrect).length,
        wrongQuestions: quizWrongAnswers
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
        sheetName: 'LichSuTienTrinhTuan',
        week_completed: week,
        tuan: week,
        chuDe,
        topicId,
        score: scoreThang10,
        stars_earned: starCount,
        tongCauHoi: activeQuestionsList.length,
        soCauDung: quizAnsweredLog.filter(x => x.isCorrect).length,
        percent,
        thoiGianLamBai,
        wrongQuestions: quizWrongAnswers
    };

    try {
        await callAppsScript('saveWeeklyProgress', payload);
        if (percent >= 80) {
            const nextWeek = week + 1;
            if (nextWeek > (Number(currentUser.tuanHienTai) || 1) && nextWeek <= 12) {
                currentUser.tuanHienTai = nextWeek;
                setTimeout(() => alert(`🎉 Chúc mừng bé đạt ${percent}% điểm! Tuần ${nextWeek} đã được mở khóa trên bản đồ!`), 500);
            }
        }
    } catch (e) {}
}

async function openHistoryModal(sheetName = 'LichSuTienTrinhTuan') {
    if (!currentUser || currentUser.isGuest) {
        return alert('Bé vui lòng đăng nhập để xem lịch sử tiến trình nhé!');
    }

    const modal = document.getElementById('modal-history-progress');
    modal.classList.remove('hidden');

    document.getElementById('hist-info-name').textContent = currentUser.hoTen || '--';
    document.getElementById('hist-info-class').textContent = currentUser.lop || '--';
    document.getElementById('hist-info-code').textContent = currentUser.maHS || '--';
    document.getElementById('hist-info-dob').textContent = currentUser.ngaySinh || '03/09/2019';
    document.getElementById('hist-report-date').textContent = new Date().toLocaleDateString('vi-VN');

    const titleMap = {
        LichSuTienTrinhTuan: "Báo cáo tiến trình 12 tuần học tập",
        LichSuBaiThi_HK1: "Báo cáo kết quả đấu trường — Học kỳ 1",
        LichSuBaiThi_HK2: "Báo cáo kết quả đấu trường — Học kỳ 2",
        LichSuBaiThi_HSG: "Báo cáo kết quả đấu trường — Học sinh giỏi"
    };
    document.getElementById('hist-modal-title').textContent = titleMap[sheetName] || "Kết quả tiến trình học tập";

    showLoadingOverlay('Đang trích xuất dữ liệu và vẽ biểu đồ năng lực...');
    try {
        const res = await callAppsScript('getHistory', { maHS: currentUser.maHS, sheetName });
        hideLoadingOverlay();
        const rows = (res && res.history) ? res.history : [];
        renderHistoryReport(rows, sheetName);
    } catch (err) {
        hideLoadingOverlay();
        alert('Không thể tải lịch sử: ' + err.message);
    }
}

function closeHistoryModal() {
    document.getElementById('modal-history-progress').classList.add('hidden');
    if (histLineChartInstance) { histLineChartInstance.destroy(); histLineChartInstance = null; }
    if (histRadarChartInstance) { histRadarChartInstance.destroy(); histRadarChartInstance = null; }
}

function renderHistoryReport(rows, sheetName) {
    const labels = rows.map((r, i) => r.deSo ? `Đề ${r.deSo}` : `Tuần ${r.tuan || i + 1}`);
    const scores = rows.map(r => Number(r.score || r.tongDiem || ((r.soCauDung / (r.tongCauHoi || 20)) * 10).toFixed(1)));

    const ctxLine = document.getElementById('progressChartCanvas').getContext('2d');
    if (histLineChartInstance) histLineChartInstance.destroy();

    histLineChartInstance = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: labels.length ? labels : ['Chưa có bài thi'],
            datasets: [{
                label: 'Điểm số (/10)',
                data: scores.length ? scores : [0],
                borderColor: '#ec4899',
                backgroundColor: 'rgba(244, 114, 182, 0.15)',
                borderWidth: 3,
                pointBackgroundColor: '#be185d',
                pointRadius: 5,
                fill: true,
                tension: 0.35
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { min: 0, max: 10, ticks: { stepSize: 2 } }
            },
            plugins: { legend: { display: false } }
        }
    });

    const skillKeys = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'];
    const skillAverages = { C1: 85, C2: 78, C3: 92, C4: 70, C5: 80, C6: 75 };

    if (rows.length && rows[0].diemC1 !== undefined) {
        skillKeys.forEach(k => {
            const vals = rows.map(r => Number(r[`diem${k}`] || 0));
            const sum = vals.reduce((a, b) => a + b, 0);
            skillAverages[k] = Math.min(100, Math.round((sum / (vals.length * 1.5)) * 100)) || 75;
        });
    }

    const ctxRadar = document.getElementById('topicRadarChartCanvas').getContext('2d');
    if (histRadarChartInstance) histRadarChartInstance.destroy();

    histRadarChartInstance = new Chart(ctxRadar, {
        type: 'radar',
        data: {
            labels: skillKeys.map(k => SKILL_TAXONOMY[k].name),
            datasets: [{
                label: 'Độ thành thạo (%)',
                data: skillKeys.map(k => skillAverages[k]),
                backgroundColor: 'rgba(236, 72, 153, 0.25)',
                borderColor: '#ec4899',
                borderWidth: 2,
                pointBackgroundColor: '#9333ea',
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: { min: 0, max: 100, ticks: { stepSize: 25, display: false } }
            },
            plugins: { legend: { display: false } }
        }
    });

    renderPedagogicalEvaluation(rows, skillAverages);
    renderHistoryTable(rows);
}

function renderPedagogicalEvaluation(rows, skillAverages) {
    const box = document.getElementById('pedagogical-evaluation-box');
    if (!box) return;

    const studentName = getStudentFirstName();
    const count = rows.length;
    const avgScore = count ? (rows.reduce((acc, r) => acc + Number(r.score || r.tongDiem || 0), 0) / count).toFixed(1) : "0.0";

    const sortedSkills = Object.keys(skillAverages).sort((a, b) => skillAverages[b] - skillAverages[a]);
    const top1 = SKILL_TAXONOMY[sortedSkills[0]].name;
    const top2 = SKILL_TAXONOMY[sortedSkills[1]].name;
    const weak1 = sortedSkills[sortedSkills.length - 1];
    const weakName = SKILL_TAXONOMY[weak1].name;
    const weakAdvice = SKILL_TAXONOMY[weak1].advice;

    box.innerHTML = `
        <div class="bg-white/80 p-3 rounded-xl border border-amber-200">
            <span class="text-amber-700 font-extrabold block mb-0.5">🌟 1. Đánh giá tổng quan năng lực & Xu hướng tiến bộ:</span>
            <p class="text-gray-700">Học sinh <strong>${escapeHtml(currentUser.hoTen)}</strong> đã hoàn thành <strong>${count} bài kiểm tra</strong> với điểm số trung bình tích lũy đạt <strong class="text-pink-600">${avgScore}/10 điểm</strong>. Con nắm vững các kiến thức trọng tâm, có thái độ làm bài nghiêm túc và duy trì phong độ rất tốt.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div class="bg-emerald-50/70 p-3 rounded-xl border border-emerald-200">
                <span class="text-emerald-700 font-extrabold block mb-0.5">✅ 2. Khen ngợi & Thế mạnh nổi trội:</span>
                <p class="text-gray-700">Con đạt độ thành thạo rất cao ở các nhóm: <strong>${escapeHtml(top1)}</strong> và <strong>${escapeHtml(top2)}</strong>. Con nhận biết nhanh, tự tin và xử lý các câu hỏi linh hoạt.</p>
            </div>

            <div class="bg-rose-50/70 p-3 rounded-xl border border-rose-200">
                <span class="text-rose-700 font-extrabold block mb-0.5">⚠️ 3. Điểm cần lưu ý & Khắc phục:</span>
                <p class="text-gray-700">Con đôi lúc còn nhầm lẫn ở mảng: <strong>${escapeHtml(weakName)}</strong>. ${escapeHtml(weakAdvice)}</p>
            </div>
        </div>

        <div class="bg-white/80 p-3 rounded-xl border border-purple-200">
            <span class="text-purple-700 font-extrabold block mb-0.5">💡 4. Kế hoạch bồi dưỡng & Hướng dẫn phụ huynh:</span>
            <p class="text-gray-700">Ba mẹ nên dành 15 phút mỗi tối cùng con đọc truyện ngụ ngôn, đặt câu hỏi gợi mở và khen ngợi kịp thời để giúp ${studentName} giữ vững ngọn lửa say mê môn Tiếng Việt nhé!</p>
        </div>
    `;
}

function renderHistoryTable(rows) {
    const tbody = document.getElementById('hist-table-body');
    if (!tbody) return;

    if (!rows.length) {
        tbody.innerHTML = `<tr><td colspan="11" class="py-4 text-gray-400">Chưa ghi nhận lịch sử bài làm nào</td></tr>`;
        return;
    }

    let html = '';
    rows.forEach((r, idx) => {
        const itemDiem = r.tongDiem || r.score || '--';
        const dateStr = r.ngayLam || new Date().toLocaleDateString('vi-VN');
        const durationStr = r.thoiGianLamBai || '--';

        html += `
            <tr class="hover:bg-pink-50/30 transition-colors">
                <td class="py-2.5 px-2">${idx + 1}</td>
                <td class="py-2.5 px-2 font-black">${r.deSo ? `Đề ${r.deSo}` : `Tuần ${r.tuan}`}</td>
                <td class="py-2.5 px-2 font-black text-rose-600">${itemDiem}</td>
                <td class="py-2 px-1">${r.diemC1 || '--'}</td>
                <td class="py-2 px-1">${r.diemC2 || '--'}</td>
                <td class="py-2 px-1">${r.diemC3 || '--'}</td>
                <td class="py-2 px-1">${r.diemC4 || '--'}</td>
                <td class="py-2 px-1">${r.diemC5 || '--'}</td>
                <td class="py-2 px-1">${r.diemC6 || '--'}</td>
                <td class="py-2.5 px-2 text-gray-500">${dateStr}</td>
                <td class="py-2.5 px-2 text-gray-500">${durationStr}</td>
            </tr>
        `;
    });
    tbody.innerHTML = html;
}

function exportReportToPDF() {
    const area = document.getElementById('printable-report-area');
    if (!area) return;
    showLoadingOverlay('Đang khởi tạo file PDF chuẩn in ấn...');
    
    const opt = {
        margin: [5, 5, 5, 5],
        filename: `Bao_Cao_Tien_Trinh_${currentUser?.maHS || 'HocSinh'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
    };

    html2pdf().set(opt).from(area).save().then(() => {
        hideLoadingOverlay();
    }).catch(err => {
        hideLoadingOverlay();
        window.print();
    });
}

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

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-mapin')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doLogin();
    });
    document.getElementById('login-mahs')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doLogin();
    });
});

tryAutoLogin();