const TIPS = {
  completeness: "Interview completeness: did this sitting finish its questions? It is not permission to save work. Older name: Genome Strength.",
  evidence: "Evidence strength: how much is only talk versus what a system also moved? This spreadsheet is still talk written down carefully. It is not Zwayam. Older name: GQS.",
  interviewOnly: "Talk-only picture: interviews with no spreadsheet and no system history. We will not save it. Older name: G-SCOUT.",
  sheet: "The Offer Desk workbook is a write-up of Rashmi's session on 12 May 2026. Declared, structured, useful. Not an event log.",
  persist: "Save means write into the company work list so later screens can use it. A complete interview is still a conversation.",
  declared: "Person said it. System showed it. Rule we wrote. Software guessed — that last one stays labelled.",
  chro: "If the CHRO changes what good people operations means, these HR sub-functions move. Offer Desk sits under HR operations.",
  playback: "Four columns on every stage: given, how we understand it, what the platform does, what you can see.",
  rashmi: "Rashmi is Offer Desk for all hire types in Bangalore, Hyderabad, and Chennai. Umesh is backup and now sits in payroll. That is a single point of failure."
};

function info(key) {
  return '<span class="info" data-tip="' + key + '">i</span>';
}

function io(given, understood, processed, output) {
  return (
    '<div class="io">' +
    '<div class="card"><h3>Given</h3>' + given + '</div>' +
    '<div class="card"><h3>How we understand it</h3>' + understood + '</div>' +
    '<div class="card"><h3>What the platform does</h3>' + processed + '</div>' +
    '<div class="card"><h3>Output you can see</h3>' + output + '</div>' +
    '</div>'
  );
}

function stepper(current) {
  const steps = [
    ["iv-chro", "1. Function leader"],
    ["iv-ops", "2. Sub-function lead"],
    ["iv-sme", "3. Offer Desk SME"],
    ["playback", "4. Playback"],
    ["sheet", "5. Spreadsheet"]
  ];
  return '<div class="stepper">' + steps.map(function (s) {
    return '<a href="#' + s[0] + '" class="' + (s[0] === current ? "on" : "") + '">' + s[1] + '</a>';
  }).join("") + '</div>';
}

const views = {};

views.home = function () {
  return (
    '<div class="top"><div><h1>How do you want to start?</h1><p class="sub">Two doors. The live path is Enterprise → HR → HR operations → Offer Desk.</p></div></div>' +
    '<div class="grid cols-2">' +
    '<div class="card track-card" data-go="enterprise"><strong>Enterprise track</strong><p>A company with HR, Finance, Legal, Operations. We start in HR operations at the Offer Desk.</p><p class="muted">Open this first.</p></div>' +
    '<div class="card track-card soon" data-go="sme"><strong>SME track</strong><p>A single specialist sitting, without the company map. Not built yet. Rashmi\'s interview will later live here too.</p></div>' +
    '</div>' +
    io("<p>You opened the product.</p>", "<p>We need to know whether this is a company walk or a lone specialist.</p>", "<p>No work is cut yet. We only choose a door.</p>", "<p>Enterprise is live. SME is a label.</p>")
  );
};

views.enterprise = function () {
  return (
    '<div class="top"><div><h1>Enterprise</h1><p class="sub">Only HR is live. The others stay on the map so HR is not the whole company.</p></div></div>' +
    '<div class="grid cols-4">' +
    '<div class="card track-card" data-go="hr"><strong>HR</strong><p class="muted">Live</p></div>' +
    '<div class="card track-card soon"><strong>Finance</strong><p class="muted">Listed</p></div>' +
    '<div class="card track-card soon"><strong>Legal</strong><p class="muted">Listed</p></div>' +
    '<div class="card track-card soon"><strong>Operations</strong><p class="muted">Listed</p></div>' +
    '</div>' +
    io("<p>Door: Enterprise.</p>", "<p>Functions of a company, not a product catalogue.</p>", "<p>HR is enabled. Others are placeholders.</p>", "<p>CHRO map next.</p>")
  );
};

views.sme = function () {
  return (
    '<div class="top"><div><h1>SME track</h1><p class="sub">Reserved.</p></div></div>' +
    '<div class="card"><p>Same honesty rules. Screens not filled. Offer Desk work will be reused here later, without the company map.</p><button class="btn ghost" data-go="home">Back</button></div>'
  );
};

views.hr = function () {
  return (
    '<div class="top"><div><h1>HR · CHRO map ' + info("chro") + '</h1><p class="sub">Sub-functions that move if the CHRO changes intent.</p></div></div>' +
    '<div class="subfn">' +
    '<a href="#hr-ops"><strong>HR operations</strong><p class="muted">Live · Offer Desk sits here</p></a>' +
    '<div class="soon-box"><strong>Talent acquisition</strong><p class="muted">On the map</p></div>' +
    '<div class="soon-box"><strong>HR business partner</strong><p class="muted">On the map</p></div>' +
    '<div class="soon-box"><strong>Employer branding</strong><p class="muted">On the map</p></div>' +
    '<div class="soon-box"><strong>Workforce planning</strong><p class="muted">On the map</p></div>' +
    '<div class="soon-box"><strong>Total rewards</strong><p class="muted">On the map</p></div>' +
    '</div>' +
    io("<p>Function: HR.</p>", "<p>Offer Desk is not recruiting. It is pre-onboarding work after a recruiter asks for an offer.</p>", "<p>We place it under HR operations.</p>", "<p>HR operations is clickable. Talent acquisition stays visible and unfinished.</p>")
  );
};

views["hr-ops"] = function () {
  return (
    '<div class="top"><div><h1>HR operations</h1><p class="sub">Desks that run after a hire is decided and before the person lands.</p></div></div>' +
    '<div class="subfn">' +
    '<a href="#offer-desk"><strong>Offer Desk</strong><p class="muted">Live · Rashmi · 3 cities</p></a>' +
    '<div class="soon-box"><strong>Onboarding SPOC</strong><p class="muted">Receives Rashmi\'s handover</p></div>' +
    '<div class="soon-box"><strong>Offboarding</strong><p class="muted">On the map</p></div>' +
    '</div>' +
    io("<p>CHRO map chose HR operations.</p>", "<p>Offer Desk owns offer release, document check, payroll inputs. Onboarding SPOC owns Day 1.</p>", "<p>We do not fold SPOC work into Offer Desk.</p>", "<p>Offer Desk opens.</p>")
  );
};

views["offer-desk"] = function () {
  return (
    '<div class="top"><div><h1>Offer Desk ' + info("rashmi") + '</h1><p class="sub">Pre-onboarding: offer release, document check, payroll inputs.</p></div></div>' +
    '<div class="card">' +
    '<p><strong>Outcome we were given:</strong> candidate checked, offer letter out and signed, documents in the folder, email ID created, welcome mail sent, acknowledgement signed, contractor PR sheet updated, handed to the location Onboarding SPOC.</p>' +
    '<p><strong>Trigger:</strong> recruiter email with salary approval + Zwayam profile.</p>' +
    '<p><strong>SLA:</strong> two hours from that email to offer letter release.</p>' +
    '<p><strong>Desk:</strong> Rashmi, all hire types, Bangalore / Hyderabad / Chennai. About five hours of her day. Two hundred to two hundred and fifty people a month.</p>' +
    '<button class="btn" data-go="iv-chro">Start the three conversations</button>' +
    '</div>' +
    io("<p>Workbook title, outcome, trigger, SLA, SPOC.</p>", "<p>This is one desk, one owner, three cities, four hire types (permanent, contractor, intern, conversion).</p>", "<p>We freeze that as the intent of this walk: finish pre-onboarding without skipping the checklist, inside two hours.</p>", "<p>A named desk ready for three seats: CHRO, Head of HR Ops, Rashmi.</p>")
  );
};

views["iv-chro"] = function () {
  return (
    '<div class="top"><div><h1>Interview 1 · Function leader</h1><p class="sub">CHRO · what must stay true</p></div></div>' +
    stepper("iv-chro") +
    '<div class="card"><table><tr><th>We asked</th><th>What we use as the CHRO voice for this demo</th></tr>' +
    '<tr><td>What must never slip?</td><td>No offer letter if documents or salary grid are wrong. Dual employment in UAN is a stop, not a shortcut.</td></tr>' +
    '<tr><td>What does good look like?</td><td>Two-hour SLA. One desk can cover three cities. Backup exists.</td></tr>' +
    '<tr><td>What does the CHRO probably not see?</td><td>Excel as the real system of record. Rashmi as a single point of failure. Umesh already moved to payroll.</td></tr>' +
    '</table><p class="muted">This seat is a stand-in until a real CHRO sitting is recorded. Labelled as such.</p></div>' +
    io("<p>Policies from the workbook: UAN stop, salary grid, 2-hour SLA.</p>", "<p>CHRO cares about risk and coverage. She may not name Master Joining Sheet.</p>", "<p>We store this as declared " + info("declared") + ". We mark the seat as a stand-in.</p>", "<p>Intent: safe offer release, three cities, a real backup.</p>") +
    '<p class="footer-note"><button class="btn" data-go="iv-ops">Next · Head of HR operations</button></p>'
  );
};

views["iv-ops"] = function () {
  return (
    '<div class="top"><div><h1>Interview 2 · Sub-function lead</h1><p class="sub">Head of HR operations · how the desks are meant to run</p></div></div>' +
    stepper("iv-ops") +
    '<div class="card"><table><tr><th>We asked</th><th>What the workbook implies for this seat</th></tr>' +
    '<tr><td>Where does Offer Desk hand off?</td><td>Onboarding SPOC by city: Prerana (BLR), Sasikala (HYD), Tamil (CHN). IT for email IDs. Umesh for payroll on the 17th. Asset vendor for some contractors.</td></tr>' +
    '<tr><td>What is already moving out of the desk?</td><td>Permanent offer letter already Zwayam to Zoho. EF/MJS and acknowledgement are being automated. Darwinbox is coming.</td></tr>' +
    '<tr><td>What remains the desk?</td><td>Document check. Salary grid. Master Joining Sheet. Contractor letters. Monthly bonus reports.</td></tr>' +
    '</table></div>' +
    io("<p>Handoff map and transition state rows from the sheet.</p>", "<p>HR Ops is a chain of desks, not one queue. Offer Desk is not Onboarding.</p>", "<p>We keep handoffs as links, not as extra steps inside Rashmi's unit.</p>", "<p>A boundary: Offer Desk ends at handover. SPOC work is out of scope for this cut.</p>") +
    '<p class="footer-note"><button class="btn" data-go="iv-sme">Next · Rashmi</button></p>'
  );
};

views["iv-sme"] = function () {
  return (
    '<div class="top"><div><h1>Interview 3 · Offer Desk SME</h1><p class="sub">Rashmi KN · 12 May 2026 · 1 hour 47 minutes · screen share</p></div></div>' +
    stepper("iv-sme") +
    '<div class="card"><table>' +
    '<tr><th>#</th><th>What she does</th><th>Minutes</th><th>System</th><th>How automatic it already is</th></tr>' +
    '<tr class="selected"><td>2</td><td>Check documents against hire-type list (UAN, employment, IEF photo)</td><td>15-40</td><td>Zwayam + OneDrive</td><td>Partly · judgment stays</td></tr>' +
    '<tr><td>3</td><td>Check salary mail against the grid</td><td>5-10</td><td>Excel + Zwayam</td><td>Partly · rules are clear</td></tr>' +
    '<tr><td>4</td><td>Update Master Joining Sheet and contractor PR sheet</td><td>5-10</td><td>Excel</td><td>Partly</td></tr>' +
    '<tr><td>5</td><td>Trigger offer letter (permanent already flows to Zoho)</td><td>5-10</td><td>Zwayam to Zoho</td><td>Mostly for permanent</td></tr>' +
    '<tr><td>7-9</td><td>Welcome mail, email ID request, folder + handover chat</td><td>a few each</td><td>Email, Excel, OneDrive</td><td>Ready to go fully</td></tr>' +
    '<tr><td>10</td><td>Three payroll files on the 17th</td><td>30-45 total</td><td>Excel</td><td>Partly · high value</td></tr>' +
    '</table><p class="muted">Interview completeness 100% ' + info("completeness") + ' · this sitting is the source of the spreadsheet.</p></div>' +
    io("<p>Eleven micro-steps, times, systems, hire-type branches.</p>", "<p>Rashmi's day is not process offers. Forty percent is document check. Excel is where truth is typed.</p>", "<p>We keep eleven rows. We do not collapse them into one onboarding blob.</p>", "<p>A lived list. Two steps the CHRO stand-in never named: Master Joining Sheet, 17th payroll pack.</p>") +
    '<p class="footer-note"><button class="btn" data-go="playback">Play the three seats back</button></p>'
  );
};

views.playback = function () {
  return (
    '<div class="top"><div><h1>Playback · three seats ' + info("playback") + '</h1><p class="sub">We do not vote the rows into one story.</p></div></div>' +
    stepper("playback") +
    '<div class="card"><table><tr><th>Topic</th><th>CHRO stand-in</th><th>HR Ops lead</th><th>Rashmi</th></tr>' +
    '<tr><td>What the work is</td><td>Safe offer, two-hour SLA</td><td>A desk in a chain of desks</td><td>Eleven steps, Excel at the centre</td></tr>' +
    '<tr><td>Systems</td><td>Probably HR system</td><td>Zwayam, Zoho, Darwinbox coming</td><td>Zwayam, Zoho, OneDrive, five trackers, email</td></tr>' +
    '<tr><td>Risk</td><td>Wrong offer, dual employment</td><td>Handoff drop, automation half-done</td><td>She is the only person who can run the desk</td></tr>' +
    '</table></div>' +
    io("<p>Three declared sittings. Rashmi's is real. The two above her are labelled stand-ins until recorded.</p>", "<p>Disagreement is expected: upstairs talks outcomes, the desk talks trackers.</p>", "<p>We line them up. We do not merge.</p>", "<p>Talk-only picture " + info("interviewOnly") + ". Next we look at the spreadsheet as a document.</p>") +
    '<p class="footer-note"><button class="btn" data-go="sheet">Open what the spreadsheet gave us</button></p>'
  );
};

views.sheet = function () {
  return (
    '<div class="top"><div><h1>The spreadsheet we were given ' + info("sheet") + '</h1><p class="sub">OfferDesk_Agent_Ready.xlsx · declared write-up of Rashmi\'s session.</p></div></div>' +
    stepper("sheet") +
    '<div class="card">' +
    '<p>Sheets inside: metadata, eleven micro-steps with times, handoff map, exception catalogue, automation readiness.</p>' +
    '<p><strong>We do not treat this file as Zwayam.</strong> It is a careful interview note. If a later screen says system showed, that field is still empty in this demo.</p>' +
    '</div>' +
    io("<p>The workbook, as attached.</p>", "<p>Structured declared capture: outcome, trigger, SLA, 11 steps, 9 exceptions, 10 handoffs, a 95-hour month claim.</p>", "<p>Parser reads rows. It does not invent Zwayam events. Provenance on every field: person said / written in the sheet.</p>", "<p>A source card the later screens can point at.</p>") +
    '<p class="footer-note"><button class="btn ghost" data-go="blocked">First: save talk-only (should fail)</button> <button class="btn" data-go="understood">Then: cut the sheet</button></p>'
  );
};

views.blocked = function () {
  return (
    '<div class="top"><div><h1>Can we save talk-only?</h1><p class="sub">No. Completeness 100%. Evidence strength 28 / 60. ' + info("evidence") + '</p></div></div>' +
    '<div class="banner bad">Not saved. A finished conversation is not a company work list. ' + info("persist") + '</div>' +
    '<div class="grid cols-2"><div class="card"><strong>Why</strong><ul>' +
    '<li>We only have what people said.</li>' +
    '<li>The spreadsheet is not attached on this path.</li>' +
    '<li>No Zwayam or Zoho history is attached either.</li>' +
    '<li>Completeness 100% only means Rashmi finished talking.</li></ul>' +
    '<p class="muted">Older notes called this G-SCOUT. The screen says talk-only.</p></div>' +
    '<div class="card"><p class="stat">0 <small>saved work items</small></p><p>Empty is correct.</p>' +
    '<button class="btn" data-go="understood">Attach the spreadsheet and cut it</button></div></div>' +
    io("<p>Three interviews, no file.</p>", "<p>Talk is declared. Declared is not observed.</p>", "<p>Save rule: interviews alone are not enough. Will not clear the observed-weighted persist gate alone.</p>", "<p>Zero items. Reasons you can read aloud.</p>")
  );
};

views.understood = function () {
  return (
    '<div class="top"><div><h1>How we cut the Offer Desk</h1><p class="sub">Same eleven steps. Grouped only so a CHRO can see them. Nothing deleted.</p></div></div>' +
    '<div class="card"><table>' +
    '<tr><th>We kept this work</th><th>From sheet step</th><th>Checkable in a system?</th></tr>' +
    '<tr class="selected"><td>Check documents against hire-type list</td><td>2</td><td>Partly — Zwayam folder. Gaps and dual employment need a person.</td></tr>' +
    '<tr><td>Check salary mail against the grid</td><td>3</td><td>Yes — grid plus the approval mail.</td></tr>' +
    '<tr><td>Write Master Joining Sheet / PR sheet</td><td>4</td><td>Yes — the workbook row exists or it does not.</td></tr>' +
    '<tr><td>Trigger and watch the offer letter</td><td>5</td><td>Yes — Zoho signing state.</td></tr>' +
    '<tr><td>Welcome mail, email ID, folder, handover</td><td>7-9</td><td>Yes — mail sent, IT reply, folder date.</td></tr>' +
    '<tr><td>Build the 17th payroll pack</td><td>10</td><td>Yes — three files exist on the 17th.</td></tr>' +
    '<tr><td>Confirm joiner two days before DOJ</td><td>11</td><td>Partly — recruiter reply.</td></tr>' +
    '</table></div>' +
    io("<p>Eleven rows + exceptions + handoffs.</p>", "<p>Step 2 is the heavy unit. Steps 7-9 are small and already on a path to Darwinbox. We do not pretend Darwinbox has arrived.</p>", "<p>Cut into work items. Attach field labels: said in the sheet / not yet shown by Zwayam.</p>", "<p>Seven items on a list. One of them — document check — is ready to open as a record.</p>") +
    '<p class="footer-note"><button class="btn" data-go="gap">What the sheet cannot show</button></p>'
  );
};

views.gap = function () {
  return (
    '<div class="top"><div><h1>What the sheet cannot show</h1><p class="sub">We have Rashmi\'s map. We do not have 90 days of Zwayam.</p></div></div>' +
    '<div class="grid cols-3">' +
    '<div class="card"><div class="stat">11 <small>Steps named in the sheet</small></div></div>' +
    '<div class="card"><div class="stat">0 <small>Zwayam events in this demo</small></div></div>' +
    '<div class="card"><div class="stat">9 <small>Exceptions she already listed</small></div></div>' +
    '</div>' +
    '<div class="grid cols-4" style="margin-top:16px">' +
    '<div class="card"><strong>Shadow</strong><div class="muted">Abbreviation of email IDs to 18 characters — named, no system field</div></div>' +
    '<div class="card"><strong>Judgment</strong><div class="muted">Employment gap, dual employment, odd documents</div></div>' +
    '<div class="card"><strong>Single owner</strong><div class="muted">Rashmi across three cities. Backup is already in payroll.</div></div>' +
    '<div class="card"><strong>Not here yet</strong><div class="muted">Actual offer volume, actual SLA misses, actual dual-employment hits</div></div>' +
    '</div>' +
    io("<p>Cut list + exception catalogue + no event log.</p>", "<p>A map without traces can still teach. It cannot claim this is how the last 90 days ran.</p>", "<p>We keep a hole labelled observed-empty instead of filling it with the 200-250/month figure treated as counted.</p>", "<p>A gap sheet that is honest about what this file is.</p>") +
    '<p class="footer-note"><button class="btn ghost" data-go="contract">Open document check as a work record</button></p>'
  );
};

views.contract = function () {
  return (
    '<div class="top"><div><h1>Work record · Check documents against the hire-type list</h1><p class="sub">Sheet step 2. Heaviest part of Rashmi\'s day.</p></div></div>' +
    '<div class="grid cols-2"><div class="card"><table>' +
    '<tr><td>Name</td><td>Check documents against hire-type list</td><td><span class="chip dec">sheet</span></td></tr>' +
    '<tr><td>Thing in hand</td><td>Candidate in Zwayam</td><td><span class="chip dec">sheet</span></td></tr>' +
    '<tr><td>Before → after</td><td>documents unchecked → documents accepted or blocked</td><td><span class="chip des">rule we wrote</span></td></tr>' +
    '<tr><td>How we will know</td><td>Every item on the hire-type list is present, or a named exception is open. Dual employment blocks release. A person who did not do the check can still open Zwayam and see the same files.</td><td><span class="chip des">rule we wrote</span></td></tr>' +
    '<tr><td>Time she stated</td><td>Contractor 15-20 min. Permanent 30-40 min. About 40% of her day.</td><td><span class="chip dec">sheet</span></td></tr>' +
    '<tr><td>Stays with a person</td><td>Gaps, dual employment, odd papers, identity doubt</td><td><span class="chip dec">sheet</span></td></tr>' +
    '</table></div><div class="card"><strong>How far should a helper go?</strong>' +
    '<p>Checklist and cross-date check: a helper may draft.</p>' +
    '<p>Stop and call Rashmi: dual employment, identity mismatch, gap story.</p>' +
    '<div class="banner good">CHRO hold: no helper releases an offer. Appetite does not lift that stop.</div></div></div>' +
    io("<p>Step 2 row, hire-type lists, exception 1 and 2.</p>", "<p>This is one work item, not do onboarding. Proof is in Zwayam, not in Rashmi saying she checked.</p>", "<p>We write before/after and the stop rules. We do not mark fields as system-shown until a trace exists.</p>", "<p>A record you can read to Rashmi and she should recognise her Tuesday.</p>") +
    '<p class="footer-note"><button class="btn ghost" data-go="portfolio">Hours the sheet claims</button></p>'
  );
};

views.portfolio = function () {
  return (
    '<div class="top"><div><h1>Hours we will defend</h1><p class="sub">The sheet already did this arithmetic. We show it as theirs, then we haircut it.</p></div></div>' +
    '<div class="grid cols-2"><div class="card"><table>' +
    '<tr><th>Work</th><th>Sheet tag</th><th>Stated hours / month</th></tr>' +
    '<tr class="selected"><td>Document check help</td><td>High value, partial</td><td>~40</td></tr>' +
    '<tr><td>Salary grid check</td><td>High value, partial</td><td>~8</td></tr>' +
    '<tr><td>17th payroll pack</td><td>High value, partial</td><td>~7</td></tr>' +
    '<tr><td>Welcome, email ID, folders</td><td>Full, much already moving to Darwinbox</td><td>~25</td></tr>' +
    '<tr><td>Trackers, letter, dropout</td><td>Rule-based, partial</td><td>~15</td></tr>' +
    '</table><p class="muted">Sheet total stated: ~95 hours a month · ~80% of the desk.</p></div>' +
    '<div class="card">' +
    '<div class="banner">Stated in the spreadsheet: 95 hours a month. That number is declared. We have not watched 90 days.</div>' +
    '<div class="banner good">Hours we will defend in a first conversation: 61.8 of those 95 — we keep judgment, review, and the Darwinbox-already-planned slice out of the boast.</div>' +
    '<p class="muted">Headcount talk is not payroll. Dual-employment risk stays on the page.</p></div></div>' +
    io("<p>Automation readiness table from the sheet.</p>", "<p>95 is their claim. Darwinbox is already eating some of 7-9. Judgment in step 2 cannot be in the boast.</p>", "<p>We publish both numbers. We do not let 95 stand alone.</p>", "<p>A strip you can show finance: 95 stated → 61.8 defended, until traces arrive.</p>") +
    '<p class="footer-note"><button class="btn ghost" data-go="spec">What a helper would be allowed to do</button></p>'
  );
};

views.spec = function () {
  return (
    '<div class="top"><div><h1>Rules for a helper on document check</h1><p class="sub">No pass, no action. A helper does not release an offer.</p></div></div>' +
    '<div class="banner bad">Call without a pass: denied.</div>' +
    '<div class="card"><pre>{\n  "work": "check documents against hire-type list",\n  "before": "documents unchecked",\n  "after": "accepted or blocked",\n  "may_draft": ["missing-doc list", "UAN date mismatch flag"],\n  "must_stop": ["dual employment", "identity mismatch"],\n  "may_not": ["release offer letter"],\n  "pass": null\n}</pre></div>' +
    io("<p>The document-check record plus exceptions 1 and 2.</p>", "<p>A helper may prepare. Rashmi still releases. Dual employment is a stop.</p>", "<p>We wrap that as a pass. Missing pass is a refusal.</p>", "<p>A deny you can demonstrate. This service is not running yet. The words are locked.</p>")
  );
};

function bindTips() {
  const box = document.getElementById("tip");
  document.querySelectorAll("[data-tip]").forEach(function (el) {
    el.onmouseenter = function (ev) {
      box.hidden = false;
      box.textContent = TIPS[el.dataset.tip] || "";
      const r = ev.target.getBoundingClientRect();
      box.style.left = Math.min(r.left, window.innerWidth - 360) + "px";
      box.style.top = (r.bottom + 8) + "px";
    };
    el.onmouseleave = function () { box.hidden = true; };
  });
}

function render() {
  const view = (location.hash || "#home").slice(1);
  const page = views[view] ? views[view]() : views.home();
  document.getElementById("view").innerHTML = page;
  document.querySelectorAll(".nav a").forEach(function (a) {
    a.classList.toggle("active", a.getAttribute("href") === "#" + view);
  });
  document.querySelectorAll("[data-go]").forEach(function (b) {
    b.onclick = function () { location.hash = b.getAttribute("data-go"); };
  });
  bindTips();
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
