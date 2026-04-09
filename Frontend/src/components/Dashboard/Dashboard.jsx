import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Dashboard.css';

// ── Inline SVG Icons ──────────────────────────────────────────────────────────
const IconDashboard  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>;
const IconVacancies  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const IconRankings   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const IconSettings   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
const IconBell       = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>;
const IconUser       = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>;
const IconSearch     = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const IconFilter     = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>;
const IconChevDown   = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>;
const IconClock      = () => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const IconMapPin     = () => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const IconStar       = () => <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const IconArrow      = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
const IconTrophy     = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>;
const IconCalendar   = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
const IconUsers      = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconDollar     = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const IconBook       = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>;
const IconZap        = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;

// ── TAG COLOR MAP ─────────────────────────────────────────────────────────────
const TAG_COLORS = {
  blue:   { bg: 'rgba(0,180,255,0.1)',   color: '#00b4ff' },
  purple: { bg: 'rgba(139,92,246,0.1)',  color: '#8b5cf6' },
  green:  { bg: 'rgba(34,197,94,0.1)',   color: '#22c55e' },
  amber:  { bg: 'rgba(245,158,11,0.12)', color: '#f59e0b' },
  red:    { bg: 'rgba(239,68,68,0.1)',   color: '#ef4444' },
};

// ── DATA ──────────────────────────────────────────────────────────────────────
const JOBS = [
  { id:1, game:'CS2', gameColor:'#f59e0b', gameBg:'rgba(245,158,11,0.12)', title:'Primary AWPer', org:'FaZe Clan', location:'Berlin, DE / Remote', salaryMin:'$12,000', salaryMax:'$15,000', salaryTag:'CONTRACT', tags:['CS2/GLOBAL ELITE','ACTL 13+ EXTRA','ENGLISH PROFICIENCY'], tagColors:['blue','blue','purple'], skillMatch:82, postedAgo:'2 HOURS AGO', type:'apply' },
  { id:2, game:'LOL', gameColor:'#8b5cf6', gameBg:'rgba(139,92,246,0.12)', title:'In-Game Leader (IGL)', org:'Team Liquid', location:'Los Angeles, CA', salaryMin:'$9,500', salaryMax:'$11,000', salaryTag:'FULL-TIME + BENEFITS', tags:['VALORANT ACT','LEADERSHIP HUB','STRATEGIC ANALYSIS'], tagColors:['green','blue','purple'], skillMatch:76, postedAgo:'5 HOURS AGO', type:'apply' },
  { id:3, game:'LOL', gameColor:'#22d3ee', gameBg:'rgba(34,211,238,0.12)', title:'Logitech G Global Ambassador', org:'Logitech', location:'Remote', description:'Seeking top-tier talent in Valorant and League of Legends for our 2026 gear ambassador program. Includes gear budget, travel expenses, and monthly stipend.', salaryFlat:'$5,000', salaryExtra:'50K+', salaryTag:'SPONSORSHIP OPP.', tags:[], tagColors:[], skillMatch:null, postedAgo:null, type:'paid' },
  { id:4, game:'DOTA', gameColor:'#ef4444', gameBg:'rgba(239,68,68,0.12)', title:'Position 4 Support', org:'OG Esports', location:'Stockholm / Remote', salaryMin:'$8,000', salaryMax:'$10,500', salaryTag:'HIGH-FREQUENCY MATCHES', tags:['T1 EXPERIENCE','MICRO PROFICIENCY','EU WEST RANK T1'], tagColors:['blue','green','purple'], skillMatch:91, postedAgo:'1 DAY AGO', type:'apply' },
];

const SPONSORSHIPS = [
  { id:1, brand:'Red Bull Esports', brandColor:'#ef4444', brandBg:'rgba(239,68,68,0.1)', tier:'ELITE SPONSOR', title:'Red Bull Athlete Program 2026', games:['CS2','Valorant','RL'], value:'$2,500/mo + gear', perks:['Monthly stipend','Travel budget','Red Bull supply','Social media boost'], deadline:'Apr 30, 2026', slots:8, status:'OPEN', featured:true, desc:'Join the Red Bull family as a sponsored esports athlete. Receive monthly financial support, travel to events, and be featured across Red Bull digital channels.' },
  { id:2, brand:'Logitech G', brandColor:'#22d3ee', brandBg:'rgba(34,211,238,0.1)', tier:'GEAR SPONSOR', title:'Logitech G Ambassador 2026', games:['Any Title'], value:'$5,000 gear + $1,200/mo', perks:['Full gear setup','Social content stipend','Event invites','Pro coaching access'], deadline:'May 15, 2026', slots:12, status:'OPEN', featured:false, desc:'Represent Logitech G as a content creator or competitive player. Get a complete gear setup and collaborate on product launches.' },
  { id:3, brand:'HyperX', brandColor:'#f59e0b', brandBg:'rgba(245,158,11,0.1)', tier:'HARDWARE PARTNER', title:'HyperX Rising Star Program', games:['Multiplatform'], value:'$800/mo + hardware', perks:['HyperX peripherals','Stream overlay kit','PR features','Discord community'], deadline:'Rolling', slots:20, status:'APPLYING', featured:false, desc:'HyperX is looking for rising talent across all esports titles to represent their brand on Twitch, YouTube, and TikTok.' },
  { id:4, brand:'NVIDIA', brandColor:'#76b900', brandBg:'rgba(118,185,0,0.1)', tier:'TECH PARTNER', title:'NVIDIA GeForce Creator Grant', games:['PC Titles'], value:'RTX 4090 + $3,000', perks:['GPU grant','DLSS showcase','NVIDIA event pass','Press features'], deadline:'Jun 1, 2026', slots:5, status:'OPEN', featured:true, desc:'NVIDIA is seeking elite performers to showcase the power of GeForce RTX in competitive and content creation spaces.' },
];

const TOURNAMENTS = [
  { id:1, game:'CS2', gameColor:'#f59e0b', gameBg:'rgba(245,158,11,0.12)', title:'LockedIn Pro Series – Spring 2026', org:'LockedIn Official', format:'5v5 Double Elimination', prizePool:'$50,000', prizeBreakdown:['1st: $25,000','2nd: $12,000','3rd: $8,000','4th: $5,000'], region:'Global', startDate:'Apr 20, 2026', regDeadline:'Apr 15, 2026', teamsRegistered:24, maxTeams:32, status:'REGISTRATION OPEN', tags:['OPEN QUALIFIER','PRIZE POOL','GLOBAL'] },
  { id:2, game:'LOL', gameColor:'#8b5cf6', gameBg:'rgba(139,92,246,0.12)', title:'Valorant Invitational Cup', org:'Riot Partners', format:'5v5 Swiss + Playoffs', prizePool:'$30,000', prizeBreakdown:['1st: $15,000','2nd: $8,000','3rd-4th: $3,500'], region:'NA / EU', startDate:'Apr 28, 2026', regDeadline:'Apr 22, 2026', teamsRegistered:16, maxTeams:16, status:'FULL – WAITLIST', tags:['INVITATIONAL','NA/EU','STREAMED'] },
  { id:3, game:'DOTA', gameColor:'#ef4444', gameBg:'rgba(239,68,68,0.12)', title:'Dota 2 Open Cup Season 3', org:'ESL Gaming', format:'5v5 Single Elimination', prizePool:'$20,000', prizeBreakdown:['1st: $10,000','2nd: $6,000','3rd: $4,000'], region:'EU / CIS', startDate:'May 5, 2026', regDeadline:'Apr 30, 2026', teamsRegistered:8, maxTeams:32, status:'REGISTRATION OPEN', tags:['ESL PARTNER','EU/CIS','OPEN'] },
  { id:4, game:'RL', gameColor:'#22c55e', gameBg:'rgba(34,197,94,0.1)', title:'Rocket League Championship Series Qualifier', org:'Psyonix', format:'3v3 Round Robin + Finals', prizePool:'$15,000', prizeBreakdown:['1st: $7,500','2nd: $4,500','3rd: $3,000'], region:'North America', startDate:'May 12, 2026', regDeadline:'May 8, 2026', teamsRegistered:40, maxTeams:64, status:'REGISTRATION OPEN', tags:['RLCS QUALIFIER','NA','OFFICIAL'] },
];

const COACHES = [
  { id:1, name:'XeqtR', specialty:'CS2 / Rifler Mechanics', avatar:'XR', rank:'FACEIT LVL 10', rating:4.9, reviews:128, price:75, per:'hour', games:['CS2','Valorant'], tags:['AIM TRAINING','GAME SENSE','VOD REVIEW'], tagColors:['blue','purple','green'], exp:'7 years pro', students:312, available:true },
  { id:2, name:'VoidIGL', specialty:'Leadership & Stratbook', avatar:'VI', rank:'VALORANT RADIANT', rating:4.7, reviews:89, price:60, per:'hour', games:['Valorant','CS2'], tags:['IGL COACHING','STRAT DESIGN','COMMS'], tagColors:['purple','blue','green'], exp:'5 years semi-pro', students:201, available:true },
  { id:3, name:'ArcaneSupport', specialty:'Dota 2 Support Roles', avatar:'AS', rank:'IMMORTAL RANK', rating:4.8, reviews:156, price:50, per:'hour', games:['Dota 2'], tags:['POSITION 4/5','WARDING','ROTATIONS'], tagColors:['green','blue','purple'], exp:'6 years pro', students:445, available:false },
  { id:4, name:'ProxyCaster', specialty:'Content & Streaming Growth', avatar:'PC', rank:'VERIFIED PRO', rating:4.6, reviews:74, price:90, per:'session', games:['All Titles'], tags:['STREAMING SETUP','CONTENT OPS','BRAND GROWTH'], tagColors:['amber','purple','blue'], exp:'4 years content pro', students:178, available:true },
  { id:5, name:'NexusSniper', specialty:'BR & Tactical Shooter FPS', avatar:'NS', rank:'PRED / TOP 500', rating:4.9, reviews:203, price:65, per:'hour', games:['Apex','Valorant','Warzone'], tags:['LONG RANGE META','POSITIONING','RECOIL CONTROL'], tagColors:['red','blue','purple'], exp:'8 years competitive', students:567, available:true },
];

// ── Game mini-icons ───────────────────────────────────────────────────────────
const CS2Icon  = ({color}) => <svg width="22" height="22" viewBox="0 0 32 32" fill={color}><path d="M4 8h6l-2 16H4zm18 0h6L24 24h-4zm-9 0h6l2 16h-6z" opacity=".8"/></svg>;
const LolIcon  = ({color}) => <svg width="22" height="22" viewBox="0 0 32 32" fill={color}><path d="M16 2L4 8v8c0 7.7 5.2 14.9 12 17 6.8-2.1 12-9.3 12-17V8z" opacity=".8"/><path d="M16 6l-9 4.5V16c0 5.6 3.8 10.8 9 12.4C21.2 26.8 25 21.6 25 16v-5.5z" fill="#080d12" opacity=".6"/></svg>;
const DotaIcon = ({color}) => <svg width="22" height="22" viewBox="0 0 32 32" fill={color}><polygon points="16,3 29,10 29,22 16,29 3,22 3,10" opacity=".8"/><polygon points="16,9 23,13 23,19 16,23 9,19 9,13" fill="#080d12" opacity=".6"/></svg>;
const RLIcon   = ({color}) => <svg width="22" height="22" viewBox="0 0 32 32" fill={color}><circle cx="16" cy="16" r="12" opacity=".3"/><circle cx="16" cy="16" r="7" opacity=".8"/><circle cx="16" cy="16" r="3" fill="#080d12"/></svg>;

function GameIcon({game, color}) {
  if (game === 'CS2')  return <CS2Icon  color={color}/>;
  if (game === 'LOL')  return <LolIcon  color={color}/>;
  if (game === 'DOTA') return <DotaIcon color={color}/>;
  if (game === 'RL')   return <RLIcon   color={color}/>;
  return <svg width="22" height="22" viewBox="0 0 32 32" fill={color}><circle cx="16" cy="16" r="10" opacity=".8"/></svg>;
}

// ─────────────────────────────────────────────────────────────────────────────
//  MAIN DASHBOARD
// ─────────────────────────────────────────────────────────────────────────────
export default function Dashboard() {
  const location = useLocation();
  const [activeNav,    setActiveNav]    = useState('careers');
  const [activeTab,    setActiveTab]    = useState('team_vacancies');
  const [activeRegion, setActiveRegion] = useState('NA');
  const [gameFilter,   setGameFilter]   = useState('Counter-Strike 2');
  const [searchQuery,  setSearchQuery]  = useState('');

  const regions = ['NA', 'EU', 'ASIA', 'LATAM'];
  const tabs    = [
    { label: 'Team Vacancies',  key: 'team_vacancies' },
    { label: 'Sponsorships',    key: 'sponsorships'   },
    { label: 'Tournaments',     key: 'tournaments'    },
    { label: 'Coaching Rates',  key: 'coaching_rates' },
  ];

  return (
    <div className="db-root">

      {/* ── TOP NAV ── */}
      <header className="db-topnav">
        <div className="db-topnav-left">
          <a href="#" className="db-logo">Locked<span>In</span></a>
          <nav className="db-top-links">
            {['Feed', 'Careers', 'Analytics', 'Messaging'].map(item => {
              const path = item === 'Careers' ? '/dashboard' : `/${item.toLowerCase()}`;
              return (
                <Link key={item} to={path}
                  className={`db-top-link ${location.pathname.includes(item.toLowerCase()) || (item === 'Careers' && location.pathname === '/dashboard') ? 'active' : ''}`}
                >
                  {item}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="db-topnav-right">
          <div className="db-search-bar">
            <IconSearch />
            <input type="text" placeholder="Search vacancies..."
              value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          </div>
          <button className="db-icon-btn"><IconBell /></button>
          <button className="db-icon-btn"><IconUser /></button>
        </div>
      </header>

      <div className="db-body">

        {/* ── SIDEBAR ── */}
        <aside className="db-sidebar">
          <div className="db-user-badge">
            <div className="db-user-avatar">
              <span>PT</span>
              <div className="db-user-rank">PRO</div>
            </div>
            <div className="db-user-name">Pro Tier</div>
            <div className="db-user-sub">MECHANICAL SPECIALIST</div>
            <button className="db-upgrade-btn">▲ UPGRADE TO ELITE</button>
          </div>
          <nav className="db-sidenav">
            {[
              { id:'dashboard', label:'Dashboard', Icon:IconDashboard },
              { id:'vacancies', label:'Vacancies',  Icon:IconVacancies },
              { id:'rankings',  label:'Rankings',   Icon:IconRankings  },
              { id:'settings',  label:'Settings',   Icon:IconSettings  },
            ].map(({ id, label, Icon }) => (
              <button key={id}
                className={`db-sidenav-item ${activeNav === id ? 'active' : ''}`}
                onClick={() => setActiveNav(id)}>
                <Icon /><span>{label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* ── MAIN ── */}
        <main className="db-main">

          {/* Hero */}
          <div className="db-hero">
            <div className="db-hero-left">
              <div className="db-live-badge"><span className="db-live-dot" />LIVE MARKET HUB</div>
              <h1 className="db-hero-title">Career Marketplace</h1>
            </div>
            <div className="db-hero-stats">
              <div className="db-stat-card">
                <div className="db-stat-label">ACTIVE LISTINGS</div>
                <div className="db-stat-val">1,284</div>
              </div>
              <div className="db-stat-divider" />
              <div className="db-stat-card">
                <div className="db-stat-label">AVG. PRO SALARY</div>
                <div className="db-stat-val">$84<span>k</span></div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="db-tabs">
            {tabs.map(t => (
              <button key={t.key}
                className={`db-tab ${activeTab === t.key ? 'active' : ''}`}
                onClick={() => setActiveTab(t.key)}>
                {t.label}
              </button>
            ))}
          </div>

          <div className="db-content-row">

            {/* Filters sidebar */}
            <aside className="db-filters">
              <div className="db-filters-header">
                <span>FILTERS</span>
                <button className="db-filter-icon"><IconFilter /></button>
              </div>
              <div className="db-filter-group">
                <div className="db-filter-label">GAME TITLE</div>
                <div className="db-select-wrap">
                  <select value={gameFilter} onChange={e => setGameFilter(e.target.value)} className="db-select">
                    {['Counter-Strike 2','Valorant','League of Legends','Dota 2','Rocket League'].map(g => (
                      <option key={g}>{g}</option>
                    ))}
                  </select>
                  <span className="db-select-arrow"><IconChevDown /></span>
                </div>
              </div>
              <div className="db-filter-group">
                <div className="db-filter-label">REGION</div>
                <div className="db-region-grid">
                  {regions.map(r => (
                    <button key={r}
                      className={`db-region-btn ${activeRegion === r ? 'active' : ''}`}
                      onClick={() => setActiveRegion(r)}>{r}</button>
                  ))}
                </div>
              </div>
              <div className="db-filter-group">
                <div className="db-filter-label">MIN. SKILL SCORE (0–5)</div>
                <div className="db-range-wrap">
                  <input type="range" min="0" max="5" defaultValue="3" className="db-range" />
                </div>
              </div>
              <button className="db-clear-btn">CLEAR ALL</button>

              {/* Featured Ad */}
              <div className="db-featured-ad">
                <div className="db-ad-tag">FEATURED AD</div>
                <div className="db-ad-org-logo"><IconTrophy /></div>
                <div className="db-ad-title">Red Bull Contenders</div>
                <p className="db-ad-desc">Register for the upcoming open qualifiers in Berlin</p>
                <button className="db-ad-link">VIEW DETAILS <IconArrow /></button>
              </div>
            </aside>

            {/* ── TAB CONTENT ── */}
            <div className="db-listings">
              {activeTab === 'team_vacancies'  && <TeamVacanciesTab />}
              {activeTab === 'sponsorships'    && <SponsorshipsTab />}
              {activeTab === 'tournaments'     && <TournamentsTab />}
              {activeTab === 'coaching_rates'  && <CoachingRatesTab />}
            </div>
          </div>
        </main>
      </div>

      <footer className="db-statusbar">
        <span><span className="db-status-dot" />SYSTEM: V2.4.0-STABLE &nbsp;·&nbsp; SERVER: GLOBAL-EDGE-01</span>
        <div className="db-status-icons"><span>⚙</span><span>◎</span></div>
      </footer>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  TAB: TEAM VACANCIES
// ═══════════════════════════════════════════════════════════════════════════════
function TeamVacanciesTab() {
  return (
    <>
      {JOBS.map(job => <JobCard key={job.id} job={job} />)}
      <button className="db-load-more">LOAD MORE VACANCIES <IconChevDown /></button>
    </>
  );
}

function JobCard({ job }) {
  const isSponsor = job.type === 'paid';
  return (
    <div className={`db-jobcard ${isSponsor ? 'sponsorship' : ''}`}>
      {isSponsor && <div className="db-sponsorship-badge">SPONSORSHIP OPP.</div>}
      <div className="db-jobcard-top">
        <div className="db-game-badge" style={{background:job.gameBg,color:job.gameColor,borderColor:job.gameColor+'40'}}>
          <GameIcon game={job.game} color={job.gameColor}/>
        </div>
        <div className="db-jobcard-info">
          <div className="db-jobcard-title-row">
            <h2 className="db-jobcard-title">{job.title}</h2>
            <div className="db-salary-block">
              {isSponsor
                ? <><span className="db-salary">{job.salaryFlat}</span><span className="db-salary-extra">{job.salaryExtra}</span></>
                : <span className="db-salary">{job.salaryMin} – {job.salaryMax} <small>/mo</small></span>
              }
            </div>
          </div>
          <div className="db-jobcard-meta">
            <span className="db-org">{job.org}</span>
            <span className="db-meta-dot">·</span>
            <IconMapPin />
            <span>{job.location}</span>
            {!isSponsor && <><span className="db-meta-dot">·</span><span className="db-salary-tag">{job.salaryTag}</span></>}
            {isSponsor  && <span className="db-salary-tag open">Open</span>}
          </div>
          {job.description && <p className="db-jobcard-desc">{job.description}</p>}
          {job.tags.length > 0 && (
            <div className="db-tags">
              {job.tags.map((tag, i) => {
                const s = TAG_COLORS[job.tagColors[i]] || TAG_COLORS.blue;
                return <span key={tag} className="db-tag" style={{background:s.bg,color:s.color,borderColor:s.color+'40'}}>{tag}</span>;
              })}
            </div>
          )}
        </div>
      </div>
      <div className="db-jobcard-bottom">
        <div className="db-jobcard-bottom-left">
          {job.skillMatch !== null && (
            <div className="db-skill-match">
              <span className="db-skill-label">SKILL REQ.</span>
              <div className="db-skill-bar-wrap"><div className="db-skill-bar" style={{width:`${job.skillMatch}%`}}/></div>
              <span className="db-skill-score"><IconStar /> {(job.skillMatch/20).toFixed(1)}</span>
            </div>
          )}
          {job.postedAgo && <span className="db-posted"><IconClock /> {job.postedAgo}</span>}
        </div>
        {isSponsor
          ? <button className="db-paid-btn">INQUIRE</button>
          : <button className="db-apply-btn">APPLY NOW</button>
        }
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  TAB: SPONSORSHIPS
// ═══════════════════════════════════════════════════════════════════════════════
function SponsorshipsTab() {
  return (
    <>
      {SPONSORSHIPS.map(s => <SponsorCard key={s.id} sp={s} />)}
      <button className="db-load-more">LOAD MORE SPONSORSHIPS <IconChevDown /></button>
    </>
  );
}

function SponsorCard({ sp }) {
  return (
    <div className={`db-jobcard sp-card ${sp.featured ? 'sponsorship' : ''}`}>
      {sp.featured && <div className="db-sponsorship-badge">⭐ FEATURED</div>}
      <div className="db-jobcard-top">
        {/* Brand logo placeholder */}
        <div className="sp-brand-logo" style={{background:sp.brandBg, borderColor:sp.brandColor+'50'}}>
          <span style={{color:sp.brandColor, fontFamily:"'Share Tech Mono',monospace", fontSize:'0.6rem', letterSpacing:'0.06em', textTransform:'uppercase'}}>
            {sp.brand.split(' ')[0]}
          </span>
        </div>
        <div className="db-jobcard-info">
          <div className="db-jobcard-title-row">
            <div>
              <div className="sp-tier-badge" style={{color:sp.brandColor, borderColor:sp.brandColor+'50', background:sp.brandBg}}>{sp.tier}</div>
              <h2 className="db-jobcard-title" style={{marginTop:'4px'}}>{sp.title}</h2>
            </div>
            <div className="sp-value-block">
              <div className="db-stat-label">VALUE</div>
              <div className="sp-value">{sp.value}</div>
            </div>
          </div>
          <p className="db-jobcard-desc">{sp.desc}</p>
          <div className="sp-games">
            {sp.games.map(g => (
              <span key={g} className="db-tag" style={{background:'rgba(0,180,255,0.08)',color:'#00b4ff',borderColor:'rgba(0,180,255,0.25)'}}>{g}</span>
            ))}
          </div>
          <div className="sp-perks">
            {sp.perks.map(p => (
              <div key={p} className="sp-perk">
                <span className="sp-perk-dot" />
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="db-jobcard-bottom">
        <div className="db-jobcard-bottom-left sp-meta-row">
          <span className="db-posted"><IconCalendar /> DEADLINE: {sp.deadline}</span>
          <span className="db-posted"><IconUsers /> {sp.slots} SLOTS</span>
          <span className={`sp-status-badge ${sp.status === 'OPEN' ? 'open' : sp.status === 'APPLYING' ? 'applying' : ''}`}>
            {sp.status}
          </span>
        </div>
        <button className="db-apply-btn">APPLY NOW</button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  TAB: TOURNAMENTS
// ═══════════════════════════════════════════════════════════════════════════════
function TournamentsTab() {
  return (
    <>
      {TOURNAMENTS.map(t => <TournamentCard key={t.id} t={t} />)}
      <button className="db-load-more">LOAD MORE TOURNAMENTS <IconChevDown /></button>
    </>
  );
}

function TournamentCard({ t }) {
  const pct = Math.round((t.teamsRegistered / t.maxTeams) * 100);
  const isFull = t.status.startsWith('FULL');
  return (
    <div className="db-jobcard">
      <div className="db-jobcard-top">
        <div className="db-game-badge" style={{background:t.gameBg,color:t.gameColor,borderColor:t.gameColor+'40'}}>
          <GameIcon game={t.game} color={t.gameColor}/>
        </div>
        <div className="db-jobcard-info">
          <div className="db-jobcard-title-row">
            <div>
              <h2 className="db-jobcard-title">{t.title}</h2>
              <div className="db-jobcard-meta" style={{marginTop:'4px'}}>
                <span className="db-org">{t.org}</span>
                <span className="db-meta-dot">·</span>
                <IconMapPin />
                <span>{t.region}</span>
                <span className="db-meta-dot">·</span>
                <span className="db-salary-tag">{t.format}</span>
              </div>
            </div>
            <div className="trn-prize-block">
              <div className="db-stat-label">PRIZE POOL</div>
              <div className="trn-prize">{t.prizePool}</div>
            </div>
          </div>

          {/* Breakdown */}
          <div className="trn-breakdown">
            {t.prizeBreakdown.map(b => (
              <span key={b} className="trn-breakdown-item"><IconDollar /> {b}</span>
            ))}
          </div>

          <div className="db-tags" style={{marginTop:'8px'}}>
            {t.tags.map(tag => {
              const s = TAG_COLORS.blue;
              return <span key={tag} className="db-tag" style={{background:s.bg,color:s.color,borderColor:s.color+'40'}}>{tag}</span>;
            })}
          </div>
        </div>
      </div>

      {/* Registration progress bar */}
      <div className="trn-reg-row">
        <div className="trn-reg-info">
          <span className="db-skill-label">REGISTRATION</span>
          <span className="db-skill-score" style={{color: isFull ? '#ef4444' : '#22c55e'}}>
            {t.teamsRegistered}/{t.maxTeams} TEAMS
          </span>
        </div>
        <div className="db-skill-bar-wrap" style={{width:'160px'}}>
          <div className="db-skill-bar" style={{width:`${pct}%`, background: isFull ? 'linear-gradient(90deg,#ef4444,#cc2200)' : 'linear-gradient(90deg,#22c55e,#00b455)'}}/>
        </div>
      </div>

      <div className="db-jobcard-bottom">
        <div className="db-jobcard-bottom-left">
          <span className="db-posted"><IconCalendar /> STARTS: {t.startDate}</span>
          <span className="db-posted"><IconClock /> REG. CLOSES: {t.regDeadline}</span>
        </div>
        {isFull
          ? <button className="db-paid-btn">JOIN WAITLIST</button>
          : <button className="db-apply-btn">REGISTER TEAM</button>
        }
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  TAB: COACHING RATES
// ═══════════════════════════════════════════════════════════════════════════════
function CoachingRatesTab() {
  return (
    <>
      {COACHES.map(c => <CoachCard key={c.id} coach={c} />)}
      <button className="db-load-more">LOAD MORE COACHES <IconChevDown /></button>
    </>
  );
}

function CoachCard({ coach }) {
  return (
    <div className={`db-jobcard coach-card ${!coach.available ? 'coach-unavailable' : ''}`}>
      <div className="db-jobcard-top">
        {/* Avatar */}
        <div className="coach-avatar">
          <span>{coach.avatar}</span>
          <div className={`coach-status-dot ${coach.available ? 'online' : 'offline'}`}/>
        </div>

        <div className="db-jobcard-info">
          <div className="db-jobcard-title-row">
            <div>
              <div className="coach-rank-badge">{coach.rank}</div>
              <h2 className="db-jobcard-title" style={{marginTop:'3px'}}>{coach.name}</h2>
              <div className="coach-specialty">{coach.specialty}</div>
            </div>
            <div className="coach-rate-block">
              <div className="db-stat-label">SESSION RATE</div>
              <div className="coach-rate">${coach.price}<span>/{coach.per}</span></div>
            </div>
          </div>

          {/* Stars */}
          <div className="coach-rating-row">
            <div className="coach-stars">
              {[1,2,3,4,5].map(i => (
                <span key={i} style={{color: i <= Math.round(coach.rating) ? '#f59e0b' : '#1a3a4a'}}>★</span>
              ))}
            </div>
            <span className="coach-rating-val">{coach.rating}</span>
            <span className="coach-reviews">({coach.reviews} reviews)</span>
            <span className="coach-sep">·</span>
            <IconBook />
            <span className="coach-reviews">{coach.exp}</span>
            <span className="coach-sep">·</span>
            <IconUsers />
            <span className="coach-reviews">{coach.students} students</span>
          </div>

          {/* Games + tags */}
          <div className="coach-games-row">
            {coach.games.map(g => (
              <span key={g} className="db-tag" style={{background:'rgba(0,180,255,0.07)',color:'#00b4ff',borderColor:'rgba(0,180,255,0.2)'}}>{g}</span>
            ))}
          </div>
          <div className="db-tags" style={{marginTop:'4px'}}>
            {coach.tags.map((tag, i) => {
              const s = TAG_COLORS[coach.tagColors[i]] || TAG_COLORS.blue;
              return <span key={tag} className="db-tag" style={{background:s.bg,color:s.color,borderColor:s.color+'40'}}>{tag}</span>;
            })}
          </div>
        </div>
      </div>

      <div className="db-jobcard-bottom">
        <div className="db-jobcard-bottom-left">
          <span className={`coach-avail-badge ${coach.available ? 'yes' : 'no'}`}>
            <IconZap /> {coach.available ? 'AVAILABLE NOW' : 'NOT AVAILABLE'}
          </span>
        </div>
        {coach.available
          ? <button className="db-apply-btn">BOOK SESSION</button>
          : <button className="db-paid-btn" disabled>WAITLIST</button>
        }
      </div>
    </div>
  );
}
