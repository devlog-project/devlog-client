export type User = {
  username: string;
  password: string;
  nickname: string;
  email: string;
  profileImage: string;
  isDuplicateUsername: boolean;
  isDuplicateEmail: boolean;
  isAuthenticateEmail: boolean;
};
