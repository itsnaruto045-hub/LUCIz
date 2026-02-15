
import React from 'react';
import { UserProfile } from '../types';

interface ProfileViewProps {
  profile: UserProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  onClearChat: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ profile, setProfile, onClearChat }) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile(prev => ({ ...prev, name: e.target.value }));
  };

  const handleInterestToggle = (interest: string) => {
    setProfile(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const interests = ['Gaming', 'Anime', 'Programming', 'Cooking', 'Fitness', 'Music', 'Travel', 'Art'];

  return (
    <div className="flex-1 overflow-y-auto p-6 md:p-12 bg-[#0f172a]">
      <div className="max-w-2xl mx-auto space-y-12">
        <header>
          <h2 className="text-3xl font-black mb-2 tracking-tight">Profile Settings</h2>
          <p className="text-slate-400">Customize how Luci interacts with you.</p>
        </header>

        <section className="space-y-6">
          <div className="flex items-center gap-6 p-6 glass rounded-3xl border border-white/5">
            <div className="relative">
              <img src={profile.avatarUrl} alt="Avatar" className="w-24 h-24 rounded-full object-cover border-4 border-pink-500/20" />
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs border-2 border-[#0f172a]">
                <i className="fas fa-camera"></i>
              </button>
            </div>
            <div className="flex-1">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Display Name</label>
              <input 
                type="text" 
                value={profile.name} 
                onChange={handleNameChange}
                className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
              />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <i className="fas fa-star text-pink-500"></i>
            My Interests
          </h3>
          <p className="text-xs text-slate-500">Luci will tailor her conversations based on what you like.</p>
          <div className="flex flex-wrap gap-2">
            {interests.map(interest => (
              <button
                key={interest}
                onClick={() => handleInterestToggle(interest)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${profile.interests.includes(interest) ? 'bg-pink-500 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
              >
                {interest}
              </button>
            ))}
          </div>
        </section>

        <section className="space-y-4 pt-6 border-t border-white/5">
          <h3 className="text-lg font-bold text-red-400">Danger Zone</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <button 
                onClick={() => {
                    if(confirm("Are you sure you want to clear your chat history with Luci?")) onClearChat();
                }}
                className="flex-1 glass border-red-500/20 hover:bg-red-500/10 text-red-400 p-4 rounded-2xl flex items-center justify-center gap-2 transition-colors font-bold"
            >
              <i className="fas fa-trash-alt"></i>
              Clear Chat History
            </button>
            <button 
                onClick={() => {
                    if(confirm("This will log you out and require a new API key. Continue?")) {
                        localStorage.clear();
                        window.location.reload();
                    }
                }}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white p-4 rounded-2xl flex items-center justify-center gap-2 transition-colors font-bold"
            >
              <i className="fas fa-sign-out-alt"></i>
              Reset All Data
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileView;
