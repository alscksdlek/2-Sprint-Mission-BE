import { Module } from '@nestjs/common';
import { PrismaModule } from '#prisma/prisma.module.js';
import { ProductController } from '#product/product.controller.js';
import { ProductRepository } from '#product/product.repository.js';
import { ProductService } from '#product/product.service.js';

@Module({
  imports: [PrismaModule],
  controllers: [ProductController],
  providers: [ProductRepository, ProductService],
  exports: [],
})
export class ProductModule {}
