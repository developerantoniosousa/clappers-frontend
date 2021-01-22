type Category =
  | 'disseminate-knowledge'
  | 'think-out-the-box'
  | 'communication'
  | 'team-work'
  | 'resilience'
  | 'proactivity'
  | 'assertiveness'
  | 'productivity'
  | 'commitment';

type EventType = 'clap-received' | 'clap-sent' | 'start-time-cycle' | 'achievement-badge';

interface NewCycleContent {
  claps: number;
}

interface ClapReceivedContent {
  claps: number;
  category_type: Category;
}

export interface Recognition {
    'receiver_id': string;
    'category_type': string;
    'claps': number;
}

interface ClapSentContent {
  claps: number;
  target_user: User;
  category_type: Category;
}

interface AchievementContent {
  _id: string;
  category_type: Category;
  level: number;
}

interface Badge {
    _id: string;
    category_type: Category;
    level: number;
}

export interface User {
    user: string;
    name: string;
    avatar?: string;
}

export interface ClapEvent {
  content?: string | object;
  type: EventType;
  date: string;
  _id: string;
  category_type: Category;
  level: number;
}

export interface Dashboard {
  own_claps: number;
  available_claps: number;
  badges: Badge[];
}

export interface Event {
  content?: ClapReceivedContent | ClapSentContent | AchievementContent | NewCycleContent;
  available_claps: number;
  badges: Badge[];
  type: EventType;
  date: string;
  createdAt: Date;
  updatedAt: Date;
}
