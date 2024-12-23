import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import type { User } from '@prisma/client';

@Injectable()
export class UserRepository {
  private readonly user;

  constructor(private readonly prisma: PrismaService) {
    this.user = prisma.user;
  }

  async createUser(user: any): Promise<User> {
    return await this.user.create({
      data: user,
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.user.findUnique({
      where: { email },
    });
  }

  async updateUser(id: string, data: any): Promise<User> {
    return await this.user.update({
      where: { id },
      data: data,
    });
  }

  async findByUserId(id: string): Promise<User | null> {
    return await this.user.findUnique({
      where: { id },
    });
  }
}
