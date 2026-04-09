import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LockedInLogin.css";
import { IconEmail, IconLock, IconUser, IconSteam, IconDiscord, IconHardware, IconRiot, IconTwitch } from "../../assets/icons/Icons";

export default function LockedInLogin() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading]   = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1800);
  };

  return (
    <div className="li-root">

      {/* ── NAV ── */}
      <nav className="li-nav">
        <a href="#" className="li-logo">Locked<span>In</span></a>

        <ul className="li-nav-links">
          <li><a href="#">Platform</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Teams</a></li>
        </ul>

        <div className="li-nav-icon">
          <IconUser />
        </div>
      </nav>

      {/* ── MAIN ── */}
      <main className="li-main">

        {/* Login Card */}
        <div className="li-card">
          <div className="li-divider" />

          <h1 className="li-card-title">Pro Terminal Access</h1>
          <p className="li-card-subtitle">ENTER CREDENTIALS TO INITIALIZE SESSION</p>

          {/* Email Field */}
          <div className="li-field">
            <div className="li-field-header">
              <label className="li-label">Email Address</label>
            </div>
            <div className="li-input-wrap">
              <span className="li-input-icon"><IconEmail /></span>
              <input
                type="email"
                placeholder="agent@lockedin.pro"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="li-field">
            <div className="li-field-header">
              <label className="li-label">Security Key</label>
              <Link to="/forgot-password" className="li-recover">Recover Access</Link>
            </div>
            <div className="li-input-wrap">
              <span className="li-input-icon"><IconLock /></span>
              <input
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            className={`li-btn-primary${loading ? " loading" : ""}`}
            onClick={handleSubmit}
          >
            {loading ? "INITIALIZING..." : "Authorize Session"}
          </button>

          {/* OAuth */}
          <div className="li-ext-label">External Auth</div>
          <div className="li-oauth-grid">
            <Link to="/auth/steam" className="li-oauth-btn">
              <IconSteam /> Steam
            </Link>
            <Link to="/auth/discord" className="li-oauth-btn">
              <IconDiscord /> Discord
            </Link>
            <Link to="/auth/riot" className="li-oauth-btn">
              <IconRiot /> Riot
            </Link>
            <Link to="/auth/twitch" className="li-oauth-btn">
              <IconTwitch /> Twitch
            </Link>
          </div>

          {/* Signup link */}
          <p className="li-footer-link">
            Not a ranked player yet?{" "}
            <Link to="/signup">Signup</Link>
          </p>
        </div>

        {/* Hardware Verified Tag */}
        <div className="li-hw-tag">
          <div className="li-hw-thumb">
            <IconHardware />
          </div>
          <span className="li-hw-label">Hardware<br />Verified</span>
        </div>

      </main>

      {/* ── STATUS BAR ── */}
      <div className="li-statusbar">
        <span>
          <span className="li-status-dot" />
          SYSTEM: V2.4.0-STABLE &nbsp;·&nbsp; SERVER: GLOBAL-EDGE-01
        </span>
        <div className="li-status-icons">
          <span>⚙</span>
          <span>◎</span>
        </div>
      </div>

    </div>
  );
}
