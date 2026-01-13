export interface NavItem {
  label: string;
  href: string;
}

export interface LeadershipProfile {
  name: string;
  role: string;
  image: string;
}

export interface ServiceTime {
  day: string;
  time: string;
  timezone: string;
  type: 'In-Person' | 'Online' | 'Hybrid';
}

export interface InspirationResponse {
  verse: string;
  message: string;
  reference: string;
}
