import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import type { Product } from '@prisma/client';
import type { CreateProduct, PatchProduct } from './product.type.js';

@Injectable()
export class ProductRepository {
  private readonly product;

  constructor(private readonly prisma: PrismaService) {
    this.product = prisma.product;
  }

  async findProductById(id: string): Promise<Product | null> {
    return await this.product.findUnique({
      where: { id },
    });
  }

  async createProduct(data: CreateProduct): Promise<Product> {
    return await this.product.create({
      data,
    });
  }

  async updateProduct(data: PatchProduct, id: string): Promise<Product> {
    return await this.product.update({
      where: { id },
      data,
    });
  }

  async deleteProduct(id: string): Promise<Product> {
    return await this.product.delete({
      where: { id },
    });
  }
}
