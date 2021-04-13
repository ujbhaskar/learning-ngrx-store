import { User } from 'src/app/model/user.model';

export interface AuthState {
  token: string;
  userData: User | null;
}

export const initialAuthState: AuthState = {
  token: '',
  userData: null,
};
