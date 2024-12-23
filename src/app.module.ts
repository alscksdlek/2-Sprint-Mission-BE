import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module.js';
import { PrismaModule } from '../prisma/prisma.module.js';
import { AuthModule } from 'auth/auth.module.js';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    ProductModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
