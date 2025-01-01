import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '#prisma/prisma.module.js';
import { AuthController } from '#auth/auth.controller.js';
import { AuthService } from '#auth/auth.service.js';
import { UserRepository } from '#user/user.repository.js';

@Module({
  imports: [PrismaModule, ConfigModule, UserRepository],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [],
})
export class AuthModule {}
