export interface Destination {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  duration: string;
  highlights: string[];
  includes: string[];
  image: string;
  link: string;
  badge?: string;
}

export interface RouterHook {
  currentPath: string;
  navigate: (path: string) => void;
}

export interface RouteConfig {
  path: string;
  component: React.ComponentType;
  title: string;
}