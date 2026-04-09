import { Link, useLocation } from 'react-router-dom';
import './Feed.css';

// ── Icons ───────────────────────────────────────────
const IconBell = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>;
const IconDashboard = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>;
const IconUsers = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconBarChart = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>;
const IconSettings = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
const IconHelp = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
const IconLightning = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
const IconShare = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>;
const IconMore = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>;
const IconTrophy = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>;
const IconClock = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const IconCrosshair = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>;

export default function Feed() {
  const location = useLocation();

  return (
    <div className="fd-root">
      {/* ── TOP NAV ── */}
      <header className="fd-topnav">
        <div className="fd-topnav-left">
          <Link to="/feed" className="fd-logo">Locked<span>In</span></Link>
          <nav className="fd-top-links">
            {['Dashboard', 'Careers', 'Analytics', 'Messaging', 'Settings'].map(item => {
              const path = `/${item.toLowerCase()}`;
              const isActive = location.pathname.includes(item.toLowerCase()) || (item === 'Dashboard' && location.pathname === '/');
              return (
                <Link key={item} to={path} className={`fd-top-link ${isActive ? 'active' : ''}`}>
                  {item}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="fd-topnav-right">
          <button className="fd-icon-btn"><IconBell /></button>
          <div className="an-user-avatar-small">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="user" style={{width:'100%', height:'100%', borderRadius:'50%'}} />
          </div>
        </div>
      </header>

      <div className="fd-body">
        {/* ── SIDEBAR ── */}
        <aside className="fd-sidebar">
          <div className="fd-sidebar-user">
            <div className="fd-sidebar-avatar"><IconLightning /></div>
            <div className="fd-user-info-text">
              <span className="fd-user-name">Radiant</span>
              <span className="fd-user-sub">DUELIST MAIN</span>
            </div>
          </div>
          <nav className="fd-sidenav">
             <button className="fd-sidenav-item active"><IconDashboard /> <span>Dashboard</span></button>
             <button className="fd-sidenav-item"><IconUsers /> <span>Team Info</span></button>
             <button className="fd-sidenav-item"><IconBarChart /> <span>Rankings</span></button>
             <button className="fd-sidenav-item"><IconSettings /> <span>Settings</span></button>
             <button className="fd-sidenav-item"><IconHelp /> <span>Support</span></button>
          </nav>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className="fd-main">
          
          <div className="fd-banner-bg">
            <div className="fd-banner-glow"></div>
            {/* Outline mock from design */}
            <svg style={{position:'absolute', inset:0, width:'100%', height:'100%'}} viewBox="0 0 100 100" preserveAspectRatio="none">
               <rect x="40" y="10" width="20" height="80" rx="2" fill="none" stroke="#00e5ff" strokeWidth="0.5" opacity="0.3" />
            </svg>
          </div>

          <div className="fd-profile-header">
            <div className="fd-header-left">
              <div className="fd-profile-avatar">
                {/* Fake Aspas avatar */}
                <div style={{width:'100%', height:'100%', background:'linear-gradient(45deg, #0b1a2a, #112a40)', display:'flex', alignItems:'flex-end', justifyContent:'center'}}>
                   <svg width="100" height="100" viewBox="0 0 24 24" fill="#00e5ff" opacity="0.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
              </div>
              <div className="fd-profile-info">
                <div className="fd-badges">
                   <span className="fd-badge">RADIANT #15</span>
                   <span className="fd-badge gold">VALORANT CHAMPION 2023</span>
                </div>
                <h1 className="fd-player-name">Aspas</h1>
                <div className="fd-player-meta">
                   <span>Location <span style={{color:"#00e5ff"}}>▾</span></span>
                   <div className="fd-meta-dot"></div>
                   <span>Duelist Specialist</span>
                   <div className="fd-meta-dot"></div>
                   <span>Brazil</span>
                </div>
              </div>
            </div>
            <div className="fd-header-actions">
              <button className="fd-btn-primary"><IconUsers style={{marginRight: '8px', verticalAlign: 'middle'}}/> RECRUIT TO ROSTER</button>
              <button className="fd-btn-icon"><IconShare /></button>
              <button className="fd-btn-icon"><IconMore /></button>
            </div>
          </div>

          <div className="fd-grid">
            
            {/* Left Col: Role Proficiency */}
            <div className="fd-card">
               <div className="fd-card-header">
                  <h3 className="fd-card-title">Role Proficiency</h3>
                  <div style={{textAlign:'right'}}>
                     <span className="fd-card-action" style={{color:'#fff', fontSize:'0.55rem'}}>VALORANT MASTERY SCORE:</span><br/>
                     <span style={{color:'#00e5ff', fontSize:'0.9rem', fontWeight:'bold'}}>98.4</span>
                  </div>
               </div>
               
               <div className="fd-radar-container">
                 <div className="fd-radar-mock">
                   <div className="fd-radar-bg"></div>
                   <div className="fd-radar-poly"></div>
                   
                   <div className="fd-radar-label fd-rl-1">ENTRY FRAGGING</div>
                   <div className="fd-radar-label fd-rl-2">INITIATOR</div>
                   <div className="fd-radar-label fd-rl-3">SENTINEL</div>
                   <div className="fd-radar-label fd-rl-4">SMOKES</div>
                   <div className="fd-radar-label fd-rl-5">FLEX/ADAPTABILITY</div>
                 </div>
               </div>

               <div className="fd-role-bars">
                 <div className="fd-role-bar-wrap">
                    <div className="fd-role-bar-top"><span>FIRST BLOODS</span><span>28.4%</span></div>
                    <div className="fd-role-bar-bg"><div className="fd-role-bar-fill" style={{width:'85%'}}></div></div>
                 </div>
                 <div className="fd-role-bar-wrap">
                    <div className="fd-role-bar-top"><span>CLUTCH SUCCESS RATE</span><span>14.2%</span></div>
                    <div className="fd-role-bar-bg"><div className="fd-role-bar-fill" style={{width:'60%'}}></div></div>
                 </div>
               </div>
            </div>

            {/* Right Col: Stats & Achievements */}
            <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
               
               <div className="fd-card">
                  <h3 className="fd-card-title" style={{marginBottom:'20px'}}>VLR SEASON STATS</h3>
                  
                  <div className="fd-stats-top" style={{marginBottom: '20px'}}>
                     <div className="fd-stat-hero">
                        <span className="val">254.2</span>
                        <span className="lbl">AVERAGE COMBAT SCORE (ACS)</span>
                     </div>
                     <div className="fd-stat-hero">
                        <span className="val" style={{color:'#fff'}}>75.4%</span>
                        <span className="lbl">WIN RATE</span>
                     </div>
                     <div className="fd-stat-hero">
                        <span className="val">184.8</span>
                        <span className="lbl">ADR</span>
                     </div>
                  </div>

                  <div className="fd-stats-mid">
                     <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                       <div className="fd-stat-box">
                          <IconCrosshair />
                          <div>
                            <div className="val">31.2% Headshot %</div>
                            <div className="lbl">Global Duelist Avg: 22.8%</div>
                          </div>
                       </div>
                       <div className="fd-stat-box">
                          <IconClock />
                          <div>
                            <div className="val">1.28 K/D</div>
                            <div className="lbl">Last 3 Months Perf</div>
                          </div>
                       </div>
                     </div>
                     
                     <div className="fd-trend-box">
                       <span className="fd-trend-lbl">RECENT ACS VARIANCE</span>
                       <div className="fd-trend-bars">
                          <div className="fd-trend-bar" style={{height:'40%'}}></div>
                          <div className="fd-trend-bar" style={{height:'60%'}}></div>
                          <div className="fd-trend-bar high" style={{height:'95%'}}></div>
                          <div className="fd-trend-bar" style={{height:'35%'}}></div>
                          <div className="fd-trend-bar" style={{height:'70%'}}></div>
                          <div className="fd-trend-bar high" style={{height:'85%'}}></div>
                       </div>
                     </div>
                  </div>

                  <div className="fd-achievements">
                     <h3 className="fd-card-title" style={{marginBottom:'15px', fontSize:'0.9rem', color:'#f59e0b'}}><IconTrophy style={{marginRight:'5px', verticalAlign:'middle'}}/> VCT Milestone Records</h3>
                     <div className="fd-ach-grid">
                        <div className="fd-ach-card gold">
                           <div className="fd-ach-top"><span>CHAMPIONS WINNER</span><span>2023</span></div>
                           <div className="fd-ach-title">Champions 2023</div>
                           <div className="fd-ach-sub">Executive of Team LOUD</div>
                        </div>
                        <div className="fd-ach-card">
                           <div className="fd-ach-top"><span style={{color:'#00e5ff'}}>REGIONAL MVP</span><span>2023</span></div>
                           <div className="fd-ach-title">VCT Americas Stage 2</div>
                           <div className="fd-ach-sub">Regional domination</div>
                        </div>
                        <div className="fd-ach-card">
                           <div className="fd-ach-top"><span style={{color:'#5a7a8a'}}>FINALIST</span><span>2023</span></div>
                           <div className="fd-ach-title">Masters Tokyo</div>
                           <div className="fd-ach-sub">Top 2 placement</div>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
          </div>

          <div className="fd-grid" style={{marginTop:'20px'}}>
             {/* Match History Small */}
            <div className="fd-card">
              <div className="fd-card-header">
                <h3 className="fd-card-title">Recent Scrims & Matches</h3>
                <span className="fd-card-action">FULL VLR PROFILE</span>
              </div>
              <div className="fd-hist-list">
                <div className="fd-hist-item win">
                   <div className="fd-res-block">
                     <span className="fd-res-lbl win">WIN</span>
                     <span className="fd-res-score">13 : 10</span>
                   </div>
                   <div className="fd-match-teams">
                     <span className="fd-team-tag">LOUD</span>
                     <span>VS</span>
                     <span className="fd-team-tag" style={{background:'transparent', border:'1px solid rgba(255,255,255,0.2)'}}>NRG</span>
                   </div>
                   <div className="fd-match-stats">
                     <span className="fd-ms-val">292</span>
                     <span className="fd-ms-lbl">ACS</span>
                   </div>
                   <div className="fd-match-stats" style={{marginLeft:'auto', paddingRight:'10px'}}>
                     <span className="fd-ms-val" style={{color:'#00e5ff'}}>Ascent</span>
                     <span className="fd-ms-lbl">MAP</span>
                   </div>
                </div>
                <div className="fd-hist-item loss">
                   <div className="fd-res-block">
                     <span className="fd-res-lbl loss">LOSS</span>
                     <span className="fd-res-score">11 : 13</span>
                   </div>
                   <div className="fd-match-teams">
                     <span className="fd-team-tag">LOUD</span>
                     <span>VS</span>
                     <span className="fd-team-tag" style={{background:'transparent', border:'1px solid rgba(255,255,255,0.2)'}}>SEN</span>
                   </div>
                   <div className="fd-match-stats">
                     <span className="fd-ms-val">210</span>
                     <span className="fd-ms-lbl">ACS</span>
                   </div>
                   <div className="fd-match-stats" style={{marginLeft:'auto', paddingRight:'10px'}}>
                     <span className="fd-ms-val" style={{color:'#00e5ff'}}>Bind</span>
                     <span className="fd-ms-lbl">MAP</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Config & Partners */}
            <div className="fd-card">
               <div className="fd-bottom-grid">
                 <div style={{flex: 1}}>
                    <h3 className="fd-card-title" style={{marginBottom:'15px', fontSize:'1rem'}}>Global Partners</h3>
                    <div className="fd-sponsor-grid">
                       <div className="fd-sponsor-box"><IconLightning /></div>
                       <div className="fd-sponsor-box"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
                       <div className="fd-sponsor-box"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg></div>
                       <div className="fd-sponsor-box"><IconDashboard /></div>
                    </div>
                 </div>
                 
                 <div className="fd-config" style={{flex: 1, marginTop:'auto'}}>
                    <h3 className="fd-card-title" style={{fontSize:'0.75rem', color:'#5a7a8a', textTransform:'uppercase', marginBottom:'15px'}}>Valorant Pro Config</h3>
                    <div className="fd-config-row"><span className="fd-config-lbl">Mouse:</span><span className="fd-config-val">Razer Viper V2 Pro</span></div>
                    <div className="fd-config-row"><span className="fd-config-lbl">Mousepad:</span><span className="fd-config-val">Artisan Zero</span></div>
                    <div className="fd-config-row"><span className="fd-config-lbl">Monitor:</span><span className="fd-config-val">Zowie XL2566K 360Hz</span></div>
                 </div>
               </div>
            </div>
          </div>
          
        </main>
      </div>
    </div>
  );
}
