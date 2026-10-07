const translations = {
  en: {
    skip:"Skip to content", language_label:"Language", nav_focus:"Focus", nav_projects:"Projects", nav_mission:"Mission", nav_contact:"Contact",
    hero_eyebrow:"Independent technology & research initiative",
    hero_title:"Building and studying systems at the intersection of computing, engineering, and science.",
    hero_copy:"Sooneoo is an independent initiative for long-horizon technical work: designing software, exploring new computational models, and turning research ideas into testable systems.",
    hero_projects:"Explore projects", signal_1:"research → implementation", signal_2:"claims → evidence", signal_3:"design → measurement",
    focus_eyebrow:"Focus", focus_title:"Research through implementation.", focus_compute_title:"Computing", focus_compute_text:"Programming systems, execution models, runtimes, compilers, and software architecture.",
    focus_engineering_title:"Engineering", focus_engineering_text:"Building concrete implementations that make technical ideas measurable, inspectable, and reproducible.",
    focus_science_title:"Science", focus_science_text:"Using experiments, benchmarks, and explicit assumptions to separate working results from future hypotheses.",
    projects_eyebrow:"Projects", projects_title:"Current work.", projects_note:"More projects will be added as they become ready for public presentation.",
    soo_label:"01 / active development", soo_version:"Current documented version: 1.17.0", soo_lead:"Soo is a statically analyzed functional/declarative programming language built around a graph execution model.",
    soo_impl_title:"Current implementation", soo_impl_text:"<code>libsoo</code> provides the frontend and a target-independent middle-end. <code>DFRM</code> is the current reference interpreter/backend for evaluating verified Soo graphs.",
    soo_stage_title:"Development stage", soo_stage_text:"The language, runtime, standard library, and reference backend are under active development. The current implementation is a working research system rather than a finished production platform.",
    soo_scope_title:"Scope boundary", soo_scope_text:"Native acceleration, accelerator providers, and multi-device execution exist in future design work, not as capabilities of the current DFRM backend.",
    soo_evidence:"Public technical claims on this site are intentionally limited to behavior documented and verified in the current project sources.",
    mission_eyebrow:"About / Mission", mission_title:"Make ambitious technical ideas concrete enough to test.",
    mission_text_1:"Sooneoo exists to pursue technical and research projects without forcing them into a short-term product narrative. The goal is to build understandable systems, measure what actually works, and publish results when the evidence is strong enough.",
    mission_text_2:"We prefer precise documentation, reproducible demonstrations, and explicit limitations over broad claims. Research direction comes first; communication follows the technology.",
    next_eyebrow:"Next", next_title:"A place for evidence.", next_note:"The site is structured to grow with the work, not ahead of it.",
    future_bench_title:"Benchmarks", future_bench_text:"Measured performance and methodology when results are ready to publish.",
    future_notes_title:"Research notes", future_notes_text:"Technical explanations, architecture decisions, and experimental findings.",
    future_updates_title:"Project updates", future_updates_text:"Verified milestones, releases, demonstrations, and changes in project status.",
    contact_eyebrow:"Contact", contact_title:"Technical discussion, research, and collaboration.", contact_text:"For now, the public point of contact is the Sooneoo GitHub profile.",
    footer_text:"Independent technology & research initiative"
  },
  cs: {
    skip:"Přeskočit na obsah", language_label:"Jazyk", nav_focus:"Zaměření", nav_projects:"Projekty", nav_mission:"Mise", nav_contact:"Kontakt",
    hero_eyebrow:"Nezávislá technologická a výzkumná iniciativa",
    hero_title:"Tvoříme a zkoumáme systémy na průsečíku computingu, engineeringu a vědy.",
    hero_copy:"Sooneoo je nezávislá iniciativa pro dlouhodobou technickou práci: návrh softwaru, zkoumání nových výpočetních modelů a převádění výzkumných myšlenek do testovatelných systémů.",
    hero_projects:"Prozkoumat projekty", signal_1:"výzkum → implementace", signal_2:"tvrzení → důkaz", signal_3:"návrh → měření",
    focus_eyebrow:"Zaměření", focus_title:"Výzkum skrze implementaci.", focus_compute_title:"Computing", focus_compute_text:"Programovací systémy, exekuční modely, runtimy, kompilátory a softwarová architektura.",
    focus_engineering_title:"Engineering", focus_engineering_text:"Tvorba konkrétních implementací, které umožňují technické myšlenky měřit, zkoumat a reprodukovat.",
    focus_science_title:"Věda", focus_science_text:"Experimenty, benchmarky a explicitní předpoklady, které oddělují fungující výsledky od budoucích hypotéz.",
    projects_eyebrow:"Projekty", projects_title:"Aktuální práce.", projects_note:"Další projekty budou přidány ve chvíli, kdy budou připravené k veřejné prezentaci.",
    soo_label:"01 / aktivní vývoj", soo_version:"Aktuální dokumentovaná verze: 1.17.0", soo_lead:"Soo je staticky analyzovaný funkcionální/deklarativní programovací jazyk postavený kolem grafového exekučního modelu.",
    soo_impl_title:"Současná implementace", soo_impl_text:"<code>libsoo</code> poskytuje frontend a target-independent middle-end. <code>DFRM</code> je současný referenční interpreter/backend pro vyhodnocování ověřených Soo grafů.",
    soo_stage_title:"Fáze vývoje", soo_stage_text:"Jazyk, runtime, standardní knihovna a referenční backend jsou v aktivním vývoji. Současná implementace je funkční výzkumný systém, nikoli hotová produkční platforma.",
    soo_scope_title:"Hranice současného rozsahu", soo_scope_text:"Nativní akcelerace, accelerator providers a multi-device execution existují v budoucím návrhu, nikoli jako schopnosti současného DFRM backendu.",
    soo_evidence:"Veřejná technická tvrzení na tomto webu záměrně omezujeme na chování doložené a ověřené v aktuálních zdrojích projektu.",
    mission_eyebrow:"O nás / Mise", mission_title:"Převádět ambiciózní technické myšlenky do podoby, kterou lze testovat.",
    mission_text_1:"Sooneoo vzniklo pro technické a výzkumné projekty bez tlaku na krátkodobý produktový příběh. Cílem je stavět srozumitelné systémy, měřit co skutečně funguje a zveřejňovat výsledky až tehdy, když jsou dostatečně podložené.",
    mission_text_2:"Upřednostňujeme přesnou dokumentaci, reprodukovatelné demonstrace a explicitní omezení před širokými tvrzeními. Směr výzkumu je první; komunikace následuje technologii.",
    next_eyebrow:"Dále", next_title:"Prostor pro důkazy.", next_note:"Web je navržen tak, aby rostl spolu s výsledky, ne před nimi.",
    future_bench_title:"Benchmarky", future_bench_text:"Měřený výkon a metodika ve chvíli, kdy budou výsledky připravené ke zveřejnění.",
    future_notes_title:"Výzkumné poznámky", future_notes_text:"Technická vysvětlení, architektonická rozhodnutí a experimentální zjištění.",
    future_updates_title:"Aktuality projektů", future_updates_text:"Ověřené milníky, releasy, demonstrace a změny stavu projektů.",
    contact_eyebrow:"Kontakt", contact_title:"Technická diskuse, výzkum a spolupráce.", contact_text:"Veřejným kontaktním bodem je zatím GitHub profil Sooneoo.",
    footer_text:"Nezávislá technologická a výzkumná iniciativa"
  }
};
function applyLanguage(lang){
  const dict=translations[lang]||translations.en;
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(dict[k])el.textContent=dict[k]});
  document.querySelectorAll("[data-i18n-html]").forEach(el=>{const k=el.dataset.i18nHtml;if(dict[k])el.innerHTML=dict[k]});
  document.querySelectorAll("[data-lang]").forEach(btn=>btn.classList.toggle("active",btn.dataset.lang===lang));
  localStorage.setItem("sooneoo-lang",lang);
}
document.querySelectorAll("[data-lang]").forEach(btn=>btn.addEventListener("click",()=>applyLanguage(btn.dataset.lang)));
const saved=localStorage.getItem("sooneoo-lang");
const preferred=(navigator.language||"").toLowerCase().startsWith("cs")?"cs":"en";
applyLanguage(saved||preferred);