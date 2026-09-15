// ==========================================
// MINI GAME TV1: SAP XEP DO VAT
// Luat: 1 buc tranh + 4 do vat. Co 3 do vat dung ngu canh, 1 do vat lac cho.
// Be can chon DU 3 do vat dung. Moi lan chon dung, app doc ten do vat va danh dau da chon.
// Do vat sai KHONG DUOC CHON; neu bam nham thi rung + bip bip, van choi tiep.
// Khi chon du 3 do vat dung: phong sang, phao hoa, sang luot moi.
// ==========================================

let sxRound = 0;
let sxScore = 0;
let sxStreak = 0;
let sxBestStreak = 0;
let sxLocked = false;
let sxSelectedGood = new Set();
let sxCurrentGood = [];
let sxCurrentOdd = '';
let sxAudioCtx = null;

const SX_SCENES = [
  { id:'phong_khach', label:'Phòng khách', image:'assets/images/phong_khach.jpg', emoji:'🛋️', good:['ghế sofa','tivi','bàn trà','đèn bàn','quạt điện','lọ hoa'], odd:['bàn chải đánh răng','nồi cơm điện','gối ngủ','vòi sen'] },
  { id:'phong_ngu', label:'Phòng ngủ', image:'assets/images/phong_ngu.jpg', emoji:'🛏️', good:['giường ngủ','gối','chăn','tủ quần áo','đèn ngủ','đồng hồ báo thức'], odd:['chảo','bồn rửa bát','tivi phòng khách','nồi cơm điện'] },
  { id:'nha_bep', label:'Nhà bếp', image:'assets/images/nha_bep.jpg', emoji:'🍳', good:['nồi','chảo','tủ lạnh','bếp','ấm nước','bát đĩa'], odd:['gối','bàn chải đánh răng','cặp sách','chăn'] },
  { id:'nha_tam', label:'Nhà tắm', image:'assets/images/nha_tam.jpg', emoji:'🚿', good:['vòi sen','khăn tắm','bàn chải đánh răng','xà phòng','chậu rửa','gương'], odd:['chảo','gối','quyển vở','tủ lạnh'] },
  { id:'gia_sach', label:'Giá sách', image:'assets/images/gia_sach.jpg', emoji:'📚', good:['quyển sách','truyện tranh','từ điển','hộp bút','sổ tay','đèn đọc sách'], odd:['nồi','dép đi mưa','bàn chải đánh răng','chảo'] },
  { id:'tu_quan_ao', label:'Tủ quần áo', image:'assets/images/tu_quan_ao.jpg', emoji:'👕', good:['áo','quần','váy','mũ','khăn','tất'], odd:['nồi','bát','bàn chải đánh răng','quyển sách'] },
  { id:'giuong_ngu', label:'Giường ngủ', image:'assets/images/giuong_ngu.jpg', emoji:'🛏️', good:['gối','chăn','ga giường','gấu bông','đèn ngủ','màn'], odd:['chảo','bát ăn cơm','bàn học','xẻng'] },
  { id:'ban_an', label:'Bàn ăn', image:'assets/images/ban_an.jpg', emoji:'🍽️', good:['bát','đĩa','thìa','đũa','cốc nước','khăn ăn'], odd:['bút chì','gối','bàn chải đánh răng','cặp sách'] },
  { id:'ban_hoc', label:'Bàn học', image:'assets/images/ban_hoc.jpg', emoji:'✏️', good:['bút chì','thước kẻ','quyển vở','cục tẩy','hộp bút','đèn học'], odd:['chảo','gối','bàn chải đánh răng','nồi'] },
  { id:'lop_hoc', label:'Lớp học', image:'assets/images/lop_hoc.jpg', emoji:'🏫', good:['bảng','bàn học','ghế','sách','bút','thước'], odd:['bồn tắm','chảo','gối ngủ','tủ lạnh'] },
  { id:'san_choi', label:'Sân chơi', image:'assets/images/san_choi.jpg', emoji:'🛝', good:['cầu trượt','xích đu','quả bóng','bập bênh','dây nhảy','xe chòi chân'], odd:['nồi cơm điện','gối','bàn chải đánh răng','tủ lạnh'] },
  { id:'vuon_nha', label:'Vườn nhà', image:'assets/images/vuon_nha.jpg', emoji:'🌳', good:['cây xanh','chậu hoa','bình tưới','xẻng nhỏ','ghế đá','hàng rào'], odd:['gối ngủ','chảo','bàn chải đánh răng','tivi'] },
{
    id:'thu_vien', name:'Thư viện', image:'assets/images/thu_vien.jpg',
    correct:['giá sách','bàn đọc sách','ghế ngồi'], wrong:'máy tính'
  },
  {
    id:'san_truong', name:'Sân trường', image:'assets/images/san_truong.jpg',
    correct:['cột cờ','cầu trượt','xích đu'], wrong:'ghế đá'
  },
  {
    id:'goc_do_choi', name:'Góc đồ chơi', image:'assets/images/goc_do_choi.jpg',
    correct:['gấu bông','ô tô đồ chơi','khối xếp hình'], wrong:'búp bê'
  },
  {
    id:'cua_hang_tap_hoa', name:'Cửa hàng tạp hóa', image:'assets/images/cua_hang_tap_hoa.jpg',
    correct:['chai nước','quả táo','quả chuối'], wrong:'ổ bánh mì'
  },
  {
    id:'phong_y_te', name:'Phòng y tế', image:'assets/images/phong_y_te.jpg',
    correct:['giường bệnh','hộp thuốc','ghế đẩu'], wrong:'ống nghe'
  },
  {
    id:'gara_xe', name:'Ga-ra xe', image:'assets/images/gara_xe.jpg',
    correct:['ô tô','lốp xe','dụng cụ sửa xe'], wrong:'xe máy'
  },
  {
    id:'chuong_trai', name:'Chuồng trại', image:'assets/images/chuong_trai.jpg',
    correct:['con gà','con bò','con cừu'], wrong:'con lợn'
  },
  {
    id:'cong_vien', name:'Công viên', image:'assets/images/cong_vien.jpg',
    correct:['ghế đá','bông hoa','lối đi'], wrong:'đài phun nước'
  }
];

const SX_ITEM_EMOJI = {
  'ghế sofa':'🛋️','tivi':'📺','bàn trà':'🪵','đèn bàn':'💡','quạt điện':'🌀','lọ hoa':'💐',
  'bàn chải đánh răng':'🪥','nồi cơm điện':'🍚','gối ngủ':'🛏️','vòi sen':'🚿','giường ngủ':'🛏️','gối':'🛏️','chăn':'🧣','tủ quần áo':'👚','đèn ngủ':'💡','đồng hồ báo thức':'⏰',
  'chảo':'🍳','bồn rửa bát':'🚰','tivi phòng khách':'📺','nồi':'🍲','tủ lạnh':'🧊','bếp':'🔥','ấm nước':'🫖','bát đĩa':'🍽️','cặp sách':'🎒',
  'khăn tắm':'🧻','xà phòng':'🧼','chậu rửa':'🚰','gương':'🪞','quyển vở':'📒','quyển sách':'📚','truyện tranh':'📖','từ điển':'📕','hộp bút':'🖍️','sổ tay':'📓','đèn đọc sách':'💡',
  'dép đi mưa':'🩴','áo':'👕','quần':'👖','váy':'👗','mũ':'🧢','khăn':'🧣','tất':'🧦','bát':'🥣','ga giường':'🛏️','gấu bông':'🧸','màn':'🦟','bát ăn cơm':'🥣','bàn học':'🪑','xẻng':'🛠️',
  'đĩa':'🍽️','thìa':'🥄','đũa':'🥢','cốc nước':'🥛','khăn ăn':'🧻','bút chì':'✏️','thước kẻ':'📏','cục tẩy':'🧽','đèn học':'💡',
  'bảng':'🟩','ghế':'🪑','sách':'📚','bút':'🖊️','thước':'📏','bồn tắm':'🛁','cầu trượt':'🛝','xích đu':'🎠','quả bóng':'⚽','bập bênh':'🎢','dây nhảy':'➰','xe chòi chân':'🛴',
  'cây xanh':'🌳','chậu hoa':'🪴','bình tưới':'🚿','xẻng nhỏ':'🛠️','ghế đá':'🪑','hàng rào':'🚧','tivi':'📺',

  'bàn đọc sách':'📖',
  'cột cờ':'🚩',
  'ghế đá':'🪑',
  'quả bóng':'⚽',
  'búp bê':'🧸',
  'ô tô đồ chơi':'🚗',
  'khối xếp hình':'🧱',
  'chai nước':'🧴',
  'gói bánh':'🍪',
  'hộp sữa':'🥛',
  'giường bệnh':'🛏️',
  'hộp thuốc':'💊',
  'ống nghe':'🩺',
  'ô tô':'🚗',
  'xe máy':'🏍️',
  'mũ bảo hiểm':'⛑️',
  'con gà':'🐔',
  'con bò':'🐄',
  'con lợn':'🐷',
  'con cá':'🐟',
  'thùng rác':'🗑️',
};

function sxShuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}

function sxEnsureStyles(){
  if(document.getElementById('sx-game-styles')) return;
  const style=document.createElement('style');
  style.id='sx-game-styles';
  style.textContent=`
    @keyframes sxCloud{0%{transform:translateX(-18vw)}100%{transform:translateX(110vw)}}
    @keyframes sxBird{0%{transform:translateX(-12vw) translateY(0)}50%{transform:translateX(50vw) translateY(-12px)}100%{transform:translateX(112vw) translateY(4px)}}
    @keyframes sxLeaf{0%{transform:translateY(-50px) rotate(0);opacity:0}10%{opacity:.75}100%{transform:translateY(540px) rotate(420deg);opacity:0}}
    @keyframes sxPop{0%{transform:scale(.78);opacity:0}70%{transform:scale(1.05);opacity:1}100%{transform:scale(1);opacity:1}}
    @keyframes sxWrong{0%,100%{transform:translateX(0)}20%{transform:translateX(-8px)}40%{transform:translateX(8px)}60%{transform:translateX(-5px)}80%{transform:translateX(5px)}}
    @keyframes sxLiftGood{0%{transform:translateY(0) scale(1)}55%{transform:translateY(-12px) scale(1.08)}100%{transform:translateY(0) scale(1)}}
    @keyframes sxGlow{0%{box-shadow:0 0 0 rgba(34,197,94,0)}50%{box-shadow:0 0 38px rgba(34,197,94,.45)}100%{box-shadow:0 0 0 rgba(34,197,94,0)}}
    @keyframes sxCombo{0%{transform:translate(-50%,-20%) scale(.5);opacity:0}40%{transform:translate(-50%,-55%) scale(1.2);opacity:1}100%{transform:translate(-50%,-95%) scale(.9);opacity:0}}
    .sx-stage{position:relative;overflow:hidden;background:linear-gradient(180deg,#eff6ff 0%,#fdf2f8 52%,#ecfdf5 100%)}
    .sx-scene-card{position:relative;background:white;border:3px solid #fbcfe8;border-radius:28px;overflow:hidden;box-shadow:0 16px 34px rgba(236,72,153,.14);animation:sxPop .45s ease-out}
    .sx-scene-card.sx-correct{animation:sxGlow .85s ease-out}
    .sx-scene-img{width:100%;height:220px;object-fit:contain;display:block;background:#fff}
    .sx-scene-fallback{height:220px;display:flex;align-items:center;justify-content:center;font-size:96px;background:linear-gradient(180deg,#fef3c7,#dbeafe)}
    .sx-option{transition:transform .14s,box-shadow .14s,background .14s;min-height:54px;user-select:none;touch-action:manipulation}
    .sx-option:hover{transform:translateY(-3px) scale(1.02);box-shadow:0 10px 22px rgba(15,23,42,.12)}
    .sx-wrong{animation:sxWrong .32s linear;background:#fee2e2!important;border-color:#fb7185!important;color:#be123c!important}
    .sx-good-picked{animation:sxLiftGood .45s ease-out!important;background:#dcfce7!important;border-color:#22c55e!important;color:#15803d!important;box-shadow:0 0 0 3px rgba(34,197,94,.12),0 10px 22px rgba(34,197,94,.18)!important}
    .sx-cloud,.sx-bird,.sx-leaf{position:absolute;pointer-events:none;z-index:1}
    .sx-cloud{font-size:42px;opacity:.42;animation:sxCloud 18s linear infinite}
    .sx-bird{font-size:30px;opacity:.7;animation:sxBird 11s linear infinite}
    .sx-leaf{top:-45px;font-size:22px;opacity:.7;animation:sxLeaf 8s linear infinite}
    .sx-combo{position:absolute;left:50%;top:44%;z-index:30;font-size:30px;font-weight:1000;color:#f43f5e;text-shadow:0 3px 0 #fff;animation:sxCombo 1s ease-out forwards;pointer-events:none}
    @media(max-width:900px){.sx-scene-img,.sx-scene-fallback{height:180px}.sx-option{min-height:50px}.sx-stage{padding:8px!important}}@media(max-width:640px){.sx-scene-img,.sx-scene-fallback{height:160px}.sx-option{min-height:48px}}
  `;
  document.head.appendChild(style);
}

function sxAudio(){
  const AC=window.AudioContext||window.webkitAudioContext;
  if(!sxAudioCtx&&AC) sxAudioCtx=new AC();
  if(sxAudioCtx&&sxAudioCtx.state==='suspended') sxAudioCtx.resume();
  return sxAudioCtx;
}
function sxTone(freq,dur=.12,type='sine',gain=.055,delay=0){
  const c=sxAudio(); if(!c) return;
  const o=c.createOscillator(), g=c.createGain();
  o.type=type;o.frequency.value=freq;g.gain.value=gain;o.connect(g);g.connect(c.destination);
  const t=c.currentTime+delay;o.start(t);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.stop(t+dur);
}
function sxCorrectSound(){ sxTone(660,.12,'sine',.06,0); sxTone(880,.14,'sine',.055,.11); sxTone(1100,.18,'triangle',.05,.22); }
function sxWrongSound(){ sxTone(180,.09,'square',.045,0); sxTone(150,.09,'square',.04,.12); }

function sxPickRound(){
  const scene=SX_SCENES[Math.floor(Math.random()*SX_SCENES.length)];
  const good=sxShuffle(scene.good).slice(0,3);
  const odd=scene.odd[Math.floor(Math.random()*scene.odd.length)];
  return {scene,options:sxShuffle([...good,odd]),odd};
}

function startObjectSortingGame(){
  sxEnsureStyles();
  sxRound=0;sxScore=0;sxStreak=0;sxBestStreak=0;sxLocked=false;sxSelectedGood=new Set();sxCurrentGood=[];sxCurrentOdd='';
  const box=document.getElementById('game-play-container'); if(!box) return;
  box.innerHTML=`
    <div class="sx-stage rounded-[28px] border-2 border-pink-100 p-2.5 md:p-3 min-h-[430px]">
      <div class="sx-cloud" style="top:18px;left:-70px;animation-delay:-5s">☁️</div>
      <div class="sx-cloud" style="top:70px;left:-120px;animation-delay:-11s;font-size:30px">☁️</div>
      <div class="sx-bird" style="top:58px;left:-70px;animation-delay:-3s">🕊️</div>
      <div class="sx-leaf" style="left:12%;animation-delay:-2s">🍂</div><div class="sx-leaf" style="left:74%;animation-delay:-5s">🍁</div>
      <div class="relative z-10">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div class="text-sm md:text-base font-black text-purple-700">🧺 Chọn 3 đồ vật đúng với bức tranh!</div>
          <div class="flex gap-2 text-xs md:text-sm font-black">
            <span class="px-3 py-1.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200">⭐ <span id="sx-score">0</span></span>
            <span class="px-3 py-1.5 rounded-full bg-rose-100 text-rose-700 border border-rose-200">🔥 x<span id="sx-streak">0</span></span>
            <span class="px-3 py-1.5 rounded-full bg-sky-100 text-sky-700 border border-sky-200">🏆 <span id="sx-best">0</span></span>
          </div>
        </div>
        <div id="sx-round-area"></div>
      </div>
    </div>`;
  sxNextRound();
}

function sxNextRound(){
  sxLocked=false;sxRound++;sxSelectedGood=new Set();
  const data=sxPickRound();
  sxCurrentGood=data.options.filter(x=>x!==data.odd);
  sxCurrentOdd=data.odd;
  const area=document.getElementById('sx-round-area'); if(!area) return;
  area.dataset.odd=data.odd;
  area.innerHTML=`
    <div id="sx-scene-card" class="sx-scene-card mb-2">
      <img class="sx-scene-img" src="${data.scene.image}" alt="${data.scene.label}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="sx-scene-fallback" style="display:none">${data.scene.emoji}</div>
      <div class="absolute left-3 bottom-3 px-3 py-1.5 rounded-full bg-white/90 border border-pink-200 text-pink-700 font-black text-sm shadow-sm">${data.scene.label}</div>
    </div>
    <div class="text-center mb-2">
      <p class="text-sm md:text-base font-black text-slate-700">Bé hãy sắp xếp đồ vật cho <span class="text-emerald-600">“${data.scene.label}”</span> nhé!</p>
      <p class="text-[11px] md:text-xs font-bold text-slate-400 mt-0.5">Hãy chọn đủ 3 đồ vật phù hợp. Có 1 đồ vật lạc chỗ, bé đừng chọn nhé.</p>
    </div>
    <div id="sx-pick-status" class="text-center text-xs font-black text-emerald-600 mb-2">Đã chọn 0/3 đồ vật đúng</div>
    <div class="grid grid-cols-2 gap-2 md:gap-2.5">
      ${data.options.map((word,idx)=>{
        const pastel=[
          'bg-pink-50/80 border-pink-200 hover:bg-pink-100',
          'bg-sky-50/80 border-sky-200 hover:bg-sky-100',
          'bg-amber-50/80 border-amber-200 hover:bg-amber-100',
          'bg-emerald-50/80 border-emerald-200 hover:bg-emerald-100'
        ][idx%4];
        return `<button class="sx-option px-3 py-2 md:px-4 md:py-2.5 rounded-2xl border-2 ${pastel} text-slate-700 font-black text-sm md:text-base flex items-center justify-center gap-2.5 shadow-sm" onclick="sxChooseObject(this,'${word.replace(/'/g,"\\'")}')"><span class="text-2xl md:text-3xl shrink-0">${SX_ITEM_EMOJI[word]||'📦'}</span><span class="leading-tight">${word}</span></button>`;
      }).join('')}
    </div>`;

  // Đọc câu hướng dẫn theo đúng bối cảnh của từng bức tranh.
  if(typeof speakVietnamese==='function'){
    try{ speakVietnamese(`Bé hãy sắp xếp đồ vật cho ${data.scene.label} nhé!`,0.96); }catch(e){}
  }
}

function sxChooseObject(btn,word){
  if(sxLocked) return;
  if(sxSelectedGood.has(word)) return;

  const isGood=sxCurrentGood.includes(word);
  if(!isGood){
    sxStreak=0; sxUpdateHud(); sxWrongSound();
    btn.classList.remove('sx-wrong'); void btn.offsetWidth; btn.classList.add('sx-wrong');
    setTimeout(()=>btn.classList.remove('sx-wrong'),450);
    return;
  }

  sxSelectedGood.add(word);
  sxScore+=10;
  btn.classList.add('sx-good-picked');
  btn.disabled=true;
  btn.innerHTML += '<span class="text-emerald-600 text-xs font-black">✓ Đúng</span>';
  sxCorrectSound();

  // Doc ro ten do vat vua duoc chon.
  if(typeof speakVietnamese==='function'){
    try{ speakVietnamese(word,0.96); }catch(e){}
  }

  const picked=sxSelectedGood.size;
  const status=document.getElementById('sx-pick-status');
  if(status) status.textContent=`Đã chọn ${picked}/3 đồ vật đúng`;

  if(picked<3){
    if(typeof confetti==='function') confetti({particleCount:18,spread:42,origin:{y:.78}});
    return;
  }

  sxLocked=true;
  sxStreak++;
  sxBestStreak=Math.max(sxBestStreak,sxStreak);
  sxScore+=20;
  sxUpdateHud();
  document.getElementById('sx-scene-card')?.classList.add('sx-correct');
  const stage=document.querySelector('.sx-stage');
  if(stage){
    const combo=document.createElement('div');
    combo.className='sx-combo';
    combo.textContent=sxStreak>=2?`🔥 Combo x${sxStreak}!`:'✨ Đủ 3 đồ vật!';
    stage.appendChild(combo);
    setTimeout(()=>combo.remove(),1050);
  }
  if(typeof confetti==='function') confetti({particleCount:sxStreak>=5?100:62,spread:74,origin:{y:.62}});
  sxTone(1320,.2,'triangle',.05,.32);
  setTimeout(sxNextRound,1100);
}
function sxUpdateHud(){
  const s=document.getElementById('sx-score'),st=document.getElementById('sx-streak'),b=document.getElementById('sx-best');
  if(s)s.textContent=sxScore;if(st)st.textContent=sxStreak;if(b)b.textContent=sxBestStreak;
}

window.startObjectSortingGame=startObjectSortingGame;
window.sxChooseObject=sxChooseObject;
