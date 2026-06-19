/**
 * Global and shared TypeScript interface definitions for the Portfolio App.
 */

export interface Project {
  id: string;
  title: string;
  slogan: string;
  description: string;
  longDescription: string;
  tags: string[];
  iconName: string; // lucide icon name
  highlights: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  sandboxId: 'ecommerce' | 'musicplayer' | 'dashboard';
}

export interface TerminalLine {
  id: string;
  text: string;
  type: 'input' | 'output' | 'error' | 'success' | 'command';
  timestamp?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  status: 'sent' | 'unread' | 'replied';
}
