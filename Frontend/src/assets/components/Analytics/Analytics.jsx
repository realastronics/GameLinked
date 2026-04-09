import { Link, useLocation } from 'react-router-dom';
import './Analytics.css';

// ── Icons ───────────────────────────────────────────
const IconBell = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>;
const IconDashboard = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>;
const IconUsers = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconBarChart = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>;
const IconSettings = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
const IconHelp = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
const IconMessageCircle = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>;
const IconLightning = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
const IconEdit = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;

export default function Analytics() {
  const location = useLocation();

  return (
    <div className="an-root">
      
      {/* ── TOP NAV ── */}
      <header className="an-topnav">
        <div className="an-topnav-left">
          <Link to="/feed" className="an-logo">Locked<span>In</span></Link>
          <nav className="an-top-links">
            {['Dashboard', 'Careers', 'Analytics', 'Messaging'].map(item => {
              const path = `/${item.toLowerCase()}`;
              const isActive = location.pathname.includes(item.toLowerCase()) || (item === 'Dashboard' && location.pathname === '/');
              return (
                <Link key={item} to={path} className={`an-top-link ${isActive ? 'active' : ''}`}>
                  {item}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="an-topnav-right">
          <button className="an-icon-btn"><IconBell /></button>
          <div className="an-user-avatar-small">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="user" style={{width:'100%', height:'100%'}} />
          </div>
        </div>
      </header>

      <div className="an-body">
        
        {/* ── SIDEBAR ── */}
        <aside className="an-sidebar">
          <div className="an-sidebar-user">
            <div className="an-sidebar-avatar"><IconLightning /></div>
            <div className="an-user-info-text">
              <span className="an-user-name">Radiant Elite</span>
              <span className="an-user-sub">DUELIST SPECIALIST</span>
            </div>
          </div>

          <nav className="an-sidenav">
             <button className="an-sidenav-item"><IconDashboard /> <span>Dashboard</span></button>
             <button className="an-sidenav-item"><IconUsers /> <span>Roster</span></button>
             <button className="an-sidenav-item"><IconBarChart /> <span>Global Rank</span></button>
             <button className="an-sidenav-item active"><IconSettings /> <span>Audit Mastery</span></button>
             <button className="an-sidenav-item"><IconHelp /> <span>Config</span></button>
          </nav>

          <button className="an-upgrade-btn">UPGRADE TO PRO</button>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className="an-main">
          
          <div className="an-header">
            <div className="an-header-left">
               <div className="an-live-indicator">
                 <div className="an-live-dot"></div>
                 <span>VALORANT PRO EVAL</span> RECENT SCRIMS VCT
               </div>
               <h1 className="an-title">Tactical Analytics</h1>
            </div>
            <div className="an-header-actions">
               <button className="an-btn-secondary">Share Roster</button>
               <button className="an-btn-primary">Re-sync Match Data</button>
            </div>
          </div>

          <div className="an-grid-top">
            {/* Combat Performance Chart */}
            <div className="an-chart-card">
               <div className="an-chart-header">
                  <div className="an-chart-title">
                     <h3>Combat Performance</h3>
                     <p>ACS AGAINST CORE / TIER A</p>
                  </div>
                  <div className="an-chart-legend">
                     <span className="an-legend-item"><div className="an-legend-dot" style={{background: '#00e5ff'}}></div> ASPAS STATS</span>
                     <span className="an-legend-item"><div className="an-legend-dot" style={{background: '#f59e0b'}}></div> RADIANT AVG</span>
                  </div>
               </div>
               <div className="an-chart-area">
                  <svg className="an-chart-svg" viewBox="0 0 100 50" preserveAspectRatio="none">
                     {/* Orange line (Average) */}
                     <path d="M 0 35 Q 20 30, 40 25 T 70 20 T 100 15" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2,2" opacity="0.6"/>
                     {/* Blue line (Aspas) */}
                     <path d="M 0 40 Q 15 35, 30 25 T 60 15 T 80 10 T 100 5" fill="none" stroke="#00e5ff" strokeWidth="2" />
                  </svg>
                  <div className="an-chart-x-axis">
                     <span>FEB 12</span><span>FEB 19</span><span>FEB 26</span><span>MAR 04</span><span>MAR 11</span><span>MAR 18</span>
                  </div>
               </div>
            </div>

            {/* AI Insights (Tactical Insights) */}
            <div className="an-ai-card">
               <h3 className="an-ai-title" style={{marginBottom:'25px'}}><IconMessageCircle /> Tactical Insights</h3>
               
               <div className="an-insight-block">
                 <div className="an-insight-label">GREAT EXECUTION</div>
                 <div className="an-insight-text">
                   Flash efficacy is in top 15% on **Bind**. You are missing the pop-flash window at B Short by approx. 0.1s.
                 </div>
               </div>
               
               <div className="an-insight-block blue">
                 <div className="an-insight-label blue">MATCH AWARENESS</div>
                 <div className="an-insight-text">
                   Only 1 First Blood Success Rate 1v1 on attack recently 42%. Maintain aggression gaining mid control / A long.
                 </div>
               </div>
               
               <div className="an-insight-block">
                 <div className="an-insight-label">POSITIONING</div>
                 <div className="an-insight-text">
                   Win rate is a full 5 percentile pts increased if trade or recontact initiated when the spike is planted.
                 </div>
               </div>
            </div>
          </div>

          {/* Metrics Row */}
          <div className="an-metrics-grid">
             <div className="an-metric-card">
               <div className="an-metric-title">UTIL EFFICACY <IconEdit/></div>
               <div className="an-metric-val">74%</div>
               <div className="an-metric-bar"><div className="an-metric-fill" style={{width: '74%'}}></div></div>
               <span style={{fontFamily:'Share Tech Mono', fontSize:'0.55rem', color:'#5a7a8a', display:'block', marginTop:'6px'}}>15.2 EFFECTIVE M/ROUND</span>
             </div>
             <div className="an-metric-card">
               <div className="an-metric-title">KAST % <IconEdit/></div>
               <div className="an-metric-val">88.4%</div>
               <div className="an-metric-bar"><div className="an-metric-fill" style={{width: '88.4%', background:'#f59e0b'}}></div></div>
               <span style={{fontFamily:'Share Tech Mono', fontSize:'0.55rem', color:'#5a7a8a', display:'block', marginTop:'6px'}}>HIGH INVOLVEMENT</span>
             </div>
             <div className="an-metric-card">
               <div className="an-metric-title">K/D RATIO <IconEdit/></div>
               <div className="an-metric-val">1.42</div>
               <div className="an-metric-bar"><div className="an-metric-fill" style={{width: '85%'}}></div></div>
               <span style={{fontFamily:'Share Tech Mono', fontSize:'0.55rem', color:'#5a7a8a', display:'block', marginTop:'6px'}}>SEASON OUTLIER</span>
             </div>
          </div>

          <div className="an-bottom-grid">
            {/* Agent Mastery */}
            <div className="an-agent-card">
               <div className="an-table-header">
                 <h3>Agent Mastery</h3>
               </div>
               <div className="an-agent-list">
                 <div className="an-agent-item">
                    <div className="an-agent-info">
                      <div className="an-agent-avatar"><svg viewBox="0 0 24 24" fill="#00e5ff" opacity="0.5"><path d="M12 2L2 22h20L12 2z"/></svg></div>
                      <div>
                        <div className="an-agent-name">JETT</div>
                        <div className="an-agent-wl"><span>19 W</span> / 6 L</div>
                      </div>
                    </div>
                    <div className="an-agent-bar-bg" style={{maxWidth:'80px'}}><div className="an-agent-bar-fill" style={{width:'76%'}}></div></div>
                 </div>
                 
                 <div className="an-agent-item">
                    <div className="an-agent-info">
                      <div className="an-agent-avatar"><svg viewBox="0 0 24 24" fill="#5a7a8a" opacity="0.5"><circle cx="12" cy="12" r="10"/></svg></div>
                      <div>
                        <div className="an-agent-name">OMEN</div>
                        <div className="an-agent-wl"><span>11 W</span> / 2 L</div>
                      </div>
                    </div>
                    <div className="an-agent-bar-bg" style={{maxWidth:'80px'}}><div className="an-agent-bar-fill" style={{width:'84%', background:'#f59e0b'}}></div></div>
                 </div>
                 
                 <div className="an-agent-item">
                    <div className="an-agent-info">
                      <div className="an-agent-avatar"><svg viewBox="0 0 24 24" fill="#f59e0b" opacity="0.5"><rect x="4" y="4" width="16" height="16"/></svg></div>
                      <div>
                        <div className="an-agent-name">KILLJOY</div>
                        <div className="an-agent-wl"><span>8 W</span> / 5 L</div>
                      </div>
                    </div>
                    <div className="an-agent-bar-bg" style={{maxWidth:'80px'}}><div className="an-agent-bar-fill" style={{width:'61%'}}></div></div>
                 </div>
                 
                 <span style={{fontFamily:'Share Tech Mono', fontSize:'0.65rem', color:'#00e5ff', textAlign:'center', display:'block', cursor:'pointer', marginTop:'10px'}}>VIEW FULL ROSTER</span>
               </div>
            </div>

            {/* Match Statistics */}
            <div className="an-table-card">
               <div className="an-table-header">
                  <h3>Match Statistics</h3>
                  <div className="an-table-tabs">
                    <button className="an-table-tab active">ALL MATCHES</button>
                    <button className="an-table-tab">COMPETITIVE</button>
                  </div>
               </div>
               
               <table className="an-table">
                 <thead>
                   <tr>
                     <th>RESULT</th>
                     <th>AGENT</th>
                     <th>MAP</th>
                     <th>K/D</th>
                     <th>ACS</th>
                     <th>HS%</th>
                     <th>COMBAT SCORE</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <td><div style={{display:'flex', flexDirection:'column'}}><span className="an-table-res victory" style={{color:'#22c55e'}}>WIN</span><span style={{fontSize:'0.7rem', color:'#5a7a8a'}}>13:7</span></div></td>
                     <td><span style={{color:'#fff', fontWeight:600}}>JETT</span></td>
                     <td>Ascent</td>
                     <td>28/12</td>
                     <td>322</td>
                     <td>32%</td>
                     <td><span style={{color:'#f59e0b', fontWeight:700}}>91 ↗</span></td>
                   </tr>
                   <tr>
                     <td><div style={{display:'flex', flexDirection:'column'}}><span className="an-table-res defeat" style={{color:'#ef4444'}}>LOSS</span><span style={{fontSize:'0.7rem', color:'#5a7a8a'}}>11:13</span></div></td>
                     <td><span style={{color:'#fff', fontWeight:600}}>OMEN</span></td>
                     <td>Bind</td>
                     <td>18/16</td>
                     <td>260</td>
                     <td>24%</td>
                     <td><span style={{color:'#00e5ff', fontWeight:700}}>74 ↘</span></td>
                   </tr>
                   <tr>
                     <td><div style={{display:'flex', flexDirection:'column'}}><span className="an-table-res victory" style={{color:'#22c55e'}}>WIN</span><span style={{fontSize:'0.7rem', color:'#5a7a8a'}}>13:10</span></div></td>
                     <td><span style={{color:'#fff', fontWeight:600}}>JETT</span></td>
                     <td>Haven</td>
                     <td>24/15</td>
                     <td>298</td>
                     <td>31%</td>
                     <td><span style={{color:'#22c55e', fontWeight:700}}>82 →</span></td>
                   </tr>
                 </tbody>
               </table>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
