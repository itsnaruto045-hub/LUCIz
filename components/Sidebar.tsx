
import React from 'react';
import { AppViews, UserProfile } from '../types';
import { CREATOR_CREDIT, LUCI_LOGO_URL } from '../constants';

interface SidebarProps {
  activeView: AppViews;
  setActiveView: (view: AppViews) => void;
  profile: UserProfile;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView, profile, onClose }) => {
  const handleNav = (view: AppViews) => {
    setActiveView(view);
    if (onClose) onClose();
  };

  return (
    <div className="h-full glass flex flex-col border-r border-white/5 animate-in slide-in-from-left duration-700">
      <div className="p-6 flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-xl shadow-pink-500/20 rotate-3 transition-transform hover:rotate-0">
          <img src={LUCI_LOGO_URL} alt="Luci Logo" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-2xl font-black tracking-tighter bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            LUCI
          </h1>
          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">AI Companion</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        <button 
          onClick={() => handleNav(AppViews.CHAT)}
          className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${activeView === AppViews.CHAT ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/20' : 'hover:bg-white/5 text-slate-400 hover:text-white'}`}
        >
          <i className={`fas fa-comment-dots text-lg w-6 transition-transform group-hover:scale-110 ${activeView === AppViews.CHAT ? 'animate-pulse' : ''}`}></i>
          <span className="font-semibold">Chat</span>
        </button>

        <button 
          onClick={() => handleNav(AppViews.VOICE)}
          className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${activeView === AppViews.VOICE ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20' : 'hover:bg-white/5 text-slate-400 hover:text-white'}`}
        >
          <i className={`fas fa-phone-alt text-lg w-6 transition-transform group-hover:scale-110 ${activeView === AppViews.VOICE ? 'animate-pulse' : ''}`}></i>
          <span className="font-semibold">Voice Call</span>
        </button>

        <button 
          onClick={() => handleNav(AppViews.PROFILE)}
          className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${activeView === AppViews.PROFILE ? 'bg-slate-700 text-white' : 'hover:bg-white/5 text-slate-400 hover:text-white'}`}
        >
          <i className="fas fa-user text-lg w-6 transition-transform group-hover:scale-110"></i>
          <span className="font-semibold">Profile</span>
        </button>
      </nav>

      <div className="p-6 space-y-4">
        <div className="p-4 rounded-xl glass-dark bg-black/20 border border-white/5 flex items-center gap-3 transition-colors hover:bg-black/30">
          <img src={profile.avatarUrl} alt="Avatar" className="w-10 h-10 rounded-full border-2 border-pink-500/50 object-cover shadow-lg" />
          <div className="overflow-hidden">
            <p className="text-sm font-bold truncate">{profile.name}</p>
            <p className="text-xs text-slate-500">Premium User</p>
          </div>
        </div>
        
        <div className="text-center">
            <p className="text-[9px] text-slate-600 font-bold uppercase tracking-widest opacity-60">
                Developed by<br/>
                <span className="text-slate-500">{CREATOR_CREDIT}</span>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
