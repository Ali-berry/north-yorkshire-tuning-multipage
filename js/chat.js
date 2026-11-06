// NYT assistant: koi AI nahi, sirf website ke content se jawab, phir Call / WhatsApp
const NYT_CHAT = [{"keys": ["stage 1", "stage one", "remap", "remapping", "tune", "tuning", "power", "bhp", "torque", "mpg", "economy"], "reply": "<strong>Stage 1 Remapping</strong> (From £200)<br>More power and torque from a standard vehicle, with sharper throttle response and often better fuel economy. <a href=\"@/services.html#stage-1-remapping\">More about Stage 1 Remapping</a>"}, {"keys": ["stage 2", "stage two", "downpipe", "intercooler", "intake", "exhaust upgrade", "hardware"], "reply": "<strong>Stage 2 Remapping</strong> (From £200)<br>For vehicles running upgraded parts like an intercooler, intake, downpipe or exhaust. <a href=\"@/services.html#stage-2-remapping\">More about Stage 2 Remapping</a>"}, {"keys": ["egr", "egr delete", "egr off"], "reply": "<strong>EGR Solutions</strong> (From £150)<br>EGR faults, smoke, limp mode and warning lights, with EGR solutions and EGR delete software available. <a href=\"@/services.html#egr-solutions\">More about EGR Solutions</a>"}, {"keys": ["dpf", "particulate", "regen", "regeneration", "dpf delete", "dpf off"], "reply": "<strong>DPF Solutions</strong> (From £150)<br>DPF warning light, blocked filters and failed regens, with DPF solutions and DPF delete software available. <a href=\"@/services.html#dpf-solutions\">More about DPF Solutions</a>"}, {"keys": ["adblue", "ad blue", "scr", "countdown", "no start", "adblue delete", "adblue off"], "reply": "<strong>AdBlue Solutions</strong> (From £150)<br>AdBlue and SCR warnings and the no-start countdown, with AdBlue solutions and AdBlue delete software available. <a href=\"@/services.html#adblue-solutions\">More about AdBlue Solutions</a>"}, {"keys": ["nox", "no x", "nox delete", "nox off"], "reply": "<strong>NOx Solutions</strong> (Price on request)<br>NOx sensor faults, warning lights and limp mode, with NOx solutions and NOx delete software available. <a href=\"@/services.html#nox-solutions\">More about NOx Solutions</a>"}, {"keys": ["diagnos", "fault", "warning light", "engine light", "code", "limp mode", "scan"], "reply": "<strong>Advanced Diagnostics</strong> (From £40)<br>A full scan of every control module, not just the engine, with fault codes and live data explained. <a href=\"@/services.html#advanced-diagnostics\">More about Advanced Diagnostics</a>"}, {"keys": ["coding", "code in", "battery", "retrofit", "injector"], "reply": "<strong>ECU Coding</strong> (From £40)<br>New parts registered to the vehicle, retrofits set up and factory settings switched on or off. <a href=\"@/services.html#ecu-coding\">More about ECU Coding</a>"}, {"keys": ["programming", "program", "replacement ecu", "new ecu", "second hand ecu", "used ecu"], "reply": "<strong>ECU Programming</strong> (Price on request)<br>Replacement, used and refurbished ECUs programmed and matched to your vehicle. <a href=\"@/services.html#ecu-programming\">More about ECU Programming</a>"}, {"keys": ["clone", "cloning", "faulty ecu", "water damage"], "reply": "<strong>ECU &amp; TCU Cloning</strong> (Price on request)<br>Everything copied from your faulty ECU or gearbox unit onto a replacement, so it just plugs in and works. <a href=\"@/services.html#ecu-tcu-cloning\">More about ECU &amp; TCU Cloning</a>"}, {"keys": ["tcu", "gearbox", "dsg", "automatic", "auto box"], "reply": "<strong>TCU Tuning</strong> (Price on request)<br>Automatic and DSG gearbox software tuned to handle and use the extra torque from a remap. <a href=\"@/services.html#tcu-tuning\">More about TCU Tuning</a>"}, {"keys": ["speed limit", "limiter", "vmax", "restricted"], "reply": "<strong>Speed Limiter Removal</strong> (Price on request)<br>Factory, fleet and lease speed limiters adjusted or removed in the engine software. <a href=\"@/services.html#speed-limiter-removal\">More about Speed Limiter Removal</a>"}, {"keys": ["mileage", "odometer", "cluster", "dash cluster"], "reply": "<strong>Mileage Correction</strong> (From £50)<br>Replacement clusters and ECUs set to the vehicle&#x27;s true mileage after a part swap. <a href=\"@/services.html#mileage-correction\">More about Mileage Correction</a>"}, {"keys": ["swirl", "lambda", "o2", "gpf", "opf", "dtc", "start stop", "start-stop", "emission"], "reply": "<strong>Other Emissions Software Solutions</strong> (Price on request)<br>Swirl flaps, lambda/O2 sensors, GPF/OPF, fault code deletes and more. Ask about your vehicle. <a href=\"@/services.html#other-emissions-software\">More about Other Emissions Software Solutions</a>"}, {"keys": ["service", "what do you do", "offer", "list", "services"], "reply": "Our main services are Stage 1 Remapping, Stage 2 Remapping, EGR Solutions, DPF Solutions, AdBlue Solutions, NOx Solutions. We also do diagnostics, ECU coding, programming, cloning, TCU tuning, speed limiter removal, mileage correction and other emissions software solutions."}, {"keys": ["delete", "off software"], "reply": "Yes, we offer DPF, EGR, AdBlue and NOx solutions, including delete software. Send us your reg and what you need for a price."}, {"keys": ["price", "cost", "how much", "£", "quote", "cheap", "charge"], "reply": "Stage 1 and Stage 2 remaps start from £200. EGR, DPF and AdBlue solutions start from £150. Diagnostics and ECU coding start from £40. The exact price depends on your vehicle, so send us your reg for a quote."}, {"keys": ["area", "where", "cover", "location", "come to", "near", "travel", "local", "north yorkshire", "york", "leeds", "harrogate", "selby", "wetherby", "thirsk", "garforth", "knaresborough", "tadcaster", "castleford", "pontefract", "goole", "easingwold", "hambleton", "monk fryston", "south milford", "church fenton", "sherburn in elmet", "great preston", "little preston", "kippax"], "reply": "We're fully mobile and cover York, Leeds, Harrogate, Selby, Wetherby, Thirsk, Garforth, Knaresborough, Tadcaster, Castleford, Pontefract, Goole, Easingwold, Hambleton, Monk Fryston, South Milford, Church Fenton, Sherburn in Elmet, Great Preston, Little Preston, Kippax, and the wider North Yorkshire region. Not listed? Contact us, we may still be able to come to you."}, {"keys": ["mobile", "come to me", "home", "work", "garage", "workshop", "driveway"], "reply": "Yes, we're fully mobile. Whether you're at home, at work or somewhere else, we come to you and carry out the work on site."}, {"keys": ["hour", "open", "time", "when", "today", "weekend", "sunday", "saturday"], "reply": "Our opening hours are Monday to Friday: 8:30am to 6pm; Saturday and Sunday: 10am to 4pm."}, {"keys": ["pay", "payment", "finance", "instal", "monthly", "spread", "payment assist", "pay in 4", "credit"], "reply": "<strong>Spread the cost at 0% interest with Payment Assist.</strong><br>Subject to status, credit and affordability checks. Terms and conditions apply. Late fees may apply.<br><br>Pay in 4 payments at 0% interest: your first payment on the day of the job, then three monthly payments. For example, a £200 job is £50 on the day, then £50 a month for the next 3 months. Payment Assist only carries out a soft credit check (quotation search) on each application. It won’t affect your credit score and isn’t visible to other lenders."}, {"keys": ["back to standard", "reverse", "original", "undo", "remove the remap", "put back", "stock"], "reply": "Yes. We save your vehicle&#x27;s original software before we make any changes. If for any reason you&#x27;re not happy with how it drives after the tune, we can put it back to the original factory settings."}, {"keys": ["how long", "take", "duration", "minutes", "hours does"], "reply": "Most OBD remaps take one to two hours. Bench and boot tuning take longer because the ECU is accessed directly."}, {"keys": ["review", "rating", "google", "trust", "good"], "reply": "We're rated 5.0 on Google. Customers mention our EGR solutions, Stage 1 remaps and dash coding. You can read the reviews on our Google profile."}, {"keys": ["oil change", "oil", "servicing", "mot", "brakes", "tyres"], "reply": "We don't do oil changes or general servicing. We specialise in ECU remapping, emissions solutions, diagnostics and coding. Call or WhatsApp us if you're not sure whether we can help."}, {"keys": ["book", "appointment", "slot", "available", "contact", "phone", "call", "whatsapp", "email", "number"], "reply": "Call or text 07533 761889, message us on WhatsApp, or use the contact form. Send your reg and what you need."}];
const NYT_CONTACT = {"phone": "07533 761889", "phoneLink": "+447533761889", "whatsapp": "447533761889", "email": "Northyorkshiretuning@gmail.com"};

function setupNytChat() {
  const launcher = document.querySelector("[data-chat-open]");
  const panel = document.querySelector("[data-chat]");
  if (!launcher || !panel) return;
  const log = panel.querySelector(".chat__log");
  // "@/" wale links ko site ke root se jodna (sub-folder pages ke liye)
  const base = (document.querySelector('script[src$="chat.js"]').src || "").replace(/js\/chat\.js.*$/, "");
  const form = panel.querySelector(".chat__form");
  const input = form.querySelector("input");

  const contactRow = () =>
    `<div class="chat__cta"><a href="tel:${NYT_CONTACT.phoneLink}">Call ${NYT_CONTACT.phone}</a>` +
    `<a href="https://wa.me/${NYT_CONTACT.whatsapp}" target="_blank" rel="noopener">WhatsApp</a></div>`;

  function addMessage(content, who) {
    const bubble = document.createElement("div");
    bubble.className = "msg msg--" + who;
    if (who === "user") bubble.textContent = content; else bubble.innerHTML = content.replaceAll('href="@/', 'href="' + base);
    log.appendChild(bubble);
    log.scrollTop = log.scrollHeight;
  }

  // jis jawab ke sab se zyada words match hon wohi; lambe words ko zyada wazan
  function answerFor(question) {
    const text = " " + question.toLowerCase() + " ";
    let best = null, bestScore = 0;
    NYT_CHAT.forEach((entry) => {
      const score = entry.keys.reduce((sum, key) => (text.includes(key) ? sum + key.length : sum), 0);
      if (score > bestScore) { best = entry; bestScore = score; }
    });
    const reply = best ? best.reply : "Good question. The quickest way to get the right answer is to speak to us directly.";
    return reply + contactRow();
  }

  function ask(question) {
    if (!question.trim()) return;
    addMessage(question, "user");
    setTimeout(() => addMessage(answerFor(question), "bot"), 380);
  }

  function openChat() {
    panel.classList.add("is-open");
    launcher.setAttribute("aria-expanded", "true");
    if (!log.children.length) {
      addMessage("Hi, I can help with our services, prices, areas, opening hours and payment options. What do you need?", "bot");
    }
    setTimeout(() => input.focus(), 150);
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
  form.addEventListener("submit", (event) => { event.preventDefault(); ask(input.value); input.value = ""; });
}

document.addEventListener("DOMContentLoaded", setupNytChat);
