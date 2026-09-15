// ==========================================
// MINI GAME TV1: NUOI THU CUNG
// Nhin con vat, chon dung mon an yeu thich trong 4 dap an.
// Dung: mon an bay den thu cung, tim bay, am thanh + phao hoa, sang luot moi.
// Sai: nut rung + bip bip, van tiep tuc chon.
// ==========================================

let petRound = 0;
let petScore = 0;
let petStreak = 0;
let petBestStreak = 0;
let petState = 'idle';
let petTarget = null;
let petAudioCtx = null;
let petRoundToken = 0;

const PET_FOOD_POOL = [
  { word: 'xương', emoji: '🦴' },
  { word: 'cá', emoji: '🐟' },
  { word: 'cà rốt', emoji: '🥕' },
  { word: 'thóc', emoji: '🌾' },
  { word: 'cỏ', emoji: '🌿' },
  { word: 'mật hoa', emoji: '🌼' },
  { word: 'rong', emoji: '🌱' },
  { word: 'chuối', emoji: '🍌' },
  { word: 'hạt', emoji: '🌰' },
  { word: 'tôm', emoji: '🦐' },
  { word: 'rau', emoji: '🥬' },
  { word: 'ngô', emoji: '🌽' },
  { word: 'thịt', emoji: '🍖' },
  { word: 'sữa', emoji: '🥛' },
  { word: 'táo', emoji: '🍎' },
  { word: 'bắp cải', emoji: '🥬' },
  { word: 'gạo', emoji: '🍚' },
  { word: 'bánh mì', emoji: '🍞' },
  { word: 'đậu', emoji: '🫘' },
  { word: 'trái cây', emoji: '🍊' }
];

// Mỗi con vật có một nhóm phương án nhiễu riêng.
// Tất cả phương án đều là thức ăn/thực phẩm để bé phải phân biệt thật sự,
// không dùng đồ vật hoặc hành động làm đáp án loại trừ quá dễ.
const PET_DISTRACTOR_MAP = {
  'chó': ['thịt', 'cá', 'sữa', 'bánh mì', 'cơm'],
  'mèo': ['thịt', 'sữa', 'tôm', 'bánh mì', 'trứng'],
  'thỏ': ['bắp cải', 'rau', 'táo', 'cỏ', 'ngô'],
  'gà': ['ngô', 'gạo', 'hạt', 'rau', 'đậu'],
  'trâu': ['rau', 'ngô', 'cà rốt', 'thóc', 'bắp cải'],
  'ong': ['trái cây', 'đường', 'mật ong', 'nước ngọt', 'hạt'],
  'bướm': ['trái cây', 'đường', 'mật ong', 'nước ngọt', 'rau'],
  'cá': ['tôm', 'hạt', 'rau', 'thóc', 'rong biển'],
  'vịt': ['cá', 'thóc', 'ngô', 'rong', 'hạt']
};

const PET_EXTRA_FOOD = {
  'cơm': '🍚', 'trứng': '🥚', 'đường': '🍬', 'mật ong': '🍯',
  'nước ngọt': '🥤', 'rong biển': '🌿'
};

const PET_ANIMALS = [
  { name: 'chó', label: 'Chú chó', image: 'images/con_cho', emoji: '🐶', food: 'xương' },
  { name: 'mèo', label: 'Mèo con', image: 'images/con_meo', emoji: '🐱', food: 'cá' },
  { name: 'thỏ', label: 'Thỏ con', image: 'images/tho_hong', emoji: '🐰', food: 'cà rốt' },
  { name: 'gà', label: 'Gà con', image: 'images/con_ga', emoji: '🐔', food: 'thóc' },
  { name: 'trâu', label: 'Trâu con', image: 'images/con_trau', emoji: '🐃', food: 'cỏ' },
  { name: 'ong', label: 'Ong nhỏ', image: 'images/con_ong', emoji: '🐝', food: 'mật hoa' },
  { name: 'bướm', label: 'Bướm xinh', image: 'images/con_buom', emoji: '🦋', food: 'mật hoa' },
  { name: 'cá', label: 'Cá nhỏ', image: 'images/con_ca', emoji: '🐟', food: 'rong' },
  { name: 'vịt', label: 'Vịt con', image: 'images/con_vit', emoji: '🦆', food: 'tôm' }
];

function petEnsureStyles() {
  if (document.getElementById('pet-game-styles')) return;
  const style = document.createElement('style');
  style.id = 'pet-game-styles';
  style.textContent = `
    @keyframes petFloat{0%,100%{transform:translateY(0) rotate(-1deg)}50%{transform:translateY(-8px) rotate(1deg)}}
    @keyframes petHappy{0%{transform:scale(1)}25%{transform:scale(1.13) rotate(-5deg)}50%{transform:scale(1.08) rotate(5deg)}75%{transform:scale(1.13) rotate(-3deg)}100%{transform:scale(1)}}
    @keyframes petSad{0%,100%{transform:translateX(0)}20%{transform:translateX(-7px)}40%{transform:translateX(7px)}60%{transform:translateX(-5px)}80%{transform:translateX(5px)}}
    @keyframes petFoodFly{0%{transform:translate(0,0) scale(1) rotate(0);opacity:1}70%{transform:translate(var(--pet-fly-x),var(--pet-fly-y)) scale(1.2) rotate(14deg);opacity:1}100%{transform:translate(var(--pet-fly-x),var(--pet-fly-y)) scale(.45) rotate(22deg);opacity:0}}
    @keyframes petHeart{0%{transform:translate(-50%,0) scale(.45);opacity:0}25%{opacity:1;transform:translate(-50%,-10px) scale(1.15)}100%{opacity:0;transform:translate(-50%,-92px) scale(.9)}}
    @keyframes petSparkle{0%,100%{opacity:.18;transform:scale(.7) rotate(0)}50%{opacity:.85;transform:scale(1.25) rotate(18deg)}}
    @keyframes petCloudA{0%,100%{transform:translateX(-16px)}50%{transform:translateX(25px) translateY(-5px)}}
    @keyframes petCloudB{0%,100%{transform:translateX(18px)}50%{transform:translateX(-24px) translateY(5px)}}
    @keyframes petPop{0%{transform:scale(.55);opacity:0}70%{transform:scale(1.1);opacity:1}100%{transform:scale(1);opacity:1}}
    @keyframes petWrong{0%,100%{transform:translateX(0)}20%{transform:translateX(-6px)}40%{transform:translateX(6px)}60%{transform:translateX(-4px)}80%{transform:translateX(4px)}}
    @keyframes petCombo{0%{transform:translate(-50%,-20%) scale(.4);opacity:0}35%{transform:translate(-50%,-50%) scale(1.18);opacity:1}75%{transform:translate(-50%,-70%) scale(1);opacity:1}100%{transform:translate(-50%,-95%) scale(.85);opacity:0}}
    .pet-stage{position:relative;overflow:hidden;background:linear-gradient(180deg,#eff6ff 0%,#fdf2f8 48%,#ecfdf5 100%)}
    .pet-animal-wrap{position:relative;min-height:210px;display:flex;align-items:center;justify-content:center;animation:petFloat 2.4s ease-in-out infinite}
    .pet-animal-image{width:190px;height:190px;object-fit:contain;border-radius:28px;background:rgba(255,255,255,.95);padding:8px;border:3px solid #fbcfe8;box-shadow:0 16px 34px rgba(236,72,153,.16);user-select:none;pointer-events:none}
    .pet-animal-fallback{font-size:118px;line-height:1;filter:drop-shadow(0 12px 9px rgba(15,23,42,.13))}
    .pet-animal-happy{animation:petHappy .62s ease-out 1!important}
    .pet-animal-sad{animation:petSad .35s linear 1!important}
    .pet-food-btn{transition:transform .14s,box-shadow .14s,filter .14s;touch-action:manipulation;user-select:none}
    .pet-food-btn:hover{transform:translateY(-3px) scale(1.025);box-shadow:0 10px 24px rgba(15,23,42,.12)}
    .pet-food-wrong{animation:petWrong .3s linear 1;background:#ffe4e6!important;border-color:#fb7185!important;color:#be123c!important}
    .pet-flying-food{position:fixed;z-index:200;pointer-events:none;animation:petFoodFly .72s cubic-bezier(.18,.78,.25,1) forwards}
    .pet-heart-burst{position:absolute;left:50%;top:44%;z-index:50;font-size:38px;pointer-events:none;animation:petHeart 1s ease-out forwards}
    .pet-combo{position:absolute;left:50%;top:45%;z-index:60;font-weight:1000;font-size:28px;color:#f43f5e;text-shadow:0 3px 0 white,0 8px 18px rgba(244,63,94,.2);pointer-events:none;animation:petCombo 1s ease-out forwards}
    .pet-sparkle{position:absolute;pointer-events:none;animation:petSparkle 2.1s ease-in-out infinite}
    .pet-cloud{position:absolute;opacity:.48;pointer-events:none;filter:drop-shadow(0 6px 9px rgba(148,163,184,.12))}
    .pet-cloud-a{animation:petCloudA 7s ease-in-out infinite}.pet-cloud-b{animation:petCloudB 8.2s ease-in-out infinite}
    .pet-round-pop{animation:petPop .34s ease-out}
    @media(max-width:640px){.pet-animal-wrap{min-height:170px}.pet-animal-image{width:150px;height:150px}.pet-animal-fallback{font-size:92px}.pet-food-btn{min-height:76px!important}}
  `;
  document.head.appendChild(style);
}

function petShuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function petAudio() {
  if (!petAudioCtx) petAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (petAudioCtx.state === 'suspended') petAudioCtx.resume().catch(() => {});
  return petAudioCtx;
}

function petTone(freq, duration, type = 'sine', gain = 0.07, delay = 0) {
  try {
    const ctx = petAudio();
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type; osc.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, ctx.currentTime + delay);
    g.gain.exponentialRampToValueAtTime(gain, ctx.currentTime + delay + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + delay + duration);
    osc.connect(g); g.connect(ctx.destination);
    osc.start(ctx.currentTime + delay); osc.stop(ctx.currentTime + delay + duration + 0.02);
  } catch (e) {}
}

function petCorrectSound() {
  petTone(660,.13,'sine',.075,0); petTone(880,.16,'sine',.075,.11); petTone(1100,.19,'sine',.07,.23);
}
function petWrongSound() { petTone(210,.11,'square',.045,0); petTone(170,.12,'square',.04,.14); }

function petFoodInfo(word) {
  return PET_FOOD_POOL.find(x => x.word === word) || { word, emoji: PET_EXTRA_FOOD[word] || '🍽️' };
}

function petPickRound() {
  const choices = PET_ANIMALS.filter(x => !petTarget || x.name !== petTarget.name);
  petTarget = choices[Math.floor(Math.random() * choices.length)] || PET_ANIMALS[0];
  const correct = petFoodInfo(petTarget.food);

  // Chọn 3 đáp án nhiễu từ nhóm thực phẩm hợp ngữ cảnh của từng con vật.
  // Tránh các phương án quá vô lý hoặc không phải thức ăn.
  const preferredWords = (PET_DISTRACTOR_MAP[petTarget.name] || [])
    .filter(word => word !== correct.word);
  const preferred = petShuffle(preferredWords).slice(0, 3).map(petFoodInfo);

  // Fallback an toàn nếu sau này thêm con vật mới mà chưa khai báo đủ nhóm nhiễu.
  const used = new Set([correct.word, ...preferred.map(x => x.word)]);
  const fallback = petShuffle(PET_FOOD_POOL.filter(x => !used.has(x.word)))
    .slice(0, Math.max(0, 3 - preferred.length));

  return petShuffle([correct, ...preferred, ...fallback].slice(0, 4));
}

function petImageCandidates(base) {
  const raw = String(base || '').trim();
  if (!raw) return [];
  if (/\.(?:png|jpe?g|webp|gif)$/i.test(raw)) return [raw];
  return [raw + '.jpg', raw + '.jpeg', raw + '.png', raw + '.webp'];
}

function petTryNextImage(img) {
  if (!img) return;
  let list = [];
  try { list = JSON.parse(img.dataset.candidates || '[]'); } catch (e) {}
  const nextIndex = Number(img.dataset.candidateIndex || 0) + 1;
  if (nextIndex < list.length) {
    img.dataset.candidateIndex = String(nextIndex);
    img.src = list[nextIndex];
    return;
  }
  const fallback = img.dataset.fallback || '🐾';
  const div = document.createElement('div');
  div.id = 'pet-animal-image';
  div.className = 'pet-animal-fallback';
  div.textContent = fallback;
  img.replaceWith(div);
}

function petAnimalHtml(a) {
  const candidates = petImageCandidates(a.image);
  const firstSrc = candidates[0] || '';
  const safeCandidates = JSON.stringify(candidates).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  const safeFallback = String(a.emoji || '🐾').replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  return `<div id="pet-animal-wrap" class="pet-animal-wrap pet-round-pop">
    <img id="pet-animal-image" src="${firstSrc}" alt="${a.label}" class="pet-animal-image" data-candidates="${safeCandidates}" data-candidate-index="0" data-fallback="${safeFallback}" onerror="petTryNextImage(this)">
  </div>`;
}

function startPetFeedingGame() {
  petEnsureStyles();
  petRound = 0; petScore = 0; petStreak = 0; petBestStreak = 0; petState = 'playing'; petTarget = null; petRoundToken += 1;
  const box = document.getElementById('game-play-container');
  if (!box) return;
  box.innerHTML = `
    <div class="pet-stage rounded-[30px] border-2 border-pink-200 shadow-sm p-3 md:p-5 min-h-[510px]">
      <div class="pet-cloud pet-cloud-a text-5xl" style="left:7%;top:9%">☁️</div>
      <div class="pet-cloud pet-cloud-b text-4xl" style="right:8%;top:15%">☁️</div>
      <div class="pet-sparkle text-xl" style="left:18%;top:34%">✨</div>
      <div class="pet-sparkle text-lg" style="right:19%;top:31%;animation-delay:.8s">⭐</div>
      <div class="relative z-10">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-2">
          <div class="flex gap-2 flex-wrap">
            <span class="px-3 py-1.5 bg-white/90 border border-pink-200 rounded-full text-xs font-black text-pink-600">🐾 Lượt <span id="pet-round">1</span></span>
            <span class="px-3 py-1.5 bg-white/90 border border-amber-200 rounded-full text-xs font-black text-amber-600">🔥 <span id="pet-streak">0</span></span>
          </div>
          <div class="flex gap-2">
            <span class="px-3 py-1.5 bg-white/90 border border-emerald-200 rounded-full text-xs font-black text-emerald-600">⭐ <span id="pet-score">0</span></span>
            <span class="px-3 py-1.5 bg-white/90 border border-purple-200 rounded-full text-xs font-black text-purple-600">🏆 <span id="pet-best">0</span></span>
          </div>
        </div>
        <div class="text-center mb-1">
          <div class="text-xs md:text-sm font-black text-slate-500 tracking-wide">BÉ HÃY CHO THÚ CƯNG ĂN MÓN YÊU THÍCH</div>
        </div>
        <div id="pet-animal-zone"></div>
        <div id="pet-question" class="text-center text-base md:text-lg font-black text-pink-600 mb-3"></div>
        <div id="pet-food-grid" class="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto"></div>
        <div id="pet-feedback" class="text-center mt-4 min-h-[28px] text-sm md:text-base font-black text-slate-600">Chọn món ăn phù hợp nhé!</div>
      </div>
    </div>`;
  petNextRound();
}

function petNextRound() {
  if (petState !== 'playing') return;
  petRound += 1;
  const token = ++petRoundToken;
  const options = petPickRound();
  document.getElementById('pet-round').textContent = petRound;
  document.getElementById('pet-score').textContent = petScore;
  document.getElementById('pet-streak').textContent = petStreak;
  document.getElementById('pet-best').textContent = petBestStreak;
  const zone = document.getElementById('pet-animal-zone');
  if (zone) zone.innerHTML = petAnimalHtml(petTarget);
  const q = document.getElementById('pet-question');
  if (q) q.textContent = `${petTarget.label} thích ăn gì nhất?`;
  const grid = document.getElementById('pet-food-grid');
  if (grid) grid.innerHTML = options.map((f, idx) => `
    <button class="pet-food-btn min-h-[92px] rounded-[22px] border-2 bg-white ${['border-pink-200','border-sky-200','border-amber-200','border-emerald-200'][idx]} shadow-sm p-3 font-black text-slate-700" data-food="${f.word}" onclick="petChooseFood(this,'${f.word.replace(/'/g,"\\'")}')">
      <div class="text-4xl mb-1">${f.emoji}</div><div class="text-sm md:text-base">${f.word}</div>
    </button>`).join('');
  const feedback = document.getElementById('pet-feedback');
  if (feedback) feedback.textContent = '🍽️ Bé chọn món ăn cho bạn nhỏ nhé!';
  setTimeout(() => { if (token === petRoundToken && petState === 'playing') document.getElementById('pet-animal-wrap')?.classList.remove('pet-round-pop'); }, 380);
}

function petChooseFood(btn, word) {
  if (petState !== 'playing' || !petTarget) return;
  if (word !== petTarget.food) {
    petStreak = 0;
    document.getElementById('pet-streak').textContent = petStreak;
    btn.classList.remove('pet-food-wrong'); void btn.offsetWidth; btn.classList.add('pet-food-wrong');
    const animal = document.getElementById('pet-animal-wrap');
    if (animal) { animal.classList.remove('pet-animal-sad'); void animal.offsetWidth; animal.classList.add('pet-animal-sad'); }
    petWrongSound();
    const feedback = document.getElementById('pet-feedback');
    if (feedback) feedback.textContent = `😅 ${petTarget.label} chưa thích món này đâu, thử lại nhé!`;
    setTimeout(() => btn.classList.remove('pet-food-wrong'), 430);
    return;
  }

  petState = 'transition';
  petScore += 10 + Math.min(petStreak * 2, 20);
  petStreak += 1; petBestStreak = Math.max(petBestStreak, petStreak);
  document.getElementById('pet-score').textContent = petScore;
  document.getElementById('pet-streak').textContent = petStreak;
  document.getElementById('pet-best').textContent = petBestStreak;
  document.querySelectorAll('.pet-food-btn').forEach(b => b.disabled = true);
  petCorrectSound();
  petAnimateFoodToAnimal(btn);
  const animal = document.getElementById('pet-animal-wrap');
  setTimeout(() => { if (animal) { animal.classList.remove('pet-animal-happy'); void animal.offsetWidth; animal.classList.add('pet-animal-happy'); } }, 280);
  petShowHearts();
  if (typeof confetti === 'function') confetti({ particleCount: petStreak >= 3 ? 70 : 38, spread: petStreak >= 3 ? 75 : 55, origin: { y: .52 } });
  if (petStreak >= 2) petShowCombo();
  const feedback = document.getElementById('pet-feedback');
  if (feedback) feedback.textContent = `🎉 Chính xác! ${petTarget.label} rất thích ${word}!`;
  setTimeout(() => { petState = 'playing'; petNextRound(); }, 1050);
}

function petAnimateFoodToAnimal(btn) {
  const target = document.getElementById('pet-animal-image') || document.getElementById('pet-animal-wrap');
  if (!btn || !target) return;
  const br = btn.getBoundingClientRect(), tr = target.getBoundingClientRect();
  const foodWord = btn.getAttribute('data-food') || '';
  const info = petFoodInfo(foodWord);
  const fly = document.createElement('div');
  fly.className = 'pet-flying-food text-5xl'; fly.textContent = info.emoji;
  fly.style.left = `${br.left + br.width/2 - 24}px`; fly.style.top = `${br.top + br.height/2 - 24}px`;
  fly.style.setProperty('--pet-fly-x', `${(tr.left + tr.width/2) - (br.left + br.width/2)}px`);
  fly.style.setProperty('--pet-fly-y', `${(tr.top + tr.height/2) - (br.top + br.height/2)}px`);
  document.body.appendChild(fly); setTimeout(() => fly.remove(), 780);
}

function petShowHearts() {
  const stage = document.querySelector('.pet-stage'); if (!stage) return;
  ['💖','💕','💗'].forEach((h,i) => {
    const el = document.createElement('div'); el.className = 'pet-heart-burst'; el.textContent = h;
    el.style.left = `${46 + i*4}%`; el.style.animationDelay = `${i*.1}s`; stage.appendChild(el); setTimeout(() => el.remove(), 1250);
  });
}

function petShowCombo() {
  const stage = document.querySelector('.pet-stage'); if (!stage) return;
  const el = document.createElement('div'); el.className = 'pet-combo'; el.textContent = `🔥 Combo x${petStreak}!`;
  stage.appendChild(el); setTimeout(() => el.remove(), 1100);
}

function stopPetFeedingGame() {
  petState = 'idle'; petRoundToken += 1;
}
