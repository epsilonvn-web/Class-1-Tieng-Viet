// ==========================================
// CẤU HÌNH 12 CHỦ ĐỀ CHÍNH & MA TRẬN KỸ NĂNG C1-C6
// ==========================================
const TOPICS_CONFIG = [
    { id: 1, title: "1. Bảng chữ cái", desc: "Nguyên âm, phụ âm, âm ghép", icon: "🅰️", color: "pink" },
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
    1: { name: "Tuần 1: Làm chủ 5 thanh điệu", topicIds: [1, 2], desc: "Nhận diện mặt chữ cái, nguyên âm/phụ âm và phân biệt 5 thanh điệu chính xác.", icon: "🎵" },
    2: { name: "Tuần 2: Khởi động ghép âm - vần", topicIds: [3], desc: "Ghép phụ âm đầu với nguyên âm đơn và vần xuôi cơ bản để đánh vần trơn.", icon: "🧩" },
    3: { name: "Tuần 3: Vần đôi - vần ghép phức tạp", topicIds: [3, 6], desc: "Chinh phục các nguyên âm đôi, vần có âm đệm và âm cuối khó lắt léo.", icon: "🌿" },
    4: { name: "Tuần 4: Điền chữ cái còn thiếu", topicIds: [4], desc: "Nắm vững quy tắc chính tả c/k, g/gh, ng/ngh và phân biệt s/x, tr/ch, l/n.", icon: "✍️" },
    5: { name: "Tuần 5: Bác sĩ sửa lỗi chính tả", topicIds: [5], desc: "Tìm và sửa lỗi từ sai chính tả, quy tắc viết hoa tên riêng, địa danh.", icon: "🩺" },
    6: { name: "Tuần 6: Nhìn hình đoán từ đa giác quan", topicIds: [6, 8], desc: "Mở rộng vốn từ qua hình ảnh trực quan con vật, vị giác, xúc giác thực tế.", icon: "👁️" },
    7: { name: "Tuần 7: Gia đình ba nhóm từ loại", topicIds: [7], desc: "Phân loại từ ngữ quanh bé thành nhóm từ chỉ sự vật, hoạt động và đặc điểm.", icon: "🧸" },
    8: { name: "Tuần 8: Nhà thông thái sắp xếp câu", topicIds: [8], desc: "Sắp xếp các từ xáo trộn thành câu kể, câu tả hoàn chỉnh đúng ngữ pháp.", icon: "🧠" },
    9: { name: "Tuần 9: Điền từ vào câu & tục ngữ", topicIds: [9], desc: "Điền từ theo ngữ cảnh phù hợp, ghi nhớ ca dao tục ngữ rèn đức tính tốt.", icon: "📜" },
    10: { name: "Tuần 10: Trí tuệ IQ cùng đố vui bé ngoan", topicIds: [10], desc: "Giải quyết 100 câu đố lục bát dân gian hóm hỉnh mô tả thế giới xung quanh.", icon: "🎯" },
    11: { name: "Tuần 11: Đọc hiểu cảm thụ văn học sâu", topicIds: [11], desc: "Đọc diễn cảm các văn bản ngụ ngôn, thơ ngắn và trả lời câu hỏi phân tích.", icon: "📖" },
    12: { name: "Tuần 12: Đấu trường đề thi tổng hợp", isExam: true, topicIds: [], desc: "Thi thử tổng hợp đa năng lực bám sát ma trận đề thi học kỳ.", icon: "🏆" }
};

const TOPIC_TO_SKILL = {
    1: 'C1', 2: 'C1', 3: 'C1',
    4: 'C2', 5: 'C2',
    6: 'C3',
    7: 'C4', 8: 'C4',
    9: 'C5', 11: 'C5',
    10: 'C6'
};

function skillsForWeek(weekNum) {
    const cfg = roadmapConfig[weekNum];
    if (!cfg) return [];
    return [...new Set(cfg.topicIds.map(id => TOPIC_TO_SKILL[id] || 'C1'))];
}

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
    C1: { code: 'C1', sheetCol: 'C1_NguAm', totalCol: 'C1_NguAm_Tong', name: 'Ngữ âm nền tảng', advice: 'Cần ôn lại bảng chữ cái, phân biệt nguyên âm và phụ âm ghép.' },
    C2: { code: 'C2', sheetCol: 'C2_ChinhTa', totalCol: 'C2_ChinhTa_Tong', name: 'Quy tắc chính tả', advice: 'Rèn luyện thêm quy tắc đặt 5 dấu thanh, phân biệt c/k, g/gh, ng/ngh.' },
    C3: { code: 'C3', sheetCol: 'C3_VonTu', totalCol: 'C3_VonTu_Tong', name: 'Vốn từ mở rộng', advice: 'Luyện đọc các vần đôi, mở rộng vốn từ miêu tả qua đời sống hàng ngày.' },
    C4: { code: 'C4', sheetCol: 'C4_CuPhap', totalCol: 'C4_CuPhap_Tong', name: 'Cú pháp câu kể', advice: 'Rèn luyện sắp xếp từ ngữ xáo trộn thành câu kể hoàn chỉnh có nghĩa.' },
    C5: { code: 'C5', sheetCol: 'C5_DocHieu', totalCol: 'C5_DocHieu_Tong', name: 'Đọc hiểu văn bản', advice: 'Tăng cường đọc diễn cảm truyện ngụ ngôn và nắm bắt nội dung mẩu chuyện.' },
    C6: { code: 'C6', sheetCol: 'C6_TuDuyIQ', totalCol: 'C6_TuDuyIQ_Tong', name: 'Tư duy IQ & đố vui', advice: 'Rèn kỹ năng suy luận logic, giải mã các câu đố thơ dân gian.' }
};

const GREETINGS_STUDENT = [
    "Chào {name}, cô Thỏ Hồng chúc con có một buổi học thật vui và đạt điểm mười nhé!",
    "Chào mừng {name} đã quay trở lại! Hôm nay chúng mình cùng tự tin bứt phá nhé!",
    "Cô Thỏ Hồng chào {name}, chúc bé yêu học giỏi, chăm ngoan và giành thật nhiều sao!",
    "Chào con yêu {name}, hãy cùng cô Thỏ Hồng khám phá những bài học kì diệu hôm nay nhé!",
    "Chào mừng {name} đến với buổi học! Chúc con làm bài thật xuất sắc và tràn ngập niềm vui!"
];

const GREETINGS_GUEST = [
    "Chào bé yêu, cô Thỏ Hồng chúc con có một buổi học thử thật vui và bổ ích!",
    "Chào mừng bé đến với lớp học Tiếng Việt của cô Thỏ Hồng! Chúc bé học thật giỏi nhé!",
    "Cô Thỏ Hồng chào bé yêu! Chúng mình cùng nhau khám phá những bài học kì diệu nào!",
    "Chào thiên thần nhỏ! Hãy cùng cô Thỏ Hồng chinh phục các câu hỏi thật xuất sắc nhé!",
    "Chào mừng con đến với Đấu trường học tập! Chúc con học thật vui và say mê nhé!"
];

// DỮ LIỆU BẢNG CHỮ CÁI TƯƠNG TÁC (1.1, 1.2, 1.3, 1.4)
const ALPHABET_29_DETAILS = [
    { u:'A', l:'a', hw:'A', sound:'a', name:'Chữ A', group:'nguyen_am_don', examples:[{w:'Quả na', emo:'🍈', tag:'Danh từ', sent:'Quả na mở mắt đón xuân'},{w:'Con cá', emo:'🐟', tag:'Danh từ', sent:'Con cá bơi lội tung tăng'},{w:'Cái ca', emo:'🥛', tag:'Đồ vật', sent:'Cái ca nước uống của bé'}] },
    { u:'Ă', l:'ă', hw:'Ă', sound:'á', name:'Chữ Á', group:'nguyen_am_don', examples:[{w:'Mặt trăng', emo:'🌙', tag:'Thiên nhiên', sent:'Mặt trăng khuyết sáng ngời'},{w:'Khăn mặt', emo:'🧣', tag:'Đồ vật', sent:'Bé rửa mặt bằng khăn sạch'},{w:'Búp măng', emo:'🎋', tag:'Cây cối', sent:'Búp măng non mọc thẳng'}] },
    { u:'Â', l:'â', hw:'Â', sound:'ớ', name:'Chữ Ớ', group:'nguyen_am_don', examples:[{w:'Cây nấm', emo:'🍄', tag:'Cây cối', sent:'Cây nấm rơm nhỏ bé'},{w:'Cái ấm', emo:'🫖', tag:'Đồ vật', sent:'Cái ấm pha trà nóng'},{w:'Gấu trúc', emo:'🐼', tag:'Động vật', sent:'Gấu trúc thích ăn lá trúc'}] },
    { u:'B', l:'b', hw:'B', sound:'bờ', name:'Chữ Bờ', group:'phu_am', examples:[{w:'Con bò', emo:'🐄', tag:'Động vật', sent:'Con bò gặm cỏ trên đồi'},{w:'Quả bóng', emo:'⚽', tag:'Đồ chơi', sent:'Quả bóng tròn lăn trên sân'},{w:'Búp bê', emo:'🧸', tag:'Đồ chơi', sent:'Búp bê của bé rất xinh'}] },
    { u:'C', l:'c', hw:'C', sound:'cờ', name:'Chữ Cờ', group:'phu_am', examples:[{w:'Con cò', emo:'🦩', tag:'Loài chim', sent:'Con cò bay lả bay la'},{w:'Quả cam', emo:'🍊', tag:'Trái cây', sent:'Quả cam nhiều vitamin C'},{w:'Lá cờ', emo:'🚩', tag:'Đồ vật', sent:'Lá cờ đỏ sao vàng'}] },
    { u:'CH', l:'ch', hw:'Ch', sound:'chờ', name:'Chữ Chờ', group:'phu_am_ghep', examples:[{w:'Chú chó', emo:'🐶', tag:'Động vật', sent:'Chú chó trông nhà rất ngoan'},{w:'Cái chổi', emo:'🧹', tag:'Đồ vật', sent:'Cái chổi quét nhà sạch tinh'},{w:'Chùm khế', emo:'⭐', tag:'Trái cây', sent:'Chùm khế ngọt trĩu cành'}] },
    { u:'D', l:'d', hw:'D', sound:'dờ', name:'Chữ Dờ', group:'phu_am', examples:[{w:'Con dê', emo:'🐐', tag:'Động vật', sent:'Con dê kêu be be'},{w:'Quả dừa', emo:'🥥', tag:'Trái cây', sent:'Quả dừa ngọt mát trưa hè'},{w:'Quả dâu', emo:'🍓', tag:'Trái cây', sent:'Quả dâu tây đỏ mọng'}] },
    { u:'Đ', l:'đ', hw:'Đ', sound:'đờ', name:'Chữ Đờ', group:'phu_am', examples:[{w:'Đu đủ', emo:'🥭', tag:'Trái cây', sent:'Quả đu đủ chín vàng'},{w:'Đồng hồ', emo:'⏰', tag:'Đồ vật', sent:'Đồng hồ tích tắc đếm giờ'},{w:'Đoàn tàu', emo:'🚂', tag:'Phương tiện', sent:'Đoàn tàu chạy xình xịch'}] },
    { u:'E', l:'e', hw:'E', sound:'e', name:'Chữ E', group:'nguyen_am_don', examples:[{w:'Con ve', emo:'🦗', tag:'Côn trùng', sent:'Tiếng ve kêu râm ran hè về'},{w:'Chiếc xe', emo:'🚗', tag:'Phương tiện', sent:'Xe ô tô chạy bon bon'},{w:'Que kem', emo:'🍦', tag:'Món ăn', sent:'Que kem mát lạnh ngọt bùi'}] },
    { u:'Ê', l:'ê', hw:'Ê', sound:'ê', name:'Chữ Ê', group:'nguyen_am_don', examples:[{w:'Con bê', emo:'🐮', tag:'Động vật', sent:'Chú bê con lon ton theo mẹ'},{w:'Quả lê', emo:'🍐', tag:'Trái cây', sent:'Quả lê giòn ngọt mát'},{w:'Cái ghế', emo:'🪑', tag:'Đồ vật', sent:'Cái ghế gỗ của em ngồi học'}] },
    { u:'G', l:'g', hw:'G', sound:'gờ', name:'Chữ Gờ', group:'phu_am', examples:[{w:'Con gà', emo:'🐔', tag:'Vật nuôi', sent:'Con gà trống gáy ò ó o'},{w:'Quả gấc', emo:'🍈', tag:'Trái cây', sent:'Quả gấc đỏ dùng nấu xôi'},{w:'Cái gối', emo:'🛌', tag:'Đồ dùng', sent:'Cái gối êm ái bé nằm ngủ'}] },
    { u:'GH', l:'gh', hw:'Gh', sound:'ghờ', name:'Chữ Ghờ', group:'phu_am_ghep', examples:[{w:'Ghế gỗ', emo:'🪑', tag:'Đồ vật', sent:'Cái ghế gỗ chắc chắn'},{w:'Ghép hình', emo:'🧩', tag:'Trò chơi', sent:'Bé thích chơi ghép hình'},{w:'Ghi nhớ', emo:'📝', tag:'Học tập', sent:'Bé ghi nhớ lời cô dạy'}] },
    { u:'GI', l:'gi', hw:'Gi', sound:'giờ', name:'Chữ Giờ', group:'phu_am_ghep', examples:[{w:'Cây gió', emo:'🌳', tag:'Thực vật', sent:'Cây gió thổi vi vu'},{w:'Giỏ quà', emo:'🎁', tag:'Đồ vật', sent:'Giỏ quà Tết xinh xắn'},{w:'Giọt nước', emo:'💧', tag:'Thiên nhiên', sent:'Giọt nước trong veo'}] },
    { u:'H', l:'h', hw:'H', sound:'hờ', name:'Chữ Hờ', group:'phu_am', examples:[{w:'Bông hoa', emo:'🌸', tag:'Thực vật', sent:'Bông hoa hồng nở rực rỡ'},{w:'Con hổ', emo:'🐯', tag:'Động vật hoang dã', sent:'Chúa sơn lâm con hổ dũng mãnh'},{w:'Chú hươu', emo:'🦌', tag:'Động vật', sent:'Chú hươu sao hiền lành'}] },
    { u:'I', l:'i', hw:'I', sound:'i', name:'Chữ I ngắn', group:'nguyen_am_don', examples:[{w:'Hòn bi', emo:'🔮', tag:'Đồ chơi', sent:'Hòn bi ve tròn xoe lấp lánh'},{w:'Quả bí', emo:'🎃', tag:'Rau củ', sent:'Quả bí đỏ nấu canh rất ngọt'},{w:'Cây kim', emo:'🪡', tag:'Đồ dùng', sent:'Cây kim khâu quần áo'}] },
    { u:'K', l:'k', hw:'K', sound:'ca', name:'Chữ Ca', group:'phu_am', examples:[{w:'Cái kéo', emo:'✂️', tag:'Đồ dùng', sent:'Cái kéo cắt giấy thủ công'},{w:'Cái kính', emo:'👓', tag:'Đồ dùng', sent:'Cặp kính mắt tròn xoe'},{w:'Kì lân', emo:'🦄', tag:'Con vật', sent:'Chú kì lân bảy sắc diệu kì'}] },
    { u:'KH', l:'kh', hw:'Kh', sound:'khờ', name:'Chữ Khờ', group:'phu_am_ghep', examples:[{w:'Cái khiên', emo:'🛡️', tag:'Đồ vật', sent:'Cái khiên bảo vệ'},{w:'Cây khế', emo:'⭐', tag:'Cây cối', sent:'Cây khế ngọt trĩu quả'},{w:'Con khỉ', emo:'🐵', tag:'Động vật', sent:'Con khỉ leo trèo nhanh'}] },
    { u:'L', l:'l', hw:'L', sound:'lờ', name:'Chữ Lờ cao', group:'phu_am', examples:[{w:'Chiếc lá', emo:'🍃', tag:'Thực vật', sent:'Chiếc lá xanh đung đưa trong gió'},{w:'Hoa lan', emo:'💐', tag:'Loài hoa', sent:'Hoa phong lan thơm ngát'},{w:'Con lợn', emo:'🐷', tag:'Vật nuôi', sent:'Chú lợn con ủn ỉn ăn no'}] },
    { u:'M', l:'m', hw:'M', sound:'mờ', name:'Chữ Mờ', group:'phu_am', examples:[{w:'Con mèo', emo:'🐱', tag:'Vật nuôi', sent:'Con mèo mướp bắt chuột tài'},{w:'Quả mít', emo:'🍈', tag:'Trái cây', sent:'Quả mít chín thơm lừng cả nhà'},{w:'Cái mũ', emo:'👒', tag:'Trang phục', sent:'Cái mũ rộng vành che nắng'}] },
    { u:'N', l:'n', hw:'N', sound:'nờ', name:'Chữ Nờ thấp', group:'phu_am', examples:[{w:'Cái nơ', emo:'🎀', tag:'Phụ kiện', sent:'Cái nơ hồng bé cài trên tóc'},{w:'Quả na', emo:'🍈', tag:'Trái cây', sent:'Quả na chín ngọt ngào'},{w:'Nụ hoa', emo:'🌷', tag:'Thực vật', sent:'Nụ hoa hồng hé nở ban mai'}] },
    { u:'NG', l:'ng', hw:'Ng', sound:'ngờ', name:'Chữ Ngờ đơn', group:'phu_am_ghep', examples:[{w:'Ngôi nhà', emo:'🏡', tag:'Kiến trúc', sent:'Ngôi nhà ấm cúng'},{w:'Ngọn lửa', emo:'🔥', tag:'Thiên nhiên', sent:'Ngọn lửa bập bùng'},{w:'Con ngựa', emo:'🐴', tag:'Động vật', sent:'Con ngựa phi nước đại'}] },
    { u:'NGH', l:'ngh', hw:'Ngh', sound:'ngờ', name:'Chữ Ngờ kép', group:'phu_am_ghep', examples:[{w:'Nghỉ ngơi', emo:'🛋️', tag:'Hoạt động', sent:'Bé nghỉ ngơi buổi trưa'},{w:'Suy nghĩ', emo:'🤔', tag:'Tư duy', sent:'Bé suy nghĩ tìm đáp án'},{w:'Con nghé', emo:'🐃', tag:'Động vật', sent:'Con nghé con theo mẹ'}] },
    { u:'NH', l:'nh', hw:'Nh', sound:'nhờ', name:'Chữ Nhờ', group:'phu_am_ghep', examples:[{w:'Nhà sàn', emo:'🏠', tag:'Kiến trúc', sent:'Nhà sàn bản làng'},{w:'Quả nhãn', emo:'🍈', tag:'Trái cây', sent:'Quả nhãn ngọt lịm'},{w:'Con nhện', emo:'🕷️', tag:'Côn trùng', sent:'Con nhện chăng tơ'}] },
    { u:'O', l:'o', hw:'O', sound:'o', name:'Chữ O tròn', group:'nguyen_am_don', examples:[{w:'Con ong', emo:'🐝', tag:'Côn trùng', sent:'Con ong chăm chỉ hút mật hoa'},{w:'Con bò', emo:'🐄', tag:'Vật nuôi', sent:'Con bò sữa hiền lành ăn cỏ'},{w:'Con thỏ', emo:'🐰', tag:'Động vật', sent:'Chú thỏ trắng có đôi tai dài'}] },
    { u:'Ô', l:'ô', hw:'Ô', sound:'ô', name:'Chữ Ô đội mũ', group:'nguyen_am_don', examples:[{w:'Cái ô', emo:'☂️', tag:'Đồ dùng', sent:'Chiếc ô xinh che mưa che nắng'},{w:'Cái xô', emo:'🪣', tag:'Đồ dùng', sent:'Cái xô nhựa xách nước tưới cây'},{w:'Bắp ngô', emo:'🌽', tag:'Nông sản', sent:'Bắp ngô vàng ngọt bùi thơm'}] },
    { u:'Ơ', l:'ơ', hw:'Ơ', sound:'ơ', name:'Chữ Ơ có râu', group:'nguyen_am_don', examples:[{w:'Quả mơ', emo:'🍑', tag:'Trái cây', sent:'Quả mơ chín ngâm đường uống mát'},{w:'Lá cờ', emo:'🚩', tag:'Biểu tượng', sent:'Lá cờ đỏ thắm phấp phới bay'},{w:'Cái nơ', emo:'🎀', tag:'Phụ kiện', sent:'Cái nơ xinh xắn của em'}] },
    { u:'P', l:'p', hw:'P', sound:'pờ', name:'Chữ Pờ', group:'phu_am', examples:[{w:'Đèn pin', emo:'🔦', tag:'Đồ vật', sent:'Cây đèn pin chiếu sáng trong đêm'},{w:'Bát phở', emo:'🍜', tag:'Món ăn', sent:'Bát phở bò nóng hổi thơm ngon'},{w:'Hoa phượng', emo:'🌺', tag:'Loài hoa', sent:'Hoa phượng nở đỏ rực sân trường'}] },
    { u:'PH', l:'ph', hw:'Ph', sound:'phờ', name:'Chữ Phờ', group:'phu_am_ghep', examples:[{w:'Phố cổ', emo:'🏮', tag:'Địa danh', sent:'Phố cổ rực rỡ đèn lồng'},{w:'Phút giây', emo:'⏱️', tag:'Thời gian', sent:'Phút giây vui vẻ bên bạn'},{w:'Phở bò', emo:'🍜', tag:'Món ăn', sent:'Bát phở bò thơm ngon'}] },
    { u:'Q', l:'q', hw:'Q', sound:'quy', name:'Chữ Quy', group:'phu_am', examples:[{w:'Quả quýt', emo:'🍊', tag:'Trái cây', sent:'Quả quýt mọng nước chua ngọt'},{w:'Hộp quà', emo:'🎁', tag:'Đồ vật', sent:'Hộp quà sinh nhật thắt nơ xinh'},{w:'Cái quạt', emo:'🪭', tag:'Đồ dùng', sent:'Cái quạt nan xua tan cơn nóng'}] },
    { u:'QU', l:'qu', hw:'Qu', sound:'quờ', name:'Chữ Quờ', group:'phu_am_ghep', examples:[{w:'Quả quất', emo:'🍊', tag:'Trái cây', sent:'Cây quất trĩu quả vàng'},{w:'Quyển vở', emo:'📓', tag:'Học tập', sent:'Quyển vở sạch chữ đẹp'},{w:'Quân kì', emo:'🚩', tag:'Biểu tượng', sent:'Lá quân kì tung bay'}] },
    { u:'R', l:'r', hw:'R', sound:'rờ', name:'Chữ Rờ rung', group:'phu_am', examples:[{w:'Con rùa', emo:'🐢', tag:'Bò sát', sent:'Con rùa bò chậm mang mai cứng'},{w:'Rừng cây', emo:'🌲', tag:'Thiên nhiên', sent:'Rừng cây xanh mát bao la'},{w:'Con rắn', emo:'🐍', tag:'Động vật hoang dã', sent:'Con rắn lục bò trên cành cây'}] },
    { u:'S', l:'s', hw:'S', sound:'sờ', name:'Chữ Sờ cong', group:'phu_am', examples:[{w:'Ngôi sao', emo:'⭐', tag:'Vũ trụ', sent:'Ngôi sao lấp lánh trên trời đêm'},{w:'Hoa sen', emo:'🪷', tag:'Loài hoa', sent:'Hoa sen thanh tao tỏa ngát hương'},{w:'Sư tử', emo:'🦁', tag:'Chúa sơn lâm', sent:'Sư tử dũng mãnh bảo vệ rừng xanh'}] },
    { u:'T', l:'t', hw:'T', sound:'tờ', name:'Chữ Tờ', group:'phu_am', examples:[{w:'Quả táo', emo:'🍎', tag:'Trái cây', sent:'Quả táo đỏ ngọt lành thơm ngon'},{w:'Con tôm', emo:'🦐', tag:'Thủy sản', sent:'Con tôm búng càng tanh tách'},{w:'Thước kẻ', emo:'📏', tag:'Học tập', sent:'Cây thước kẻ thẳng tắp trong cặp'}] },
    { u:'TH', l:'th', hw:'Th', sound:'thờ', name:'Chữ Thờ', group:'phu_am_ghep', examples:[{w:'Thuyền nan', emo:'⛵', tag:'Phương tiện', sent:'Thuyền nan trôi trên sông'},{w:'Thầy giáo', emo:'👨‍🏫', tag:'Nghề nghiệp', sent:'Thầy giáo tận tụy'},{w:'Thước kẻ', emo:'📏', tag:'Đồ dùng', sent:'Cây thước kẻ thẳng'}] },
    { u:'TR', l:'tr', hw:'Tr', sound:'trờ', name:'Chữ Trờ', group:'phu_am_ghep', examples:[{w:'Trường học', emo:'🏫', tag:'Kiến trúc', sent:'Trường học thân yêu'},{w:'Trăng sáng', emo:'🌙', tag:'Thiên nhiên', sent:'Trăng sáng rọi qua cây'},{w:'Trái cây', emo:'🍎', tag:'Thực phẩm', sent:'Trái cây tươi ngon'}] },
    { u:'U', l:'u', hw:'U', sound:'u', name:'Chữ U', group:'nguyen_am_don', examples:[{w:'Con cú', emo:'🦉', tag:'Loài chim', sent:'Chú cú mèo thức ban đêm'},{w:'Mũ len', emo:'🧢', tag:'Trang phục', sent:'Mũ len giữ ấm mùa đông'},{w:'Quả đu đủ', emo:'🥭', tag:'Trái cây', sent:'Quả đu đủ ngọt mát bổ dưỡng'}] },
    { u:'Ư', l:'ư', hw:'Ư', sound:'ư', name:'Chữ Ư có râu', group:'nguyen_am_don', examples:[{w:'Sư tử', emo:'🦁', tag:'Động vật', sent:'Sư tử có chiếc bờm to lớn'},{w:'Lá thư', emo:'✉️', tag:'Đồ dùng', sent:'Bé viết lá thư thăm ông bà'},{w:'Quả dưa', emo:'🍉', tag:'Trái cây', sent:'Quả dưa hấu giải nhiệt ngày hè'}] },
    { u:'V', l:'v', hw:'V', sound:'vờ', name:'Chữ Vờ', group:'phu_am', examples:[{w:'Con voi', emo:'🐘', tag:'Động vật', sent:'Chú voi có chiếc vòi dài ngoằng'},{w:'Con vịt', emo:'🦆', tag:'Gia cầm', sent:'Con vịt bầu kêu cạp cạp bơi ao'},{w:'Quyển vở', emo:'📓', tag:'Học tập', sent:'Quyển vở sạch chữ đẹp của bé'}] },
    { u:'X', l:'x', hw:'X', sound:'xờ', name:'Chữ Xờ nhẹ', group:'phu_am', examples:[{w:'Chiếc xe', emo:'🚗', tag:'Phương tiện', sent:'Chiếc xe đạp nhỏ em tự đi'},{w:'Mùa xuân', emo:'🌸', tag:'Mùa màng', sent:'Mùa xuân trăm hoa đua nở rực rỡ'},{w:'Cái xẻng', emo:'🪴', tag:'Dụng cụ', sent:'Cái xẻng nhỏ bé xúc đất trồng cây'}] },
    { u:'Y', l:'y', hw:'Y', sound:'y dài', name:'Chữ Y dài', group:'nguyen_am_don', examples:[{w:'Y tá', emo:'👩‍⚕️', tag:'Nghề nghiệp', sent:'Cô y tá chăm sóc người bệnh ân cần'},{w:'Chim yến', emo:'🕊️', tag:'Loài chim', sent:'Chim yến làm tổ trên vách đá'},{w:'Cái yếm', emo:'🎽', tag:'Trang phục', sent:'Cái yếm ăn xinh xắn của em bé'}] }
];

// ==========================================
// ĐỊNH DANH MÁY CHỦ APPS SCRIPT & BIẾN TOÀN CỤC
// ==========================================
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxgPIbG8HsEph5Etfu9sNQExNtb3K3mjAtyVXIfj_5IRwCfAqFIEBVrDaLlT2kql9qvUQ/exec";
let allTopicsDataCache = null;
const examsCache = {};

let currentUser = null;
let starGreenCount = 0;
let starRedCount = 0;
let activeTopicId = null;
let activeExamContext = null;
let activeRoadmapContext = null;
let activeQuestionsList = [];
let practiceCycleRawPool = [];
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

let audioCtx = null;
const banMaiAudio = new Audio();
banMaiAudio.referrerPolicy = 'no-referrer';

let histLineChartInstance = null;
let histBarChartInstance = null;

// ==========================================
// HÀM TIỆN ÍCH DỮ LIỆU
// ==========================================
function getStudentFirstName() {
    if (!currentUser || currentUser.isGuest || !currentUser.hoTen) return "Bé";
    const parts = currentUser.hoTen.trim().split(/\s+/);
    return parts[parts.length - 1] || "Bé";
}

function normalizeQuestion(q) {
    if (!q) return null;
    return {
        question_id: q.id ?? q.question_id ?? 0,
        sub_topic: String(q.sub ?? q.sub_topic ?? 'Câu hỏi chung').trim(),
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
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function buildTrickyChoices(correctAnswer, sameGroupPool, allPool, count = 3) {
    let same = [...new Set(sameGroupPool.filter(x => x !== correctAnswer))];
    same = shuffleArray(same);
    let picks = same.slice(0, count);
    if (picks.length < count) {
        let rest = [...new Set(allPool.filter(x => x !== correctAnswer && !picks.includes(x)))];
        rest = shuffleArray(rest);
        picks = picks.concat(rest.slice(0, count - picks.length));
    }
    return shuffleArray([correctAnswer, ...picks]);
}

function getQuestionsForWeek343(weekNumber) {
    const config = roadmapConfig[weekNumber];
    if (!config || !allTopicsDataCache) return [];
    
    let pool = [];
    config.topicIds.forEach(topicId => {
        const topicData = allTopicsDataCache.find(t => t.topic_id === topicId);
        if (topicData && topicData.questions) {
            pool = pool.concat(topicData.questions.map(q => ({ ...q, source_topic_id: topicId })));
        }
    });
    
    if (pool.length < 30) return shuffleArray([...pool]);
    
    const size = pool.length;
    const basket1 = pool.slice(0, Math.floor(size * 0.35));
    const basket2 = pool.slice(Math.floor(size * 0.35), Math.floor(size * 0.75));
    const basket3 = pool.slice(Math.floor(size * 0.75));
    
    const easy = shuffleArray([...basket1]).slice(0, 9);
    const medium = shuffleArray([...basket2]).slice(0, 12);
    const hard = shuffleArray([...basket3]).slice(0, 9);
    
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

const TOPICS_DATA_FILES = [
    'assets/data/kho_hoc_tieng_viet_part1.json',
    'assets/data/kho_hoc_tieng_viet_part2.json'
];

async function fetchAllTopicsData() {
    if (allTopicsDataCache) return allTopicsDataCache;

    const results = await Promise.all(TOPICS_DATA_FILES.map(async (file) => {
        const res = await fetch(file);
        if (!res.ok) throw new Error(`Không thể tải file dữ liệu ${file}`);
        return res.json();
    }));

    const rawTopics = results.flatMap(data => Array.isArray(data) ? data : (data.topics || []));
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

// ==========================================
// RENDER GIAO DIỆN TRANG CHỦ & ĐẤU TRƯỜNG
// ==========================================
async function renderDashboardGrid() {
    const container = document.getElementById('view-dashboard-grid');
    if (!container) return;
    
    let topicsData = [];
    try { topicsData = await fetchAllTopicsData(); } catch (e) {}

    let html = '';
    TOPICS_CONFIG.forEach(t => {
        const topicObj = topicsData.find(item => Number(item.topic_id) === Number(t.id));
        const totalCount = topicObj && topicObj.questions ? topicObj.questions.length : (t.id === 1 ? 29 : 0);
        const countLabel = totalCount > 0 ? `${totalCount} câu` : t.desc;

        const iconHtml = t.isCustomTextIcon 
            ? `<div class="w-8 h-8 bg-rose-100 rounded-xl flex items-center justify-center text-[11px] font-black text-rose-600 shadow-inner group-hover:scale-110 transition-transform shrink-0 tracking-tight">S/X</div>`
            : `<div class="w-8 h-8 bg-${t.color}-100 rounded-xl flex items-center justify-center text-sm font-extrabold text-${t.color}-600 shadow-inner group-hover:scale-110 transition-transform shrink-0">${t.icon}</div>`;

        html += `
            <div onclick="openTopic(${t.id}, '${t.title}', '${t.icon}')" class="pastel-card p-3 flex flex-col justify-between cursor-pointer hover:border-${t.color}-400 transition-all group min-h-[92px]">
                <div class="flex items-center space-x-2.5">
                    ${iconHtml}
                    <h3 class="font-extrabold text-${t.color}-700 text-sm md:text-base leading-tight">${t.title}</h3>
                </div>
                <div class="flex justify-between items-center mt-1.5 pt-1 border-t border-pink-100 text-[11px] font-bold text-gray-500">
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
        <div onclick="openExamHub()" class="pastel-card p-3 flex flex-col justify-between cursor-pointer hover:border-amber-400 transition-all group bg-gradient-to-br from-white to-amber-50/50 min-h-[92px]">
            <div class="flex items-center space-x-2.5">
                <div class="w-8 h-8 bg-amber-100 rounded-xl flex items-center justify-center text-sm font-extrabold text-amber-600 shadow-inner group-hover:scale-110 transition-transform shrink-0">🏆</div>
                <h3 class="font-extrabold text-amber-700 text-sm md:text-base leading-tight">12. Đấu trường đề thi</h3>
            </div>
            <div class="flex justify-between items-center mt-1.5 pt-1 border-t border-amber-100 text-[11px] font-bold text-gray-500">
                <span>HK1, HK2, HSG</span>
                <span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">${totalExamsCount} đề thi</span>
            </div>
        </div>
    `;
    container.innerHTML = html;
}

async function startRandomExam(categoryKey) {
    stopSpeaking();
    const catKeywords = {
        hocky1: ['học kỳ 1', 'hk1'],
        hocky2: ['học kỳ 2', 'hk2'],
        hsg: ['giỏi', 'hsg']
    }[categoryKey] || [];

    showLoadingOverlay("Đang chuẩn bị đề thi...");
    try {
        const examData = await loadExamDataFile('de_thi_tieng_viet_1.json');
        hideLoadingOverlay();

        const pool = (examData && Array.isArray(examData.exams)) ? examData.exams : [];
        let candidates = pool.filter(e => catKeywords.some(k => (e.exam_category || '').toLowerCase().includes(k)));
        if (!candidates.length) candidates = pool;
        if (!candidates.length) return alert('Đang cập nhật thêm đề thi cho mục này, bé quay lại sau nhé!');

        const exam = candidates[Math.floor(Math.random() * candidates.length)];
        const examIndex = pool.indexOf(exam);
        const examLabel = examFileMap[categoryKey]?.label || 'Đề thi';
        const examTitle = exam.exam_title || exam.title || `${examLabel} - Đề số ${examIndex + 1}`;

        activeExamContext = { categoryKey, examIndex, examTitle };
        activeRoadmapContext = null;
        pendingTopicQuiz = null;

        const questions = Array.isArray(exam.questions) && exam.questions.length ? exam.questions : [];
        if (!questions.length) return alert('Đề thi này chưa có câu hỏi, bé chọn đề khác nhé!');

        updateNavTabs("12. Đấu trường đề thi", "🏆", examTitle);
        startTopicQuiz(0, examTitle, shuffleArray(questions), null);
    } catch (err) {
        hideLoadingOverlay();
        alert(`Không thể tải đề thi: ${err.message}`);
    }
}

function startExamCountdown() {
    quizRemainingSeconds = 40 * 60;
    updateExamTimerDisplay();
    clearInterval(quizTimerInterval);
    quizTimerInterval = setInterval(() => {
        quizRemainingSeconds--;
        updateExamTimerDisplay();
        if (quizRemainingSeconds <= 0) {
            clearInterval(quizTimerInterval);
            alert('Đã hết giờ làm bài! Bài thi sẽ được nộp lại nhé bé.');
            showResultScreen();
        }
    }, 1000);
}

function updateExamTimerDisplay() {
    const el = document.getElementById('quiz-timer-display');
    if (!el) return;
    const m = Math.floor(Math.max(0, quizRemainingSeconds) / 60);
    const s = Math.max(0, quizRemainingSeconds) % 60;
    el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function openExamHub() {
    stopSpeaking();
    activeExamContext = null;
    activeRoadmapContext = null;
    activeTopicId = null;
    pendingTopicQuiz = null;
    updateNavTabs("12. Đấu trường đề thi", "🏆", null);
    switchAppView('view-exam-hub');
    showLoadingOverlay("Đang tải kho đề thi...");
    renderExamHubGrid().finally(() => hideLoadingOverlay());
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
        <div class="bg-pink-50/70 p-5 rounded-3xl border-2 border-pink-200 flex flex-col justify-between items-center text-center group min-h-[250px] pastel-card">
            <div>
                <div class="text-4xl mb-1.5 group-hover:scale-110 transition-transform">🌸</div>
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

        <div class="bg-purple-50/70 p-5 rounded-3xl border-2 border-purple-200 flex flex-col justify-between items-center text-center group min-h-[250px] pastel-card">
            <div>
                <div class="text-4xl mb-1.5 group-hover:scale-110 transition-transform">⭐</div>
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

        <div class="bg-amber-50/70 p-5 rounded-3xl border-2 border-amber-200 flex flex-col justify-between items-center text-center group min-h-[250px] pastel-card">
            <div>
                <div class="text-4xl mb-1.5 group-hover:scale-110 transition-transform">🏆</div>
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

// ==========================================
// ĐIỀU HƯỚNG VIEW & BREADCRUMB
// ==========================================
function updateNavTabs(level2Title, level2Icon, level3Title, level4Title) {
    const tab2 = document.getElementById('header-level2-tab');
    const tab3 = document.getElementById('header-level3-tab');
    const tab4 = document.getElementById('header-level4-tab');
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

    if (level4Title && tab4) {
        document.getElementById('header-level4-title').textContent = level4Title;
        tab4.classList.remove('hidden');
        tab4.classList.add('flex');
    } else if (tab4) {
        tab4.classList.add('hidden');
        tab4.classList.remove('flex');
    }
}

function returnToTopicLecture() {
    stopSpeaking();
    clearInterval(quizTimerInterval);
    if (activeExamContext) {
        openExamHub();
    } else if (activeRoadmapContext) {
        openRoadmap();
    } else if (activeTopicId === 1) {
        openLettersSubmenu();
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

// ==========================================
// HỆ THỐNG XÁC THỰC TÀI KHOẢN & LỜI CHÀO ĐÓN
// ==========================================
function switchAuthTab(tab) {
    const isLogin = tab === 'login';
    document.getElementById('form-login').classList.toggle('hidden', !isLogin);
    document.getElementById('form-register').classList.toggle('hidden', isLogin);
    document.getElementById('tab-btn-login').className = `py-2.5 rounded-xl font-extrabold text-sm pastel-btn ${isLogin ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-400'}`;
    document.getElementById('tab-btn-register').className = `py-2.5 rounded-xl font-extrabold text-sm pastel-btn ${!isLogin ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-400'}`;
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
    const rawText = await res.text();
    try {
        return JSON.parse(rawText);
    } catch (e) {
        throw new Error('Google Apps Script trả về dữ liệu không hợp lệ (không phải JSON) — thường do link Apps Script chưa được Deploy đúng cách (cần đặt quyền truy cập là "Anyone"/"Bất kỳ ai") hoặc đã hết hạn uỷ quyền. Anh vui lòng kiểm tra lại bước Deploy > Manage deployments trên Apps Script nhé.');
    }
}

async function doLogin() {
    hideAuthError();
    const maHSInput = document.getElementById('login-mahs');
    const maPinInput = document.getElementById('login-mapin');
    const maHS = (maHSInput?.value || '').trim().toUpperCase();
    const maPin = (maPinInput?.value || '').trim();

    if (!maHS || !maPin) {
        const msg = 'Bé nhập đủ mã ID và mã PIN nhé!';
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
            const errMsg = result.error || 'Mã ID thẻ học sinh hoặc mã PIN không đúng!';
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

    // Ẩn ngay màn hình đăng nhập và hiện loading, tránh hiện "chớp" màn hình đăng nhập
    // rồi mới chuyển sang trang chủ khi đã có sẵn thông tin đăng nhập.
    const loginScreen = document.getElementById('screen-login');
    if (loginScreen) loginScreen.classList.add('hidden');
    showLoadingOverlay('Đang đăng nhập lại cho bé...');

    try {
        const res = await callAppsScript('login', { maHS: maHS.toUpperCase(), maPin });
        if (res.ok) {
            currentUser = { ...res.student, isGuest: false };
            enterDashboard(true);
        } else {
            if (loginScreen) loginScreen.classList.remove('hidden');
        }
    } catch (e) {
        if (loginScreen) loginScreen.classList.remove('hidden');
    } finally {
        hideLoadingOverlay();
    }
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

function enterDashboard(isSilent = false) {
    document.getElementById('screen-login').classList.add('hidden');
    document.getElementById('screen-dashboard').classList.remove('hidden');
    updateUserInfoBox();
    resetStars();
    renderDashboardGrid();
    renderExamHubGrid();
    goHome();

    // Phát ngẫu nhiên lời chào sư phạm (Không nhạc)
    if (!isSilent) {
        setTimeout(() => {
            if (currentUser && !currentUser.isGuest) {
                const template = GREETINGS_STUDENT[Math.floor(Math.random() * GREETINGS_STUDENT.length)];
                const msg = template.replace('{name}', currentUser.hoTen);
                speakVietnamese(msg, 0.96);
            } else {
                const msg = GREETINGS_GUEST[Math.floor(Math.random() * GREETINGS_GUEST.length)];
                speakVietnamese(msg, 0.96);
            }
        }, 450);
    }
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
                <button onclick="logout()" title="Đăng xuất" class="w-8 h-8 flex items-center justify-center bg-rose-100 hover:bg-rose-200 text-rose-500 rounded-xl border border-rose-200 text-xs transition-shadow duration-200 hover:shadow-[0_0_12px_rgba(244,63,94,0.55)]"><i class="fa-solid fa-right-from-bracket"></i></button>
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

// ==========================================
// CHỦ ĐỀ 1: BẢNG CHỮ CÁI TƯƠNG TÁC (1.1 ĐẾN 1.4)
// ==========================================
function openTopic(topicNum, topicName, icon) {
    stopSpeaking();
    activeTopicId = topicNum; activeExamContext = null; activeRoadmapContext = null;
    updateNavTabs(topicName, icon || '🌸', null);

    if (topicNum === 1) {
        openLettersSubmenu();
        return;
    }

    showLoadingOverlay(`Đang tải chủ đề "${topicName}"...`);
    fetchAllTopicsData().then(topics => {
        hideLoadingOverlay();
        const topicObj = topics.find(t => Number(t.topic_id) === Number(topicNum));
        if (!topicObj || !topicObj.questions || !topicObj.questions.length) throw new Error("Chủ đề không có câu hỏi nào");
        showLectureAndSubtopics(topicNum, topicName, topicObj);
    }).catch(err => {
        hideLoadingOverlay();
        alert(`Không thể tải chủ đề: ${err.message}`);
    });
}

function openLettersSubmenu() {
    stopSpeaking();
    currentTopicKey = 'letters_menu';
    currentTopicName = '1. Bảng chữ cái';
    updateNavTabs("1. Bảng chữ cái", "🅰️", null);

    const subtopics = [
        { title: 'Bảng chữ cái', badge: '29 chữ', desc: 'Khám phá 29 chữ cái in hoa, in thường, chữ tập viết và 3 ví dụ trực quan.', action: () => renderAlphabetBoard(0) },
        { title: '12 Nguyên âm', badge: `${countAlphabetQuizQuestions('nguyen_am_don')} câu`, desc: 'Trò chơi nghe và nhận diện chính xác 12 nguyên âm đơn & đôi.', action: () => startAlphabetCategoryQuiz('nguyen_am_don', '12 Nguyên âm') },
        { title: '17 Phụ âm', badge: `${countAlphabetQuizQuestions('phu_am')} câu`, desc: 'Luyện tập nghe phát âm và tìm đúng 17 phụ âm đơn trong tiếng Việt.', action: () => startAlphabetCategoryQuiz('phu_am', '17 Phụ âm') },
        { title: '11 Phụ âm ghép', badge: `${countAlphabetQuizQuestions('phu_am_ghep')} câu`, desc: 'Thử thách nhận diện ch, gh, gi, kh, ng, ngh, nh, ph, qu, th, tr.', action: () => startAlphabetCategoryQuiz('phu_am_ghep', '11 Phụ âm ghép') }
    ];

    document.getElementById('lecture-title').textContent = "1. Bảng chữ cái tiếng Việt";
    document.getElementById('lecture-content').textContent = "Bé làm quen với 29 chữ cái tiếng Việt, nhận diện chính xác 12 nguyên âm, 17 phụ âm và 11 phụ âm ghép qua các trò chơi nghe âm đoán chữ thật vui nhé!";
    document.getElementById('view-lecture').dataset.audioText = "Chào mừng bé đến với Bảng chữ cái tiếng Việt. Bé hãy chọn một mục bên dưới nhé!";

    let subHtml = '';
    subtopics.forEach((sub, idx) => {
        const style = SUBTOPIC_PALETTES[idx % SUBTOPIC_PALETTES.length];
        subHtml += `
            <button onclick="window.letterSubActions[${idx}]()" class="p-3 ${style.card} border-2 rounded-xl font-bold text-left transition-all flex items-center justify-between shadow-sm pastel-btn">
                <span class="text-sm md:text-base leading-snug"><strong class="${style.num} mr-1.5">${idx + 1}.</strong> ${sub.title}</span>
                <span class="text-xs font-extrabold ${style.badge} px-2.5 py-0.5 rounded-full border shrink-0 ml-1.5 shadow-inner">${sub.badge}</span>
            </button>`;
    });

    window.letterSubActions = subtopics.map(s => s.action);
    setSubtopicGridColumns(subtopics.length);
    document.getElementById('lecture-subtopics-list').innerHTML = subHtml;
    switchAppView('view-lecture');
}

function renderAlphabetBoard(index = 0) {
    stopSpeaking();
    updateNavTabs("1. Bảng chữ cái", "🅰️", "Bảng chữ cái");
    const item = ALPHABET_29_DETAILS[index];

    const row1 = ALPHABET_29_DETAILS.slice(0, 15);
    const row2 = ALPHABET_29_DETAILS.slice(15);

    const renderKeyRow = (arr) => arr.map(l => {
        const idx = ALPHABET_29_DETAILS.indexOf(l);
        const isActive = idx === index;
        const activeCls = isActive ? "bg-rose-500 text-white border-rose-600 shadow-md scale-105" : "bg-white text-gray-700 border-gray-200 hover:border-pink-300";
        return `
          <button class="w-9 h-11 md:w-11 md:h-12 rounded-xl font-black text-xs md:text-sm border-2 transition-all flex flex-col items-center justify-center p-0.5 ${activeCls}" onclick="renderAlphabetBoard(${idx})">
            <span>${l.u}</span>
            <span class="text-[10px] opacity-75">${l.l}</span>
          </button>`;
    }).join('');

    const html = `
        <div class="w-full flex flex-col items-center justify-between space-y-2.5">
            <div class="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-4 gap-2.5">
                <div class="p-3 bg-pink-50/70 border-2 border-pink-300 rounded-2xl flex flex-col items-center justify-center shadow-xs text-center">
                    <div class="flex items-baseline space-x-2 mb-1">
                        <span class="text-3xl md:text-4xl font-black text-rose-600">${item.u}</span>
                        <span class="text-2xl md:text-3xl font-bold text-pink-500">${item.l}</span>
                        <span class="text-3xl font-serif italic text-indigo-600">${item.hw}</span>
                    </div>
                    <span class="text-xs font-bold text-purple-700 mb-2">Âm đọc: "${item.sound}"</span>
                    <button onclick="speakVietnamese('${item.sound}')" class="px-3 py-1 bg-amber-200 hover:bg-amber-300 text-amber-900 rounded-xl text-xs font-black pastel-btn shadow-xs flex items-center space-x-1">
                        <i class="fa-solid fa-volume-high"></i><span>Nghe âm</span>
                    </button>
                </div>

                ${item.examples.map(ex => `
                    <div onclick="speakVietnamese('${ex.w}. ${ex.sent}')" class="p-2.5 bg-white hover:bg-pink-50/50 border-2 border-emerald-300 rounded-2xl flex flex-col items-center justify-between text-center cursor-pointer shadow-xs pastel-btn transition-all">
                        <span class="text-2xl md:text-3xl mb-0.5">${ex.emo}</span>
                        <span class="text-xs md:text-sm font-black text-emerald-800">${ex.w}</span>
                        <span class="text-[9px] px-2 py-0.2 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full font-bold my-1">${ex.tag}</span>
                        <p class="text-[11px] text-gray-600 font-medium italic leading-tight mb-1.5">"${ex.sent}"</p>
                        <button onclick="event.stopPropagation(); speakVietnamese('${ex.w}. ${ex.sent}')" class="px-2.5 py-0.5 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-lg text-[10px] font-black border border-amber-300">
                            <i class="fa-solid fa-volume-high mr-1"></i>Nghe
                        </button>
                    </div>
                `).join('')}
            </div>

            <div class="w-full max-w-4xl bg-white p-2.5 rounded-2xl border-2 border-pink-200 shadow-xs flex flex-col items-center space-y-1.5">
                <div class="flex flex-wrap justify-center gap-1.5">${renderKeyRow(row1)}</div>
                <div class="flex flex-wrap justify-center gap-1.5">${renderKeyRow(row2)}</div>
            </div>
        </div>
    `;

    document.getElementById('question-box').innerHTML = html;
    document.getElementById('quiz-top-bar').classList.add('hidden');
    document.getElementById('quiz-card-header').classList.add('hidden');
    document.getElementById('nav-group-practice').classList.add('hidden');
    document.getElementById('nav-group-exam').classList.add('hidden');

    switchAppView('view-quiz');
    speakVietnamese(`${item.name}, âm đọc là ${item.sound}`);
}

const ALPHABET_QUIZ_TARGET_TOTAL = 30;

function getAlphabetQuizVariantsPerLetter(groupKey) {
    const count = ALPHABET_29_DETAILS.filter(item => item.group === groupKey).length;
    return count ? Math.max(1, Math.ceil(ALPHABET_QUIZ_TARGET_TOTAL / count)) : 1;
}

function countAlphabetQuizQuestions(groupKey) {
    const count = ALPHABET_29_DETAILS.filter(item => item.group === groupKey).length;
    return count * getAlphabetQuizVariantsPerLetter(groupKey);
}

function startAlphabetCategoryQuiz(groupKey, subTitle) {
    stopSpeaking();
    const filtered = ALPHABET_29_DETAILS.filter(item => item.group === groupKey);
    if (!filtered.length) return alert('Đang cập nhật thêm câu hỏi cho phần này bé nhé!');

    const variantsPerLetter = getAlphabetQuizVariantsPerLetter(groupKey);

    let questions = [];
    filtered.forEach(item => {
        const correctStr = `${item.u} ${item.l}`;
        const wrongLetterPool = ALPHABET_29_DETAILS.filter(x => x.u !== item.u).map(x => `${x.u} ${x.l}`);
        const exampleWord = item.examples[0]?.w || '';

        for (let v = 0; v < variantsPerLetter; v++) {
            questions.push({
                question_id: 1000 + Math.floor(Math.random() * 9000) + v,
                sub_topic: subTitle,
                question_text: `Bé hãy lắng nghe âm đọc của cô Thỏ Hồng rồi chọn chữ cái đúng nhé!`,
                options: buildTrickyChoices(correctStr, wrongLetterPool, wrongLetterPool, 3),
                answer: correctStr,
                audio_text: `Bé hãy tìm chữ ${item.u}, âm đọc là ${item.sound}`,
                skill_tag: 'C1',
                diem: 0.5,
                render_style: 'letter_listen',
                mascot_text: 'Chữ cái nào vừa phát ra âm thanh vậy bé ơi?',
                explanation: `Chữ ${item.u} (${item.l}) có âm đọc là "${item.sound}". Ví dụ: ${exampleWord}.`
            });
        }
    });

    questions = shuffleArray(questions);

    updateNavTabs("1. Bảng chữ cái", "🅰️", subTitle);
    startTopicQuiz(1, subTitle, questions, subTitle);
}

function setSubtopicGridColumns(count) {
    const el = document.getElementById('lecture-subtopics-list');
    if (!el) return;
    if (count > 6) {
        el.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full max-w-4xl';
    } else {
        el.className = 'grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-2xl';
    }
}

function showLectureAndSubtopics(topicNum, topicName, topicObj) {
    pendingTopicQuiz = { topicNum, topicName, questions: topicObj.questions };
    
    document.getElementById('lecture-title').textContent = topicObj.lecture_title || topicName;
    document.getElementById('lecture-content').textContent = topicObj.lecture_content || topicObj.description || 'Chào mừng bé yêu! Hãy chọn một mục nhỏ bên dưới để bắt đầu luyện tập nhé.';
    document.getElementById('view-lecture').dataset.audioText = topicObj.lecture_audio_text || topicObj.lecture_content || topicObj.description || '';

    const groups = [], groupMap = {};
    topicObj.questions.forEach(q => {
        const k = (q.sub_topic || 'Câu hỏi chung').trim();
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
    setSubtopicGridColumns(groups.length);
    document.getElementById('lecture-subtopics-list').innerHTML = subHtml;

    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🌸', null);
    switchAppView('view-lecture');
}

function speakLecture() {
    speakVietnamese(document.getElementById('view-lecture').dataset.audioText || '', 0.96);
}

function selectSubtopic(idx) {
    stopSpeaking();
    if (!pendingTopicQuiz) return;
    const { topicNum, topicName, questions, groups, groupMap } = pendingTopicQuiz;
    const subLabel = idx !== null ? groups[idx] : null;
    const pool = idx !== null ? groupMap[subLabel] : questions;
    const finalTitle = subLabel ? `${topicName} - ${beautifySubtopicName(subLabel)}` : topicName;

    practiceCycleRawPool = [...pool];
    const firstCycleQuestions = shuffleArray([...pool]);

    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🌸', subLabel ? beautifySubtopicName(subLabel) : 'Tất cả các mục');
    startTopicQuiz(topicNum, finalTitle, firstCycleQuestions, subLabel);
}

// ==========================================
// TIẾN TRÌNH TUẦN: BẢN ĐỒ SVG
// ==========================================
function handleNextExamFromReport() {
    stopSpeaking();
    if (activeRoadmapContext) {
        activeRoadmapContext = null;
        openRoadmap();
    } else if (activeExamContext) {
        activeExamContext = null;
        openExamHub();
    } else {
        goHome();
    }
}

function openRoadmap() {
    stopSpeaking();
    updateNavTabs("Bản đồ tiến trình tuần", "🗺️", null);
    renderRoadmapSVG();
    switchAppView('view-roadmap');
}

function wrapCaptionLines(text, maxLen = 24, maxLines = 3) {
    const words = String(text || '').split(' ');
    const lines = [''];
    for (const w of words) {
        const cur = lines[lines.length - 1];
        const candidate = (cur + ' ' + w).trim();
        if (candidate.length <= maxLen) {
            lines[lines.length - 1] = candidate;
        } else if (lines.length < maxLines) {
            lines.push(w);
        } else {
            lines[lines.length - 1] = candidate;
        }
    }
    while (lines.length < maxLines) lines.push('');
    if (lines[maxLines - 1].length > maxLen) {
        lines[maxLines - 1] = lines[maxLines - 1].slice(0, maxLen - 1) + '…';
    }
    return lines.slice(0, maxLines);
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
            badgeHtml = `<text x="${coord.x}" y="${coord.y + 40}" text-anchor="middle" font-size="12" font-weight="900" fill="#ec4899">Đang học</text>`;
        } else {
            badgeHtml = `<text x="${coord.x}" y="${coord.y + 38}" text-anchor="middle" font-size="14" fill="#94a3b8">🔒 Khóa</text>`;
        }

        const cursorCls = isLocked ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:scale-105 transition-transform";
        const animCls = isCurrent ? "node-current" : "";

        const [capLine1, capLine2, capLine3] = wrapCaptionLines(item.desc, 22, 3);
        const capColor = isLocked ? '#1e293b' : '#7c3aed';
        const captionHtml = `
            <text x="${coord.x}" y="${coord.y - 96}" text-anchor="middle" font-size="18" font-weight="700" fill="${capColor}">${escapeHtml(capLine1)}</text>
            <text x="${coord.x}" y="${coord.y - 76}" text-anchor="middle" font-size="18" font-weight="700" fill="${capColor}">${escapeHtml(capLine2)}</text>
            <text x="${coord.x}" y="${coord.y - 56}" text-anchor="middle" font-size="18" font-weight="700" fill="${capColor}">${escapeHtml(capLine3)}</text>
        `;

        nodesHtml += `
            <g class="${cursorCls} ${animCls}" onclick="selectRoadmapWeek(${w})" id="svg-node-week-${w}">
                ${captionHtml}
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
    const topicLabel = config.name.replace(/^Tuần\s*\d+:\s*/i, '');
    updateNavTabs("Tiến trình tuần", "📅", `Tuần ${weekNum}`, topicLabel);

    showLoadingOverlay(`Đang bốc 30 câu hỏi Tuần ${weekNum} (tỷ lệ 3:4:3)...`);
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

// ==========================================
// LOGIC CHẤM ĐIỂM & ĐIỀU KHIỂN CÂU HỎI
// ==========================================
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

    const topBar = document.getElementById('quiz-top-bar');
    const cardHeader = document.getElementById('quiz-card-header');
    const navPractice = document.getElementById('nav-group-practice');
    const navExam = document.getElementById('nav-group-exam');

    const submitBtn = document.getElementById('btn-submit-quiz');
    if (submitBtn) {
        if (activeRoadmapContext) submitBtn.classList.add('hidden');
        else submitBtn.classList.remove('hidden');
    }

    const roadmapHistoryBtn = document.getElementById('btn-roadmap-history');
    if (roadmapHistoryBtn) {
        if (activeRoadmapContext) { roadmapHistoryBtn.classList.remove('hidden'); roadmapHistoryBtn.classList.add('flex'); }
        else { roadmapHistoryBtn.classList.add('hidden'); roadmapHistoryBtn.classList.remove('flex'); }
    }

    if (activeRoadmapContext || activeExamContext) {
        if (topBar) {
            if (activeExamContext) topBar.classList.remove('hidden');
            else topBar.classList.add('hidden');
        }
        const timerBox = document.getElementById('quiz-timer-container');
        if (activeExamContext) {
            if (timerBox) timerBox.classList.remove('hidden');
            startExamCountdown();
        } else {
            if (timerBox) timerBox.classList.add('hidden');
        }
        if (cardHeader) { cardHeader.classList.remove('hidden'); cardHeader.classList.add('flex'); }
        if (navPractice) navPractice.classList.add('hidden');
        if (navExam) { navExam.classList.remove('hidden'); navExam.classList.add('flex'); }
        initQuizPallet();
    } else {
        if (topBar) topBar.classList.add('hidden');
        if (cardHeader) { cardHeader.classList.add('hidden'); cardHeader.classList.remove('flex'); }
        if (navPractice) { navPractice.classList.remove('hidden'); navPractice.classList.add('flex'); }
        if (navExam) { navExam.classList.add('hidden'); navExam.classList.remove('flex'); }
    }

    switchAppView('view-quiz');
    loadQuestion();
}

function loadQuestion() {
    stopSpeaking();
    const q = activeQuestionsList[currentQIndex];
    if (!q) return;

    const isEvaluationMode = !!activeExamContext || !!activeRoadmapContext;

    if (isEvaluationMode) {
        document.getElementById('q-badge-index').textContent = `CÂU ${currentQIndex + 1} / ${activeQuestionsList.length}`;
        const isRoadmap = !!activeRoadmapContext;
        const skillName = isRoadmap
            ? (q.sub_topic || 'Kiến thức tổng hợp')
            : (SKILL_TAXONOMY[q.skill_tag]?.name || q.sub_topic || 'Kiến thức tổng hợp');
        document.getElementById('q-skill-text').textContent = skillName;

        const scoreBadge = document.getElementById('q-badge-score');
        if (scoreBadge) {
            if (isRoadmap) {
                scoreBadge.classList.add('hidden');
            } else {
                scoreBadge.classList.remove('hidden');
                scoreBadge.textContent = `(${q.diem ?? 0.5} điểm)`;
            }
        }
    } else {
        const stepEl = document.getElementById('practice-step-text');
        if (stepEl) stepEl.textContent = `Câu ${currentQIndex + 1} / ${activeQuestionsList.length}`;
    }

    let mediaHtml = '';
    if (q.image_url && !activeExamContext) {
        mediaHtml = `<img src="${q.image_url}" alt="minh họa" class="w-14 h-14 md:w-16 md:h-16 object-contain mb-1 floating" onerror="this.remove()">`;
    }

    const pText = q.reading_passage;
    const pTitle = q.reading_title;
    const passageLines = pText ? pText.split('\n').map(l => l.trim()).filter(Boolean) : [];
    const avgLineLen = passageLines.length ? passageLines.reduce((a, l) => a + l.length, 0) / passageLines.length : 0;
    const isPoemLike = passageLines.length >= 4 && avgLineLen > 0 && avgLineLen < 35;
    const useTwoColumns = isPoemLike;
    const passageHtml = pText ? `
        <div class="w-full max-w-3xl bg-pink-50/70 border-2 border-pink-200 rounded-2xl p-3 mb-1.5 text-left shadow-xs">
            ${pTitle ? `<p class="font-black text-pink-700 text-sm md:text-base mb-1">${escapeHtml(pTitle)}</p>` : ''}
            <p class="text-gray-800 text-sm md:text-base font-bold whitespace-pre-line leading-relaxed ${useTwoColumns ? 'md:columns-2 md:gap-6' : ''}">${escapeHtml(pText)}</p>
        </div>` : '';

    const practiceSpeakerBtnHtml = !isEvaluationMode ? `
        <div class="flex items-center justify-center mt-1 mb-1">
            <button onclick="speakCurrentQuestion()" class="px-4 py-1.5 bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 rounded-2xl text-xs md:text-sm font-extrabold flex items-center space-x-1.5 pastel-btn shadow-xs">
                <i class="fa-solid fa-volume-high text-pink-600"></i>
                <span>Nghe câu hỏi</span>
            </button>
        </div>
    ` : '';

    const isLetterListen = q.render_style === 'letter_listen';

    let html;
    if (isLetterListen) {
        html = `
            ${mediaHtml}
            <div class="w-full max-w-3xl border-2 border-dashed border-pink-200 bg-pink-50/40 rounded-3xl px-4 py-4 md:py-5 flex flex-col items-center text-center mb-3">
                <div class="text-3xl md:text-4xl mb-1.5 space-x-2">
                    <span>🎧</span><span>👂</span><span>🌸</span>
                </div>
                <p class="text-sm md:text-base lg:text-lg font-black text-rose-600 leading-snug">${escapeHtml(q.question_text)}</p>
                ${practiceSpeakerBtnHtml}
            </div>

            <div class="w-full max-w-3xl flex flex-wrap items-center justify-center gap-3 mt-1">
        `;
        q.options.forEach(opt => {
            html += `
                <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn min-w-[140px] px-6 py-3 bg-white hover:bg-emerald-50 border-2 border-emerald-400 rounded-full font-black text-emerald-700 text-base md:text-lg transition-all pastel-btn shadow-xs">
                    ${escapeHtml(opt)}
                </button>`;
        });
        html += `</div>`;
        if (q.mascot_text) {
            html += `
                <div class="mt-4 inline-flex items-center space-x-1.5 bg-pink-50 border border-pink-200 rounded-full px-3.5 py-1.5">
                    <span>🐰</span>
                    <span class="text-xs md:text-sm font-extrabold text-rose-600">${escapeHtml(q.mascot_text)}</span>
                </div>`;
        }
    } else {
        html = `
        ${mediaHtml}
        ${passageHtml}
        <div class="flex flex-col items-center justify-center max-w-3xl text-center px-2 mb-0.5">
            <h3 class="text-sm md:text-base lg:text-lg font-black text-slate-900 leading-snug">
                ${escapeHtml(q.question_text)}
            </h3>
            ${practiceSpeakerBtnHtml}
        </div>
        
        <div class="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-1">
    `;

    q.options.forEach((opt, idx) => {
        const formattedOpt = capitalizeFirstLetter(opt);
        const letter = String.fromCharCode(65 + idx);

        if (activeExamContext) {
            html += `
                <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn w-full p-2.5 md:p-3 bg-white hover:bg-pink-50/50 border border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs">
                    <div class="flex items-center space-x-2.5">
                        <span class="opt-badge w-7 h-7 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-black text-sm shrink-0">${letter}</span>
                        <span class="opt-text">${escapeHtml(formattedOpt)}</span>
                    </div>
                    <span class="option-icon text-pink-500 text-base md:text-lg"></span>
                </button>`;
        } else {
            html += `
                <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn w-full p-3 md:p-3.5 bg-pink-50/40 hover:bg-pink-100/70 border-2 border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs pastel-btn">
                    <span><strong class="text-pink-600 mr-2 text-base md:text-lg">${letter}.</strong> ${escapeHtml(formattedOpt)}</span>
                    <span class="option-icon text-pink-500 text-base md:text-lg"></span>
                </button>`;
        }
    });
        html += `</div>`;
    }

    document.getElementById('question-box').innerHTML = html;

    restoreQuestionState(q);
    updateNavButtons();
    updateQuizPalletUI();

    setTimeout(() => {
        speakCurrentQuestion();
    }, 200);
}

function restoreQuestionState(q) {
    const isExam = !!activeExamContext;
    const completedAnswer = userAnswers[currentQIndex];
    const wrongAttempts = wrongAttemptsByQ[currentQIndex] || [];

    if (isExam) {
        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            const badge = b.querySelector('.opt-badge');
            const iconSpan = b.querySelector('.option-icon');

            if (completedAnswer !== undefined && bOpt === completedAnswer) {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-pink-50/30 border-2 border-pink-500 rounded-2xl font-extrabold text-gray-900 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs";
                if (iconSpan) iconSpan.innerHTML = '<i class="fa-regular fa-circle-check text-pink-600 text-lg"></i>';
            } else {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-white hover:bg-pink-50/50 border border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-black text-sm shrink-0";
                if (iconSpan) iconSpan.innerHTML = '';
            }
        });
        return;
    }

    if (!!activeRoadmapContext) {
        if (completedAnswer === undefined) return;
        const isCorrect = completedAnswer === q.answer;
        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = true;
            const bOpt = b.getAttribute('data-opt');
            if (bOpt === q.answer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
            } else if (!isCorrect && bOpt === completedAnswer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
            }
        });
        return;
    }

    if (wrongAttempts.length > 0) {
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
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
                b.disabled = true;
            }
        });
    }
}

function updateNavButtons() {
    const isEvaluationMode = !!activeExamContext || !!activeRoadmapContext;
    const btnPrev = isEvaluationMode ? document.getElementById('btn-prev-q-exam') : document.getElementById('btn-prev-q-prac');
    const nextText = isEvaluationMode ? document.getElementById('btn-next-text-exam') : document.getElementById('btn-next-text-prac');
    const nextIcon = isEvaluationMode ? document.getElementById('btn-next-icon-exam') : document.getElementById('btn-next-icon-prac');

    if (!btnPrev) return;

    if (currentQIndex === 0) {
        btnPrev.disabled = true;
        btnPrev.classList.add('opacity-40', 'cursor-not-allowed');
    } else {
        btnPrev.disabled = false;
        btnPrev.classList.remove('opacity-40', 'cursor-not-allowed');
    }

    if (currentQIndex === activeQuestionsList.length - 1) {
        if (isEvaluationMode) {
            nextText.textContent = "Hoàn thành";
            nextIcon.className = "fa-solid fa-trophy ml-1.5";
        } else {
            nextText.textContent = "Vòng tiếp theo";
            nextIcon.className = "fa-solid fa-rotate-right ml-1.5";
        }
    } else {
        nextText.textContent = "Câu tiếp theo";
        nextIcon.className = "fa-solid fa-chevron-right ml-1.5";
    }
}

function checkAnswer(selectedOpt) {
    const q = activeQuestionsList[currentQIndex];
    const isExam = !!activeExamContext;
    const isRoadmap = !!activeRoadmapContext;

    // RIÊNG ĐỀ THI: YÊN TĨNH TUYỆT ĐỐI, SÁNG VIỀN HỒNG, KHÔNG PHÁT ÂM THANH
    if (isExam) {
        userAnswers[currentQIndex] = selectedOpt;

        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            const badge = b.querySelector('.opt-badge');
            const iconSpan = b.querySelector('.option-icon');

            if (bOpt === selectedOpt) {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-pink-50/30 border-2 border-pink-500 rounded-2xl font-extrabold text-gray-900 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs";
                if (iconSpan) iconSpan.innerHTML = '<i class="fa-regular fa-circle-check text-pink-600 text-lg"></i>';
            } else {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-white hover:bg-pink-50/50 border border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-black text-sm shrink-0";
                if (iconSpan) iconSpan.innerHTML = '';
            }
        });

        updateQuizPalletUI();
        return;
    }

    // RIÊNG TIẾN TRÌNH TUẦN: CHỈ ĐƯỢC CHỌN 1 LẦN DUY NHẤT ĐỂ GHI NHẬN ĐÚNG/SAI CHÍNH XÁC
    if (isRoadmap) {
        if (userAnswers[currentQIndex] !== undefined) return;

        const isCorrect = selectedOpt === q.answer;
        userAnswers[currentQIndex] = selectedOpt;

        if (isCorrect) {
            score += (q.diem ?? 0.5);
            starGreenCount++;
            document.getElementById('star-green-count').textContent = starGreenCount;
        } else {
            starRedCount++;
            document.getElementById('star-red-count').textContent = starRedCount;
        }

        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = true;
            const bOpt = b.getAttribute('data-opt');
            if (bOpt === q.answer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
            } else if (bOpt === selectedOpt) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
            }
        });

        if (isCorrect) {
            playAudio('correct');
            confetti({ particleCount: 30, spread: 55, origin: { y: 0.7 } });
            setTimeout(() => speakVietnamese(`${q.answer}`), 180);
        } else {
            playAudio('wrong');
        }

        updateQuizPalletUI();
        return;
    }

    // CHẾ ĐỘ LUYỆN TẬP TỰ DO
    const isCorrect = selectedOpt === q.answer;
    if (userAnswers[currentQIndex] !== undefined) return;

    if (isCorrect) {
        userAnswers[currentQIndex] = selectedOpt;
        score += (q.diem ?? 0.5);
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
        setTimeout(() => speakVietnamese(`${q.answer}`), 180);
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
    const isEvaluationMode = !!activeExamContext || !!activeRoadmapContext;

    if (!isEvaluationMode && userAnswers[currentQIndex] === undefined) {
        alert('Bé hãy tìm đáp án đúng để hoàn thành câu này nhé!');
        return;
    }

    if (currentQIndex < activeQuestionsList.length - 1) {
        currentQIndex++;
        loadQuestion();
    } else {
        if (isEvaluationMode) {
            showResultScreen();
        } else {
            confetti({ particleCount: 75, spread: 75, origin: { y: 0.6 } });
            playAudio('win');
            alert(`🎉 Chúc mừng bé đã hoàn thành trọn vẹn 1 vòng luyện tập (${activeQuestionsList.length} câu)!\nBây giờ cô giáo Thỏ Hồng sẽ xáo trộn ngẫu nhiên để bé bước vào vòng luyện tập tiếp theo nhé!`);

            const basePool = practiceCycleRawPool.length ? practiceCycleRawPool : activeQuestionsList;
            activeQuestionsList = shuffleArray([...basePool]);
            currentQIndex = 0;
            userAnswers = {};
            wrongAttemptsByQ = {};
            loadQuestion();
        }
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
            source_topic_id: q.source_topic_id,
            diem: q.diem ?? 0.5,
            isCorrect,
            dap_an_chon: studentAns || '',
            dap_an_dung: q.answer
        });
    });

    switchAppView('view-result');
    const totalQ = activeQuestionsList.length;
    const percent = Math.round((correctCount / totalQ) * 100);

    // Tiến trình tuần: điểm tính riêng theo công thức 10/tổng số câu (không dùng điểm từng câu để tránh lệch)
    const displayScore = activeRoadmapContext
        ? Math.round((correctCount * 10 / totalQ) * 10) / 10
        : score;

    const examBadgeText = activeExamContext ? activeExamContext.examTitle : (activeRoadmapContext ? activeRoadmapContext.chuDe : 'Bài luyện tập chủ đề');
    document.getElementById('report-exam-badge').textContent = examBadgeText;
    document.getElementById('report-student-display').textContent = `Học sinh: ${currentUser?.hoTen || 'Khách'}`;
    const durationStr = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '35 phút';
    document.getElementById('report-meta-display').textContent = `Lớp: ${currentUser?.lop || '1A'} | Mã số: ${currentUser?.maHS || 'KHACH'} | Thời gian: ${durationStr}`;
    document.getElementById('report-total-score-val').textContent = displayScore.toFixed(1);
    document.getElementById('report-correct-ratio-val').textContent = `${correctCount}/${totalQ}`;

    renderReportTopicsBreakdown();

    const nextActionLabel = document.getElementById('report-next-action-label');
    if (nextActionLabel) {
        nextActionLabel.textContent = activeRoadmapContext ? '🔙 Quay lại tiến trình tuần' : '🚀 Làm đề thi tiếp theo';
    }

    const historyBtn = document.getElementById('report-history-btn');
    if (historyBtn) {
        const targetSheet = activeRoadmapContext
            ? 'LichSuTienTrinhTuan'
            : (examFileMap[activeExamContext?.categoryKey]?.sheet || 'LichSuBaiThi_HK1');
        historyBtn.setAttribute('onclick', `openHistoryModal('${targetSheet}')`);
    }

    if (percent >= 80) {
        confetti({ particleCount: 130, spread: 85, origin: { y: 0.6 } });
        playAudio('win');
    }

    if (currentUser && !currentUser.isGuest) {
        if (activeExamContext) saveExamResultToSheet();
        else if (activeRoadmapContext) saveWeeklyProgressToSheet(percent, starCountFromPercent(percent), displayScore);
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

    const isRoadmap = !!activeRoadmapContext;
    const skillKeys = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'];
    const skillStats = {};
    skillKeys.forEach(k => {
        skillStats[k] = { total: 0, correct: 0, maxScore: 0, earnedScore: 0 };
    });

    activeQuestionsList.forEach((q, idx) => {
        let tag;
        if (isRoadmap) {
            tag = TOPIC_TO_SKILL[q.source_topic_id] || 'C1';
        } else {
            let rawTag = String(q.skill_tag || 'C1').toUpperCase();
            let m = rawTag.match(/C([1-6])/);
            tag = m ? 'C' + m[1] : 'C1';
        }

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
        const pct = isRoadmap
            ? (data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0)
            : (data.maxScore > 0 ? Math.round((data.earnedScore / data.maxScore) * 100) : 0);
        const isPassed = pct >= 50;
        const badgeClass = isPassed ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-rose-50 text-rose-700 border border-rose-200';
        const badgeText = isPassed ? 'Đạt yêu cầu' : 'Cần luyện tập thêm';
        const barColor = isPassed ? 'bg-gradient-to-r from-amber-400 to-orange-400' : 'bg-gradient-to-r from-pink-400 to-rose-400';
        const scoreLine = isRoadmap
            ? `<span>Số câu đúng: <strong class="text-pink-600">${data.correct}/${data.total} câu</strong></span>`
            : `<span>Điểm đạt: <strong class="text-pink-600">${data.earnedScore.toFixed(1)} / ${data.maxScore.toFixed(1)}đ</strong></span>`;

        html += `
            <div class="bg-pink-50/40 border border-pink-100 rounded-2xl p-3 flex flex-col justify-between space-y-2">
                <div class="flex items-center justify-between">
                    <span class="font-black text-slate-800 text-xs sm:text-sm">${SKILL_TAXONOMY[k].name}</span>
                    <span class="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold ${badgeClass}">${badgeText}</span>
                </div>
                <div class="flex items-center justify-between text-xs font-bold text-slate-600">
                    ${scoreLine}
                    <span class="font-math font-black">${pct}%</span>
                </div>
                <div class="w-full bg-pink-100 rounded-full h-2 overflow-hidden">
                    <div class="${barColor} h-full rounded-full transition-all duration-500" style="width: ${pct}%"></div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
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

// ==========================================
// LƯU KẾT QUẢ & ĐỒNG BỘ ĐIỂM C1-C6 LÊN GOOGLE SHEETS
// ==========================================
async function saveExamResultToSheet() {
    const { categoryKey, examIndex } = activeExamContext;
    const thoiGianLamBai = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '';
    
    const skillScores = { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 };
    quizAnsweredLog.forEach(item => {
        let rawTag = String(item.skill_tag || 'C1').toUpperCase();
        let m = rawTag.match(/C([1-6])/);
        let tag = m ? 'C' + m[1] : 'C1';

        if (item.isCorrect && skillScores[tag] !== undefined) {
            skillScores[tag] += (item.diem || 0.5);
        }
    });

    const payload = {
        maHS: currentUser.maHS,
        hoTen: currentUser.hoTen,
        lop: currentUser.lop,
        examCategory: categoryKey,
        sheetName: examFileMap[categoryKey]?.sheet || 'LichSuBaiThi_HK1',
        deSo: examIndex + 1,
        thoiGianLamBai,
        tongDiem: score.toFixed(1),
        soCauDung: quizAnsweredLog.filter(x => x.isCorrect).length,
        tongCauHoi: activeQuestionsList.length,
        diemC1: skillScores.C1.toFixed(1),
        diemC2: skillScores.C2.toFixed(1),
        diemC3: skillScores.C3.toFixed(1),
        diemC4: skillScores.C4.toFixed(1),
        diemC5: skillScores.C5.toFixed(1),
        diemC6: skillScores.C6.toFixed(1),
        C1_NguAm: skillScores.C1.toFixed(1),
        C2_ChinhTa: skillScores.C2.toFixed(1),
        C3_VonTu: skillScores.C3.toFixed(1),
        C4_CuPhap: skillScores.C4.toFixed(1),
        C5_DocHieu: skillScores.C5.toFixed(1),
        C6_TuDuyIQ: skillScores.C6.toFixed(1),
        wrongQuestions: quizWrongAnswers
    };
    try { await callAppsScript('saveExamResult', payload); } catch (e) {}
}

async function saveWeeklyProgressToSheet(percent, starCount, scoreVal) {
    const { week, topicId, chuDe } = activeRoadmapContext;
    const thoiGianLamBai = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '';
    const scoreThang10 = (scoreVal ?? ((score / activeQuestionsList.length) * 10)).toFixed(1);

    // Đếm CHÍNH XÁC số câu đúng / tổng số câu của từng nhóm kỹ năng, dựa theo chủ đề
    // nguồn thật của mỗi câu hỏi (source_topic_id) — không ước lượng chia đều.
    const skillCorrect = { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 };
    const skillTotal = { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 };
    quizAnsweredLog.forEach(item => {
        const tag = TOPIC_TO_SKILL[item.source_topic_id] || item.skill_tag || 'C1';
        if (skillTotal[tag] === undefined) return;
        skillTotal[tag]++;
        if (item.isCorrect) skillCorrect[tag]++;
    });
    const payload = {
        student_id: currentUser.maHS,
        maHS: currentUser.maHS,
        hoTen: currentUser.hoTen,
        lop: currentUser.lop,
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
        C1_NguAm: skillCorrect.C1, C1_NguAm_Tong: skillTotal.C1,
        C2_ChinhTa: skillCorrect.C2, C2_ChinhTa_Tong: skillTotal.C2,
        C3_VonTu: skillCorrect.C3, C3_VonTu_Tong: skillTotal.C3,
        C4_CuPhap: skillCorrect.C4, C4_CuPhap_Tong: skillTotal.C4,
        C5_DocHieu: skillCorrect.C5, C5_DocHieu_Tong: skillTotal.C5,
        C6_TuDuyIQ: skillCorrect.C6, C6_TuDuyIQ_Tong: skillTotal.C6,
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
    if (histBarChartInstance) { histBarChartInstance.destroy(); histBarChartInstance = null; }
}

// ==========================================
// BIỂU ĐỒ THANH NGANG & BẢNG KÈM HÀNG TRUNG BÌNH
// ==========================================
function getSkillCell(row, skillKey) {
    const taxo = SKILL_TAXONOMY[skillKey];
    const correct = Number(row[taxo.sheetCol]);
    const total = Number(row[taxo.totalCol]);
    if (!row[taxo.totalCol] || isNaN(total) || total <= 0) return null;
    return { correct: isNaN(correct) ? 0 : correct, total };
}

function formatDateOnly(value) {
    if (!value) return '--';
    const d = new Date(value);
    if (isNaN(d.getTime())) return String(value).split('T')[0] || String(value);
    return d.toLocaleDateString('vi-VN');
}

function formatDateShort(value) {
    const d = value ? new Date(value) : null;
    if (!d || isNaN(d.getTime())) return '';
    return `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function renderHistoryReport(rows, sheetName) {
    const isWeekly = sheetName === 'LichSuTienTrinhTuan';
    const labels = rows.map((r, i) => {
        const dm = formatDateShort(r.Timestamp || r.ngayLam);
        const label = isWeekly ? `Tuần ${r.tuan || i + 1}` : (r.deSo ? `Đề ${r.deSo}` : `Tuần ${r.tuan || i + 1}`);
        return dm ? `${dm} ${label}` : label;
    });
    const scores = rows.map(r => Number(r.score || r.tongDiem || ((r.soCauDung / (r.tongCauHoi || 30)) * 10).toFixed(1)));

    const ctxLine = document.getElementById('progressChartCanvas').getContext('2d');
    if (histLineChartInstance) histLineChartInstance.destroy();

    histLineChartInstance = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: labels.length ? labels : ['Chưa có bài thi'],
            datasets: [{
                label: 'Điểm số (/10)',
                data: scores.length ? scores : [0],
                borderColor: '#e11d48',
                backgroundColor: 'rgba(254, 226, 226, 0.5)',
                borderWidth: 3.5,
                pointBackgroundColor: '#be123c',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    min: 0, max: 10.5,
                    ticks: { stepSize: 2, color: '#000000', font: { family: 'Quicksand', weight: 'bold' } }
                },
                x: {
                    grid: { display: false },
                    ticks: {
                        color: '#000000',
                        font: { family: 'Quicksand', weight: 'bold', size: 11 },
                        maxRotation: 90,
                        minRotation: 90
                    }
                }
            },
            plugins: { legend: { display: false } }
        }
    });

    const skillKeys = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'];
    const skillAverages = isWeekly
        ? { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 }
        : { C1: 85, C2: 78, C3: 92, C4: 70, C5: 80, C6: 75 };
    const touchedSkills = [];

    if (rows.length && isWeekly) {
        // Tiến trình tuần: % = tổng số câu đúng / tổng số câu đã làm THẬT của nhóm kỹ năng đó
        skillKeys.forEach((k) => {
            let sumCorrect = 0, sumTotal = 0;
            rows.forEach(r => {
                const cell = getSkillCell(r, k);
                if (!cell) return;
                sumCorrect += cell.correct;
                sumTotal += cell.total;
            });
            if (sumTotal > 0) {
                skillAverages[k] = Math.min(100, Math.round((sumCorrect / sumTotal) * 100));
                touchedSkills.push(k);
            }
        });
    } else if (rows.length) {
        skillKeys.forEach((k) => {
            const colName = SKILL_TAXONOMY[k].sheetCol;
            const vals = rows.map(r => {
                const val = r[`diem${k}`] ?? r[colName] ?? r[`diem_${k.toLowerCase()}`] ?? r[k];
                return (val !== undefined && val !== null && val !== '--') ? Number(val) : 0;
            });
            const sum = vals.reduce((a, b) => a + b, 0);
            if (vals.length > 0) {
                skillAverages[k] = Math.min(100, Math.round((sum / (vals.length * 1.5)) * 100)) || 75;
                touchedSkills.push(k);
            }
        });
    }

    const ctxBar = document.getElementById('topicRadarChartCanvas').getContext('2d');
    if (histBarChartInstance) histBarChartInstance.destroy();

    histBarChartInstance = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: skillKeys.map(k => SKILL_TAXONOMY[k].name),
            datasets: [{
                label: 'Độ thành thạo (%)',
                data: skillKeys.map(k => skillAverages[k]),
                backgroundColor: ['#f472b6', '#fb7185', '#f59e0b', '#a855f7', '#ec4899', '#e11d48'],
                borderRadius: 8,
                borderSkipped: false,
                barThickness: 16
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    min: 0,
                    max: 100,
                    ticks: { stepSize: 20, callback: (v) => v + '%', color: '#000000', font: { family: 'Quicksand', weight: 'bold' } },
                    grid: { color: 'rgba(251, 207, 232, 0.3)' }
                },
                y: {
                    grid: { display: false },
                    ticks: { font: { family: 'Quicksand', weight: 'bold', size: 14 }, color: '#000000' }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: { callbacks: { label: (ctx) => ` Độ thành thạo: ${ctx.raw}%` } }
            }
        },
        plugins: [{
            id: 'barValueLabels',
            afterDatasetsDraw(chart) {
                const { ctx } = chart;
                chart.data.datasets[0].data.forEach((val, i) => {
                    const meta = chart.getDatasetMeta(0).data[i];
                    if (!meta) return;
                    ctx.save();
                    ctx.font = 'bold 12px Quicksand, sans-serif';
                    ctx.fillStyle = '#1e293b';
                    ctx.textAlign = 'left';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(`${val}%`, meta.x + 6, meta.y);
                    ctx.restore();
                });
            }
        }]
    });

    renderPedagogicalEvaluation(rows, skillAverages, touchedSkills);
    renderHistoryTable(rows, sheetName);
}

function renderPedagogicalEvaluation(rows, skillAverages, touchedSkills) {
    const box = document.getElementById('pedagogical-evaluation-box');
    if (!box) return;

    const studentName = getStudentFirstName();
    const count = rows.length;
    const avgScore = count ? (rows.reduce((acc, r) => acc + Number(r.score || r.tongDiem || 0), 0) / count) : 0;
    const avgScoreStr = avgScore.toFixed(1);

    // 1. Đánh giá tổng quan — phải khớp thật với điểm số, không khen chung chung bất kể kết quả
    let overviewText;
    if (avgScore >= 8) {
        overviewText = `Con nắm rất vững kiến thức trọng tâm, làm bài nghiêm túc và đạt kết quả xuất sắc.`;
    } else if (avgScore >= 6.5) {
        overviewText = `Con nắm khá tốt kiến thức trọng tâm, tuy nhiên vẫn còn một vài chỗ cần luyện thêm để đạt kết quả cao hơn.`;
    } else if (avgScore >= 5) {
        overviewText = `Con đã nắm được kiến thức cơ bản nhưng chưa thật chắc, cần ôn luyện thêm để tiến bộ hơn.`;
    } else {
        overviewText = `Con còn gặp khó khăn với nội dung này, ba mẹ nên đồng hành ôn luyện thêm cùng con nhé.`;
    }

    // 2 & 3. Thế mạnh / điểm cần khắc phục — CHỈ lấy từ những nhóm bé đã thực sự luyện tập,
    // tuyệt đối không nhận xét về nhóm bé chưa hề động tới (tránh nói sai với thực tế).
    const validSkills = (touchedSkills && touchedSkills.length) ? touchedSkills : [];
    const sortedValid = [...validSkills].sort((a, b) => skillAverages[b] - skillAverages[a]);

    let strengthHtml, weaknessHtml;
    if (sortedValid.length >= 2) {
        const top1 = SKILL_TAXONOMY[sortedValid[0]].name;
        const top2 = SKILL_TAXONOMY[sortedValid[1]].name;
        strengthHtml = `Con đạt độ thành thạo tốt ở các nhóm: <strong>${escapeHtml(top1)}</strong> (${skillAverages[sortedValid[0]]}%) và <strong>${escapeHtml(top2)}</strong> (${skillAverages[sortedValid[1]]}%).`;

        const weak1 = sortedValid[sortedValid.length - 1];
        weaknessHtml = `Con cần luyện thêm ở mảng: <strong>${escapeHtml(SKILL_TAXONOMY[weak1].name)}</strong> (${skillAverages[weak1]}%). ${escapeHtml(SKILL_TAXONOMY[weak1].advice)}`;
    } else if (sortedValid.length === 1) {
        const only1 = sortedValid[0];
        strengthHtml = `Con đạt ${skillAverages[only1]}% ở nhóm <strong>${escapeHtml(SKILL_TAXONOMY[only1].name)}</strong> — mảng duy nhất bé đã luyện tập tới thời điểm này.`;
        weaknessHtml = `Bé mới luyện tập 1 nhóm kỹ năng, cô chưa đủ dữ liệu để đánh giá toàn diện. Ba mẹ khuyến khích con hoàn thành thêm các tuần khác nhé!`;
    } else {
        strengthHtml = `Bé chưa có đủ dữ liệu luyện tập để đánh giá thế mạnh.`;
        weaknessHtml = `Bé chưa có đủ dữ liệu luyện tập để đánh giá điểm cần khắc phục.`;
    }

    box.innerHTML = `
        <div class="bg-white/80 p-3 rounded-xl border border-amber-200">
            <span class="text-amber-700 font-extrabold block mb-0.5">🌟 1. Đánh giá tổng quan năng lực & xu hướng tiến bộ:</span>
            <p class="text-gray-700">Học sinh <strong>${escapeHtml(currentUser.hoTen)}</strong> đã hoàn thành <strong>${count} bài kiểm tra</strong> với điểm số trung bình tích lũy đạt <strong class="text-pink-600">${avgScoreStr}/10 điểm</strong>. ${overviewText}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div class="bg-emerald-50/70 p-3 rounded-xl border border-emerald-200">
                <span class="text-emerald-700 font-extrabold block mb-0.5">✅ 2. Khen ngợi & thế mạnh nổi trội:</span>
                <p class="text-gray-700">${strengthHtml}</p>
            </div>

            <div class="bg-rose-50/70 p-3 rounded-xl border border-rose-200">
                <span class="text-rose-700 font-extrabold block mb-0.5">⚠️ 3. Điểm cần lưu ý & khắc phục:</span>
                <p class="text-gray-700">${weaknessHtml}</p>
            </div>
        </div>

        <div class="bg-white/80 p-3 rounded-xl border border-purple-200">
            <span class="text-purple-700 font-extrabold block mb-0.5">💡 4. Kế hoạch bồi dưỡng & hướng dẫn phụ huynh:</span>
            <p class="text-gray-700">Ba mẹ nên dành 15 phút mỗi tối cùng con đọc truyện ngụ ngôn, đặt câu hỏi gợi mở và khen ngợi kịp thời để giúp ${studentName} giữ vững ngọn lửa say mê môn Tiếng Việt nhé!</p>
        </div>
    `;
}

function renderHistoryTable(rows, sheetName) {
    const tbody = document.getElementById('hist-table-body');
    if (!tbody) return;

    if (!rows.length) {
        tbody.innerHTML = `<tr><td colspan="11" class="py-4 text-gray-400">Chưa ghi nhận lịch sử bài làm nào</td></tr>`;
        return;
    }

    const isWeekly = sheetName === 'LichSuTienTrinhTuan';
    const skillKeys = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'];

    const getScoreVal = (r, num, colName) => {
        const val = r[`diemC${num}`] ?? r[colName] ?? r[`diem_c${num}`] ?? r[`C${num}`];
        return (val !== undefined && val !== null && val !== '') ? Number(val) : 0;
    };

    const totalRows = rows.length;
    let sumTongDiem = 0;
    rows.forEach(r => { sumTongDiem += Number(r.tongDiem || r.score || 0); });
    const avgTong = (sumTongDiem / totalRows).toFixed(1);

    let summaryCells = '';
    let bodyRows = '';

    if (isWeekly) {
        // Tổng hợp: % = tổng câu đúng / tổng câu đã làm THẬT của đúng nhóm kỹ năng đó
        const agg = {};
        skillKeys.forEach(k => { agg[k] = { correct: 0, total: 0 }; });
        rows.forEach(r => {
            skillKeys.forEach(k => {
                const cell = getSkillCell(r, k);
                if (!cell) return;
                agg[k].correct += cell.correct;
                agg[k].total += cell.total;
            });
        });
        skillKeys.forEach(k => {
            const a = agg[k];
            summaryCells += `<td class="py-2 px-1">${a.total > 0 ? Math.round((a.correct / a.total) * 100) + '%' : '--'}</td>`;
        });

        rows.forEach((r, idx) => {
            const itemDiem = r.tongDiem || r.score || '--';
            const dateStr = formatDateOnly(r.Timestamp || r.ngayLam);
            const durationStr = r.thoiGianLamBai || '--';

            let skillCells = '';
            skillKeys.forEach(k => {
                const cell = getSkillCell(r, k);
                if (!cell) { skillCells += `<td class="py-2 px-1 text-gray-300">--</td>`; return; }
                const pct = cell.total > 0 ? Math.round((cell.correct / cell.total) * 100) : 0;
                skillCells += `<td class="py-2 px-1">${cell.correct}/${cell.total} <span class="text-gray-400">(${pct}%)</span></td>`;
            });

            bodyRows += `
                <tr class="hover:bg-pink-50/30 transition-colors">
                    <td class="py-2.5 px-2">${idx + 1}</td>
                    <td class="py-2.5 px-2 font-black">Tuần ${r.tuan || (idx + 1)}</td>
                    <td class="py-2.5 px-2 font-black text-rose-600">${itemDiem}</td>
                    ${skillCells}
                    <td class="py-2.5 px-2 text-gray-500">${dateStr}</td>
                    <td class="py-2.5 px-2 text-gray-500">${durationStr}</td>
                </tr>
            `;
        });
    } else {
        skillKeys.forEach((k, i) => {
            const sum = rows.reduce((acc, r) => acc + getScoreVal(r, i + 1, SKILL_TAXONOMY[k].sheetCol), 0);
            summaryCells += `<td class="py-2 px-1">${(sum / totalRows).toFixed(1)}</td>`;
        });

        rows.forEach((r, idx) => {
            const itemDiem = r.tongDiem || r.score || '--';
            const dateStr = formatDateOnly(r.Timestamp || r.ngayLam);
            const durationStr = r.thoiGianLamBai || '--';

            bodyRows += `
                <tr class="hover:bg-pink-50/30 transition-colors">
                    <td class="py-2.5 px-2">${idx + 1}</td>
                    <td class="py-2.5 px-2 font-black">${r.deSo ? `Đề ${r.deSo}` : `Tuần ${r.tuan || (idx + 1)}`}</td>
                    <td class="py-2.5 px-2 font-black text-rose-600">${itemDiem}</td>
                    <td class="py-2 px-1">${getScoreVal(r, 1, 'C1_NguAm')}</td>
                    <td class="py-2 px-1">${getScoreVal(r, 2, 'C2_ChinhTa')}</td>
                    <td class="py-2 px-1">${getScoreVal(r, 3, 'C3_VonTu')}</td>
                    <td class="py-2 px-1">${getScoreVal(r, 4, 'C4_CuPhap')}</td>
                    <td class="py-2 px-1">${getScoreVal(r, 5, 'C5_DocHieu')}</td>
                    <td class="py-2 px-1">${getScoreVal(r, 6, 'C6_TuDuyIQ')}</td>
                    <td class="py-2.5 px-2 text-gray-500">${dateStr}</td>
                    <td class="py-2.5 px-2 text-gray-500">${durationStr}</td>
                </tr>
            `;
        });
    }

    const html = `
        <tr class="bg-amber-100/90 text-amber-950 font-black border-b-2 border-amber-200">
            <td class="py-2.5 px-2" colspan="2">Điểm trung bình</td>
            <td class="py-2.5 px-2 text-rose-600">${avgTong}</td>
            ${summaryCells}
            <td class="py-2.5 px-2" colspan="2">--</td>
        </tr>
        ${bodyRows}
    `;
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
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
        pagebreak: { mode: ['css', 'legacy'] }
    };

    html2pdf().set(opt).from(area).save().then(() => {
        hideLoadingOverlay();
    }).catch(err => {
        hideLoadingOverlay();
        window.print();
    });
}

// ==========================================
// ĐỘNG CƠ ÂM THANH: GOOGLE TTS CHỊ BAN MAI
// ==========================================
function stopSpeaking() {
    try {
        if (banMaiAudio) {
            banMaiAudio.pause();
            banMaiAudio.currentTime = 0;
            banMaiAudio.onended = null;
        }
    } catch (e) {}
}

function speakVietnamese(text, rate = 0.96) {
    if (!text) return;
    try {
        stopSpeaking();

        let cleanText = String(text)
            .replace(/<[^>]*>/g, '')
            .replace(/b-a/g, 'bờ a ba')
            .replace(/c\/k/g, 'cờ hoặc ca')
            .replace(/g\/gh/g, 'gờ đơn hoặc gờ kép')
            .replace(/ng\/ngh/g, 'ngờ đơn hoặc ngờ kép')
            .trim();

        if (!cleanText) return;

        if (cleanText.length <= 180) {
            const encoded = encodeURIComponent(cleanText);
            banMaiAudio.src = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encoded}`;
            banMaiAudio.playbackRate = rate;
            const playPromise = banMaiAudio.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {});
            }
            return;
        }

        const sentences = cleanText.match(/[^.!?\n]+[.!?\n]*/g) || [cleanText];
        let sIdx = 0;
        function playSentence() {
            if (sIdx >= sentences.length) return;
            const s = sentences[sIdx++].trim();
            if (!s) { playSentence(); return; }
            const encoded = encodeURIComponent(s);
            banMaiAudio.src = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encoded}`;
            banMaiAudio.playbackRate = rate;
            banMaiAudio.onended = playSentence;
            const playPromise = banMaiAudio.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {});
            }
        }
        playSentence();
    } catch (err) {}
}

function speakCurrentQuestion() {
    const q = activeQuestionsList[currentQIndex];
    if (!q) return;
    const textToRead = q.audio_text || q.reading_passage || q.question_text;
    speakVietnamese(textToRead, 0.96);
}

function playAudio(type) {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtx && AudioContext) audioCtx = new AudioContext();
        if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
        if (!audioCtx) return;

        const now = audioCtx.currentTime;

        if (type === 'correct') {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(523.25, now);
            osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.12);
            osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.25);
            gain.gain.setValueAtTime(0.3, now);
            gain.gain.linearRampToValueAtTime(0.01, now + 0.35);
            osc.start(now);
            osc.stop(now + 0.35);
        } else if (type === 'wrong') {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'square';
            osc.frequency.setValueAtTime(300, now);
            gain.gain.setValueAtTime(0.001, now);
            gain.gain.linearRampToValueAtTime(0.22, now + 0.01);
            gain.gain.setValueAtTime(0.22, now + 0.09);
            gain.gain.linearRampToValueAtTime(0.001, now + 0.1);
            gain.gain.setValueAtTime(0.001, now + 0.14);
            gain.gain.linearRampToValueAtTime(0.22, now + 0.15);
            gain.gain.setValueAtTime(0.22, now + 0.23);
            gain.gain.linearRampToValueAtTime(0.001, now + 0.24);
            osc.start(now);
            osc.stop(now + 0.25);
        } else if (type === 'win') {
            [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
                setTimeout(() => {
                    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
                    o.connect(g); g.connect(audioCtx.destination);
                    o.frequency.value = freq; g.gain.setValueAtTime(0.2, audioCtx.currentTime);
                    g.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
                    o.start(); o.stop(audioCtx.currentTime + 0.3);
                }, i * 150);
            });
        }
    } catch (e) {}
}

function initQuizPallet() {
    updateQuizPalletUI();
}

function updateQuizPalletUI() {
    const container = document.getElementById('quiz-pallet-container');
    if (!container) return;
    if (!activeQuestionsList || !activeQuestionsList.length) { container.innerHTML = ''; return; }

    const isRoadmap = !!activeRoadmapContext;
    const isExam = !!activeExamContext;
    const total = activeQuestionsList.length;

    if (isExam) {
        container.className = `grid gap-1 max-w-xl mx-2`;
        container.style.gridTemplateColumns = `repeat(${total}, minmax(0, 1fr))`;
    } else {
        container.className = 'grid grid-cols-10 gap-1.5 max-w-xl mx-2';
        container.style.gridTemplateColumns = '';
    }

    const btnSize = isExam ? 'w-6 h-6 md:w-7 md:h-7 text-[10px] md:text-xs' : 'w-8 h-8 text-xs';

    let html = '';
    activeQuestionsList.forEach((q, idx) => {
        const answer = userAnswers[idx];
        const isAnswered = answer !== undefined;
        const isCurrent = idx === currentQIndex;
        let cls = 'bg-white text-pink-400 border-pink-200 hover:bg-pink-50';

        if (isAnswered) {
            if (isRoadmap) {
                const isCorrect = answer === q.answer;
                cls = isCorrect
                    ? 'bg-emerald-400 text-white border-emerald-500 hover:bg-emerald-500'
                    : 'bg-red-200 text-red-800 border-red-400 hover:bg-red-300';
            } else {
                cls = 'bg-pink-400 text-white border-pink-500 hover:bg-pink-500';
            }
        }
        if (isCurrent) cls = 'bg-gradient-to-br from-pink-500 to-purple-500 text-white border-pink-500 shadow-md';
        html += `<button onclick="jumpToQuestion(${idx})" class="${btnSize} shrink-0 rounded-xl border-2 font-black flex items-center justify-center transition-colors duration-150 ${cls}">${idx + 1}</button>`;
    });
    container.innerHTML = html;
}

function jumpToQuestion(idx) {
    stopSpeaking();
    if (idx < 0 || idx >= activeQuestionsList.length) return;
    currentQIndex = idx;
    loadQuestion();
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

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-mapin')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doLogin();
    });
    document.getElementById('login-mahs')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doLogin();
    });

    window.addEventListener('click', () => {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtx && AudioContext) audioCtx = new AudioContext();
        if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    }, { once: true });
});

tryAutoLogin();