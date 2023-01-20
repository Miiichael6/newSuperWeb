
export interface AuthState {
  ok?: boolean;
  status: string;
  id: string;
  displayName: string;
  email: string;
  photoURL: string;
  errorMessage: string | boolean;
}