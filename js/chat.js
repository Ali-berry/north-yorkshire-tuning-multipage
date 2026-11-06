// NYT assistant: API-first (Groq via Supabase), fallback to local rules. Call/WhatsApp CTA har reply ke saath.
const NYT_CHAT = [{"keys": ["stage 1", "stage1", "remap", "remapping", "tune", "tuning", "power", "mpg", "fuel economy", "performance"], "reply": "Stage 1 Remapping starts from £200. <a href=\"@/services.html#stage-1-remapping\">More about Stage 1 Remapping</a>."}, {"keys": ["stage 2", "stage2", "hardware", "downpipe", "intake", "exhaust upgrade"], "reply": "Stage 2 Remapping starts from £250. <a href=\"@/services.html#stage-2-remapping\">More about Stage 2 Remapping</a>."}, {"keys": ["egr", "limp mode", "warning light", "smoke"], "reply": "EGR Solutions starts from £150. <a href=\"@/services.html#egr-solutions\">More about EGR Solutions</a>."}, {"keys": ["dpf", "regen", "regeneration", "blocked filter", "diesel particulate"], "reply": "DPF Solutions starts from £150. <a href=\"@/services.html#dpf-solutions\">More about DPF Solutions</a>."}, {"keys": ["adblue", "ad blue", "def", "scr delete"], "reply": "AdBlue Solutions starts from £150. <a href=\"@/services.html#adblue-solutions\">More about AdBlue Solutions</a>."}, {"keys": ["nox", "n o x"], "reply": "NOx Solutions starts from £150. <a href=\"@/services.html#nox-solutions\">More about NOx Solutions</a>."}, {"keys": ["swirl flap", "scr", "lambda", "o2 sensor", "cat delete"], "reply": "Other Emissions Software Solutions starts from £150. <a href=\"@/services.html#other-emissions-software\">More about Other Emissions Software Solutions</a>."}, {"keys": ["diagnostic", "fault code", "dtc", "scan", "obd"], "reply": "Diagnostics starts from £40. <a href=\"@/services.html#diagnostics\">More about Diagnostics</a>."}, {"keys": ["coding", "code", "dash", "retrofit", "adapt", "immo"], "reply": "ECU &amp; Dash Coding starts from £40. <a href=\"@/services.html#ecu-coding\">More about ECU &amp; Dash Coding</a>."}, {"keys": ["launch", "launch control"], "reply": "Launch Control starts from quote on request. <a href=\"@/services.html#launch-control\">More about Launch Control</a>."}, {"keys": ["pops", "bangs", "crackle", "overrun"], "reply": "Pops &amp; Bangs starts from quote on request. <a href=\"@/services.html#pops-bangs\">More about Pops &amp; Bangs</a>."}, {"keys": ["speed limiter", "limiter remove", "limiter removal"], "reply": "Speed Limiter Removal starts from quote on request. <a href=\"@/services.html#speed-limiter-removal\">More about Speed Limiter Removal</a>."}, {"keys": ["rev cut", "hard cut", "rev limit"], "reply": "Hard Rev Cut starts from quote on request. <a href=\"@/services.html#hard-rev-cut\">More about Hard Rev Cut</a>."}, {"keys": ["what do you do", "what services", "offer", "list services", "all services"], "reply": "We cover: Stage 1 Remapping, Stage 2 Remapping, EGR Solutions, DPF Solutions, AdBlue Solutions, NOx Solutions, Diagnostics, ECU Coding, plus other emissions software and performance work."}, {"keys": ["price", "prices", "cost", "how much", "pricing", "quote"], "reply": "Stage 1 and Stage 2 remaps start from £200. EGR, DPF and AdBlue solutions start from £150. Diagnostics and ECU coding start from £40. The exact price depends on your vehicle, so send the reg for a free quote."}, {"keys": ["area", "areas", "cover", "location", "where", "come to", "travel", "york", "leeds", "harrogate", "selby", "wetherby", "thirsk"], "reply": "We're mobile across North Yorkshire: York, Leeds, Harrogate, Selby, Wetherby, Thirsk, Garforth, Knaresborough, Tadcaster, Castleford, Pontefract, Goole, Easingwold, Hambleton, Monk Fryston, South Milford, Church Fenton, Sherburn in Elmet, Great Preston, Little Preston, Kippax, and the wider North Yorkshire region. Not sure if we cover you? Ask and we'll tell you."}, {"keys": ["mobile", "come to me", "come to my", "home", "driveway", "workshop"], "reply": "Yes, we're fully mobile. We come to your home, workplace or driveway across North Yorkshire."}, {"keys": ["hour", "open", "opening", "when are you", "time", "today"], "reply": "Our opening hours are Monday to Friday: 8:30am to 6pm; Saturday and Sunday: 10am to 4pm."}, {"keys": ["payment", "pay", "finance", "monthly", "instalment", "installment", "pay in 4", "payment assist", "klarna"], "reply": "Spread the cost at 0% interest with Payment Assist. Pay a quarter on the day, then 3 monthly payments (for a £200 job: £50 on the day plus 3 × £50). Soft credit check only, won't affect your credit score. Subject to status, credit and affordability checks."}, {"keys": ["soft", "credit check", "credit score"], "reply": "Payment Assist uses a soft credit check only, which doesn't affect your credit score. Subject to status, credit and affordability checks."}, {"keys": ["reverse", "reversal", "stock", "original", "original map", "warranty check", "warranty", "dealer"], "reply": "Yes. We save your original map before any remap and we can reverse it back to stock on request, for example before a warranty check or dealer visit."}, {"keys": ["how long", "take", "duration", "minutes", "hours does"], "reply": "Most OBD remaps take one to two hours. Bench and boot tuning take longer because the ECU is accessed directly."}, {"keys": ["review", "rating", "google", "trust", "good"], "reply": "We're rated 5.0 on Google. Customers mention our EGR solutions, Stage 1 remaps and dash coding. You can read the reviews on our Google profile."}, {"keys": ["oil change", "oil ", "servicing", "service car", "mot", "brakes", "tyres", "tires"], "reply": "We don't do oil changes or general servicing. We specialise in ECU remapping, emissions solutions, diagnostics and coding. Call or WhatsApp us if you're not sure whether we can help."}, {"keys": ["book", "appointment", "slot", "available", "contact", "phone", "call", "whatsapp", "email", "number"], "reply": "Call or text 07533 761889, message us on WhatsApp, or use the contact form. Send your reg and what you need."}];
const NYT_CONTACT = {"phone": "07533 761889", "phoneLink": "+447533761889", "whatsapp": "447533761889", "email": "Northyorkshiretuning@gmail.com", "apiUrl": "https://xiispwuvecvvsjpbehdr.supabase.co/functions/v1/nyt-chat", "apiTimeoutMs": 7000};

function setupNytChat() {
  const launcher = document.querySelector("[data-chat-open]");
  const panel = document.querySelector("[data-chat]");
  if (!launcher || !panel) return;
  const log = panel.querySelector(".chat__log");
  const base = (document.querySelector('script[src$="chat.js"]').src || "").replace(/js\/chat\.js.*$/, "");
  const form = panel.querySelector(".chat__form");
  const input = form.querySelector("input");
  const sendBtn = form.querySelector("button[type=submit]");
  const history = [];
  let busy = false;

  const esc = (s) => s.replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const contactRow = () =>
    `<div class="chat__cta"><a href="tel:${NYT_CONTACT.phoneLink}" aria-label="Call ${NYT_CONTACT.phone}">` +
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 13 13 0 0 0 .7 2.8 2 2 0 0 1-.4 2.1L8 10a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4 13 13 0 0 0 2.8.7 2 2 0 0 1 1.7 2z"/></svg>` +
    `<span>Call</span></a>` +
    `<a href="https://wa.me/${NYT_CONTACT.whatsapp}" target="_blank" rel="noopener">` +
    `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11 11 0 0 0 3 17.1L2 22l5-1a11 11 0 0 0 13.5-17.5zM12 20a9 9 0 0 1-4.6-1.3l-.3-.2-3 .6.6-2.9-.2-.3A9 9 0 1 1 12 20zm5-6.6c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.1-.3.2-.5 0-.3-.1-1.2-.4-2.3-1.4-.9-.7-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.2-.5.1-.2 0-.3 0-.5l-.9-2c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2.1 3.2 5.1 4.4.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.2-1.3-.1-.1-.3-.2-.6-.3z"/></svg>` +
    `<span>WhatsApp</span></a></div>`;

  function addBubble(html, who) {
    const bubble = document.createElement("div");
    bubble.className = "msg msg--" + who;
    bubble.innerHTML = html.replaceAll('href="@/', 'href="' + base);
    log.appendChild(bubble);
    log.scrollTop = log.scrollHeight;
    return bubble;
  }

  function showTyping() {
    const row = document.createElement("div");
    row.className = "msg msg--bot msg--typing";
    row.innerHTML = '<span class="typ"><i></i><i></i><i></i></span>';
    log.appendChild(row);
    log.scrollTop = log.scrollHeight;
    return row;
  }

  function localAnswer(question) {
    const text = " " + question.toLowerCase() + " ";
    let best = null, bestScore = 0;
    NYT_CHAT.forEach((entry) => {
      const score = entry.keys.reduce((sum, key) => (text.includes(key) ? sum + key.length : sum), 0);
      if (score > bestScore) { best = entry; bestScore = score; }
    });
    return best ? best.reply : "Good question. The quickest way to get the right answer is to speak to us directly.";
  }

  async function apiAnswer(question) {
    const ctrl = new AbortController();
    const to = setTimeout(() => ctrl.abort(), NYT_CONTACT.apiTimeoutMs || 7000);
    try {
      const r = await fetch(NYT_CONTACT.apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question, history: history.slice(-6) }),
        signal: ctrl.signal,
      });
      if (!r.ok) return null;
      const j = await r.json();
      const reply = (j && j.reply || "").trim();
      return reply || null;
    } catch (_) { return null; }
    finally { clearTimeout(to); }
  }

  async function ask(question) {
    const q = question.trim();
    if (!q || busy) return;
    busy = true;
    sendBtn.disabled = true;
    addBubble(esc(q), "user");
    history.push({ role: "user", content: q });
    const typing = showTyping();

    let reply = await apiAnswer(q);
    const usedFallback = !reply;
    if (!reply) reply = localAnswer(q);

    typing.remove();
    // turn URLs/newlines in model output into safe html (bot wrappers already send plain text)
    const body = usedFallback ? reply : esc(reply).replace(/\n/g, "<br>");
    addBubble(body + contactRow(), "bot");
    history.push({ role: "assistant", content: reply });
    busy = false;
    sendBtn.disabled = false;
    input.focus();
  }

  function openChat() {
    panel.classList.add("is-open");
    launcher.setAttribute("aria-expanded", "true");
    if (!log.children.length) {
      addBubble("Hi 👋 Ask me about our services, prices, areas we cover, opening hours or payment options.", "bot");
    }
    setTimeout(() => input.focus(), 160);
  }
  function closeChat() {
    panel.classList.remove("is-open");
    launcher.setAttribute("aria-expanded", "false");
    launcher.focus();
  }

  launcher.addEventListener("click", () => (panel.classList.contains("is-open") ? closeChat() : openChat()));
  panel.querySelector("[data-chat-close]").addEventListener("click", closeChat);
  panel.addEventListener("keydown", (event) => { if (event.key === "Escape") closeChat(); });
  panel.querySelectorAll("[data-chip]").forEach((chip) => chip.addEventListener("click", () => ask(chip.textContent)));
  form.addEventListener("submit", (event) => { event.preventDefault(); const v = input.value; input.value = ""; ask(v); });
}

document.addEventListener("DOMContentLoaded", setupNytChat);
