import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import {
  IconEmail,
  IconLock,
  IconUser,
  IconSteam,
  IconDiscord,
  IconCheck,
} from "../../assets/icons/Icons";

const ROLES = [
  { id: "player",  icon: "◎", label: "Player",      desc: "Compete & get scouted" },
  { id: "scout",   icon: "⊞", label: "Scout",       desc: "Discover top talent" },
  { id: "org",     icon: "⬡", label: "Org",         desc: "Build your roster" },
  { id: "analyst", icon: "▦", label: "Analyst",     desc: "Stats & strategy" },
];

function strengthInfo(pw) {
  if (!pw) return { level: 0, label: "" };
  if (pw.length < 6)  return { level: 1, label: "WEAK" };
  if (pw.length < 10) return { level: 2, label: "FAIR" };
  const hasSymbol = /[^a-zA-Z0-9]/.test(pw);
  if (pw.length >= 12 && hasSymbol) return { level: 4, label: "STRONG" };
  return { level: 3, label: "GOOD" };
}

export default function Signup() {
  const [step, setStep]     = useState(1); // 1 = profile, 2 = role, 3 = done
  const [form, setForm]     = useState({ handle: "", email: "", password: "", role: "" });
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const pw  = strengthInfo(form.password);

  const next = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setStep(s => s + 1); }, 800);
  };

  const step1Valid = form.handle.trim() && form.email.includes("@") && form.password.length >= 6;
  const step2Valid = form.role !== "";

  /* ── STEP 3: SUCCESS ── */
  if (step === 3) return (
    <div className="su-root">
      <div className="su-success-wrap">
        <div className="su-success-ring">
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
            <circle cx="45" cy="45" r="40" stroke="#00b4ff" strokeWidth="1"
              strokeDasharray="5 3" className="su-spin" />
            <circle cx="45" cy="45" r="28" stroke="#00b4ff" strokeWidth="0.6" opacity="0.25" />
            <path d="M30 45l10 10 20-20" stroke="#00b4ff" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="su-success-tag">INITIALIZATION COMPLETE</div>
        <h1 className="su-success-title">Welcome, {form.handle || "Agent"}</h1>
        <p className="su-success-desc">
          Your profile has been created.<br />
          You're now part of the LockedIn network.
        </p>
        <Link to="/login" className="su-success-btn">Authorize Session →</Link>
      </div>
    </div>
  );

  return (
    <div className="su-root">
      <div className="su-frame">

        {/* ── LEFT PANEL ── */}
        <div className="su-left">
          <div className="su-circuit" aria-hidden="true">
            <svg width="100%" height="100%" viewBox="0 0 400 640" preserveAspectRatio="xMidYMid slice">
              <defs>
                <radialGradient id="su-glow" cx="50%" cy="50%" r="55%">
                  <stop offset="0%"   stopColor="#00b4ff" stopOpacity="0.14" />
                  <stop offset="100%" stopColor="#00b4ff" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="400" height="640" fill="url(#su-glow)" />
              {[40,80,120,160,200,240,280,320,360].map(x => (
                <line key={`v${x}`} x1={x} y1="0" x2={x} y2="640"
                  stroke="#00b4ff" strokeWidth="0.3" strokeOpacity="0.07" />
              ))}
              {[40,80,120,160,200,240,280,320,360,400,440,480,520,560,600].map(y => (
                <line key={`h${y}`} x1="0" y1={y} x2="400" y2={y}
                  stroke="#00b4ff" strokeWidth="0.3" strokeOpacity="0.07" />
              ))}
              {[[80,160],[200,80],[320,240],[120,360],[280,460],[160,540],[340,120],[60,480]].map(([cx,cy],i) => (
                <g key={i}>
                  <circle cx={cx} cy={cy} r="3" fill="none" stroke="#00b4ff" strokeWidth="0.8" strokeOpacity="0.22" />
                  <circle cx={cx} cy={cy} r="1.2" fill="#00b4ff" fillOpacity="0.18" />
                </g>
              ))}
              <path d="M80 160 h60 v-80 h80"   stroke="#00b4ff" strokeWidth="0.6" strokeOpacity="0.14" fill="none" />
              <path d="M200 80 v80 h120 v40"   stroke="#00b4ff" strokeWidth="0.6" strokeOpacity="0.14" fill="none" />
              <path d="M120 360 h-60 v80 h100 v80" stroke="#00b4ff" strokeWidth="0.6" strokeOpacity="0.14" fill="none" />
              <path d="M280 460 h60 v-200"      stroke="#00b4ff" strokeWidth="0.6" strokeOpacity="0.14" fill="none" />
              <circle cx="200" cy="330" r="110" fill="none" stroke="#00b4ff" strokeWidth="0.5" strokeOpacity="0.08" strokeDasharray="6 4" />
              <circle cx="200" cy="330" r="65"  fill="none" stroke="#00b4ff" strokeWidth="0.4" strokeOpacity="0.06" />
            </svg>
          </div>

          <div className="su-left-content">
            <div className="su-logo">LockedIn</div>
            <h2 className="su-tagline">Your Pro Career<br />Starts Here.</h2>
            <p className="su-desc">
              Join the elite terminal where pro players, scouts,
              and organizations converge. Prove your rank.
            </p>

            {/* Step progress */}
            <div className="su-progress">
              {[
                { n: 1, label: "Profile" },
                { n: 2, label: "Role"    },
                { n: 3, label: "Launch"  },
              ].map(({ n, label }) => (
                <div key={n} className={`su-prog-item ${step >= n ? "done" : ""} ${step === n ? "active" : ""}`}>
                  <div className="su-prog-dot">
                    {step > n ? <IconCheck /> : n}
                  </div>
                  <span className="su-prog-label">{label}</span>
                  {n < 3 && <div className="su-prog-line" />}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="su-stats">
              {[
                { label: "NETWORK REACH", a: "68%", b: "20%" },
                { label: "MARKET VALUE",  a: "45%", b: "30%" },
              ].map(({ label, a, b }) => (
                <div key={label} className="su-stat">
                  <span className="su-stat-label">{label}</span>
                  <div className="su-stat-bar">
                    <div className="su-stat-fill"     style={{ width: a }} />
                    <div className="su-stat-fill accent" style={{ width: b, marginLeft: "4px" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="su-right">
          <div className="su-form-wrap" key={step}>

            {/* ── STEP 1: PROFILE ── */}
            {step === 1 && (
              <>
                <div className="su-step-tag">STEP 01 / 02 &nbsp;·&nbsp; PROFILE</div>
                <h1 className="su-form-title">Create Your Profile</h1>

                {/* Handle */}
                <div className="su-field">
                  <label className="su-label">Handle / Username</label>
                  <div className="su-input-wrap">
                    <span className="su-input-icon"><IconUser /></span>
                    <input
                      id="su-handle"
                      placeholder="pro_player_99"
                      value={form.handle}
                      onChange={e => set("handle", e.target.value)}
                      autoComplete="username"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="su-field">
                  <label className="su-label">Email Address</label>
                  <div className="su-input-wrap">
                    <span className="su-input-icon"><IconEmail /></span>
                    <input
                      id="su-email"
                      type="email"
                      placeholder="agent@lockedin.pro"
                      value={form.email}
                      onChange={e => set("email", e.target.value)}
                      autoComplete="email"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="su-field">
                  <label className="su-label">Security Key</label>
                  <div className="su-input-wrap">
                    <span className="su-input-icon"><IconLock /></span>
                    <input
                      id="su-password"
                      type={showPw ? "text" : "password"}
                      placeholder="Min 6 characters"
                      value={form.password}
                      onChange={e => set("password", e.target.value)}
                      autoComplete="new-password"
                    />
                    <button className="su-pw-toggle" onClick={() => setShowPw(s => !s)}
                      type="button" aria-label="Toggle password">
                      {showPw ? "HIDE" : "SHOW"}
                    </button>
                  </div>
                  {/* Strength meter */}
                  {form.password && (
                    <div className="su-strength">
                      {[1,2,3,4].map(n => (
                        <div key={n} className={`su-strength-bar ${pw.level >= n ? `lv${pw.level}` : ""}`} />
                      ))}
                      <span className="su-strength-label">{pw.label}</span>
                    </div>
                  )}
                </div>

                <button
                  id="su-next-btn"
                  className={`su-submit ${loading ? "loading" : ""} ${!step1Valid ? "disabled" : ""}`}
                  onClick={step1Valid ? next : undefined}
                >
                  {loading ? "PROCESSING..." : "Continue →"}
                </button>

                {/* Divider */}
                <div className="su-divider"><span>or sign up with</span></div>

                <div className="su-oauth-row">
                  <button className="su-oauth-btn" id="su-steam-btn">
                    <IconSteam /> Steam
                  </button>
                  <button className="su-oauth-btn" id="su-discord-btn">
                    <IconDiscord /> Discord
                  </button>
                </div>

                <p className="su-signin-hint">
                  Already have an account? <Link to="/login">Sign In</Link>
                </p>
              </>
            )}

            {/* ── STEP 2: ROLE ── */}
            {step === 2 && (
              <>
                <div className="su-step-tag">STEP 02 / 02 &nbsp;·&nbsp; ROLE</div>
                <h1 className="su-form-title">Select Your Role</h1>
                <p className="su-role-hint">How will you be using LockedIn?</p>

                <div className="su-role-grid">
                  {ROLES.map(r => (
                    <button
                      key={r.id}
                      id={`su-role-${r.id}`}
                      className={`su-role-card ${form.role === r.id ? "active" : ""}`}
                      onClick={() => set("role", r.id)}
                    >
                      <span className="su-role-icon">{r.icon}</span>
                      <span className="su-role-name">{r.label}</span>
                      <span className="su-role-desc">{r.desc}</span>
                      <span className="su-role-check">{form.role === r.id && <IconCheck />}</span>
                    </button>
                  ))}
                </div>

                <button
                  id="su-launch-btn"
                  className={`su-submit ${loading ? "loading" : ""} ${!step2Valid ? "disabled" : ""}`}
                  onClick={step2Valid ? next : undefined}
                >
                  {loading ? "INITIALIZING..." : "Initialize Career →"}
                </button>

                <button className="su-back-btn" onClick={() => setStep(1)}>
                  ← Back
                </button>
              </>
            )}

          </div>

          {/* Bottom bar */}
          <div className="su-bottom-bar">
            <span>V4.2.0_STABLE</span>
            <span>© 2026 LOCKEDIN TERMINAL</span>
          </div>
        </div>

      </div>
    </div>
  );
}
