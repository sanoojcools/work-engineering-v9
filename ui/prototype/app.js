const FIX = {
  tenant: { name: "Northwind AR", user: "Priya Shah · Owner" },
  intent: "INT-007 · Close disputes in ≤ 5 days without policy-breaking credit.",
  scoutRows: [
    ["Assess dispute validity", "ERP + CRM", "18", "Per dispute", "High"],
    ["Request missing evidence", "Email gateway", "12", "Per dispute", "Medium"],
    ["Post adjustment", "Core ledger", "15", "Per valid dispute", "Medium"],
    ["Release hold", "Order management", "10", "Per adjustment", "Low"],
    ["Notify customer", "Notification service", "8", "Per resolution", "Low"],
    ["Update dispute log", "Dispute repository", "6", "Per dispute", "Low"],
    ["Escalate to appeals", "Appeals queue", "20", "Per appeal", "High"],
    ["Reconcile remittance", "Bank feed", "14", "Per batch", "Medium"]
  ],
  gScout: {
    strength: 100,
    gqs: 28,
    accepted: false,
    reasons: [
      "No observed traces attached.",
      "GQS 28 below persist threshold 60.",
      "All unit provenance is declared.",
      "Genome Strength 100% is not a substitute for observed weight."
    ],
    empty: "This session is complete as a conversation. It is not yet work we can persist. Attach traces or source documents, or import G-DOC."
  },
  gap: {
    discovered: 41, declared: 28, matched: 24,
    undocumented: 9, phantom: 4, judgment: 6, founderSme: 2, coverage: "62%"
  },
  contract: [
    ["Name", "Assess dispute validity", "declared"],
    ["Object", "dispute / DSP-*", "observed"],
    ["Desired condition", "disputed → assessed", "designed"],
    ["Acceptance", "Assessment record + evidence refs, checkable by non-executor", "designed"],
    ["Systems", "erp.ar + crm", "observed"],
    ["Minutes", "18 per dispute", "declared"],
    ["Actor policy", "agent-class-A → fallback human", "designed"],
    ["Owner", "Dana Ortiz · SME", "declared"]
  ],
  scenarios: { derived: "L4", s1: "L3", s2: "L4", s3: "L4", held: "L3", by: "CFO · audit season" },
  cost: { exec: 118, review: 41, ex: 40, gov: 14, gross: 95, disc: 61.8 }
};

const views = {
  overview() {
    return `
      <div class="top">
        <div>
          <h1>Overview</h1>
          <p class="sub">${FIX.intent}</p>
        </div>
        <div class="muted">Pack invoice-dispute.v1 · 90 days</div>
      </div>
      <div class="grid cols-2">
        <div class="card">
          <strong>Two-genome invariant</strong>
          <p class="muted">Both must appear in the same sitting. Waiving persist on G-SCOUT fails the demo.</p>
          <table>
            <tr><th>Genome</th><th>Strength</th><th>GQS</th><th>Persist</th></tr>
            <tr><td>G-SCOUT</td><td>100%</td><td>28</td><td><span class="chip">denied</span></td></tr>
            <tr><td>G-DOC</td><td>100%</td><td>74</td><td><span class="chip obs">accepted</span></td></tr>
          </table>
        </div>
        <div class="card">
          <strong>Where you are</strong>
          <p>Minute 0 of the charter. Next: Scout SME track, then generate (blocked), then G-DOC, gap, contract, portfolio.</p>
          <p class="muted">Simulator is optional. Engagement can stop at the scenario strip.</p>
        </div>
      </div>`;
  },
  scout() {
    const rows = FIX.scoutRows.map((r, i) =>
      `<tr class="${i === 0 ? "selected" : ""}"><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td></tr>`
    ).join("");
    return `
      <div class="top">
        <div>
          <h1>Scout · SME track · Invoice dispute</h1>
          <p class="sub">Work Capture Grid · SES-019 · 2 contradictions with founder</p>
        </div>
        <div class="tabs">
          <button>Founder</button><button>Function lead</button><button class="on">SME</button>
        </div>
      </div>
      <div class="grid cols-2">
        <div class="card">
          <table>
            <tr><th>Name</th><th>Systems</th><th>Min</th><th>Frequency</th><th>Pain</th></tr>
            ${rows}
          </table>
        </div>
        <div class="card" style="text-align:center">
          <div class="meter" style="--p:100"><div>100%<br><span class="muted" style="font-size:12px;font-weight:400">Strong</span></div></div>
          <div class="banner">Declared capture. Will not clear the observed-weighted persist gate alone.</div>
          <p class="muted">Consent receipt CR-441 · checked</p>
          <button class="btn" data-go="blocked">Generate from session</button>
        </div>
      </div>
      <p class="footer-note">Genome Strength is session completeness, not gate clearance. Provenance on every row: declared.</p>`;
  },
  blocked() {
    return `
      <div class="top">
        <div>
          <h1>Generate · G-SCOUT</h1>
          <p class="sub">Scene two. Empty L1 is correct.</p>
        </div>
      </div>
      <div class="banner bad">
        Persist denied. Genome Strength 100%. GQS 28 / 60.
      </div>
      <div class="grid cols-2">
        <div class="card">
          <strong>Why</strong>
          <ul>${FIX.gScout.reasons.map(r => `<li>${r}</li>`).join("")}</ul>
        </div>
        <div class="card">
          <strong>Inventory</strong>
          <p class="stat">0 <small>L1 business objects</small></p>
          <p>${FIX.gScout.empty}</p>
          <button class="btn" data-go="inventory">Open G-DOC instead</button>
        </div>
      </div>`;
  },
  inventory() {
    return `
      <div class="top">
        <div>
          <h1>Inventory · G-DOC</h1>
          <p class="sub">Documents + 90-day traces. Persist accepted. GQS 74.</p>
        </div>
      </div>
      <div class="grid cols-3">
        <div class="card"><div class="stat">3 <small>L1 objects · invoice, dispute, credit note</small></div></div>
        <div class="card"><div class="stat">8 <small>L2 candidate units</small></div></div>
        <div class="card"><div class="stat">1 <small>L3 ratified · WU-114</small></div></div>
      </div>
      <div class="card" style="margin-top:16px">
        <table>
          <tr><th>ID</th><th>Name</th><th>Object</th><th>Status</th></tr>
          <tr class="selected"><td>WU-114</td><td>Assess dispute validity</td><td>dispute</td><td>RATIFIED</td></tr>
          <tr><td>WU-111</td><td>Request missing evidence</td><td>dispute</td><td>CANDIDATE</td></tr>
          <tr><td>WU-115</td><td>Post adjustment</td><td>invoice</td><td>CANDIDATE</td></tr>
          <tr><td>WU-118</td><td>Reconcile remittance</td><td>invoice</td><td>CANDIDATE · undocumented vs SOP</td></tr>
        </table>
        <p class="footer-note"><button class="btn ghost" data-go="contract">Open WU-114 contract</button></p>
      </div>`;
  },
  gap() {
    const g = FIX.gap;
    return `
      <div class="top">
        <div>
          <h1>Conformance gap · Invoice dispute · 90 days</h1>
          <p class="sub">Declared vs declared vs observed</p>
        </div>
      </div>
      <div class="grid cols-3">
        <div class="card"><div class="stat">${g.discovered} <small>Discovered</small></div></div>
        <div class="card"><div class="stat">${g.declared} <small>Declared</small></div></div>
        <div class="card"><div class="stat">${g.matched} <small>Matched · coverage ${g.coverage}</small></div></div>
      </div>
      <div class="grid cols-4" style="margin-top:16px">
        <div class="card"><strong>${g.undocumented}</strong><div class="muted">Undocumented — the real work</div></div>
        <div class="card"><strong>${g.phantom}</strong><div class="muted">Phantom — declared never observed</div></div>
        <div class="card"><strong>${g.judgment}</strong><div class="muted">Judgment zones — trace-blind</div></div>
        <div class="card"><strong>${g.founderSme}</strong><div class="muted">Founder ≠ SME</div></div>
      </div>
      <div class="card" style="margin-top:16px">
        <strong>Assess dispute validity</strong>
        <table>
          <tr><th></th><th>Founder</th><th>SME</th><th>Traces</th></tr>
          <tr><td>Systems</td><td>email + spreadsheet</td><td>ERP + CRM</td><td>erp.ar event stream</td></tr>
          <tr><td>Signal</td><td>declared</td><td>declared</td><td>observed</td></tr>
        </table>
      </div>`;
  },
  contract() {
    const rows = FIX.contract.map(r =>
      `<tr><td>${r[0]}</td><td>${r[1]}</td><td><span class="chip ${r[2].slice(0,3)}">${r[2]}</span></td></tr>`
    ).join("");
    const s = FIX.scenarios;
    return `
      <div class="top">
        <div>
          <h1>WU-114 · Assess dispute validity</h1>
          <p class="sub">RATIFIED · machine-readable · spec token issuable</p>
        </div>
      </div>
      <div class="grid cols-2">
        <div class="card">
          <strong>Contract card</strong>
          <table>${rows}</table>
          <p class="muted">Lints: F1 cut · F1 dup · machine-readable · checkable — all green.</p>
        </div>
        <div class="card">
          <strong>Scenarios</strong>
          <p>Derived ${s.derived} · S1 ${s.s1} · S2 ${s.s2} · S3 ${s.s3}</p>
          <div class="banner good">Org holds at ${s.held} · ${s.by} · RECORDED. Derived ${s.derived} not overwritten. Appetite did not lift a gate.</div>
          <p class="muted">Verification: reconciliation vs erp.ar · checker ruleset v3 · 5% stratified sample.</p>
        </div>
      </div>`;
  },
  portfolio() {
    const c = FIX.cost;
    return `
      <div class="top">
        <div>
          <h1>Scenario portfolio · Invoice dispute</h1>
          <p class="sub">Engagement can stop here. Simulator is optional.</p>
        </div>
      </div>
      <div class="grid cols-2">
        <div class="card">
          <table>
            <tr><th>Unit</th><th>Derived</th><th>S1</th><th>S2</th><th>S3</th><th>Held</th></tr>
            <tr class="selected"><td>WU-114 Assess</td><td>L4</td><td>L3</td><td>L4</td><td>L4</td><td>L3 CFO</td></tr>
            <tr><td>WU-115 Post adjustment</td><td>L3</td><td>L3</td><td>L3</td><td>L4</td><td>—</td></tr>
          </table>
        </div>
        <div class="card">
          <strong>Costed case per 1,000 · WU-114 · S2</strong>
          <p>Execution ${c.exec}h · Review ${c.review}h · Exceptions ${c.ex}h · Governance ${c.gov}h</p>
          <div class="banner good">Honesty check: gross saving ${c.gross}h → disciplined ${c.disc}h. Only verified, repeatable hours count.</div>
          <p class="muted">Residual harm stays on the sheet. FTE is not payroll.</p>
        </div>
      </div>`;
  },
  spec() {
    return `
      <div class="top">
        <div>
          <h1>Spec · WU-114</h1>
          <p class="sub">Bundle is issuable because the unit is machine-readable.</p>
        </div>
      </div>
      <div class="banner bad">Harness call without token: denied. That deny is the product.</div>
      <div class="card">
        <pre>{
  "work_unit_id": "WU-114",
  "intent_id": "INT-007",
  "desired_condition": "disputed → assessed",
  "gates": ["object_condition", "independent_evidence"],
  "token": null
}</pre>
        <p class="muted">Spec API is not running in Phase −1. Copy is locked so Phase 2 cannot invent a friendlier deny.</p>
      </div>`;
  }
};

function render() {
  const view = (location.hash || "#overview").slice(1);
  const page = views[view] ? views[view]() : views.overview();
  document.getElementById("view").innerHTML = page;
  document.querySelectorAll(".nav a").forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + view);
  });
  document.querySelectorAll("[data-go]").forEach(b => {
    b.onclick = () => { location.hash = b.getAttribute("data-go"); };
  });
}
window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
