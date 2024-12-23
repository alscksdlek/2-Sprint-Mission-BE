import type { User } from '@prisma/client';

export class CreateUser {
  email: string;
  password: string;
  nickname: string;
  image?: string;
}

export class UserSignIn {
  email: string;
  password: string;
}

export type FilterUser = Omit<User, 'encryptedPassword' | 'refreshToken'>;
