import { User } from '@prisma/client';

export function filterSensitiveUserData(data: User) {
  const { encryptedPassword, refreshToken, ...rest } = data;
  return rest;
}
