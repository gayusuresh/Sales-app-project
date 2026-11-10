import { useMemo, useState } from "react";
import { COURSES, FAQS, TABS } from "./faqData.js";

const LANGS = [
  { id: "en", label: "English" },
  { id: "ta", label: "தமிழ்" },
  { id: "ml", label: "മലയാളം" },
];
const UI = {
  en: { title: "Entri FAQ ", sub: "Quick, honest answers for students on a call or walk-in. Tap a question, read the answer aloud or copy it.", ph: "Search: fees, job, non-IT, laptop...", tip: "Counselor tip", copy: "Copy answer", copied: "Copied", none: 'No match. Try a shorter word like "fee" or "job".', n: "questions" },
  ta: { title: "கவுன்சிலர் FAQ மேசை", sub: "அழைப்பிலோ நேரிலோ வரும் மாணவர்களுக்கு விரைவான, நேர்மையான பதில்கள். கேள்வியைத் தொடவும்; பதிலை வாசிக்கவும் அல்லது நகலெடுக்கவும்.", ph: "தேடு: fees, job, non-IT, laptop...", tip: "கவுன்சிலர் குறிப்பு", copy: "பதிலை நகலெடு", copied: "நகலெடுக்கப்பட்டது", none: "பொருத்தம் இல்லை. 'fee' அல்லது 'job' போன்ற சிறிய சொல்லை முயற்சிக்கவும்.", n: "கேள்விகள்" },
  ml: { title: "കൗൺസിലർ FAQ ഡെസ്ക്", sub: "ഫോണിലോ നേരിട്ടോ വരുന്ന വിദ്യാർത്ഥികൾക്ക് വേഗത്തിലുള്ള, സത്യസന്ധമായ മറുപടികൾ. ചോദ്യം തൊടുക; ഉത്തരം വായിക്കുക അല്ലെങ്കിൽ പകർത്തുക.", ph: "തിരയുക: fees, job, non-IT, laptop...", tip: "കൗൺസിലർ നിർദ്ദേശം", copy: "ഉത്തരം പകർത്തുക", copied: "പകർത്തി", none: "പൊരുത്തമില്ല. 'fee' അല്ലെങ്കിൽ 'job' പോലുള്ള ചെറിയ വാക്ക് ശ്രമിക്കുക.", n: "ചോദ്യങ്ങൾ" },
};

// view of one FAQ in one language: en lives at the top level, ta/ml are nested
const pick = (f, l) => (l === "en" ? f : f[l]);

export default function App() {
  const [langs, setLangs] = useState(["en", "ta"]); // multi-select, at least one
  const [cat, setCat] = useState("all");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(null);
  const [copied, setCopied] = useState(null);

  const shown = LANGS.filter((l) => langs.includes(l.id)).map((l) => l.id);
  const uiLang = shown[0];
  const ui = UI[uiLang];

  const toggleLang = (id) =>
    setLangs((cur) => (cur.includes(id) ? (cur.length > 1 ? cur.filter((x) => x !== id) : cur) : [...cur, id]));

  const list = useMemo(() => {
    const t = query.trim().toLowerCase();
    return FAQS.filter(
      (f) =>
        (cat === "all" || f.c === cat) &&
        (!t || [f.q + f.a, f.ta.q + f.ta.a, f.ml.q + f.ml.a].join(" ").toLowerCase().includes(t))
    );
  }, [cat, query]);

  const copy = async (f, i) => {
    const text = shown.map((l) => pick(f, l).a).join("\n\n");
    try { await navigator.clipboard.writeText(text); setCopied(i); setTimeout(() => setCopied(null), 1500); }
    catch { /* clipboard unavailable */ }
  };

  return (
    <div className="page">
      <header className="top">
        <div className="langs" role="group" aria-label="Languages (select one or more)">
          {LANGS.map((l) => (
            <button key={l.id} aria-pressed={langs.includes(l.id)}
              className={langs.includes(l.id) ? "lang on" : "lang"} onClick={() => toggleLang(l.id)}>
              {l.label}
            </button>
          ))}
        </div>
        <h1>{ui.title}</h1>
        <p>{ui.sub}</p>
        <input className="search" type="search" placeholder={ui.ph} value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(null); }} aria-label="Search" />
      </header>

      <nav className="tabs" aria-label="Topics">
        {COURSES.map((c) => (
          <button key={c.id} className={c.id === cat ? "tab on" : "tab"}
            onClick={() => { setCat(c.id); setOpen(null); }}>
            {uiLang === "en" ? c.label : TABS[uiLang][c.id]}
          </button>
        ))}
      </nav>

      <main>
        <p className="count">{list.length} {ui.n}</p>
        {list.length === 0 && <p className="empty">{ui.none}</p>}
        {list.map((f, i) => {
          const isOpen = open === i;
          return (
            <article key={f.q} className={isOpen ? "item open" : "item"}>
              <button className="q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
                <span>
                  {shown.map((l, k) => (
                    <span key={l} className={k ? "line sub" : "line"} lang={l}>{pick(f, l).q}</span>
                  ))}
                </span>
                <span className="chev" aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="a">
                  {shown.map((l, k) => (
                    <p key={l} lang={l} className={k ? "alt" : ""}>{pick(f, l).a}</p>
                  ))}
                  {f.tip && (
                    <div className="tip">
                      <strong>{ui.tip}</strong>
                      {shown.map((l) => <p key={l} lang={l}>{pick(f, l).tip}</p>)}
                    </div>
                  )}
                  <button className="copy" onClick={() => copy(f, i)}>{copied === i ? ui.copied : ui.copy}</button>
                </div>
              )}
            </article>
          );
        })}
      </main>
    </div>
  );
}
