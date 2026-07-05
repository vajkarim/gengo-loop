/* 言語ループ エンジン */
(function(){
  "use strict";
  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));
  const shuffle = a => { a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]];} return a; };

  const WORDS = window.WORDS, EXPR = window.EXPRESSIONS, SENT = window.SENTENCES, LANGS = window.LANGS;
  const wordById = Object.fromEntries(WORDS.map(w=>[w.id,w]));
  const exprById = Object.fromEntries(EXPR.map(e=>[e.id,e]));

  /* ---------- 状態 ---------- */
  const KEY = "gengoLoop_v1";
  const defState = () => ({
    lang:"en", newCount:20, rate:0.95, voiceName:"",
    day:1, learnedWordIds:[], wordSeenExprs:{}, exprCursor:0,
    exJpShow:false, exJpOnly:false
  });
  let S = load();
  function load(){ try{ return Object.assign(defState(), JSON.parse(localStorage.getItem(KEY)||"{}")); }catch(e){ return defState(); } }
  function save(){ localStorage.setItem(KEY, JSON.stringify(S)); }

  /* ---------- 音声 (Web Speech API) ---------- */
  let voices = [];
  function loadVoices(){ voices = window.speechSynthesis ? speechSynthesis.getVoices() : []; buildVoiceOptions(); }
  if(window.speechSynthesis){ speechSynthesis.onvoiceschanged = loadVoices; loadVoices(); }
  function speak(text, rateMul=1){
    if(!window.speechSynthesis || !text) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = (LANGS[S.lang]||{}).voiceLang || "en-US";
    u.rate = Math.max(0.5, S.rate*rateMul);
    const v = voices.find(v=>v.name===S.voiceName) || voices.find(v=>v.lang && v.lang.startsWith(u.lang.slice(0,2)));
    if(v) u.voice = v;
    speechSynthesis.speak(u);
  }

  /* ---------- 訳ヘルパ ---------- */
  const tW  = w => (w.tr[S.lang]||{}).w || "―未収録―";
  const tNote = w => (w.tr[S.lang]||{}).note || "";
  // 「勉強している言語」は選択中の言語名を日本語ラベルに使う
  const jpOf = w => (w.id==="lang" && (LANGS[S.lang]||{}).label) ? LANGS[S.lang].label : w.jp;
  const tTmpl = e => (e.tr[S.lang]||{}).t || "";
  const sEN = s => (s.tr[S.lang]||{}).s || "";
  const sJP = s => (s.tr[S.lang]||{}).jp || (s.tr.en||{}).jp || "";
  const roma  = w => (w.tr[S.lang]||{}).roma || "";   // 単語のピンイン等（現状マンダリンのみ）
  const sRoma = s => (s.tr[S.lang]||{}).roma || "";   // 例文のピンイン
  const hasLang = () => WORDS.length && WORDS[0].tr[S.lang];

  /* ---------- タブ切替 ---------- */
  $$(".tab").forEach(t=>t.onclick=()=>{
    $$(".tab").forEach(x=>x.classList.remove("active")); t.classList.add("active");
    $$(".view").forEach(v=>v.classList.remove("active"));
    $("#view-"+t.dataset.view).classList.add("active");
    if(t.dataset.view==="summary") renderSummary();
  });

  /* ================= セッション構築 ================= */
  let session = null;
  function buildSession(){
    // 新規語: 未学習から newCount 個（リスト順）
    const learnedSet = new Set(S.learnedWordIds);
    const newWords = WORDS.filter(w=>!learnedSet.has(w.id) && !w.skip).slice(0, S.newCount);
    // 復習語: 既習からローテーションで最大10
    const learned = S.learnedWordIds.map(id=>wordById[id]).filter(Boolean);
    const revCount = Math.min(10, learned.length);
    const start = learned.length ? (S.day*7) % learned.length : 0;
    const review = [];
    for(let i=0;i<revCount;i++) review.push(learned[(start+i)%learned.length]);

    // 学習済みに登録（新規語）
    newWords.forEach(w=>{ if(!learnedSet.has(w.id)){ S.learnedWordIds.push(w.id); learnedSet.add(w.id); } });
    save();

    session = { day:S.day, newWords, review, shadowItems:buildShadowItems(newWords), introIdx:0, shadowIdx:0,
                quizQueue:[], quizDone:0, quizTotal:0, quizItem:null };
    // クイズ: その日の新規語を「両方向」で出題（20語×2＝40問）。誤答は○になるまで再出題。
    session.quizQueue = buildQuizCards(newWords);
    session.quizTotal = session.quizQueue.length;
  }
  // 単語/例文パートを別々に始められるよう、その日のセッションを一度だけ用意
  function ensureSession(){
    if(!session || session.day!==S.day || !(session.newWords||[]).length){
      const remaining = WORDS.filter(w=>!S.learnedWordIds.includes(w.id) && !w.skip).length;
      if(remaining>0) buildSession(); else buildSessionReview();
    }
  }
  // 各単語につき j2e と e2j の2枚をつくりシャッフル
  function buildQuizCards(words){
    const cards=[];
    words.forEach(w=>{ cards.push({word:w,dir:"j2e"}); cards.push({word:w,dir:"e2j"}); });
    return shuffle(cards);
  }

  /* ---------- ステージ表示 ---------- */
  const stages = ["home","intro","quiz","shadow","exquiz","worddone","done"];
  function showStage(name){
    stages.forEach(s=>$("#stage-"+s).classList.toggle("hidden", s!==name));
  }

  /* ---------- ① 単語導入 ---------- */
  function renderIntro(){
    const w = session.newWords[session.introIdx];
    $("#introProg").textContent = `(${session.introIdx+1}/${session.newWords.length})`;
    $("#introJp").textContent = jpOf(w);
    $("#introEn").textContent = tW(w);
    $("#introRoma").textContent = roma(w);
    $("#introNote").textContent = tNote(w) ? "≒ "+tNote(w) : "";
    $("#introPrev").style.visibility = session.introIdx===0 ? "hidden":"visible";
    $("#introNext").textContent = session.introIdx===session.newWords.length-1 ? "クイズへ →" : "次へ →";
    speak(tW(w));
  }
  $("#introSpeak").onclick = ()=> speak(tW(session.newWords[session.introIdx]));
  $("#introPrev").onclick = ()=>{ if(session.introIdx>0){session.introIdx--; renderIntro();} };
  $("#introNext").onclick = ()=>{
    if(session.introIdx < session.newWords.length-1){ session.introIdx++; renderIntro(); }
    else { showStage("quiz"); nextQuiz(); }
  };

  /* ---------- ② クイズ（フラッシュカード式・自己採点） ----------
   * 単語を表示 →「答えを見る」→ ○/× で自己採点。×は○になるまで再出題。自動送りなし。
   */
  function finishWords(){
    showStage("worddone");
    $("#wordDoneMsg").textContent = `新規${session.newWords.length}語を確認しました。`;
  }
  function nextQuiz(){
    if(session.quizQueue.length===0){ finishWords(); return; } // 単語パート完了

    const item = session.quizQueue.shift();
    session.quizItem = item;
    const w = item.word;
    item.prompt = item.dir==="j2e" ? jpOf(w) : tW(w);
    item.answer = item.dir==="j2e" ? tW(w) : jpOf(w);
    $("#quizProg").textContent = `(${session.quizDone}/${session.quizTotal})`;
    $("#quizDir").textContent = item.dir==="j2e" ? "この意味を対象言語で？" : "この単語の意味は？";
    $("#quizPrompt").textContent = item.prompt;
    // ピンイン等: 対象言語の単語が出ている側に表示（e2j→プロンプト側）
    $("#quizPromptRoma").textContent = item.dir==="e2j" ? roma(w) : "";
    $("#quizAnswerRoma").textContent = "";
    const ans=$("#quizAnswer"); ans.textContent=""; ans.classList.add("hidden");
    $("#quizReveal").classList.remove("hidden");
    $("#quizGrade").classList.add("hidden");
    if(item.dir==="e2j") speak(tW(w)); // 対象言語プロンプトは読み上げ
  }
  function revealAnswer(){
    const item=session.quizItem; if(!item) return;
    const ans=$("#quizAnswer"); ans.textContent=item.answer; ans.classList.remove("hidden");
    $("#quizAnswerRoma").textContent = item.dir==="j2e" ? roma(item.word) : ""; // j2e→答えが対象言語
    $("#quizReveal").classList.add("hidden");
    $("#quizGrade").classList.remove("hidden");
    speak(tW(item.word)); // 答え確認時に対象言語を読み上げ
  }
  function gradeCard(ok){
    const item=session.quizItem; if(!item) return;
    if(ok){ session.quizDone++; }
    else { session.quizQueue.push(item); } // ○になるまで末尾へ再投入
    nextQuiz();
  }
  $("#revealBtn").onclick = revealAnswer;
  $("#gradeOk").onclick = ()=>gradeCard(true);
  $("#gradeNg").onclick = ()=>gradeCard(false);

  /* ---------- ③ 例文 ----------
   * その日の各単語について1文ずつ出す（＝「各単語に1つ」）。
   * 対象言語で作られた例文を優先し、hl付き（その日用に作った文）を最優先。
   */
  function pickSentenceFor(id){
    const cands = SENT.filter(s=>s.wordId===id && sEN(s));   // 現在言語で例文があるもの
    if(!cands.length) return null;
    const authored = cands.filter(s=>s.hl);                  // その日用に作った文（強調位置つき）優先
    const pool = authored.length?authored:cands;
    return pool[Math.random()*pool.length|0];
  }
  function buildShadowItems(words){
    const items=[]; const used=new Set();
    words.forEach(w=>{ const s=pickSentenceFor(w.id); if(s){ items.push(s); used.add(w.id); } });
    // フォールバック: その日の語に例文が無い/少ない場合、既習語の例文（現在言語にあるもの）で補う
    if(items.length < Math.min(8, words.length)){
      const learned = shuffle(S.learnedWordIds).filter(id=>!used.has(id));
      for(const id of learned){
        const s=pickSentenceFor(id);
        if(s){ items.push(s); used.add(id); }
        if(items.length>=12) break;
      }
    }
    return items;
  }
  // 英語の不規則活用（このアプリの動詞ぶん）
  const IRREG = {
    go:["went","gone","goes","going"], come:["came","comes","coming"], eat:["ate","eaten","eats","eating"],
    buy:["bought","buys","buying"], see:["saw","seen","sees","seeing"], hear:["heard","hears","hearing"],
    wake:["woke","woken","wakes","waking"], sleep:["slept","sleeps","sleeping"], speak:["spoke","spoken","speaks","speaking"],
    say:["said","says","saying"], have:["had","has","having"], think:["thought","thinks","thinking"],
    read:["reads","reading"], know:["knew","known","knows","knowing"], meet:["met","meets","meeting"],
    write:["wrote","written","writes","writing"], become:["became","becomes","becoming"], take:["took","taken","takes","taking"],
    understand:["understood","understands","understanding"], send:["sent","sends","sending"],
    "go home":["going home","went home","goes home"]
  };
  function enForms(b){
    const f = (IRREG[b]||[]).slice();
    f.push(b+"s", b+"ing", b+"ed");
    if(/e$/.test(b)){ f.push(b.slice(0,-1)+"ing", b+"d"); }
    if(/[^aeiou]y$/.test(b)){ f.push(b.slice(0,-1)+"ies", b.slice(0,-1)+"ied"); }
    if(/(s|x|z|ch|sh|o)$/.test(b)){ f.push(b+"es"); }
    return f;
  }
  // 例文中の対象語を強調（訳・言い換え・活用形にマッチ）。s.hl があれば最優先。
  function highlightWord(text, word, hl){
    if(!text) return text;
    let cands=[];
    if(hl) cands.push(hl);
    const base=tW(word); if(base) cands.push(base);
    const note=tNote(word); if(note) note.split(/[\/／]/).forEach(x=>{ x=x.trim(); if(x) cands.push(x); });
    if(S.lang==="en" && base) cands = cands.concat(enForms(base.toLowerCase()));
    cands = [...new Set(cands)].filter(Boolean).sort((a,b)=>b.length-a.length);
    for(const c of cands){
      const esc=c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
      const latin=/^[A-Za-z' -]+$/.test(c);
      const re=new RegExp(latin?("\\b"+esc+"\\b"):esc,"i");
      if(re.test(text)) return text.replace(re, m=>`<b class="hl">${m}</b>`);
    }
    return text;
  }
  function renderShadow(){
    const items = session.shadowItems||[];
    if(!items.length || session.shadowIdx>=items.length){ finishDay(); return; }
    const s = items[session.shadowIdx];
    session.curSentence = s;
    const w = wordById[s.wordId];
    // 記録（まとめ等で利用）
    const seen = S.wordSeenExprs[w.id]||[]; if(!seen.includes(s.exprId)){ seen.push(s.exprId); S.wordSeenExprs[w.id]=seen; save(); }
    $("#shadowProg").textContent = `(${session.shadowIdx+1}/${items.length})`;
    const ex = exprById[s.exprId];
    $("#shadowExpr").textContent = ex ? ex.jp : "";
    $("#shadowEn").innerHTML = highlightWord(sEN(s), w, s.hl);
    $("#shadowRoma").textContent = sRoma(s);
    $("#shadowJp").textContent = sJP(s);
    $("#shadowPrev").style.visibility = session.shadowIdx===0?"hidden":"visible";
    $("#shadowNext").textContent = session.shadowIdx===items.length-1?"完了 →":"次へ →";
    speak(sEN(s));
  }
  /* ---------- 例文クイズ（日本語 → 対象言語） ----------
   * その日の例文（各単語1文）を、日本語を見て対象言語で言う練習。答えをみるで表示。
   */
  function renderExQuiz(){
    const items = session.shadowItems||[];
    if(!items.length){ goHome(); return; }
    if(session.exqIdx>=items.length){        // 完了
      session.exqDone = true;
      $("#exqProg").textContent = "";
      $("#exqJp").textContent = "🎉 例文クイズ完了！おつかれさま。";
      $("#exqExpr").textContent = "";
      $("#exqAnswer").classList.add("hidden"); $("#exqAnswer").innerHTML="";
      $("#exqRoma").textContent = "";
      $("#exqReveal").classList.add("hidden");
      $("#exqAfter").classList.remove("hidden");
      $("#exqPlay").style.display = "none";
      $("#exqNext").textContent = "ホームへ →";
      return;
    }
    session.exqDone = false;
    const s = items[session.exqIdx]; session.exqCur = s;
    $("#exqProg").textContent = `(${session.exqIdx+1}/${items.length})`;
    $("#exqJp").textContent = sJP(s);
    const ex = exprById[s.exprId]; $("#exqExpr").textContent = ex?ex.jp:"";
    $("#exqAnswer").classList.add("hidden"); $("#exqAnswer").innerHTML="";
    $("#exqRoma").textContent = "";
    $("#exqReveal").classList.remove("hidden");
    $("#exqAfter").classList.add("hidden");
    $("#exqPlay").style.display = "";
    $("#exqNext").textContent = session.exqIdx===items.length-1 ? "完了 →" : "次へ →";
  }
  $("#exqRevealBtn").onclick = ()=>{
    const s = session.exqCur; if(!s) return;
    const w = wordById[s.wordId];
    $("#exqAnswer").innerHTML = highlightWord(sEN(s), w, s.hl);
    $("#exqAnswer").classList.remove("hidden");
    $("#exqRoma").textContent = sRoma(s);
    $("#exqReveal").classList.add("hidden");
    $("#exqAfter").classList.remove("hidden");
    speak(sEN(s));
  };
  $("#exqPlay").onclick = ()=> session.exqCur && speak(sEN(session.exqCur));
  $("#exqNext").onclick = ()=>{ if(session.exqDone){ goHome(); return; } session.exqIdx++; renderExQuiz(); };

  $("#shadowPlay").onclick = ()=> session.curSentence && speak(sEN(session.curSentence));
  $("#shadowSlow").onclick = ()=> session.curSentence && speak(sEN(session.curSentence), 0.7);
  $("#shadowPrev").onclick = ()=>{ if(session.shadowIdx>0){session.shadowIdx--; renderShadow();} };
  $("#shadowNext").onclick = ()=>{
    if(session.shadowIdx < (session.shadowItems||[]).length-1){ session.shadowIdx++; renderShadow(); }
    else finishDay();
  };

  /* ---------- 完了 ---------- */
  function finishDay(){
    showStage("done");
    $("#doneMsg").textContent =
      `Day ${S.day} 完了！ 新規${session.newWords.length}語 / 累計${S.learnedWordIds.length}語。おつかれさま！`;
  }
  function goNextDay(){ S.day++; save(); session=null; goHome(); }
  $("#nextDayBtn").onclick = goNextDay;
  $("#doneHomeBtn").onclick = goHome;
  $("#repeatShadowBtn").onclick = ()=>{ // その日の例文をもう一度（同じ例文を頭から）
    if(!session || !(session.shadowItems||[]).length) ensureSession();
    if(session && (session.shadowItems||[]).length){ session.shadowIdx=0; showStage("shadow"); renderShadow(); }
    else { alert("この言語では今日の例文が見つかりませんでした。"); }
  };
  function buildSessionReview(){
    // 直近学習語で復習セッション（新規追加なし）
    const recent = S.learnedWordIds.slice(-S.newCount).map(id=>wordById[id]).filter(Boolean);
    session = { day:S.day, newWords:recent, review:[],
      shadowItems:buildShadowItems(recent),
      introIdx:0, shadowIdx:0, quizQueue:[], quizDone:0, quizTotal:0 };
    session.quizQueue = buildQuizCards(recent);
    session.quizTotal = session.quizQueue.length;
  }

  /* ---------- ホーム / パート起動 ---------- */
  function totalDays(){ return Math.ceil(WORDS.filter(w=>!w.skip).length / S.newCount); }
  function buildDaySelect(){
    const sel=$("#daySelect"); if(!sel) return;
    const td=totalDays();
    sel.innerHTML="";
    for(let n=1;n<=td;n++){ const o=document.createElement("option"); o.value=n; o.textContent="Day "+n; sel.appendChild(o); }
    sel.value=Math.min(S.day, td);
  }
  // 指定した日にジャンプ（それ以前の単語を学習済みにする）
  function jumpToDay(n){
    const pool=WORDS.filter(w=>!w.skip);
    S.day=n;
    S.learnedWordIds=pool.slice(0,(n-1)*S.newCount).map(w=>w.id);
    session=null; save(); goHome();
  }
  function goHome(){
    showStage("home");
    $("#dayBadge").textContent = "Day "+S.day;
    $("#learnedCount").textContent = S.learnedWordIds.length;
    const pool = WORDS.filter(w=>!w.skip);
    const remaining = pool.filter(w=>!S.learnedWordIds.includes(w.id)).length;
    $("#todayNew").textContent = Math.min(S.newCount, remaining);
    $("#barFill").style.width = Math.round(S.learnedWordIds.length/pool.length*100)+"%";
    buildDaySelect();
  }
  $("#daySelect").onchange = e=>jumpToDay(+e.target.value);
  // 単語パート: 導入 → クイズ
  $("#startWordsBtn").onclick = ()=>{
    ensureSession(); session.introIdx=0; showStage("intro"); renderIntro();
  };
  // 例文パート: 例文のみ
  $("#startExamplesBtn").onclick = ()=>{
    ensureSession(); session.shadowIdx=0; showStage("shadow"); renderShadow();
  };
  // 例文クイズ: 日本語→対象言語
  $("#startExQuizBtn").onclick = ()=>{
    ensureSession(); session.exqIdx=0; session.exqDone=false; showStage("exquiz"); renderExQuiz();
  };
  $("#homeNextDayBtn").onclick = goNextDay;
  $("#toExamplesBtn").onclick = ()=>{ session.shadowIdx=0; showStage("shadow"); renderShadow(); };
  $("#wordHomeBtn").onclick = goHome;

  /* ---------- まとめビュー ---------- */
  $$(".seg-btn").forEach(b=>b.onclick=()=>{
    $$(".seg-btn").forEach(x=>x.classList.remove("active")); b.classList.add("active");
    renderSummary(b.dataset.sum);
  });
  function renderSummary(kind){
    kind = kind || ($(".seg-btn.active")||{}).dataset?.sum || "vocab";
    const box=$("#summaryBody"); box.innerHTML="";
    if(kind==="vocab"){
      const cats=[...new Set(WORDS.map(w=>w.cat))];
      cats.forEach(cat=>{
        const h=document.createElement("h3"); h.textContent=cat; box.appendChild(h);
        WORDS.filter(w=>w.cat===cat).forEach(w=>{
          const row=document.createElement("div"); row.className="sum-item";
          row.innerHTML=`<span class="sum-jp">${jpOf(w)}</span>
            <span class="sum-en">${tW(w)} ${tNote(w)?`<small>(${tNote(w)})</small>`:""}
            <button class="mini-speak">🔊</button></span>`;
          row.querySelector(".mini-speak").onclick=()=>speak(tW(w));
          box.appendChild(row);
        });
      });
    }else{
      const cats=[...new Set(EXPR.map(e=>e.cat))];
      cats.forEach(cat=>{
        const h=document.createElement("h3"); h.textContent=cat; box.appendChild(h);
        EXPR.filter(e=>e.cat===cat).forEach(e=>{
          const ex = SENT.find(s=>s.exprId===e.id && sEN(s));
          const g = (e.tr[S.lang]||{}).g;
          const row=document.createElement("div");
          row.innerHTML=`<div class="sum-item"><span class="sum-jp">${e.jp}</span>
            <span class="sum-en expr-tmpl">${tTmpl(e)} <button class="mini-speak">🔊</button></span></div>
            ${ex?`<div class="expr-ex">例) ${sEN(ex)} — ${sJP(ex)}</div>`:""}
            ${g?`<div class="expr-gram">📝 ${g}</div>`:""}`;
          row.querySelector(".mini-speak").onclick=()=>speak(tTmpl(e).replace(/\{W\}/g,""));
          box.appendChild(row);
        });
      });
    }
  }

  /* ---------- 設定 ---------- */
  function buildLangOptions(){
    const sel=$("#langSelect"); sel.innerHTML="";
    Object.entries(LANGS).forEach(([k,v])=>{
      const o=document.createElement("option"); o.value=k; o.textContent=v.label; sel.appendChild(o);
    });
    sel.value=S.lang;
  }
  function buildVoiceOptions(){
    const sel=$("#voiceSelect"); if(!sel) return;
    const lang=(LANGS[S.lang]||{}).voiceLang||"en";
    const vs=voices.filter(v=>v.lang && v.lang.startsWith(lang.slice(0,2)));
    sel.innerHTML="";
    const auto=document.createElement("option"); auto.value=""; auto.textContent="自動（おすすめ）"; sel.appendChild(auto);
    vs.forEach(v=>{ const o=document.createElement("option"); o.value=v.name; o.textContent=`${v.name} (${v.lang})`; sel.appendChild(o); });
    sel.value=S.voiceName;
  }
  $("#langSelect").onchange=e=>{ S.lang=e.target.value; S.voiceName=""; save(); buildVoiceOptions(); goHome(); };
  $("#newCountSelect").onchange=e=>{ S.newCount=+e.target.value; save(); goHome(); };
  $("#voiceSelect").onchange=e=>{ S.voiceName=e.target.value; save(); };
  $("#rateRange").oninput=e=>{ S.rate=+e.target.value; $("#rateVal").textContent=S.rate.toFixed(1); };
  $("#rateRange").onchange=save;
  $("#testVoice").onclick=()=>speak("Hi! This is a voice test.");
  $("#resetBtn").onclick=()=>{
    if(confirm("進捗をすべてリセットしますか？（Day1に戻ります）")){ S=defState(); save(); initSettingsUI(); goHome(); }
  };
  function initSettingsUI(){
    buildLangOptions();
    $("#newCountSelect").value=String(S.newCount);
    $("#rateRange").value=S.rate; $("#rateVal").textContent=S.rate.toFixed(1);
    buildVoiceOptions();
  }

  /* ---------- 起動 ---------- */
  initSettingsUI();
  goHome();
})();
