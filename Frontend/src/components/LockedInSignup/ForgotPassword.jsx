import { useState } from "react";
import "./ForgotPassword.css";
import { IconEmail, IconLock, IconCheck } from "../../assets/icons/Icons";

export default function ForgotPassword() {
  const [stage, setStage] = useState("email"); // email | sent | reset | done
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCode = (i, val) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...code];
    next[i] = val;
    setCode(next);
    if (val && i < 5) document.getElementById(`otp-${i + 1}`)?.focus();
  };

  const go = (nextStage) => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setStage(nextStage); }, 900);
  };

  return (
    <div className="fp-root">
      <nav className="fp-nav">
        <a href="/login" className="fp-logo">Locked<span>In</span></a>
        <a href="/login" className="fp-back-link">← Return to Login</a>
      </nav>

      <main className="fp-main">
        <div className="fp-card" key={stage}>

          {/* ── STAGE: EMAIL ── */}
          {stage === "email" && (
            <>
              <div className="fp-icon-wrap">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="#00b4ff" strokeWidth="1" strokeDasharray="3 2" />
                  <path d="M12 20h16M20 12v16" stroke="rgba(0,180,255,0.2)" strokeWidth="1" />
                  <rect x="10" y="15" width="20" height="14" rx="2" stroke="#00b4ff" strokeWidth="1.2" />
                  <path d="M10 18l10 7 10-7" stroke="#00b4ff" strokeWidth="1.2" />
                </svg>
              </div>
              <div className="fp-tag">ACCESS RECOVERY</div>
              <h1 className="fp-title">Reset Security Key</h1>
              <p className="fp-desc">Enter your registered email and we'll dispatch a recovery code to your inbox.</p>

              <div className="fp-field">
                <label className="fp-label">Email Address</label>
                <div className="fp-input-wrap">
                  <span className="fp-input-icon"><IconEmail /></span>
                  <input type="email" placeholder="agent@lockedin.pro"
                    value={email} onChange={e => setEmail(e.target.value)} />
                </div>
              </div>

              <button className={`fp-btn ${loading ? "loading" : ""}`} onClick={() => go("sent")}>
                {loading ? "DISPATCHING..." : "Send Recovery Code"}
              </button>

              <div className="fp-oauth-hint">
                Signed up via Steam or Discord?
                <br />Use that platform to reset your credentials.
              </div>
            </>
          )}

          {/* ── STAGE: SENT / OTP ── */}
          {stage === "sent" && (
            <>
              <div className="fp-icon-wrap">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="#00b4ff" strokeWidth="1" strokeDasharray="3 2" className="fp-spin" />
                  <path d="M14 20l4 4 8-8" stroke="#00b4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="fp-tag">CODE DISPATCHED</div>
              <h1 className="fp-title">Check Your Inbox</h1>
              <p className="fp-desc">
                A 6-digit code was sent to<br />
                <strong>{email || "your email"}</strong>
              </p>

              <div className="fp-field">
                <label className="fp-label">Enter 6-Digit Code</label>
                <div className="fp-otp-row">
                  {code.map((d, i) => (
                    <input key={i} id={`otp-${i}`}
                      className="fp-otp-box"
                      maxLength={1}
                      value={d}
                      onChange={e => handleCode(i, e.target.value)}
                      onKeyDown={e => {
                        if (e.key === "Backspace" && !d && i > 0)
                          document.getElementById(`otp-${i - 1}`)?.focus();
                      }}
                    />
                  ))}
                </div>
              </div>

              <button className={`fp-btn ${loading ? "loading" : ""}`} onClick={() => go("reset")}>
                {loading ? "VERIFYING..." : "Verify Code"}
              </button>

              <button className="fp-resend" onClick={() => {}}>Didn't receive it? Resend →</button>
            </>
          )}

          {/* ── STAGE: RESET ── */}
          {stage === "reset" && (
            <>
              <div className="fp-icon-wrap">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="#00b4ff" strokeWidth="1" strokeDasharray="3 2" />
                  <rect x="12" y="18" width="16" height="12" rx="2" stroke="#00b4ff" strokeWidth="1.2" />
                  <path d="M15 18v-4a5 5 0 0 1 10 0v4" stroke="#00b4ff" strokeWidth="1.2" />
                  <circle cx="20" cy="24" r="1.5" fill="#00b4ff" />
                </svg>
              </div>
              <div className="fp-tag">NEW CREDENTIALS</div>
              <h1 className="fp-title">Set New Security Key</h1>
              <p className="fp-desc">Choose a strong key that you haven't used before.</p>

              <div className="fp-field">
                <label className="fp-label">New Security Key</label>
                <div className="fp-input-wrap">
                  <span className="fp-input-icon"><IconLock /></span>
                  <input type="password" placeholder="Min 8 characters"
                    value={newPass} onChange={e => setNewPass(e.target.value)} />
                </div>
                <div className="fp-strength">
                  {[1,2,3,4].map(n => (
                    <div key={n} className={`fp-strength-bar ${newPass.length >= n * 3 ? "lit" : ""}`} />
                  ))}
                  <span className="fp-strength-label">
                    {newPass.length === 0 ? "—" : newPass.length < 6 ? "WEAK" : newPass.length < 10 ? "MODERATE" : "STRONG"}
                  </span>
                </div>
              </div>

              <div className="fp-field">
                <label className="fp-label">Confirm New Key</label>
                <div className={`fp-input-wrap ${confirm && confirm !== newPass ? "error" : ""}`}>
                  <span className="fp-input-icon"><IconLock /></span>
                  <input type="password" placeholder="Re-enter new key"
                    value={confirm} onChange={e => setConfirm(e.target.value)} />
                  {confirm && confirm === newPass && <span className="fp-match"><IconCheck /></span>}
                </div>
                {confirm && confirm !== newPass &&
                  <span className="fp-error-msg">Keys do not match</span>}
              </div>

              <button className={`fp-btn ${loading ? "loading" : ""}`} onClick={() => go("done")}>
                {loading ? "UPDATING..." : "Update Security Key"}
              </button>
            </>
          )}

          {/* ── STAGE: DONE ── */}
          {stage === "done" && (
            <div className="fp-done">
              <div className="fp-done-ring">
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                  <circle cx="36" cy="36" r="32" stroke="#00b4ff" strokeWidth="1" strokeDasharray="4 3" className="fp-spin" />
                  <circle cx="36" cy="36" r="22" stroke="#00b4ff" strokeWidth="0.5" opacity="0.3" />
                  <path d="M24 36l8 8 16-16" stroke="#00b4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="fp-tag" style={{ textAlign: "center" }}>OPERATION COMPLETE</div>
              <h1 className="fp-title" style={{ textAlign: "center" }}>Key Updated</h1>
              <p className="fp-desc" style={{ textAlign: "center" }}>
                Your security key has been successfully reset.<br />
                You can now authorize your session.
              </p>
              <a href="/login" className="fp-btn" style={{ textDecoration: "none", textAlign: "center", display: "block" }}>
                Return to Login →
              </a>
            </div>
          )}

        </div>
      </main>

      <div className="fp-statusbar">
        <span><span className="fp-status-dot" />RECOVERY SERVER: ONLINE &nbsp;·&nbsp; ENCRYPTED CHANNEL: ACTIVE</span>
        <div className="fp-status-icons"><span>⚙</span><span>◎</span></div>
      </div>
    </div>
  );
}
