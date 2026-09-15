// ============================================================
// MINI GAME TV1 - AI TINH MAT HON
// Dung chung bo tranh cua game "Sap xep do vat"
// Luat: 4 dap an cung chu de, 3 do vat co trong tranh, 1 do vat khong co.
// Be chon do vat KHONG co trong tranh.
// ============================================================

const SHARP_EYES_SCENES = [
  {
    id:'phong_khach', name:'Phòng khách', image:'assets/images/phong_khach.jpg',
    present:['ghế sofa','tivi','bàn trà'],
    absent:'tủ lạnh'
  },
  {
    id:'phong_ngu', name:'Phòng ngủ', image:'assets/images/phong_ngu.jpg',
    present:['giường ngủ','gối','chăn'],
    absent:'bàn ăn'
  },
  {
    id:'nha_bep', name:'Nhà bếp', image:'assets/images/nha_bep.jpg',
    present:['nồi','chảo','tủ lạnh'],
    absent:'gối ngủ'
  },
  {
    id:'nha_tam', name:'Nhà tắm', image:'assets/images/nha_tam.jpg',
    present:['bồn rửa mặt','khăn tắm','vòi sen'],
    absent:'bếp ga'
  },
  {
    id:'gia_sach', name:'Giá sách', image:'assets/images/gia_sach.jpg',
    present:['quyển sách','gấu bông','đồ chơi'],
    absent:'cái chảo'
  },
  {
    id:'tu_quan_ao', name:'Tủ quần áo', image:'assets/images/tu_quan_ao.jpg',
    present:['áo','quần','mũ'],
    absent:'cái bát'
  },
  {
    id:'giuong_ngu', name:'Giường ngủ', image:'assets/images/giuong_ngu.jpg',
    present:['gối','chăn','nệm'],
    absent:'ghế sofa'
  },
  {
    id:'ban_an', name:'Bàn ăn', image:'assets/images/ban_an.jpg',
    present:['cái đĩa','cái cốc','cái thìa'],
    absent:'bút chì'
  },
  {
    id:'ban_hoc', name:'Bàn học', image:'assets/images/ban_hoc.jpg',
    present:['bút chì','quyển vở','đèn học'],
    absent:'cái nồi'
  },
  {
    id:'lop_hoc', name:'Lớp học', image:'assets/images/lop_hoc.jpg',
    present:['bảng lớp','bàn học','ghế ngồi'],
    absent:'bồn tắm'
  },
  {
    id:'san_choi', name:'Sân chơi', image:'assets/images/san_choi.jpg',
    present:['cầu trượt','xích đu','bập bênh'],
    absent:'tủ quần áo'
  },
  {
    id:'vuon_nha', name:'Vườn nhà', image:'assets/images/vuon_nha.jpg',
    present:['cây xanh','bông hoa','hàng rào'],
    absent:'cái giường'
  },
{
    id:'thu_vien', name:'Thư viện', image:'assets/images/thu_vien.jpg',
    present:['giá sách','bàn đọc sách','ghế ngồi'], absent:'máy tính'
  },
  {
    id:'san_truong', name:'Sân trường', image:'assets/images/san_truong.jpg',
    present:['cột cờ','cầu trượt','xích đu'], absent:'ghế đá'
  },
  {
    id:'goc_do_choi', name:'Góc đồ chơi', image:'assets/images/goc_do_choi.jpg',
    present:['gấu bông','ô tô đồ chơi','khối xếp hình'], absent:'búp bê'
  },
  {
    id:'cua_hang_tap_hoa', name:'Cửa hàng tạp hóa', image:'assets/images/cua_hang_tap_hoa.jpg',
    present:['chai nước','quả táo','quả chuối'], absent:'ổ bánh mì'
  },
  {
    id:'phong_y_te', name:'Phòng y tế', image:'assets/images/phong_y_te.jpg',
    present:['giường bệnh','hộp thuốc','ghế đẩu'], absent:'ống nghe'
  },
  {
    id:'gara_xe', name:'Ga-ra xe', image:'assets/images/gara_xe.jpg',
    present:['ô tô','lốp xe','dụng cụ sửa xe'], absent:'xe máy'
  },
  {
    id:'chuong_trai', name:'Chuồng trại', image:'assets/images/chuong_trai.jpg',
    present:['con gà','con bò','con cừu'], absent:'con lợn'
  },
  {
    id:'cong_vien', name:'Công viên', image:'assets/images/cong_vien.jpg',
    present:['ghế đá','bông hoa','lối đi'], absent:'đài phun nước'
  }
];

let seDeck = [];
let seRound = 0;
let seScore = 0;
let seStreak = 0;
let seBest = 0;
let seLocked = false;
let seCurrent = null;

function seShuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function seBuildDeck(){
  seDeck = seShuffle(SHARP_EYES_SCENES);
}

function seNextScene(){
  if(!seDeck.length) seBuildDeck();
  seCurrent = seDeck.shift();
  seRound++;
  seLocked = false;
  seRenderScene();
}

function seEnsureStyles(){
  if(document.getElementById('sharp-eyes-style')) return;
  const style=document.createElement('style');
  style.id='sharp-eyes-style';
  style.textContent=`
    @keyframes sePop {0%{transform:scale(.84);opacity:.2}70%{transform:scale(1.04)}100%{transform:scale(1);opacity:1}}
    @keyframes seShake {0%,100%{transform:translateX(0)}25%{transform:translateX(-7px)}50%{transform:translateX(7px)}75%{transform:translateX(-4px)}}
    @keyframes seGlow {0%,100%{box-shadow:0 0 0 rgba(16,185,129,0)}50%{box-shadow:0 0 26px rgba(16,185,129,.35)}}
    .se-pop{animation:sePop .42s ease both}
    .se-shake{animation:seShake .28s ease}
    .se-correct{animation:seGlow .65s ease}
    #se-picture{width:100%;height:320px;object-fit:contain}
    .se-picture-fallback{height:320px}
    @media(max-width:900px){#se-picture,.se-picture-fallback{height:270px}}
    @media(max-width:640px){#se-picture,.se-picture-fallback{height:230px}}
  `;
  document.head.appendChild(style);
}

function startSharpEyesGame(){
  seEnsureStyles();
  seDeck=[];
  seRound=0;
  seScore=0;
  seStreak=0;
  seBest=0;
  seNextScene();
}

function seRenderScene(){
  const box=document.getElementById('game-play-container');
  if(!box || !seCurrent) return;

  const opts=seShuffle([
    ...seCurrent.present.map(x=>({text:x, absent:false})),
    {text:seCurrent.absent, absent:true}
  ]);

  box.innerHTML=`
    <div class="relative overflow-hidden rounded-[28px] border-2 border-pink-200 bg-gradient-to-b from-sky-50 via-pink-50/60 to-emerald-50/60 p-3 md:p-4">
      <div class="flex items-center justify-between gap-2 mb-2">
        <div class="px-3 py-1.5 rounded-full bg-white/90 border border-pink-200 text-pink-600 font-black text-xs md:text-sm shrink-0">🔎 Lượt ${seRound}</div>
        <div class="flex-1 text-center text-sm md:text-lg font-black text-teal-700 leading-tight px-1">Đồ vật nào <span class="text-rose-500">KHÔNG CÓ</span> trong bức tranh?</div>
        <div class="flex gap-2 shrink-0">
          <div class="px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-black text-xs md:text-sm">⭐ ${seScore}</div>
          <div class="px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 font-black text-xs md:text-sm">🔥 x${seStreak}</div>
          <div class="px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-600 font-black text-xs md:text-sm">🏆 ${seBest}</div>
        </div>
      </div>

      <div id="se-picture-wrap" class="se-pop relative bg-white rounded-3xl border-2 border-pink-200 overflow-hidden shadow-sm">
        <img id="se-picture" src="${seCurrent.image}" alt="${seCurrent.name}"
          onerror="this.style.display='none';this.nextElementSibling.classList.remove('hidden')">
        <div class="hidden se-picture-fallback flex items-center justify-center text-6xl">🖼️</div>
        <div class="absolute left-3 bottom-3 px-4 py-1.5 rounded-full bg-white/95 border border-pink-200 text-pink-600 text-sm md:text-base font-black shadow-sm">${seCurrent.name}</div>
      </div>

      <div id="se-options" class="grid grid-cols-2 gap-2.5">
        ${opts.map((o,i)=>`
          <button onclick="seChoose(this,${o.absent})"
            class="se-option px-3 py-1.5 rounded-2xl border-2 ${[
              'bg-pink-50 border-pink-200 hover:bg-pink-100',
              'bg-sky-50 border-sky-200 hover:bg-sky-100',
              'bg-amber-50 border-amber-200 hover:bg-amber-100',
              'bg-emerald-50 border-emerald-200 hover:bg-emerald-100'
            ][i]} text-slate-700 font-black text-sm md:text-base shadow-sm transition-all">
            ${o.text}
          </button>`).join('')}
      </div>

      <div id="se-feedback" class="h-7 mt-2 text-center text-xs md:text-sm font-black text-slate-500">
        👀 4 đáp án đều cùng chủ đề, bé nhìn thật kỹ nhé!
      </div>
    </div>`;

  if(typeof speakVietnamese==='function'){
    setTimeout(()=>speakVietnamese(`Bé hãy quan sát bức tranh ${seCurrent.name}. Đồ vật nào không có trong bức tranh?`,0.96),180);
  }
}

function seChoose(btn,isAbsent){
  if(seLocked) return;
  if(isAbsent){
    seLocked=true;
    seScore+=10 + Math.min(seStreak,5)*2;
    seStreak++;
    seBest=Math.max(seBest,seStreak);
    btn.classList.remove('bg-pink-50','bg-sky-50','bg-amber-50','bg-emerald-50');
    btn.classList.add('bg-emerald-100','border-emerald-400','text-emerald-800','se-correct');

    const fb=document.getElementById('se-feedback');
    if(fb) fb.innerHTML=`🎉 Chính xác! <span class="text-emerald-600">${btn.textContent.trim()}</span> không có trong tranh.`;

    if(typeof playAudio==='function') playAudio('correct');
    if(typeof confetti==='function') confetti({particleCount:60,spread:70,origin:{y:.72}});
    if(typeof speakVietnamese==='function') speakVietnamese(`${btn.textContent.trim()}. Chính xác!`,1.0);
    setTimeout(seNextScene,1200);
  }else{
    seStreak=0;
    btn.classList.add('se-shake','border-rose-400','bg-rose-50');
    setTimeout(()=>btn.classList.remove('se-shake','border-rose-400','bg-rose-50'),360);
    const fb=document.getElementById('se-feedback');
    if(fb) fb.innerHTML='🔔 Đồ vật này có trong tranh rồi. Bé nhìn lại nhé!';
    if(typeof playAudio==='function') playAudio('wrong');
  }
}
