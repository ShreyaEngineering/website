export interface AuthUser {
  authenticated: boolean;
  role: string;
  email?: string;
}