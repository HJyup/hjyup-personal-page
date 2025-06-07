export interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  avatar?: string;
  profileUrl?: string;
}

const COMMENTS: Comment[] = [
  {
    id: '1',
    author: 'Tomas Maillo',
    content:
      "Looks really good. I'm not sure about the comments like 'this button links...'.",
    timestamp: '2 hours ago',
    profileUrl: 'https://tomasmaillo.com/',
    avatar: 'https://avatars.githubusercontent.com/u/38633386?v=4',
  },
  {
    id: '2',
    author: 'Kay',
    content:
      'This design is absolutely fire 🔥 — you’re really cooking, man. I love the secondary font choice, it’s super clean. Maybe try experimenting with a few different primary fonts too — something like Eurostile could be interesting',
    timestamp: '1 hour ago',
    profileUrl: 'https://itskay.co/',
  },
  {
    id: '3',
    author: 'Senior Developer',
    content:
      "MicroSketch and Project Share - intriguing names! But without seeing the code architecture or technical challenges, I can't assess your problem-solving skills.",
    timestamp: '45 minutes ago',
    profileUrl: 'https://github.com/senior-dev',
  },
  {
    id: '4',
    author: 'Hiring Manager',
    content:
      'I want to click these project cards and see detailed case studies. What problems did they solve? What was the development process? Results?',
    timestamp: '30 minutes ago',
    profileUrl: 'https://linkedin.com/in/hiring-manager',
  },
  {
    id: '5',
    author: 'ChatGPT',
    content:
      'The breathing circles add subtle life to the layout. Clean, structured, and full of personality — strong start!',
    timestamp: '20 minutes ago',
    profileUrl: 'https://chat.openai.com',
  },
];

export default COMMENTS;
