import { Module } from '@nestjs/common';
import { UserRepository } from '#user/user.repository.js';

@Module({
  providers: [UserRepository],
  exports: [UserRepository],
})
export class UsersModule {}
