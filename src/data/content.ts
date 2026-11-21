/**
 * CENTRAL CONTENT CONFIG
 * ----------------------
 * Edit this file to replace all personal content, projects, socials, and assets.
 * Keep asset paths relative to /public.
 */

export type ProjectItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  thumbnail: string; // /assets/projects/...
  accent?: string;
};

export type SocialItem = {
  id: string;
  platform: string;
  label: string;
  username: string; // Replace with real username
  url: string; // Replace with real URL
  icon: 'instagram' | 'github' | 'linkedin' | 'youtube' | 'tiktok' | 'website' | 'x';
};

export type SkillItem = {
  id: string;
  name: string;
  icon: string; // /assets/icons/...
  group?: 'frontend' | 'language' | 'tools' | 'design';
};

export const CONTENT = {
  personal: {
    name: 'BAYU',
    nickname: 'IBOYY',
    brand: 'IBOYY CREATIVE',
    title: 'Creative Developer & Digital Creator',
    shortTitle: 'CREATIVE DEVELOPER',
    description:
      'Saya adalah seorang developer yang memiliki ketertarikan pada web development, programming, UI/UX design, creative technology, dan eksplorasi hal-hal baru.',
    tagline: 'CREATING DIGITAL EXPERIENCES.',
    profilePhoto: '/assets/profile/profile-placeholder.svg',
    logoWordmark: 'IBOYY CREATIVE',
  },

  intro: {
    cta: 'CLICK TO START',
    subtext: 'Personal Motion Portfolio',
  },

  showcase: {
    heading: 'SELECTED WORKS',
    subheading: 'Project Showcase',
  },

  search: {
    topText: 'DISCOVER MY CREATIVE WORLD',
    query: 'Bayu Portfolio',
    findMeText: 'YOU CAN FIND ME ON',
  },

  outro: {
    thanks: 'THANK YOU',
    line: 'BAYU / IBOYY',
  },

  // Editable skill list. Do not add proficiency claims without confirmation.
  skills: [
    {id: 'html', name: 'HTML', icon: '/assets/icons/html.svg', group: 'frontend'},
    {id: 'css', name: 'CSS', icon: '/assets/icons/css.svg', group: 'frontend'},
    {id: 'javascript', name: 'JavaScript', icon: '/assets/icons/javascript.svg', group: 'language'},
    {id: 'react', name: 'React', icon: '/assets/icons/react.svg', group: 'frontend'},
    {id: 'typescript', name: 'TypeScript', icon: '/assets/icons/typescript.svg', group: 'language'},
    {id: 'nodejs', name: 'Node.js', icon: '/assets/icons/nodejs.svg', group: 'tools'},
    {id: 'github', name: 'GitHub', icon: '/assets/icons/github.svg', group: 'tools'},
    {id: 'uiux', name: 'UI/UX Design', icon: '/assets/icons/uiux.svg', group: 'design'},
  ] satisfies SkillItem[],

  // 4-6 placeholder projects. Replace with real work.
  projects: [
    {
      id: 'project-01',
      name: 'Project One',
      category: 'Web Experience',
      description: 'Replace with your real project description.',
      thumbnail: '/assets/projects/project-01.svg',
      accent: '#34D399',
    },
    {
      id: 'project-02',
      name: 'Project Two',
      category: 'UI/UX Design',
      description: 'Replace with your real project description.',
      thumbnail: '/assets/projects/project-02.svg',
      accent: '#22D3EE',
    },
    {
      id: 'project-03',
      name: 'Project Three',
      category: 'Creative Development',
      description: 'Replace with your real project description.',
      thumbnail: '/assets/projects/project-03.svg',
      accent: '#6EE7B7',
    },
    {
      id: 'project-04',
      name: 'Project Four',
      category: 'Digital Product',
      description: 'Replace with your real project description.',
      thumbnail: '/assets/projects/project-04.svg',
      accent: '#67E8F9',
    },
    {
      id: 'project-05',
      name: 'Project Five',
      category: 'Interactive Web',
      description: 'Replace with your real project description.',
      thumbnail: '/assets/projects/project-05.svg',
      accent: '#A7F3D0',
    },
    {
      id: 'project-06',
      name: 'Project Six',
      category: 'Visual Experiment',
      description: 'Replace with your real project description.',
      thumbnail: '/assets/projects/project-06.svg',
      accent: '#99F6E4',
    },
  ] satisfies ProjectItem[],

  // Replace usernames/URLs with real accounts. Placeholders intentionally generic.
  socials: [
    {
      id: 'instagram',
      platform: 'Instagram',
      label: 'Instagram',
      username: '@your_instagram',
      url: 'https://instagram.com/your_instagram',
      icon: 'instagram',
    },
    {
      id: 'github',
      platform: 'GitHub',
      label: 'GitHub',
      username: '@your_github',
      url: 'https://github.com/your_github',
      icon: 'github',
    },
    {
      id: 'linkedin',
      platform: 'LinkedIn',
      label: 'LinkedIn',
      username: 'your-linkedin',
      url: 'https://linkedin.com/in/your-linkedin',
      icon: 'linkedin',
    },
    {
      id: 'website',
      platform: 'Website',
      label: 'Website',
      username: 'yourwebsite.com',
      url: 'https://yourwebsite.com',
      icon: 'website',
    },
  ] satisfies SocialItem[],

  audio: {
    // Replace with legal/licensed music file in public/assets/audio/
    music: '/assets/audio/music-placeholder.wav',
    // Optional SFX files; procedural/placeholder hooks used in code
    sfxWhoosh: '/assets/audio/whoosh.wav',
    sfxClick: '/assets/audio/click.wav',
    sfxImpact: '/assets/audio/impact.wav',
  },
} as const;

export type Content = typeof CONTENT;
