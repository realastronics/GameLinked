import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Settings.css';

// ── Icons ───────────────────────────────────────────
const IconBell = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>;
const IconDashboard = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>;
const IconUsers = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconBarChart = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>;
const IconSettings = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
const IconHelp = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
const IconUser = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IconShield = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IconKey = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>;
const IconMonitor = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
const IconSmartphone = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>;
const IconLogOut = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>;
const IconCheck = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>;

// Simple toggle component
const Toggle = ({ active, onClick }) => (
  <div className={`set-toggle ${active ? 'on' : ''}`} onClick={onClick}>
    <div className="set-toggle-dot"></div>
  </div>
);

export default function Settings() {
  const location = useLocation();
  const [toggles, setToggles] = useState({
    public: true,
    directInq: false,
    showRank: true
  });

  return (
    <div className="set-root">
      {/* ── TOP NAV ── */}
      <header className="set-topnav">
        <div className="set-topnav-left">
          <Link to="/feed" className="set-logo">Locked<span>In</span></Link>
          <nav className="set-top-links">
            {['Dashboard', 'Careers', 'Analytics', 'Messaging', 'Settings'].map(item => {
              const path = `/${item.toLowerCase()}`;
              return (
                <Link key={item} to={path} className={`set-top-link ${location.pathname.includes(item.toLowerCase()) ? 'active' : ''}`}>
                  {item}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="set-topnav-right">
          <button className="set-icon-btn"><IconBell /></button>
          <div className="set-user-avatar-small">
            <img src="https://i.pravatar.cc/150?u=a04258114e29026702d" alt="user" style={{width:'100%', height:'100%', objectFit:'cover'}} />
          </div>
        </div>
      </header>

      <div className="set-body">
        {/* ── SIDEBAR ── */}
        <aside className="set-sidebar">
          <div className="set-sidebar-user">
            <div className="set-sidebar-avatar">
               <img src="https://i.pravatar.cc/150?u=a04258114e29026702d" alt="user" style={{width:'100%', height:'100%', objectFit:'cover'}} />
            </div>
            <div className="set-user-info-text">
              <span className="set-user-name">LockedIn Admin</span>
              <span className="set-user-sub">ELITE TIER</span>
            </div>
          </div>

          <nav className="set-sidenav">
             <button className="set-sidenav-item"><IconDashboard /> <span>Dashboard</span></button>
             <button className="set-sidenav-item"><IconUsers /> <span>Roster</span></button>
             <button className="set-sidenav-item"><IconBarChart /> <span>Rankings</span></button>
             <button className="set-sidenav-item active"><IconSettings /> <span>Settings</span></button>
             <button className="set-sidenav-item"><IconHelp /> <span>Support</span></button>
          </nav>

          <div className="set-sidebar-bottom">
            <div className="set-pro-banner">
               <div className="set-pro-lbl">PRO STATUS</div>
               <button className="set-pro-btn">Upgrade to Pro</button>
               <div className="set-pro-line"></div>
            </div>
            <button className="set-logout-btn"><IconLogOut /> LOG OUT</button>
          </div>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className="set-main">
          
          <div className="set-header">
             <h1 className="set-title">Account Settings</h1>
             <p className="set-subtitle">Manage your professional presence and platform security</p>
          </div>

          <div className="set-grid">
            
            {/* LEFT COLUMN */}
            <div className="set-col-left">
              
              {/* Profile Identity */}
              <section className="set-card">
                 <h2 className="set-card-title"><IconUser /> Profile Identity</h2>
                 
                 <div className="set-form-row">
                    <div className="set-input-group">
                       <label className="set-input-label">PLAYER HANDLE</label>
                       <input type="text" className="set-input" defaultValue="Viper_Neon" />
                    </div>
                    <div className="set-input-group">
                       <label className="set-input-label">PROFESSIONAL TITLE</label>
                       <input type="text" className="set-input" defaultValue="Lead Strategist" />
                    </div>
                 </div>

                 <div className="set-form-row">
                    <div className="set-input-group">
                       <label className="set-input-label">PROFESSIONAL BIO</label>
                       <textarea className="set-textarea" defaultValue="Ex-pro Valorant strategist with 5+ years of Tier 1 experience. Specializing in macro-rotation analysis and mid-round calling protocols." />
                    </div>
                 </div>

                 <div className="set-form-row">
                    <div className="set-input-group">
                       <label className="set-input-label">RIOT ID INTEGRATION</label>
                       <div className="set-link-input">
                         <span className="set-link-prefix" style={{color:'#ef4444'}}>■</span>
                         <input type="text" defaultValue="Viper#0001" />
                       </div>
                    </div>
                    <div className="set-input-group">
                       <label className="set-input-label">STEAM PROFILE</label>
                       <div className="set-link-input">
                         <span className="set-link-prefix">steamcommunity.com/id/</span>
                         <input type="text" defaultValue="vpe" />
                       </div>
                    </div>
                 </div>

                 <div style={{display:'flex', justifyContent:'flex-end', marginTop:'10px'}}>
                   <button className="set-btn-primary">Update Profile</button>
                 </div>
              </section>

              {/* Account Security */}
              <section className="set-card">
                 <h2 className="set-card-title"><IconShield /> Account Security</h2>
                 
                 <div className="set-security-row">
                    <div style={{flex: 1, paddingRight:'40px', borderRight:'1px solid rgba(255,255,255,0.05)'}}>
                       <label className="set-input-label" style={{marginBottom:'15px', display:'block'}}>SECURITY KEY MANAGEMENT</label>
                       <p style={{fontSize:'0.8rem', color:'#8aaabb', lineHeight:'1.5', margin:'0 0 20px 0'}}>Add hardware security keys (YubiKey, Google Titan) for un-phishable protection.</p>
                       
                       <div className="set-key-box">
                          <div className="set-key-info">
                            <IconKey style={{color:'#00e5ff'}}/>
                            <div>
                               <div className="set-key-name">Main YubiKey 5C</div>
                               <div className="set-key-date">Added on Dec 12, 2023</div>
                            </div>
                          </div>
                          <button className="set-danger-btn">REVOKE</button>
                       </div>
                       
                       <div className="set-add-key">+ ADD NEW KEY</div>
                    </div>

                    <div style={{flex: 1, paddingLeft:'40px'}}>
                       <label className="set-input-label" style={{marginBottom:'20px', display:'block'}}>AUTHORIZED DEVICES</label>
                       
                       <div className="set-devices-list">
                          <div className="set-device-item">
                             <div className="set-device-info">
                               <IconMonitor className="set-device-icon" />
                               <div className="set-device-text">
                                 <div className="set-device-name" style={{display:'flex', alignItems:'center', gap:'10px'}}>Windows PC - Berlin, DE <span className="set-device-status">CURRENT</span></div>
                                 <div className="set-device-loc">Chrome 122.0.0 · Last active: Now</div>
                               </div>
                             </div>
                          </div>
                          
                          <div className="set-device-item">
                             <div className="set-device-info">
                               <IconSmartphone className="set-device-icon" />
                               <div className="set-device-text">
                                 <div className="set-device-name">iPhone 15 Pro - Berlin, DE</div>
                                 <div className="set-device-loc">LockedIn Mobile 2.4.1 · Last active: 2h ago</div>
                               </div>
                             </div>
                             <button className="set-signout-btn">Sign Out</button>
                          </div>
                          
                          <div className="set-device-item">
                             <div className="set-device-info">
                               <IconMonitor className="set-device-icon" />
                               <div className="set-device-text">
                                 <div className="set-device-name">MacBook Pro - Los Angeles, US</div>
                                 <div className="set-device-loc">Safari 17.1 · Last active: Feb 28, 2024</div>
                               </div>
                             </div>
                             <button className="set-signout-btn">Sign Out</button>
                          </div>
                       </div>
                    </div>
                 </div>
              </section>

              {/* Notification Matrix */}
              <section className="set-card">
                 <h2 className="set-card-title"><IconBell style={{transform:'rotate(-15deg)'}}/> Notification Matrix</h2>
                 
                 <div className="set-notifs-grid">
                    <div className="set-notif-col">
                       <h4>APP ALERTS</h4>
                       <label className="set-checkbox-wrap"><input type="checkbox" className="set-checkbox" defaultChecked /> <span className="set-checkbox-lbl">Direct Messages</span></label>
                       <label className="set-checkbox-wrap"><input type="checkbox" className="set-checkbox" defaultChecked /> <span className="set-checkbox-lbl">Team Invites</span></label>
                       <label className="set-checkbox-wrap"><input type="checkbox" className="set-checkbox" /> <span className="set-checkbox-lbl">Match Results</span></label>
                    </div>
                    
                    <div className="set-notif-col">
                       <h4>EMAIL DIGEST</h4>
                       <label className="set-checkbox-wrap"><input type="checkbox" className="set-checkbox" defaultChecked /> <span className="set-checkbox-lbl">Weekly Career Progress</span></label>
                       <label className="set-checkbox-wrap"><input type="checkbox" className="set-checkbox" /> <span className="set-checkbox-lbl">Marketing & Promotions</span></label>
                       <label className="set-checkbox-wrap"><input type="checkbox" className="set-checkbox" defaultChecked/> <span className="set-checkbox-lbl">Scout Inquiries</span></label>
                    </div>
                    
                    <div className="set-notif-col">
                       <h4>DESKTOP PUSH</h4>
                       <label className="set-checkbox-wrap"><input type="checkbox" className="set-checkbox" defaultChecked /> <span className="set-checkbox-lbl">Real-time Match Alerts</span></label>
                       <label className="set-checkbox-wrap"><input type="checkbox" className="set-checkbox" defaultChecked /> <span className="set-checkbox-lbl">System Status</span></label>
                    </div>
                 </div>
              </section>

            </div>

            {/* RIGHT COLUMN */}
            <div className="set-col-right">
              
              <section className="set-card set-sub-card">
                 <div className="set-sub-top">
                    <div style={{display:'flex', flexDirection:'column'}}>
                       <span className="set-sub-tier">ELITE TIER</span>
                       <div className="set-sub-price">$49.99<span className="set-sub-period">/mo</span></div>
                    </div>
                    <span className="set-sub-badge">ACTIVE</span>
                 </div>
                 
                 <div className="set-sub-features">
                    <div className="set-sub-feat"><IconCheck className="set-feat-icon"/> Advanced Career Analytics</div>
                    <div className="set-sub-feat"><IconCheck className="set-feat-icon"/> Verified Pro Badge</div>
                    <div className="set-sub-feat"><IconCheck className="set-feat-icon"/> Direct Scout Messaging</div>
                 </div>
                 
                 <button className="set-btn-secondary" style={{width:'100%'}}>MANAGE SUBSCRIPTION</button>
              </section>

              <section className="set-card">
                 <label className="set-input-label" style={{marginBottom:'20px', display:'block'}}>QUICK PREFERENCES</label>
                 
                 <div className="set-pref-row">
                    <span className="set-pref-lbl">Public Profile Visibility</span>
                    <Toggle active={toggles.public} onClick={() => setToggles({...toggles, public: !toggles.public})} />
                 </div>
                 
                 <div className="set-pref-row">
                    <span className="set-pref-lbl">Allow Direct Inquiries</span>
                    <Toggle active={toggles.directInq} onClick={() => setToggles({...toggles, directInq: !toggles.directInq})} />
                 </div>
                 
                 <div className="set-pref-row">
                    <span className="set-pref-lbl">Show In Rankings</span>
                    <Toggle active={toggles.showRank} onClick={() => setToggles({...toggles, showRank: !toggles.showRank})} />
                 </div>
              </section>

            </div>
          </div>
          
        </main>
      </div>
    </div>
  );
}
