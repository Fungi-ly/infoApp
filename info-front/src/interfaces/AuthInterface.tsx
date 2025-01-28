export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'superadmin';
  isAdmin?: boolean;
  isSuperAdmin?: boolean;
}

export interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  login: (userData: User) => void;
  logout: () => void;
  loading: boolean;
}
