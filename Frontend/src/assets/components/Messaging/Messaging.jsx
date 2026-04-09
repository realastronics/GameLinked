import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Messaging.css';

// ── Icons ───────────────────────────────────────────
const IconSearch = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const IconBell = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>;
const IconUser = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>;
const IconSend = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;
const IconPaperclip = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>;

const CHATS = [
  { id: 1, name: 'Team Liquid Recruiter', preview: 'Are you available for a tryout this weekend?', time: '10:42 AM', unread: 2, online: true, color: '#00b4ff' },
  { id: 2, name: 'Logitech G Sponsorships', preview: 'We reviewed your application and...', time: 'Yesterday', unread: 0, online: false, color: '#f59e0b' },
  { id: 3, name: 'NexusSniper (Coach)', preview: 'Make sure to warm up your tracking before the session.', time: 'Monday', unread: 0, online: true, color: '#8b5cf6' },
  { id: 4, name: 'Cloud9 Sub-team', preview: 'C9_Manager: Great scrims today guys.', time: 'Apr 2', unread: 5, online: false, color: '#22c55e' }
];

export default function Messaging() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [activeChat, setActiveChat] = useState(CHATS[0]);
  const [msg, setMsg] = useState('');

  return (
    <div className="msg-root">
      
      {/* ── TOP NAV ── */}
      <header className="msg-topnav">
        <div className="msg-topnav-left">
          <Link to="/dashboard" className="msg-logo">Locked<span>In</span></Link>
          <nav className="msg-top-links">
            {['Feed', 'Careers', 'Analytics', 'Messaging'].map(item => {
              const path = item === 'Careers' ? '/dashboard' : `/${item.toLowerCase()}`;
              return (
                <Link key={item} to={path} className={`msg-top-link ${currentPath.includes(item.toLowerCase()) ? 'active' : ''}`}>
                  {item}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="msg-topnav-right">
          <button className="msg-icon-btn"><IconBell /></button>
          <button className="msg-icon-btn"><IconUser /></button>
        </div>
      </header>

      <div className="msg-body">
        
        {/* ── CHAT LIST (SIDEBAR) ── */}
        <aside className="msg-sidebar">
           <div className="msg-sidebar-header">
             <h2>Messages</h2>
             <div className="msg-search">
               <IconSearch />
               <input type="text" placeholder="Search direct messages..." />
             </div>
           </div>
           
           <div className="msg-chat-list">
             {CHATS.map(chat => (
               <div 
                 key={chat.id} 
                 className={`msg-chat-item ${activeChat.id === chat.id ? 'active' : ''}`}
                 onClick={() => setActiveChat(chat)}
               >
                 <div className="msg-avatar" style={{ borderColor: chat.color }}>
                   {chat.name.charAt(0)}
                   {chat.online && <div className="msg-online-dot"></div>}
                 </div>
                 <div className="msg-chat-info">
                   <div className="msg-chat-top">
                     <span className="msg-chat-name">{chat.name}</span>
                     <span className="msg-chat-time">{chat.time}</span>
                   </div>
                   <div className="msg-chat-bottom">
                     <span className="msg-chat-preview">{chat.preview}</span>
                     {chat.unread > 0 && <span className="msg-unread-badge">{chat.unread}</span>}
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </aside>

        {/* ── CHAT WINDOW ── */}
        <main className="msg-main">
           <div className="msg-main-header">
              <div className="msg-avatar" style={{ borderColor: activeChat.color }}>
                 {activeChat.name.charAt(0)}
              </div>
              <div>
                 <h3>{activeChat.name}</h3>
                 <span className="msg-status">{activeChat.online ? 'Online now' : 'Last seen recently'}</span>
              </div>
           </div>

           <div className="msg-history">
              {/* Dummy messages */}
              <div className="msg-bubble incoming">
                <p>Hey! We saw your recent VODs and love your mechanical skill. Are you available for a tryout this weekend?</p>
                <span className="msg-time">10:42 AM</span>
              </div>
              <div className="msg-bubble outgoing">
                <p>Yes, I'm absolutely available! What time on Saturday works best for you guys?</p>
                <span className="msg-time">10:45 AM</span>
              </div>
           </div>

           <div className="msg-input-area">
              <button className="msg-input-icon"><IconPaperclip /></button>
              <input 
                type="text" 
                placeholder={`Message ${activeChat.name}...`} 
                value={msg}
                onChange={e => setMsg(e.target.value)}
              />
              <button className="msg-send-btn"><IconSend /> SEND</button>
           </div>
        </main>
      </div>
    </div>
  );
}
