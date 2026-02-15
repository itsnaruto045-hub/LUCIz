
import { UserProfile, Message } from './types';

const KEYS = {
  API_KEY: 'luci_api_key',
  PROFILE: 'luci_profile',
  MESSAGES: 'luci_messages'
};

export const db = {
  saveApiKey: (key: string) => localStorage.setItem(KEYS.API_KEY, key),
  getApiKey: () => localStorage.getItem(KEYS.API_KEY),
  clearApiKey: () => localStorage.removeItem(KEYS.API_KEY),

  saveProfile: (profile: UserProfile) => localStorage.setItem(KEYS.PROFILE, JSON.stringify(profile)),
  getProfile: (): UserProfile | null => {
    const data = localStorage.getItem(KEYS.PROFILE);
    return data ? JSON.parse(data) : null;
  },

  saveMessages: (messages: Message[]) => localStorage.setItem(KEYS.MESSAGES, JSON.stringify(messages)),
  getMessages: (): Message[] => {
    const data = localStorage.getItem(KEYS.MESSAGES);
    return data ? JSON.parse(data) : [];
  }
};
