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

interface ClapReceivedContent {
  claps: number;
  category_type: Category;
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
    _id: string;
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
  content?: ClapReceivedContent | ClapSentContent | AchievementContent;
  available_claps: number;
  badges: Badge[];
  type: EventType;
  date: string;
}
