// MINI GAME TV1 - AI CHON DUNG MAU?
// 1 dung = do vat co trong tranh + mau dung. Dap an chi co chu, khong icon.

const RC_COLORS=['đỏ','xanh lá','xanh dương','vàng','cam','hồng','tím','nâu','trắng','đen','xám'];
const RC_SCENES=[
{id:'ban_an',name:'Bàn ăn',image:'assets/images/ban_an.jpg',objects:[['cái cốc','xanh dương'],['cái đĩa','hồng'],['quả chuối','vàng'],['quả nho','tím'],['quả táo','xanh lá']],absent:['cái bát','ấm nước','khăn ăn']},
{id:'ban_hoc',name:'Bàn học',image:'assets/images/ban_hoc.jpg',objects:[['cái ghế','đỏ'],['hộp bút','vàng'],['đèn học','xám'],['bút chì','xanh lá']],absent:['cặp sách','thước kẻ','hộp phấn']},
{id:'gia_sach',name:'Giá sách',image:'assets/images/gia_sach.jpg',objects:[['gấu bông','xanh dương'],['tên lửa','đỏ'],['con vịt đồ chơi','vàng'],['khủng long đồ chơi','xanh lá']],absent:['búp bê','ô tô đồ chơi','quả bóng']},
{id:'giuong_ngu',name:'Giường ngủ',image:'assets/images/giuong_ngu.jpg',objects:[['cái gối','xanh dương'],['khung giường','nâu'],['ngôi sao trên chăn','vàng'],['ô vuông trên chăn','hồng']],absent:['đèn ngủ','tủ đầu giường','đồng hồ báo thức']},
{id:'vuon_nha',name:'Vườn nhà',image:'assets/images/vuon_nha.jpg',objects:[['mái nhà','đỏ'],['hoa hướng dương','vàng'],['hàng rào','nâu'],['hoa tulip','hồng'],['cây xanh','xanh lá']],absent:['xích đu','ghế đá','bình tưới cây']},
{id:'chuong_trai',name:'Chuồng trại',image:'assets/images/chuong_trai.jpg',objects:[['nhà kho','đỏ'],['bò sữa','trắng'],['gà con','vàng'],['hàng rào','nâu']],absent:['máy kéo','máng ăn','xô đựng sữa']},
{id:'cong_vien',name:'Công viên',image:'assets/images/cong_vien.jpg',objects:[['ghế đá','nâu'],['bông hoa','hồng'],['bãi cỏ','xanh lá'],['mặt trời','vàng']],absent:['xích đu','cầu trượt','thùng rác']},
{id:'cua_hang_tap_hoa',name:'Cửa hàng tạp hóa',image:'assets/images/cua_hang_tap_hoa.jpg',objects:[['quả táo','đỏ'],['quả chuối','vàng'],['quả nho','tím'],['chai nước','xanh dương']],absent:['ổ bánh mì','quả dưa hấu','hộp trứng']},
{id:'gara_xe',name:'Ga-ra xe',image:'assets/images/gara_xe.jpg',objects:[['ô tô','xanh dương'],['bánh xe','đen'],['hộp dụng cụ','đỏ'],['tua vít','vàng']],absent:['xe máy','mũ bảo hiểm','bơm xe']},
{id:'goc_do_choi',name:'Góc đồ chơi',image:'assets/images/goc_do_choi.jpg',objects:[['xe tải','xanh dương'],['khủng long','xanh lá'],['gấu bông','nâu'],['ô tô đồ chơi','đỏ']],absent:['máy bay đồ chơi','búp bê','quả bóng']},
{id:'phong_y_te',name:'Phòng y tế',image:'assets/images/phong_y_te.jpg',objects:[['chăn','xanh dương'],['gối','trắng'],['hộp thuốc','đỏ'],['cái ghế','nâu']],absent:['ống nghe','nhiệt kế','băng cá nhân']},
{id:'san_truong',name:'Sân trường',image:'assets/images/san_truong.jpg',objects:[['mái trường','đỏ'],['cầu trượt','đỏ'],['cây xanh','xanh lá'],['cột cờ','xám']],absent:['ghế đá','quả bóng','xe đạp']},
{id:'thu_vien',name:'Thư viện',image:'assets/images/thu_vien.jpg',objects:[['tủ sách màu xanh dương','xanh dương'],['tủ sách màu xanh lá','xanh lá'],['cái bàn','nâu'],['cái gối','vàng']],absent:['máy tính','đèn bàn','quả địa cầu']}
];

let rcDeck=[],rcRound=0,rcScore=0,rcStreak=0,rcBest=0,rcLocked=false,rcCurrent=null,rcQuestion=null;
function rcShuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function rcWrongColor(c){return rcShuffle(RC_COLORS.filter(x=>x!==c))[0];}
function rcBuildDeck(){rcDeck=rcShuffle(RC_SCENES);}
function rcMakeQuestion(s){
 const target=rcShuffle(s.objects)[0], other=rcShuffle(s.objects.filter(o=>o!==target))[0], absent=rcShuffle(s.absent)[0];
 return {options:rcShuffle([
  {text:`${target[0]} màu ${target[1]}`,correct:true},
  {text:`${target[0]} màu ${rcWrongColor(target[1])}`,correct:false},
  {text:`${other[0]} màu ${rcWrongColor(other[1])}`,correct:false},
  {text:`${absent} màu ${rcShuffle(RC_COLORS)[0]}`,correct:false}
 ])};
}
function rcEnsureStyles(){
 if(document.getElementById('right-color-style'))return;
 const s=document.createElement('style');s.id='right-color-style';
 s.textContent=`@keyframes rcShake{0%,100%{transform:translateX(0)}25%{transform:translateX(-7px)}50%{transform:translateX(7px)}75%{transform:translateX(-4px)}}.rc-shake{animation:rcShake .3s ease}#rc-picture{width:100%;height:350px;object-fit:contain}@media(max-width:900px){#rc-picture{height:300px}}@media(max-width:640px){#rc-picture{height:255px}}`;
 document.head.appendChild(s);
}
function startRightColorGame(){rcEnsureStyles();rcDeck=[];rcRound=rcScore=rcStreak=rcBest=0;rcNext();}
function rcNext(){if(!rcDeck.length)rcBuildDeck();rcCurrent=rcDeck.shift();rcQuestion=rcMakeQuestion(rcCurrent);rcRound++;rcLocked=false;rcRender();}
function rcRender(){
 const box=document.getElementById('game-play-container');if(!box)return;
 const p=['bg-pink-50 border-pink-200 hover:bg-pink-100','bg-sky-50 border-sky-200 hover:bg-sky-100','bg-amber-50 border-amber-200 hover:bg-amber-100','bg-emerald-50 border-emerald-200 hover:bg-emerald-100'];
 box.innerHTML=`<div class="rounded-[28px] border-2 border-pink-200 bg-gradient-to-b from-sky-50 via-pink-50/60 to-emerald-50/60 p-3 md:p-4">
 <div class="flex items-center justify-between gap-2 mb-2"><span class="px-3 py-1.5 rounded-full bg-white border border-pink-200 text-pink-600 font-black text-xs md:text-sm">🎨 Lượt ${rcRound}</span><div class="flex-1 text-center text-sm md:text-base font-black text-slate-700">Bé chọn <span class="text-fuchsia-600">đồ vật + màu sắc</span> khớp với tranh nhé!</div><div class="flex gap-2"><span class="px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-black text-xs md:text-sm">⭐ ${rcScore}</span><span class="px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 font-black text-xs md:text-sm">🔥 x${rcStreak}</span><span class="px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-600 font-black text-xs md:text-sm">🏆 ${rcBest}</span></div></div>
 <div class="relative bg-white rounded-3xl border-2 border-pink-200 overflow-hidden shadow-sm"><img id="rc-picture" src="${rcCurrent.image}" alt="${rcCurrent.name}"><div class="absolute left-3 bottom-3 px-3 py-1 rounded-full bg-white/95 border border-pink-200 text-pink-600 text-sm md:text-base font-black">${rcCurrent.name}</div></div>
 <div class="grid grid-cols-2 gap-2.5">${rcQuestion.options.map((o,i)=>`<button onclick="rcChoose(this,${o.correct})" class="min-h-[42px] px-3 py-1.5 rounded-2xl border-2 ${p[i]} text-slate-700 font-black text-sm md:text-base shadow-sm">${o.text}</button>`).join('')}</div>
 <div id="rc-feedback" class="h-7 mt-2 text-center text-xs md:text-sm font-black text-slate-500">👀 Có đáp án dùng đúng đồ vật nhưng cố tình đổi sai màu đấy nhé!</div></div>`;
 if(typeof speakVietnamese==='function')setTimeout(()=>speakVietnamese(`Bé hãy quan sát bức tranh ${rcCurrent.name}. Đồ vật nào có màu đúng như trong tranh?`,.96),180);
}
function rcChoose(btn,ok){
 if(rcLocked)return;
 if(ok){rcLocked=true;rcScore+=10+Math.min(rcStreak,5)*2;rcStreak++;rcBest=Math.max(rcBest,rcStreak);btn.classList.add('bg-emerald-100','border-emerald-400','text-emerald-800');document.getElementById('rc-feedback').innerHTML=`🎉 Đúng rồi! <span class="text-emerald-600">${btn.textContent.trim()}</span>.`;if(typeof playAudio==='function')playAudio('correct');if(typeof confetti==='function')confetti({particleCount:65,spread:75,origin:{y:.72}});if(typeof speakVietnamese==='function')speakVietnamese(`${btn.textContent.trim()}. Chính xác!`,1);setTimeout(rcNext,1250);}
 else{rcStreak=0;btn.classList.add('rc-shake','border-rose-400');setTimeout(()=>btn.classList.remove('rc-shake','border-rose-400'),350);document.getElementById('rc-feedback').textContent='🔔 Chưa đúng màu rồi. Bé nhìn lại bức tranh nhé!';if(typeof playAudio==='function')playAudio('wrong');}
}
